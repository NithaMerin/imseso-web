"use client";
import React, { useState, useEffect } from 'react';
import FooterTab from '../components/FooterTab';
import { supabase } from '@/lib/supabase';
import { DEFAULT_TEAMS_DATA } from '@/lib/defaultMembersData';
import { HiCheckBadge } from 'react-icons/hi2';
import {
  FaQuoteRight,
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaHeart,
  FaShareNodes
} from 'react-icons/fa6';

// Helper to clean internal metadata tags (like order or legacy size tags) from team descriptions
const getCleanDescription = (desc) => {
  if (!desc) return '';
  return desc
    .replace(/<!--order:\d+-->/gi, '')
    .replace(/<!--size:(sm|md|lg|xl)-->/gi, '')
    .replace(/\[size:(sm|md|lg|xl)\]/gi, '')
    .trim();
};

// Helper to determine the section display order
const getTeamOrder = (team, fallbackIdx) => {
  if (typeof team.display_order === 'number') return team.display_order;
  const match = team.description?.match(/<!--order:(\d+)-->/);
  if (match) return parseInt(match[1], 10);
  return fallbackIdx;
};

// X (Twitter) Tweet style leadership card component
const LeaderTweetCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(48);

  const bio = member.decription || member.description || '';
  const isLong = bio.length > 340;
  const displayedBio = isLong && !expanded ? bio.slice(0, 320) + '...' : bio;

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  // Qualifications parsing: e.g. "Human Rights Defender | Community Specialist" or degrees
  const qualifications = member.section
    ? member.section
        .split(/\||,|•/)
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="bg-slate-900/90 dark:bg-black/60 backdrop-blur-md rounded-2xl border border-slate-700/80 hover:border-sky-500/50 p-5 sm:p-7 shadow-2xl transition-all duration-300 relative group flex flex-col justify-between hover:shadow-sky-500/10">
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3">
          <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Avatar / Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-sky-400 ring-4 ring-sky-500/10 shadow-lg bg-slate-800">
                <img
                  src={member.image_url || '/imlogo.png'}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/imlogo.png';
                  }}
                />
              </div>
            </div>

            {/* Profile Details Near Image */}
            <div className="flex-1 min-w-0 pt-0.5">
              {/* Name & Blue Checkmark */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-base sm:text-xl font-bold font-oswald text-white tracking-wide break-words">
                  {member.name}
                </h3>
                <HiCheckBadge
                  className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0"
                  title="Verified Leader"
                />
              </div>

              {/* Position / Role Handle */}
              <p className="text-sky-400 font-semibold text-xs sm:text-sm mt-0.5 flex items-center gap-1 flex-wrap">
                <span className="text-sky-500/70">@</span>
                <span>{member.role}</span>
              </p>

              {/* Levels of Education / Qualifications */}
              {qualifications.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {qualifications.map((q, qIdx) => (
                    <span
                      key={qIdx}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Executive Statement / Quotation Icon */}
          <div
            className="w-8 h-8 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center p-1.5 flex-shrink-0 group-hover:bg-sky-500/20 group-hover:border-sky-400/40 group-hover:scale-105 transition-all duration-300 shadow-sm"
            title="Executive Leadership Message"
          >
            <FaQuoteRight className="w-3.5 h-3.5 text-sky-400" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/80 my-3.5"></div>

        {/* Bottom: Introduce About Themselves (Statement Body) */}
        {bio ? (
          <div className="text-slate-300 text-xs sm:text-[15px] leading-relaxed font-light whitespace-pre-line text-justify sm:text-left">
            <p className="italic">"{displayedBio}"</p>
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2.5 text-sky-400 hover:text-sky-300 text-xs font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <span>{expanded ? 'Show less' : 'Read full introduction'}</span>
                <span>{expanded ? '↑' : '↓'}</span>
              </button>
            )}
          </div>
        ) : (
          <p className="text-slate-500 text-xs italic">Executive leadership profile for IMSESO.</p>
        )}
      </div>

      {/* Footer / Metadata & Action Bar */}
      <div className="mt-5 pt-3.5 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-slate-500 text-xs flex-wrap gap-2">
          <span className="font-mono text-[11px] text-slate-400">
            IMSESO Official Leadership
          </span>
          <div className="flex items-center space-x-4 sm:space-x-5">
            <button
              type="button"
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
              title="Reply"
            >
              <FaRegComment className="w-3.5 h-3.5" />
              <span className="text-[11px]">8</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
              title="Repost"
            >
              <FaRetweet className="w-3.5 h-3.5" />
              <span className="text-[11px]">24</span>
            </button>
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center space-x-1.5 transition-colors ${
                liked ? 'text-rose-500' : 'hover:text-rose-400'
              }`}
              title="Like"
            >
              {liked ? <FaHeart className="w-3.5 h-3.5" /> : <FaRegHeart className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{likeCount}</span>
            </button>
            <button
              type="button"
              className="hover:text-sky-400 transition-colors"
              title="Share"
            >
              <FaShareNodes className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch active teams from Supabase
        const { data: teamsData, error: teamsError } = await supabase
          .from('teams')
          .select('*')
          .eq('is_active', true);

        // Fetch active members from Supabase
        const { data: membersData, error: membersError } = await supabase
          .from('members')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: true });

        if (!teamsError && teamsData && teamsData.length > 0) {
          // Sort teams based on draggable display_order
          const sorted = [...teamsData].sort((a, b) => getTeamOrder(a, 0) - getTeamOrder(b, 0));
          setTeams(sorted);
          setMembers(membersData || []);
        } else {
          // Fallback to default teams and members if database is empty or not yet seeded
          const fallbackTeams = DEFAULT_TEAMS_DATA.map((t, idx) => ({
            id: `default-team-${idx}`,
            name: t.name,
            description: t.description,
            display_order: idx,
            is_active: t.is_active
          }));

          const fallbackMembers = DEFAULT_TEAMS_DATA.flatMap((t, idx) =>
            t.members.map((m, mIdx) => ({
              id: `default-mem-${idx}-${mIdx}`,
              team_id: `default-team-${idx}`,
              name: m.name,
              role: m.role,
              section: m.section,
              decription: m.decription || m.description || '',
              image_url: m.image_url,
              is_active: m.is_active
            }))
          );

          setTeams(fallbackTeams);
          setMembers(fallbackMembers);
        }
      } catch (err) {
        console.error('Error fetching team data:', err);
        setTeams(
          DEFAULT_TEAMS_DATA.map((t, idx) => ({
            id: `default-team-${idx}`,
            name: t.name,
            description: t.description,
            display_order: idx
          }))
        );
        setMembers(
          DEFAULT_TEAMS_DATA.flatMap((t, idx) =>
            t.members.map((m, mIdx) => ({
              id: `default-mem-${idx}-${mIdx}`,
              team_id: `default-team-${idx}`,
              name: m.name,
              role: m.role,
              section: m.section,
              decription: m.decription || m.description || '',
              image_url: m.image_url
            }))
          )
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getMembersByTeam = (teamId) => {
    return members.filter((m) => String(m.team_id) === String(teamId));
  };

  // Helper to identify Head of the Organization team
  const isHeadTeam = (team) => {
    if (!team?.name) return false;
    const n = team.name.toLowerCase().trim();
    return n.includes('head of') || n.includes('head') || n.includes('leadership');
  };

  const headTeam = teams.find(isHeadTeam);
  const headMembers = headTeam ? getMembersByTeam(headTeam.id) : [];
  const regularTeams = teams.filter((t) => !isHeadTeam(t));

  return (
    <div className='bg-slate-900 min-h-screen text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Hero Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/imlogo.png')] opacity-5 bg-center bg-no-repeat bg-contain blur-sm animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4 animate-fade-up">
            About IMSESO
          </h1>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Motto, Vision, Mission Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Motto */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-sky-400 mb-2">Our Motto</h2>
            <p className="text-white leading-relaxed font-light">
              Social Empowerment with Peaceful Environment
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-sky-400 mb-2">Our Vision</h2>
            <p className="text-white leading-relaxed font-light text-sm">
              Meaningful contribution to the sustainable education, socio-economic and environmental development of Sri Lanka by empowering Children, Youth, and Marginalized communities.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-sky-400 mb-2">Our Mission</h2>
            <p className="text-white leading-relaxed font-light text-sm">
              Empowering Children, Youth, and Marginalized Communities through Education, Child Protection, Youth Empowerment, Mental Health, and Sustainability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8 glass-card p-6 rounded-2xl border border-white/10 text-center">
          <h2 className="text-xl font-bold font-oswald text-sky-400 mb-3">Core Values</h2>
          <p className="text-white italic">
            Equality, Responsibility, Respect, Compassion, Curiosity, Collaboration, Participation, Cultural Sensitivity, Transparency & Accountability, Non-discrimination, Therapeutic Relationship, and Ecological Concern.
          </p>
        </div>
      </div>

      {/* General Introduction */}
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src="/icons/kids.jpg" alt="Children Program" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-oswald text-xl">Empowering the Future</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald text-white mb-4 border-l-4 border-sky-500 pl-4">
              Who We Are
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed font-light text-justify">
              <p>
                IMSESO is a committed National level Non-governmental organization (NGO) founded on December 8th, 2013, by Mr. Constantine Santiago along with a group of volunteers. We are legally registered under the Voluntary Social Services Organizations Act No.31 of 1980.
              </p>
              <p>
                Our main objective is Child, Adolescents, and Youth Development in the remote villages and estates of Sri Lanka. We sustain healthy relationships with all Religions, Communities, Civil Societies, and Government bodies.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                {[
                  "Education & Skills Development", "Child Protection & Rights",
                  "Health & Mental Well-being", "Special Needs Empowerment",
                  "Non-Violent Communication", "Peace Building",
                  "Youth Empowerment", "Eco-Sustainability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sky-200">
                    <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-sky-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates & Documents */}
      <div className="bg-blue-100/50 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-bold font-oswald text-white mb-6">Registration Certificate</h3>
              <div className="glass-card p-4 rounded-xl border border-white/10 inline-block hover:scale-105 transition duration-300 cursor-pointer">
                <a href="/icons/certificateOfImseso.jpg" target="_blank" rel="noopener noreferrer">
                  <img src='/icons/certificateOfImseso.jpg' alt="Certificate" className="h-64 object-contain rounded" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-oswald text-white mb-6">Organizational Structure</h3>
              <div className="glass-card p-4 rounded-xl border border-white/10 inline-block hover:scale-105 transition duration-300 cursor-pointer">
                <img src='/icons/structure.jpg' alt="Structure" className="h-64 object-contain rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Head of the Organization Section (X Tweet Frame UI) */}
      {!loading && headTeam && headMembers.length > 0 && (
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
              Executive Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mt-3">
              {headTeam.name}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full mt-3"></div>
            {headTeam.description && (
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed italic text-sm sm:text-base">
                "{getCleanDescription(headTeam.description)}"
              </p>
            )}
          </div>

          <div
            className={`grid grid-cols-1 ${
              headMembers.length > 1 ? 'lg:grid-cols-2 max-w-6xl' : 'max-w-3xl'
            } gap-8 mx-auto`}
          >
            {headMembers.map((leader) => (
              <LeaderTweetCard key={leader.id} member={leader} />
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Team Section */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-oswald text-white">
            Our Dedicated Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full mt-3"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-20 sm:space-y-24">
            {regularTeams.length === 0 ? (
              <p className="text-center text-slate-500 italic">No team sections have been published yet.</p>
            ) : (
              regularTeams.map((team) => {
                const teamMembers = getMembersByTeam(team.id);
                if (teamMembers.length === 0) return null;

                const cleanDescription = getCleanDescription(team.description);

                return (
                  <div key={team.id} className="animate-fade-up">
                    {/* Team Section Header */}
                    <div className="text-center mb-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-400 uppercase tracking-widest font-oswald inline-block border-b-2 border-sky-500/30 pb-2.5 px-6 sm:px-8">
                        {team.name}
                      </h3>
                      {cleanDescription && (
                        <p className="text-slate-400 mt-3 max-w-2xl mx-auto font-light leading-relaxed italic text-xs sm:text-sm md:text-base px-2">
                          "{cleanDescription}"
                        </p>
                      )}
                    </div>

                    {/* UNIFORM MEMBERS GRID:
                        - All member cards have the EXACT SAME uniform, compact size (not too big)
                        - 1 member in section => centered horizontally
                        - 2 members in section => 2 side by side, centered horizontally
                        - 3 members in section => 3 across the line horizontally
                        - 4+ members => wraps vertically, 3 members per row
                        - Mobile / mini screens (<640px) => 1 member per row, perfectly centered & responsive
                    */}
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-7 lg:gap-8 items-stretch max-w-5xl mx-auto">
                      {teamMembers.map((member) => (
                        <div
                          key={member.id}
                          className="w-full max-w-[300px] sm:w-[280px] md:w-[290px] lg:w-[300px] flex-shrink-0 flex-grow-0 glass-card p-6 rounded-2xl border border-white/10 hover:border-sky-500/40 bg-slate-900/60 hover:bg-slate-800/60 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-sky-500/10"
                        >
                          {/* Uniform Member Avatar */}
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-sky-500/40 mb-4 group-hover:border-sky-400 transition-colors shadow-lg bg-slate-800 flex-shrink-0 ring-2 ring-sky-500/10">
                            <img
                              src={member.image_url || "/imlogo.png"}
                              alt={member.name}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              onError={(e) => {
                                e.currentTarget.src = "/imlogo.png";
                              }}
                            />
                          </div>

                          {/* Member Details */}
                          <div className="w-full flex-1 flex flex-col items-center justify-start">
                            <h4 className="text-base sm:text-lg font-bold text-white font-oswald tracking-wide">
                              {member.name}
                            </h4>
                            <p className="text-sky-400 text-xs font-semibold mt-1 uppercase tracking-wider">
                              {member.role}
                            </p>
                            {member.section && (
                              <p className="text-slate-400 text-xs mt-1 font-light italic">
                                {member.section}
                              </p>
                            )}
                            {(member.decription || member.description) && (
                              <p className="text-slate-300 text-xs mt-3 font-light leading-relaxed italic border-t border-white/10 pt-2.5 w-full">
                                "{member.decription || member.description}"
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {/* Founder's Message */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-blue-500/20 dark:border-sky-500/20 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-sky-500 to-transparent"></div>
            <h2 className="text-3xl font-bold font-oswald text-center text-white mb-8">Message from the Heart</h2>

            <div className="text-center mb-10">
              <p className="text-xl md:text-2xl text-sky-300 italic font-serif leading-relaxed">
                “Not all of us can do great things but we can do small things with great love”
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm tracking-widest">- MOTHER TERESA -</p>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed font-light text-justify text-lg">
              <p>
                IMSESO’s mission is rooted in a deep commitment to empowering children, youth, and marginalized communities. We aim to break barriers of inequality and build a future where every voice is heard.
              </p>
              <p>
                Through collaboration, compassion, and dedication, we envision a future where every person has the opportunity to live a dignified life in harmony with the environment.
              </p>
              <p>
                I heartily thank all our funding agencies, partner organizations, religious leaders, and government officials for their unwavering support.
              </p>
            </div>

            <div className="mt-10 text-center">
              <img src="/about/ab1.png" alt="Signature" className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-blue-500 dark:border-sky-500 shadow-lg" />
              <p className="text-white font-bold text-lg">Constantine Santiago</p>
              <p className="text-sky-400 text-sm">Founder, President & Director</p>
            </div>
          </div>
        </div>
      </div>

      <FooterTab />
    </div>
  );
};

export default AboutPage;
