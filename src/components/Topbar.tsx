import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, HelpCircle, Code, LogOut, UserCheck, Building2, Clock, ChevronDown, Shield, RefreshCw, Users, Grid, LayoutDashboard } from 'lucide-react';
import { AuthUser } from '../types';

interface TopbarProps {
  breadcrumbs: string[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  openAngularGuide: () => void;
  currentView?: string;
  onNavigate?: (view: string, param?: any) => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
  onSwitchUser?: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  breadcrumbs,
  searchQuery,
  onSearchChange,
  openAngularGuide,
  currentView = 'home',
  onNavigate,
  currentUser,
  onLogout,
  onSwitchUser
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isHrActive = currentView.startsWith('hr');
  const isWorkspaceActive = currentView === 'home';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-[54px] shrink-0 bg-white border-b border-[#E4E0D6] flex items-center justify-between px-3 sm:px-5 gap-3 relative z-30">
      {/* Breadcrumbs & Quick Module Tabs */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-1.5 text-xs text-[#6B7280] truncate">
          {breadcrumbs.map((part, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {index > 0 && <span className="opacity-40">/</span>}
                <span
                  onClick={() => {
                    if (index === 0 && onNavigate) onNavigate('home');
                  }}
                  className={isLast ? 'text-[#1C1F26] font-bold truncate' : 'hover:text-[#1C1F26] cursor-pointer truncate'}
                >
                  {part}
                </span>
              </React.Fragment>
            );
          })}
        </div>

        {/* Direct Fast Module Links */}
        {onNavigate && (
          <div className="hidden lg:flex items-center gap-1.5 ml-3 pl-3 border-l border-[#E4E0D6]">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                isWorkspaceActive
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'text-[#4B5563] bg-[#F6F4EF] hover:bg-[#EAE7DF]'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>Workspace</span>
            </button>
            <button
              onClick={() => onNavigate('hrCommandCenter')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                isHrActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/60'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>HR &amp; Workforce</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
            <button
              onClick={() => onNavigate('mfgDash')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                currentView.startsWith('mfg') || currentView === 'woList'
                  ? 'bg-[#E8622C] text-white'
                  : 'text-[#4B5563] hover:bg-[#F6F4EF]'
              }`}
            >
              <span>Manufacturing</span>
            </button>
            <button
              onClick={() => onNavigate('qualityDash')}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                currentView.startsWith('quality') || currentView.startsWith('ncr')
                  ? 'bg-[#C4433A] text-white'
                  : 'text-[#4B5563] hover:bg-[#F6F4EF]'
              }`}
            >
              <span>Quality</span>
            </button>
          </div>
        )}
      </div>

      {/* Global Search */}
      <div className="flex-1 max-w-md hidden md:flex items-center gap-2 bg-[#F6F4EF] border border-[#E4E0D6] rounded-lg px-3 py-1.5 text-xs text-[#1C1F26]">
        <Search className="w-3.5 h-3.5 text-[#9CA3AF]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search items, work orders, employees, shifts, NCRs..."
          className="w-full bg-transparent border-none outline-none text-xs placeholder:text-[#9CA3AF]"
        />
        <kbd className="hidden lg:inline-block font-mono text-[10px] bg-white border border-[#E4E0D6] px-1.5 py-0.5 rounded text-[#6B7280] shadow-xs">
          Ctrl K
        </kbd>
      </div>

      {/* Actions & User State */}
      <div className="flex items-center gap-2">
        {/* Plant & Shift Pill (visible on medium+ screens) */}
        {currentUser && (
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 bg-[#F6F4EF] border border-[#E4E0D6] rounded-md text-[11px] text-[#4B5563]">
            <span className="flex items-center gap-1 font-medium text-[#14213D]">
              <Building2 className="w-3 h-3 text-[#0F8B8D]" />
              {currentUser.plantId}
            </span>
            <span className="text-[#D1D5DB]">|</span>
            <span className="flex items-center gap-1 font-mono text-[#6B7280]">
              <Clock className="w-3 h-3 text-[#E8622C]" />
              {currentUser.shift.split(' ')[0]}
            </span>
          </div>
        )}

        <button
          onClick={openAngularGuide}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-semibold bg-[#14213D] text-white hover:bg-[#1C2B4D] transition-colors"
          title="Open Angular 18 Architecture & Migration Guide"
        >
          <Code className="w-3.5 h-3.5 text-[#E8622C]" />
          <span className="hidden sm:inline">Angular Spec</span>
        </button>

        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6B7280] hover:bg-[#F6F4EF] hover:text-[#14213D] transition-colors relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E8622C] border-2 border-white" />
        </button>

        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6B7280] hover:bg-[#F6F4EF] hover:text-[#14213D] transition-colors"
          title="Help & Documentation"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* User Profile Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-1.5 pl-1 pr-1.5 py-1 rounded-lg hover:bg-[#F6F4EF] transition-all cursor-pointer"
          >
            <div
              className={`w-7 h-7 rounded-full bg-gradient-to-br ${
                currentUser?.avatarColor || 'from-[#0F8B8D] to-[#E8622C]'
              } flex items-center justify-center text-[11px] font-bold text-white shadow-xs`}
            >
              {currentUser?.initials || 'PR'}
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#6B7280] transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
          </button>

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 top-full mt-1.5 w-72 bg-white border border-[#E4E0D6] rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="p-2.5 bg-[#F6F4EF] rounded-lg mb-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${
                      currentUser?.avatarColor || 'from-[#0F8B8D] to-[#E8622C]'
                    } flex items-center justify-center text-xs font-bold text-white shadow-xs shrink-0`}
                  >
                    {currentUser?.initials || 'PR'}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-[#1C1F26] truncate">
                      {currentUser?.name || 'Priya Rao'}
                    </div>
                    <div className="text-[11px] text-[#0F8B8D] font-medium truncate">
                      {currentUser?.role || 'Plant Operations Director'}
                    </div>
                    <div className="text-[10px] text-[#6B7280] truncate font-mono">
                      Badge: {currentUser?.badgeId || 'PLANT-001'} &middot; {currentUser?.plantId || 'PLANT-01'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-0.5 text-xs text-[#374151]">
                <button
                  onClick={() => {
                    setShowUserMenu(false);
                    onSwitchUser?.();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-[#F3F4F6] text-left transition-colors cursor-pointer text-[#14213D] font-medium"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#E8622C]" />
                  <span>Switch Role / User</span>
                </button>

                <div className="h-px bg-[#E5E7EB] my-1" />

                <button
                  onClick={() => {
                    setShowUserMenu(false);
                    onLogout?.();
                  }}
                  className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-rose-50 text-left transition-colors cursor-pointer text-rose-600 font-medium"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out / Lock Terminal</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

