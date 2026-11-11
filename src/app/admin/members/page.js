"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { DEFAULT_TEAMS_DATA, AVAILABLE_DEFAULT_IMAGES } from '@/lib/defaultMembersData';
import {
  HiOutlineUserGroup,
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineSave,
  HiOutlineX,
  HiOutlineUpload,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineCollection,
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineCheck,
  HiOutlineExclamation,
  HiOutlineRefresh,
  HiOutlineSparkles,
  HiOutlineKey,
  HiOutlineClipboardCopy,
  HiOutlineStar,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiOutlineSelector,
  HiOutlineArrowUp,
  HiOutlineArrowDown
} from 'react-icons/hi';

const SQL_DATABASE_FIX = `-- Run this in your Supabase Dashboard -> SQL Editor:
-- 1. FIX: Drop UNIQUE constraint on team_id so MULTIPLE members can be added to each section!
ALTER TABLE members DROP CONSTRAINT IF EXISTS members_team_id_key;
ALTER TABLE members DROP CONSTRAINT IF EXISTS members_team_id_unique;
DROP INDEX IF EXISTS members_team_id_key;
DROP INDEX IF EXISTS members_team_id_unique;
DROP INDEX IF EXISTS members_team_id_idx;

-- 2. Add display_order column to teams table for draggable reordering
ALTER TABLE teams ADD COLUMN IF NOT EXISTS display_order integer DEFAULT 0;

-- 3. Add decription column to members table if not present
ALTER TABLE members ADD COLUMN IF NOT EXISTS decription text;

-- 4. Enable full clean permissions on members & teams
DROP POLICY IF EXISTS "Allow select for everyone" ON members;
DROP POLICY IF EXISTS "Allow insert for everyone" ON members;
DROP POLICY IF EXISTS "Allow update for everyone" ON members;
DROP POLICY IF EXISTS "Allow delete for everyone" ON members;
DROP POLICY IF EXISTS "Allow public select" ON members;
DROP POLICY IF EXISTS "Allow insert" ON members;
DROP POLICY IF EXISTS "Allow update" ON members;
DROP POLICY IF EXISTS "Allow delete" ON members;
DROP POLICY IF EXISTS "Enable read access for all users" ON members;
DROP POLICY IF EXISTS "Enable insert for all users" ON members;
DROP POLICY IF EXISTS "Enable update for users" ON members;
DROP POLICY IF EXISTS "Enable delete for users" ON members;
DROP POLICY IF EXISTS "Public read members" ON members;
DROP POLICY IF EXISTS "Admin all members" ON members;

CREATE POLICY "Allow select for everyone" ON members FOR SELECT USING (true);
CREATE POLICY "Allow insert for everyone" ON members FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update for everyone" ON members FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for everyone" ON members FOR DELETE USING (true);

DROP POLICY IF EXISTS "Allow select for everyone" ON teams;
DROP POLICY IF EXISTS "Allow insert for everyone" ON teams;
DROP POLICY IF EXISTS "Allow update for everyone" ON teams;
DROP POLICY IF EXISTS "Allow delete for everyone" ON teams;
DROP POLICY IF EXISTS "Allow public select" ON teams;
DROP POLICY IF EXISTS "Allow insert" ON teams;
DROP POLICY IF EXISTS "Allow update" ON teams;
DROP POLICY IF EXISTS "Allow delete" ON teams;
DROP POLICY IF EXISTS "Enable read access for all users" ON teams;
DROP POLICY IF EXISTS "Enable insert for all users" ON teams;
DROP POLICY IF EXISTS "Enable update for users" ON teams;
DROP POLICY IF EXISTS "Enable delete for users" ON teams;
DROP POLICY IF EXISTS "Public read teams" ON teams;
DROP POLICY IF EXISTS "Admin all teams" ON teams;

CREATE POLICY "Allow select for everyone" ON teams FOR SELECT USING (true);
CREATE POLICY "Allow insert for everyone" ON teams FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update for everyone" ON teams FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Allow delete for everyone" ON teams FOR DELETE USING (true);

-- 5. STORAGE POLICIES: Allow full public access to website-assets bucket (upload & delete images)
INSERT INTO storage.buckets (id, name, public)
VALUES ('website-assets', 'website-assets', true)
ON CONFLICT (id) DO UPDATE SET public = true;

DROP POLICY IF EXISTS "Allow public uploads to website-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow public select from website-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow public update in website-assets" ON storage.objects;
DROP POLICY IF EXISTS "Allow public delete from website-assets" ON storage.objects;

CREATE POLICY "Allow public uploads to website-assets" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'website-assets');
CREATE POLICY "Allow public select from website-assets" ON storage.objects FOR SELECT USING (bucket_id = 'website-assets');
CREATE POLICY "Allow public update in website-assets" ON storage.objects FOR UPDATE USING (bucket_id = 'website-assets') WITH CHECK (bucket_id = 'website-assets');
CREATE POLICY "Allow public delete from website-assets" ON storage.objects FOR DELETE USING (bucket_id = 'website-assets');`;

// Helper to extract file path inside website-assets bucket from public or signed URL
const extractStoragePath = (url, bucket = 'website-assets') => {
  if (!url || typeof url !== 'string') return null;
  const publicMarker = `/storage/v1/object/public/${bucket}/`;
  const pIdx = url.indexOf(publicMarker);
  if (pIdx !== -1) {
    return decodeURIComponent(url.substring(pIdx + publicMarker.length));
  }
  const signMarker = `/storage/v1/object/sign/${bucket}/`;
  const sIdx = url.indexOf(signMarker);
  if (sIdx !== -1) {
    const clean = url.substring(sIdx + signMarker.length).split('?')[0];
    return decodeURIComponent(clean);
  }
  return null;
};

// Helper to remove an image file from Supabase Storage
const deleteStorageImage = async (imageUrl) => {
  try {
    const path = extractStoragePath(imageUrl, 'website-assets');
    if (!path) {
      // Local static image like /about/ab1.png or external URL, no deletion needed
      return false;
    }
    console.log('Attempting deletion from Supabase storage:', path);
    const { data, error } = await supabase.storage.from('website-assets').remove([path]);
    if (error) {
      console.warn('Supabase storage removal notice:', error.message);
      return false;
    }
    console.log('Successfully deleted file from Supabase storage:', path);
    return true;
  } catch (err) {
    console.warn('Storage delete caught error:', err);
    return false;
  }
};

// Helper to determine the section display order
const getTeamOrder = (team, fallbackIdx) => {
  if (typeof team.display_order === 'number') return team.display_order;
  const match = team.description?.match(/<!--order:(\d+)-->/);
  if (match) return parseInt(match[1], 10);
  return fallbackIdx;
};

// Helper to clean internal metadata tags from team descriptions
const getCleanDescription = (desc) => {
  if (!desc) return '';
  return desc
    .replace(/<!--order:\d+-->/gi, '')
    .replace(/<!--size:(sm|md|lg|xl)-->/gi, '')
    .replace(/\[size:(sm|md|lg|xl)\]/gi, '')
    .trim();
};

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [teamFilter, setTeamFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'active' | 'hidden'

  // Draggable Reorder States
  const [isReorderLocked, setIsReorderLocked] = useState(true);
  const [draggedTeamIndex, setDraggedTeamIndex] = useState(null);

  // Modal states
  const [editingMember, setEditingMember] = useState(null);
  const [editingTeam, setEditingTeam] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [seedConfirm, setSeedConfirm] = useState(false);
  const [showRlsModal, setShowRlsModal] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Image upload & tab state in Member modal
  const [imageTab, setImageTab] = useState('upload');
  const [isUploading, setIsUploading] = useState(false);

  // Expanded sections accordion
  const [expandedSections, setExpandedSections] = useState([]);

  // Toast notification
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SQL_DATABASE_FIX);
    setCopiedSql(true);
    showToast('SQL script copied to clipboard!');
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: teamsData, error: teamsError } = await supabase
        .from('teams')
        .select('*');

      const { data: membersData, error: membersError } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: true });

      if (teamsError) throw teamsError;
      if (membersError) throw membersError;

      if (teamsData) {
        // Sort teams based on display_order
        const sorted = [...teamsData].sort((a, b) => getTeamOrder(a, 0) - getTeamOrder(b, 0));
        setTeams(sorted);
        setExpandedSections([...sorted.map((t) => t.id), 'unassigned']);
      }
      if (membersData) {
        setMembers(membersData);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      showToast('Error loading data: ' + (err.message || 'Check database connection'), 'error');
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (id) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const expandAll = () => setExpandedSections([...teams.map((t) => t.id), 'unassigned']);
  const collapseAll = () => setExpandedSections([]);

  // ==================== DRAGGABLE REORDER LOGIC ====================
  const handleDragStart = (index, e) => {
    if (isReorderLocked) return;
    setDraggedTeamIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (index, e) => {
    if (isReorderLocked) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (targetIndex, e) => {
    if (isReorderLocked || draggedTeamIndex === null || draggedTeamIndex === targetIndex) return;
    e.preventDefault();

    const updated = [...teams];
    const [movedItem] = updated.splice(draggedTeamIndex, 1);
    updated.splice(targetIndex, 0, movedItem);

    setDraggedTeamIndex(null);
    setTeams(updated);
    await persistTeamOrder(updated, movedItem.name, targetIndex + 1);
  };

  const moveTeamByStep = async (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= teams.length) return;

    const updated = [...teams];
    const [movedItem] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, movedItem);

    setTeams(updated);
    await persistTeamOrder(updated, movedItem.name, targetIndex + 1);
  };

  const persistTeamOrder = async (reorderedTeams, teamName, newPosition) => {
    showToast(`Moving "${teamName}" to position ${newPosition}...`, 'info');
    try {
      for (let i = 0; i < reorderedTeams.length; i++) {
        const team = reorderedTeams[i];
        const cleanDesc = getCleanDescription(team.description);
        const fallbackDesc = cleanDesc ? `${cleanDesc} <!--order:${i}-->` : `<!--order:${i}-->`;

        // 1. Try updating display_order column
        let res = await supabase
          .from('teams')
          .update({ display_order: i })
          .eq('id', team.id)
          .select();

        // 2. Fallback to order tag in description if column doesn't exist
        if (res.error && res.error.message.includes('display_order')) {
          res = await supabase
            .from('teams')
            .update({ description: fallbackDesc })
            .eq('id', team.id)
            .select();
        }
      }

      showToast(`"${teamName}" moved to position ${newPosition}! Updated on About page.`);
    } catch (err) {
      console.error('Persist order error:', err);
      showToast('Error saving order: ' + err.message, 'error');
    }
  };

  // ==================== TEAM CRUD ====================
  const openAddTeam = () => {
    setEditingTeam({
      name: '',
      description: '',
      is_active: true
    });
  };

  const saveTeam = async () => {
    if (!editingTeam.name || !editingTeam.name.trim()) {
      showToast('Team/Section name is required', 'error');
      return;
    }

    setActionLoading(true);
    const cleanDesc = getCleanDescription(editingTeam.description);
    const newOrder = teams.length;
    const fallbackDesc = cleanDesc ? `${cleanDesc} <!--order:${newOrder}-->` : `<!--order:${newOrder}-->`;

    try {
      let payload = {
        name: editingTeam.name.trim(),
        description: cleanDesc || null,
        display_order: newOrder,
        is_active: editingTeam.is_active ?? true
      };

      if (editingTeam.id) {
        let res = await supabase.from('teams').update(payload).eq('id', editingTeam.id).select();

        // If display_order column doesn't exist, remove from payload
        if (res.error && res.error.message.includes('display_order')) {
          delete payload.display_order;
          payload.description = fallbackDesc;
          res = await supabase.from('teams').update(payload).eq('id', editingTeam.id).select();
        }

        if (res.error) throw res.error;
        if (!res.data || res.data.length === 0) {
          throw new Error('Database blocked UPDATE due to Row Level Security (RLS). Please run the SQL fix.');
        }

        showToast('Team section updated successfully');
      } else {
        let res = await supabase.from('teams').insert([payload]).select();

        if (res.error && res.error.message.includes('display_order')) {
          delete payload.display_order;
          payload.description = fallbackDesc;
          res = await supabase.from('teams').insert([payload]).select();
        }

        if (res.error) throw res.error;
        showToast('New team section created');
        if (res.data && res.data[0]) {
          setExpandedSections((prev) => [...prev, res.data[0].id]);
        }
      }

      setEditingTeam(null);
      await fetchData();
    } catch (err) {
      console.error('Save team error:', err);
      showToast(err.message, 'error');
      if (err.message.includes('Row Level Security') || err.message.includes('RLS')) {
        setShowRlsModal(true);
      }
    } finally {
      setActionLoading(false);
    }
  };

  const toggleTeamVisibility = async (team, e) => {
    e?.stopPropagation();
    try {
      const { data, error } = await supabase
        .from('teams')
        .update({ is_active: !team.is_active })
        .eq('id', team.id)
        .select();

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error('Database blocked UPDATE due to Supabase RLS.');
      }

      setTeams((prev) =>
        prev.map((t) => (t.id === team.id ? { ...t, is_active: !t.is_active } : t))
      );
      showToast(`Team section ${!team.is_active ? 'visible' : 'hidden'} on site`);
    } catch (err) {
      showToast(err.message, 'error');
      if (err.message.includes('RLS')) setShowRlsModal(true);
    }
  };

  const executeDeleteTeam = async (team) => {
    setActionLoading(true);
    try {
      // Find all members belonging to this section and remove their uploaded photos from storage
      const teamMembers = members.filter((m) => String(m.team_id) === String(team.id));
      for (const mem of teamMembers) {
        if (mem.image_url) {
          await deleteStorageImage(mem.image_url);
        }
      }

      await supabase.from('members').delete().eq('team_id', team.id).select();
      const { data, error } = await supabase.from('teams').delete().eq('id', team.id).select();

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error('Database blocked DELETE on teams due to Supabase RLS.');
      }

      showToast(`Team "${team.name}" and associated member assets deleted`);
      setDeleteConfirm(null);
      await fetchData();
    } catch (err) {
      showToast('Delete error: ' + err.message, 'error');
      if (err.message.includes('RLS')) setShowRlsModal(true);
    } finally {
      setActionLoading(false);
    }
  };

  // ==================== MEMBER CRUD ====================
  const openAddMember = (teamId = '') => {
    setEditingMember({
      name: '',
      role: '',
      section: '',
      description: '',
      image_url: '',
      team_id: teamId || (teams[0]?.id || ''),
      is_active: true
    });
    setImageTab('upload');
  };

  const openEditMember = (member) => {
    setEditingMember({
      ...member,
      description: member.decription || member.description || ''
    });
    setImageTab('upload');
  };

  const saveMember = async () => {
    if (!editingMember.name || !editingMember.name.trim()) {
      showToast('Member full name is required', 'error');
      return;
    }
    if (!editingMember.role || !editingMember.role.trim()) {
      showToast('Position / role is required', 'error');
      return;
    }
    if (!editingMember.team_id) {
      showToast('Please select a team section for this member', 'error');
      return;
    }

    setActionLoading(true);
    try {
      const memberDesc = editingMember.description?.trim() || null;

      let payload = {
        name: editingMember.name.trim(),
        role: editingMember.role.trim(),
        section: editingMember.section?.trim() || null,
        decription: memberDesc,
        image_url: editingMember.image_url?.trim() || '/imlogo.png',
        team_id: editingMember.team_id,
        is_active: editingMember.is_active ?? true
      };

      if (editingMember.id) {
        const originalMember = members.find((m) => m.id === editingMember.id);
        const oldImageUrl = originalMember?.image_url;

        let res = await supabase
          .from('members')
          .update(payload)
          .eq('id', editingMember.id)
          .select();

        if (res.error && res.error.message.includes('decription')) {
          delete payload.decription;
          payload.description = memberDesc;
          res = await supabase.from('members').update(payload).eq('id', editingMember.id).select();
        }

        if (res.error) {
          if (res.error.message.includes('duplicate key') || res.error.message.includes('unique constraint') || res.error.message.includes('members_team_id')) {
            throw new Error('Your database has a UNIQUE constraint on the team_id column, which blocks having more than 1 member per section. Please click "Database Fix (SQL)" in the header to remove this constraint!');
          }
          throw res.error;
        }

        if (!res.data || res.data.length === 0) {
          throw new Error('Database blocked UPDATE on members table due to Row-Level Security (RLS). 0 rows were updated. Please apply the SQL fix.');
        }

        // If photo was replaced with a new one, remove old uploaded photo from Supabase storage
        if (oldImageUrl && oldImageUrl !== payload.image_url) {
          await deleteStorageImage(oldImageUrl);
        }

        showToast('Member updated successfully in database!');
      } else {
        let res = await supabase.from('members').insert([payload]).select();

        if (res.error && res.error.message.includes('decription')) {
          delete payload.decription;
          payload.description = memberDesc;
          res = await supabase.from('members').insert([payload]).select();
        }

        if (res.error) {
          if (res.error.message.includes('duplicate key') || res.error.message.includes('unique constraint') || res.error.message.includes('members_team_id')) {
            throw new Error('Your database has a UNIQUE constraint on the team_id column, which blocks having more than 1 member per section. Please click "Database Fix (SQL)" in the header to remove this constraint!');
          }
          throw res.error;
        }

        showToast('New member added successfully!');
      }

      setEditingMember(null);
      await fetchData();
    } catch (err) {
      console.error('Save member error:', err);
      showToast(err.message, 'error');
      if (err.message.includes('unique constraint') || err.message.includes('team_id') || err.message.includes('RLS')) {
        setShowRlsModal(true);
      }
    } finally {
      setActionLoading(false);
    }
  };

  const toggleMemberVisibility = async (member, e) => {
    e?.stopPropagation();
    try {
      const { data, error } = await supabase
        .from('members')
        .update({ is_active: !member.is_active })
        .eq('id', member.id)
        .select();

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error('Database blocked UPDATE due to Row-Level Security (RLS).');
      }

      setMembers((prev) =>
        prev.map((m) => (m.id === member.id ? { ...m, is_active: !m.is_active } : m))
      );
      showToast(`Member is now ${!member.is_active ? 'visible' : 'hidden'} on site`);
    } catch (err) {
      showToast(err.message, 'error');
      if (err.message.includes('RLS')) setShowRlsModal(true);
    }
  };

  const executeDeleteMember = async (member) => {
    setActionLoading(true);
    try {
      const imageToDelete = member.image_url;

      const { data, error } = await supabase
        .from('members')
        .delete()
        .eq('id', member.id)
        .select();

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error('Database blocked DELETE on members table due to Row-Level Security (RLS). 0 rows were deleted. Please apply the SQL fix.');
      }

      // Safely delete image from Supabase Storage bucket
      if (imageToDelete) {
        await deleteStorageImage(imageToDelete);
      }

      showToast(`Member "${member.name}" permanently deleted from database & storage!`);
      setDeleteConfirm(null);
      await fetchData();
    } catch (err) {
      showToast('Delete error: ' + err.message, 'error');
      if (err.message.includes('Row-Level Security') || err.message.includes('RLS')) {
        setShowRlsModal(true);
      }
    } finally {
      setActionLoading(false);
    }
  };

  // Image Upload Handler
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showToast('Image file size must be under 5MB', 'error');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `member_${Date.now()}.${fileExt}`;
      const filePath = `about/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('website-assets')
        .upload(filePath, file, { cacheControl: '3600', upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('website-assets')
        .getPublicUrl(filePath);

      setEditingMember((prev) => ({ ...prev, image_url: data.publicUrl }));
      showToast('Photo uploaded successfully!');
    } catch (err) {
      console.error('Upload Error:', err);
      showToast('Upload failed: ' + err.message, 'error');
    } finally {
      setIsUploading(false);
    }
  };

  // ==================== SEED DEFAULT DATA ====================
  const handleSeedDefaults = async () => {
    setActionLoading(true);
    try {
      showToast('Seeding default organizational teams and members...', 'info');

      for (let idx = 0; idx < DEFAULT_TEAMS_DATA.length; idx++) {
        const t = DEFAULT_TEAMS_DATA[idx];
        const { data: teamData, error: teamErr } = await supabase
          .from('teams')
          .insert([
            {
              name: t.name,
              description: t.description,
              is_active: t.is_active
            }
          ])
          .select();

        if (teamErr) throw teamErr;
        const newTeamId = teamData[0].id;

        const membersToInsert = t.members.map((m) => ({
          team_id: newTeamId,
          name: m.name,
          role: m.role,
          section: m.section,
          decription: m.decription || m.description || null,
          image_url: m.image_url,
          is_active: m.is_active
        }));

        const { error: memErr } = await supabase.from('members').insert(membersToInsert);
        if (memErr) throw memErr;
      }

      showToast('Default teams and members seeded successfully!');
      setSeedConfirm(false);
      await fetchData();
    } catch (err) {
      console.error('Seed error:', err);
      showToast('Seeding error: ' + err.message, 'error');
      if (err.message.includes('RLS') || err.message.includes('unique constraint')) {
        setShowRlsModal(true);
      }
    } finally {
      setActionLoading(false);
    }
  };

  // ==================== FILTERING & GROUPING ====================
  const filteredTeams = teams.filter((team) => {
    if (teamFilter !== 'all' && team.id !== teamFilter) return false;
    return true;
  });

  const getFilteredMembers = (teamId) => {
    return members
      .filter((m) => String(m.team_id) === String(teamId))
      .filter((m) => {
        if (statusFilter === 'active' && !m.is_active) return false;
        if (statusFilter === 'hidden' && m.is_active) return false;
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matchName = m.name?.toLowerCase().includes(term);
          const matchRole = m.role?.toLowerCase().includes(term);
          const matchSection = m.section?.toLowerCase().includes(term);
          const matchDesc = (m.decription || m.description)?.toLowerCase().includes(term);
          return matchName || matchRole || matchSection || matchDesc;
        }
        return true;
      });
  };

  const knownTeamIds = new Set(teams.map((t) => String(t.id)));
  const unassignedMembers = members
    .filter((m) => !m.team_id || !knownTeamIds.has(String(m.team_id)))
    .filter((m) => {
      if (statusFilter === 'active' && !m.is_active) return false;
      if (statusFilter === 'hidden' && m.is_active) return false;
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchName = m.name?.toLowerCase().includes(term);
        const matchRole = m.role?.toLowerCase().includes(term);
        const matchSection = m.section?.toLowerCase().includes(term);
        return matchName || matchRole || matchSection;
      }
      return true;
    });

  // Statistics
  const totalMembersCount = members.length;
  const activeMembersCount = members.filter((m) => m.is_active).length;
  const hiddenMembersCount = totalMembersCount - activeMembersCount;

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-[200] px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border backdrop-blur-md max-w-md ${
              toast.type === 'error'
                ? 'bg-red-950/95 border-red-500/50 text-red-200'
                : toast.type === 'info'
                ? 'bg-sky-950/95 border-sky-500/50 text-sky-200'
                : 'bg-emerald-950/95 border-emerald-500/50 text-emerald-200'
            }`}
          >
            {toast.type === 'error' && <HiOutlineExclamation className="w-5 h-5 text-red-400 flex-shrink-0" />}
            {toast.type === 'info' && <HiOutlineRefresh className="w-5 h-5 text-sky-400 animate-spin flex-shrink-0" />}
            {toast.type === 'success' && <HiOutlineCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
            <span className="text-xs sm:text-sm font-medium leading-snug">{toast.message}</span>
            <button onClick={() => setToast(null)} className="ml-2 hover:opacity-75 flex-shrink-0">
              <HiOutlineX className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-6 lg:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <span className="p-2 bg-sky-500/10 text-sky-400 rounded-xl">
              <HiOutlineUserGroup className="w-6 h-6" />
            </span>
            <h1 className="text-2xl lg:text-3xl font-bold text-white head-oswald tracking-wide">
              Team & Member Management
            </h1>
          </div>
          <p className="text-slate-400 text-sm max-w-xl">
            Control the entire leadership hierarchy. Drag sections to reorder them on the public About page, add multiple members per section, and manage profiles in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* DRAGGABLE REORDER LOCK / UNLOCK TOGGLE BUTTON */}
          <button
            onClick={() => {
              const nextState = !isReorderLocked;
              setIsReorderLocked(nextState);
              showToast(
                nextState
                  ? 'Section reordering is now LOCKED to prevent accidental moves.'
                  : 'Section reordering is UNLOCKED! Drag sections or use the ↑ and ↓ arrows to reorder.',
                nextState ? 'info' : 'success'
              );
            }}
            className={`px-4 py-2.5 rounded-xl font-bold transition flex items-center space-x-2 text-xs border shadow-sm ${
              isReorderLocked
                ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-amber-500/10 animate-pulse'
            }`}
            title="Lock or unlock section dragging and reordering"
          >
            {isReorderLocked ? (
              <>
                <HiOutlineLockClosed className="w-4 h-4 text-slate-400" />
                <span>Reorder Locked</span>
              </>
            ) : (
              <>
                <HiOutlineLockOpen className="w-4 h-4 text-amber-400" />
                <span>Reorder Active (Drag & Move)</span>
              </>
            )}
          </button>

          {/* Database Fix Modal Button */}
          <button
            onClick={() => setShowRlsModal(true)}
            className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3.5 py-2.5 rounded-xl font-bold transition duration-300 flex items-center space-x-1.5 text-xs shadow-sm"
            title="Database permissions & Unique Constraint fix"
          >
            <HiOutlineKey className="w-4 h-4 text-purple-400" />
            <span>Database Fix (SQL)</span>
          </button>

          {teams.length === 0 && (
            <button
              onClick={() => setSeedConfirm(true)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold transition duration-300 flex items-center space-x-2 shadow-lg shadow-amber-500/20 text-xs"
            >
              <HiOutlineSparkles className="w-4 h-4" />
              <span>Import Default Teams</span>
            </button>
          )}

          <button
            onClick={() => openAddMember()}
            className="bg-slate-800 hover:bg-slate-700 text-sky-400 px-4 py-2.5 rounded-xl font-bold transition duration-300 flex items-center space-x-2 border border-slate-700 text-xs shadow-sm"
          >
            <HiOutlinePlus className="w-4 h-4" />
            <span>Add Member</span>
          </button>

          <button
            onClick={openAddTeam}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-2.5 rounded-xl font-bold transition duration-300 flex items-center space-x-2 shadow-lg shadow-sky-500/25 text-xs"
          >
            <HiOutlineCollection className="w-4 h-4" />
            <span>Create Section</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Total Sections</p>
          <p className="text-2xl font-bold text-white mt-1 head-oswald">{teams.length}</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Total Members</p>
          <p className="text-2xl font-bold text-sky-400 mt-1 head-oswald">{totalMembersCount}</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Visible on Site</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1 head-oswald">{activeMembersCount}</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Hidden Members</p>
          <p className="text-2xl font-bold text-slate-400 mt-1 head-oswald">{hiddenMembersCount}</p>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <HiOutlineSearch className="w-5 h-5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search member, role, or affiliation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <HiOutlineX className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Team filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Section:</span>
            <select
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="all">All Sections ({teams.length})</option>
              {teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Visibility filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="all">All Status</option>
              <option value="active">Visible Only</option>
              <option value="hidden">Hidden Only</option>
            </select>
          </div>

          {/* Accordion expand/collapse */}
          <div className="flex items-center space-x-1 border-l border-slate-800 pl-3">
            <button
              onClick={expandAll}
              title="Expand all sections"
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg text-xs"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              title="Collapse all sections"
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg text-xs"
            >
              Collapse
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[350px] space-y-4">
          <div className="w-12 h-12 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
          <p className="text-slate-400 text-sm">Connecting to Supabase database...</p>
        </div>
      ) : teams.length === 0 && unassignedMembers.length === 0 ? (
        /* Empty State */
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl">
          <div className="w-20 h-20 bg-sky-500/10 text-sky-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <HiOutlineUserGroup className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-white head-oswald mb-3">No Team Sections Yet</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Your database doesn't have any team sections published yet. You can import all standard IMSESO teams with their original members in one click, or create custom sections manually.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setSeedConfirm(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-sky-500/25 flex items-center justify-center space-x-2"
            >
              <HiOutlineSparkles className="w-5 h-5" />
              <span>Import Default Organization</span>
            </button>
            <button
              onClick={openAddTeam}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-xl font-bold border border-slate-700 flex items-center justify-center space-x-2"
            >
              <HiOutlinePlus className="w-5 h-5" />
              <span>Create Empty Team</span>
            </button>
          </div>
        </div>
      ) : (
        /* DRAGGABLE TEAMS LIST */
        <div className="space-y-6">
          {!isReorderLocked && (
            <div className="bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs text-amber-300">
              <span className="flex items-center space-x-2">
                <HiOutlineSelector className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>Drag any section card or use the ↑ and ↓ buttons to change order. Top section will show at the top on the About page!</span>
              </span>
              <button
                onClick={() => setIsReorderLocked(true)}
                className="text-amber-400 hover:underline font-bold"
              >
                Lock Order
              </button>
            </div>
          )}

          {filteredTeams.map((team, index) => {
            const teamMembers = getFilteredMembers(team.id);
            const isExpanded = expandedSections.includes(team.id);
            const cleanDesc = getCleanDescription(team.description);

            return (
              <div
                key={team.id}
                draggable={!isReorderLocked}
                onDragStart={(e) => handleDragStart(index, e)}
                onDragOver={(e) => handleDragOver(index, e)}
                onDrop={(e) => handleDrop(index, e)}
                className={`bg-slate-900 border rounded-3xl overflow-hidden shadow-xl transition-all ${
                  !isReorderLocked
                    ? 'border-amber-500/40 hover:border-amber-400 cursor-grab active:cursor-grabbing shadow-amber-500/5'
                    : 'border-slate-800'
                }`}
              >
                {/* Section Header */}
                <div
                  onClick={() => toggleSection(team.id)}
                  className={`p-5 lg:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-colors ${
                    isExpanded ? 'bg-slate-800/60 border-b border-slate-800' : 'hover:bg-slate-800/30'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    {/* Drag Handle & Order Controls */}
                    {!isReorderLocked && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-1 bg-amber-500/15 border border-amber-500/30 rounded-xl p-1 text-amber-400"
                      >
                        <span className="p-1 hover:bg-amber-500/20 rounded cursor-grab">
                          <HiOutlineSelector className="w-5 h-5" />
                        </span>
                        <button
                          disabled={index === 0}
                          onClick={() => moveTeamByStep(index, -1)}
                          title="Move section up"
                          className="p-1 hover:bg-amber-500/30 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <HiOutlineArrowUp className="w-4 h-4" />
                        </button>
                        <button
                          disabled={index === teams.length - 1}
                          onClick={() => moveTeamByStep(index, 1)}
                          title="Move section down"
                          className="p-1 hover:bg-amber-500/30 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <HiOutlineArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSection(team.id);
                      }}
                      className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white"
                    >
                      {isExpanded ? (
                        <HiOutlineChevronUp className="w-5 h-5" />
                      ) : (
                        <HiOutlineChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20">
                          #{index + 1}
                        </span>
                        <h2 className="text-xl font-bold text-white head-oswald tracking-wide">
                          {team.name}
                        </h2>
                        {team.name.toLowerCase().includes('head') && (
                          <span className="text-[10px] bg-sky-500/15 text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-500/30 font-semibold flex items-center gap-1">
                            ✨ Leadership Showcase
                          </span>
                        )}
                        {!team.is_active && (
                          <span className="text-[10px] bg-red-500/10 text-red-400 px-2.5 py-0.5 rounded-full border border-red-500/20 font-semibold">
                            Hidden
                          </span>
                        )}
                        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">
                          {teamMembers.length} {teamMembers.length === 1 ? 'member' : 'members'}
                        </span>
                      </div>
                      {cleanDesc && (
                        <p className="text-slate-400 text-xs mt-1 font-light italic max-w-2xl">
                          "{cleanDesc}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Header Actions */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex flex-wrap items-center gap-2 self-end sm:self-auto"
                  >
                    <button
                      onClick={(e) => toggleTeamVisibility(team, e)}
                      title={team.is_active ? 'Hide section from public site' : 'Publish section to site'}
                      className={`p-2 rounded-xl border transition-colors ${
                        team.is_active
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {team.is_active ? <HiOutlineEye className="w-5 h-5" /> : <HiOutlineEyeOff className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={() =>
                        setEditingTeam({
                          ...team,
                          description: cleanDesc
                        })
                      }
                      title="Edit Section Details"
                      className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-700"
                    >
                      <HiOutlinePencil className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setDeleteConfirm({ type: 'team', item: team })}
                      title="Delete Section"
                      className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-slate-700"
                    >
                      <HiOutlineTrash className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => openAddMember(team.id)}
                      className="px-3.5 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-xl transition-all flex items-center space-x-1 font-bold text-xs border border-sky-500/20"
                    >
                      <HiOutlinePlus className="w-4 h-4" />
                      <span>Add Member</span>
                    </button>
                  </div>
                </div>

                {/* Members Grid Container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-6">
                        {teamMembers.length === 0 ? (
                          <div className="py-10 text-center border-2 border-dashed border-slate-800 rounded-2xl">
                            <p className="text-slate-500 text-sm">No members in this section yet.</p>
                            <button
                              onClick={() => openAddMember(team.id)}
                              className="mt-3 text-sky-400 hover:text-sky-300 text-xs font-bold inline-flex items-center space-x-1"
                            >
                              <HiOutlinePlus className="w-4 h-4" />
                              <span>Add a member to this section</span>
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {teamMembers.map((member, idx) => {
                              const isFirstCenterMember = idx === 0;

                              return (
                                <div
                                  key={member.id}
                                  className={`group bg-slate-950/60 border rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl relative ${
                                    isFirstCenterMember
                                      ? 'border-sky-500/40 bg-gradient-to-b from-sky-950/20 to-slate-950/60'
                                      : !member.is_active
                                      ? 'border-slate-800/50 opacity-60 bg-slate-950/30'
                                      : 'border-slate-800 hover:border-slate-700 hover:-translate-y-0.5'
                                  }`}
                                >
                                  <div>
                                    {/* First Member Center Indicator Badge */}
                                    {isFirstCenterMember && (
                                      <div className="mb-2.5 flex items-center space-x-1 text-[10px] text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold w-fit">
                                        <HiOutlineStar className="w-3 h-3 text-amber-400" />
                                        <span>Section Lead / Center Display</span>
                                      </div>
                                    )}

                                    <div className="flex items-start space-x-3.5 mb-3">
                                      <div className="relative flex-shrink-0">
                                        <div
                                          className={`w-14 h-14 rounded-full overflow-hidden border-2 ${
                                            isFirstCenterMember ? 'border-sky-400' : 'border-slate-700'
                                          } bg-slate-800 group-hover:border-sky-500 transition-colors`}
                                        >
                                          <img
                                            src={member.image_url || '/imlogo.png'}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                              e.currentTarget.src = '/imlogo.png';
                                            }}
                                          />
                                        </div>
                                        {!member.is_active && (
                                          <div
                                            title="Hidden from public site"
                                            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-900"
                                          ></div>
                                        )}
                                      </div>

                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-white truncate font-oswald">
                                          {member.name}
                                        </h4>
                                        <p className="text-sky-400 text-xs font-medium truncate mt-0.5">
                                          {member.role}
                                        </p>
                                        {member.section && (
                                          <p className="text-slate-500 text-[11px] truncate mt-0.5 italic">
                                            {member.section}
                                          </p>
                                        )}
                                      </div>
                                    </div>

                                    {/* Member Description preview */}
                                    {(member.decription || member.description) && (
                                      <p className="text-slate-400 text-[11px] font-light line-clamp-2 italic mb-3 border-t border-slate-800/80 pt-2">
                                        "{member.decription || member.description}"
                                      </p>
                                    )}
                                  </div>

                                  {/* Card Bottom Actions */}
                                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                                    <button
                                      onClick={() => toggleMemberVisibility(member)}
                                      className={`flex items-center space-x-1 text-[11px] font-semibold transition-colors ${
                                        member.is_active
                                          ? 'text-emerald-400 hover:text-emerald-300'
                                          : 'text-slate-500 hover:text-slate-400'
                                      }`}
                                    >
                                      {member.is_active ? (
                                        <>
                                          <HiOutlineEye className="w-3.5 h-3.5" />
                                          <span>Active</span>
                                        </>
                                      ) : (
                                        <>
                                          <HiOutlineEyeOff className="w-3.5 h-3.5" />
                                          <span>Hidden</span>
                                        </>
                                      )}
                                    </button>

                                    <div className="flex items-center space-x-1">
                                      <button
                                        onClick={() => openEditMember(member)}
                                        title="Edit member details & description"
                                        className="p-1.5 bg-slate-800/80 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 rounded-lg transition-colors"
                                      >
                                        <HiOutlinePencil className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => setDeleteConfirm({ type: 'member', item: member })}
                                        title="Delete member"
                                        className="p-1.5 bg-slate-800/80 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg transition-colors"
                                      >
                                        <HiOutlineTrash className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Unassigned / Direct Members Section */}
          {unassignedMembers.length > 0 && (
            <div className="bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-xl transition-all">
              <div
                onClick={() => toggleSection('unassigned')}
                className={`p-5 lg:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-colors ${
                  expandedSections.includes('unassigned')
                    ? 'bg-amber-950/20 border-b border-amber-500/20'
                    : 'hover:bg-slate-800/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection('unassigned');
                    }}
                    className="p-1.5 hover:bg-slate-700 rounded-lg text-amber-400"
                  >
                    {expandedSections.includes('unassigned') ? (
                      <HiOutlineChevronUp className="w-5 h-5" />
                    ) : (
                      <HiOutlineChevronDown className="w-5 h-5" />
                    )}
                  </button>
                  <div>
                    <div className="flex items-center space-x-3">
                      <h2 className="text-xl font-bold text-amber-400 head-oswald tracking-wide">
                        Direct / Unassigned Members
                      </h2>
                      <span className="text-xs bg-amber-500/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                        {unassignedMembers.length} {unassignedMembers.length === 1 ? 'member' : 'members'}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">
                      These members exist in your database. Edit them to assign them to an official team section.
                    </p>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedSections.includes('unassigned') && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {unassignedMembers.map((member) => (
                        <div
                          key={member.id}
                          className="group bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col justify-between transition-all"
                        >
                          <div className="flex items-start space-x-3.5 mb-3">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-800 group-hover:border-amber-400 transition-colors flex-shrink-0">
                              <img
                                src={member.image_url || '/imlogo.png'}
                                alt={member.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = '/imlogo.png';
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-bold text-white truncate font-oswald">
                                {member.name}
                              </h4>
                              <p className="text-amber-400 text-xs font-medium truncate mt-0.5">
                                {member.role}
                              </p>
                              {member.section && (
                                <p className="text-slate-500 text-[11px] truncate mt-0.5 italic">
                                  {member.section}
                                </p>
                              )}
                              {(member.decription || member.description) && (
                                <p className="text-slate-400 text-[11px] font-light line-clamp-2 italic mt-1.5">
                                  "{member.decription || member.description}"
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-slate-500">
                              {member.is_active ? 'Active' : 'Hidden'}
                            </span>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => openEditMember(member)}
                                title="Edit & Assign Team"
                                className="px-2 py-1 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 rounded-lg text-xs font-bold flex items-center space-x-1"
                              >
                                <HiOutlinePencil className="w-3.5 h-3.5" />
                                <span>Assign</span>
                              </button>
                              <button
                                onClick={() => setDeleteConfirm({ type: 'member', item: member })}
                                title="Delete member"
                                className="p-1.5 bg-slate-800/80 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg transition-colors"
                              >
                                <HiOutlineTrash className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}

      {/* ==================== TEAM MODAL ==================== */}
      <AnimatePresence>
        {editingTeam && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-sky-500/10 text-sky-400 rounded-xl">
                    <HiOutlineCollection className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-white head-oswald">
                    {editingTeam.id ? 'Edit Team Section' : 'Create Team Section'}
                  </h3>
                </div>
                <button
                  onClick={() => setEditingTeam(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                    Section Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={editingTeam.name}
                    onChange={(e) => setEditingTeam({ ...editingTeam, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm"
                    placeholder="e.g. Patrons & Consultants or Chief Executive Committee"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                    Description / Subtitle (Optional)
                  </label>
                  <textarea
                    value={editingTeam.description || ''}
                    onChange={(e) => setEditingTeam({ ...editingTeam, description: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm h-24 resize-none"
                    placeholder="Brief description or purpose of this organizational committee..."
                  />
                </div>

                <div className="flex items-center space-x-3 ml-1 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setEditingTeam({ ...editingTeam, is_active: !editingTeam.is_active })
                    }
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      editingTeam.is_active ? 'bg-sky-500' : 'bg-slate-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        editingTeam.is_active ? 'left-7' : 'left-1'
                      }`}
                    ></div>
                  </button>
                  <span className="text-sm text-slate-300 font-medium">
                    Section Visible on Public Site
                  </span>
                </div>
              </div>

              <div className="p-5 bg-slate-800/50 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="px-5 py-2 text-slate-400 hover:text-white font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={saveTeam}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 disabled:opacity-60 flex items-center space-x-2"
                >
                  {actionLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <HiOutlineSave className="w-4 h-4" />
                  )}
                  <span>Save Section</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== MEMBER MODAL ==================== */}
      <AnimatePresence>
        {editingMember && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl my-8"
            >
              <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
                <div className="flex items-center space-x-2">
                  <span className="p-2 bg-sky-500/10 text-sky-400 rounded-xl">
                    <HiOutlineUserGroup className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-white head-oswald">
                    {editingMember.id ? 'Edit Member Details' : 'Add New Member'}
                  </h3>
                </div>
                <button
                  onClick={() => setEditingMember(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto custom-scrollbar">
                {/* Photo & Preview Header */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-5">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-xl flex-shrink-0">
                      <img
                        src={editingMember.image_url || '/imlogo.png'}
                        alt="Member Preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/imlogo.png';
                        }}
                      />
                    </div>
                    {isUploading && (
                      <div className="absolute inset-0 bg-black/60 rounded-full flex flex-col items-center justify-center">
                        <div className="w-6 h-6 border-2 border-sky-400/30 border-t-sky-400 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <div className="flex space-x-2 border-b border-slate-800 pb-2">
                      <button
                        type="button"
                        onClick={() => setImageTab('upload')}
                        className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors ${
                          imageTab === 'upload'
                            ? 'bg-sky-500 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Upload Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageTab('preset')}
                        className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors ${
                          imageTab === 'preset'
                            ? 'bg-sky-500 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Built-in Presets
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageTab('url')}
                        className={`text-xs font-bold px-3 py-1 rounded-lg transition-colors ${
                          imageTab === 'url'
                            ? 'bg-sky-500 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Direct URL
                      </button>
                    </div>

                    {imageTab === 'upload' && (
                      <div>
                        <label className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 rounded-xl cursor-pointer transition text-xs font-semibold">
                          <HiOutlineUpload className="w-4 h-4" />
                          <span>{isUploading ? 'Uploading to Supabase...' : 'Choose Image File'}</span>
                          <input
                            type="file"
                            onChange={handleImageUpload}
                            className="hidden"
                            accept="image/*"
                            disabled={isUploading}
                          />
                        </label>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Uploads directly to Supabase Storage (<span className="text-slate-400">website-assets/about</span>). Max 5MB.
                        </p>
                      </div>
                    )}

                    {imageTab === 'preset' && (
                      <div>
                        <select
                          value={editingMember.image_url}
                          onChange={(e) =>
                            setEditingMember({ ...editingMember, image_url: e.target.value })
                          }
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
                        >
                          <option value="/imlogo.png">Select existing photo...</option>
                          {AVAILABLE_DEFAULT_IMAGES.map((img) => (
                            <option key={img.path} value={img.path}>
                              {img.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {imageTab === 'url' && (
                      <div>
                        <input
                          type="text"
                          value={editingMember.image_url || ''}
                          onChange={(e) =>
                            setEditingMember({ ...editingMember, image_url: e.target.value })
                          }
                          placeholder="https://... or /about/image.png"
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={editingMember.name}
                      onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm"
                      placeholder="e.g. Dr. Charles Viva or Mr. S. Wilfred"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                      Position / Role <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={editingMember.role}
                      onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm"
                      placeholder="e.g. Senior Consultant or Secretary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1 flex items-center justify-between">
                      <span>Education / Qualifications</span>
                      <span className="text-[10px] text-sky-400 font-normal">Subtitle / Credentials</span>
                    </label>
                    <input
                      type="text"
                      value={editingMember.section || ''}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, section: e.target.value })
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm"
                      placeholder="e.g. MPE | Human Rights Defender | BSc"
                    />
                  </div>

                  {/* Member Description / Bio */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1 flex items-center justify-between">
                      <span>Personal Introduction / Bio (Optional)</span>
                      <span className="text-[10px] text-sky-400 font-normal">Powers Leadership Showcase on About page</span>
                    </label>
                    <textarea
                      value={editingMember.description || ''}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, description: e.target.value })
                      }
                      rows={5}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-xs leading-relaxed resize-y"
                      placeholder="e.g. Introduce about themselves, their educational background, life journey, degrees, and humanitarian service..."
                    />
                  </div>

                  {/* Assigned Team Dropdown */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">
                      Assign to Section <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={editingMember.team_id}
                      onChange={(e) =>
                        setEditingMember({ ...editingMember, team_id: e.target.value })
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-500 text-sm"
                    >
                      <option value="">Select a team section...</option>
                      {teams.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Visibility switch */}
                <div className="flex items-center space-x-3 ml-1 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setEditingMember({
                        ...editingMember,
                        is_active: !editingMember.is_active
                      })
                    }
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      editingMember.is_active ? 'bg-sky-500' : 'bg-slate-700'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        editingMember.is_active ? 'left-7' : 'left-1'
                      }`}
                    ></div>
                  </button>
                  <span className="text-sm text-slate-300 font-medium">
                    Publish and display on the website
                  </span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-800/50 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingMember(null)}
                  className="px-5 py-2 text-slate-400 hover:text-white font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={saveMember}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 disabled:opacity-60 flex items-center space-x-2"
                >
                  {actionLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <HiOutlineSave className="w-4 h-4" />
                  )}
                  <span>Save Member</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== DELETE CONFIRMATION MODAL ==================== */}
      <AnimatePresence>
        {deleteConfirm && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                <HiOutlineTrash className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white head-oswald mb-2">
                Delete {deleteConfirm.type === 'team' ? 'Team Section' : 'Member'}?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Are you sure you want to permanently delete{' '}
                <span className="text-white font-semibold">"{deleteConfirm.item.name}"</span>?
                {deleteConfirm.type === 'member' ? (
                  <span className="block text-slate-400 text-xs mt-2 text-sky-400">
                    ✓ Both the database record and any uploaded image file in Supabase storage will be permanently deleted.
                  </span>
                ) : (
                  <span className="block text-red-400 text-xs mt-2">
                    Warning: All members assigned to this section and their uploaded photos will also be permanently deleted.
                  </span>
                )}
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirm(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => {
                    if (deleteConfirm.type === 'team') {
                      executeDeleteTeam(deleteConfirm.item);
                    } else {
                      executeDeleteMember(deleteConfirm.item);
                    }
                  }}
                  className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-red-500/25 flex items-center space-x-2"
                >
                  {actionLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : null}
                  <span>Yes, Delete</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== SEED CONFIRMATION MODAL ==================== */}
      <AnimatePresence>
        {seedConfirm && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-sky-500/10 text-sky-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-sky-500/20">
                <HiOutlineSparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white head-oswald mb-2">
                Import Default Teams & Members
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                This will create the 3 standard organizational sections in your Supabase database:
                <br />
                <span className="text-white font-medium">1. Patrons & Consultants (8 members)</span>
                <br />
                <span className="text-white font-medium">2. Chief Executive Committee (8 members)</span>
                <br />
                <span className="text-white font-medium">3. Administration Committee (5 members)</span>
                <br />
                All members will be pre-populated with their original photos, roles, and titles.
              </p>
              <div className="flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={() => setSeedConfirm(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={handleSeedDefaults}
                  className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/25 flex items-center space-x-2"
                >
                  {actionLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <HiOutlineSparkles className="w-4 h-4" />
                  )}
                  <span>Import Data Now</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== DATABASE PERMISSIONS & UNIQUE FIX MODAL ==================== */}
      <AnimatePresence>
        {showRlsModal && (
          <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
                <div className="flex items-center space-x-2.5">
                  <span className="p-2 bg-purple-500/10 text-purple-400 rounded-xl">
                    <HiOutlineKey className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white head-oswald">
                      Fix Database Constraints & Permissions
                    </h3>
                    <p className="text-slate-400 text-xs">
                      Enables multiple members per section, draggable order, and full update/delete
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRlsModal(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <HiOutlineX className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1 text-sm text-slate-300">
                <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-amber-200 text-xs space-y-1.5">
                  <p className="font-bold text-amber-300">Why only 1 member was allowed per section:</p>
                  <p>
                    In Supabase, if the <strong>team_id</strong> column was created with the <strong>"Is Unique"</strong> option enabled, PostgreSQL blocks adding more than one member with that same team ID. Running the script below removes that unique constraint so you can add unlimited members to every section!
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Quick 2-Step Solution:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 ml-1">
                    <li>
                      Open your <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-sky-400 underline font-semibold">Supabase Dashboard</a> &rarr; Select your project (<span className="text-slate-200 font-mono">pdihwfkxocoenarkjmoa</span>) &rarr; Go to <strong>SQL Editor</strong> on the left sidebar.
                    </li>
                    <li>
                      Click <strong>"New Query"</strong>, paste the SQL below, and click <strong>"Run"</strong> (or press Cmd/Ctrl + Enter).
                    </li>
                  </ol>
                </div>

                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      SQL Script:
                    </span>
                    <button
                      type="button"
                      onClick={copySqlToClipboard}
                      className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/30 rounded-lg text-xs font-bold flex items-center space-x-1 transition"
                    >
                      {copiedSql ? (
                        <>
                          <HiOutlineCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <HiOutlineClipboardCopy className="w-3.5 h-3.5" />
                          <span>Copy SQL Script</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono overflow-x-auto max-h-48 custom-scrollbar">
                    {SQL_DATABASE_FIX}
                  </pre>
                </div>
              </div>

              <div className="p-5 bg-slate-800/50 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowRlsModal(false)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={copySqlToClipboard}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-xs flex items-center space-x-1.5 shadow-lg shadow-purple-500/20"
                >
                  <HiOutlineClipboardCopy className="w-4 h-4" />
                  <span>{copiedSql ? 'Copied to Clipboard' : 'Copy SQL & Open Supabase'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MembersPage;
