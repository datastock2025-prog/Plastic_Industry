import React from 'react';
import { Sparkles, Code } from 'lucide-react';

interface ModuleDef {
  name: string;
  sub: string;
  icon: string;
  color: string;
  view: string;
  group: string;
}

interface HomeViewProps {
  onNavigate: (view: string, param?: any) => void;
  openAngularGuide: () => void;
  activeWOCount: number;
  lowStockCount: number;
  openPOCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  openAngularGuide,
  activeWOCount,
  lowStockCount,
  openPOCount,
}) => {
  const modules: ModuleDef[] = [
    { name: 'Item Master', sub: '842 active SKUs', icon: '◇', color: '#E8622C', view: 'itemList', group: 'Master Data' },
    { name: 'BOM / Formula', sub: '96 formulas', icon: '🏷', color: '#0F8B8D', view: 'bomList', group: 'Master Data' },
    { name: 'Machines & Molds', sub: '34 assets', icon: '⚙', color: '#7C5CBF', view: 'machineList', group: 'Master Data' },
    { name: 'Command Center', sub: `${activeWOCount} active jobs`, icon: '📊', color: '#E8622C', view: 'mfgDash', group: 'Manufacturing' },
    { name: 'Planning Board', sub: 'Weekly schedule', icon: '🗓', color: '#B9790A', view: 'machineSchedule', group: 'Manufacturing' },
    { name: 'Work Orders', sub: 'Track & route jobs', icon: '📋', color: '#0F8B8D', view: 'woList', group: 'Manufacturing' },
    { name: 'JIT Scheduling', sub: 'Bulk date planner', icon: '🗂', color: '#1F8A5F', view: 'jitBoard', group: 'Manufacturing' },
    { name: 'Production Entry Grid', sub: 'Inline daily entry', icon: '🔢', color: '#E8622C', view: 'prodEntryGrid', group: 'Manufacturing' },
    { name: 'Material Issuing', sub: 'Warehouse handoff', icon: '📥', color: '#0F8B8D', view: 'materialIssuing', group: 'Manufacturing' },
    { name: 'Shop Floor', sub: 'Operator console', icon: '🧵', color: '#1F8A5F', view: 'shopFloor', group: 'Manufacturing' },
    { name: 'Changeover', sub: 'Digital SMED', icon: '🔄', color: '#E8622C', view: 'changeover', group: 'Manufacturing' },
    { name: 'Scrap & Downtime', sub: 'Pareto analysis', icon: '🗑', color: '#C4433A', view: 'scrapDowntime', group: 'Manufacturing Intelligence' },
    { name: 'OEE Analytics', sub: 'Loss drill-down', icon: '⏱', color: '#0F8B8D', view: 'oeeDash', group: 'Manufacturing Intelligence' },
    { name: 'Genealogy & EBR', sub: 'Batch traceability', icon: '🧬', color: '#7C5CBF', view: 'genealogy', group: 'Manufacturing Intelligence' },
    { name: 'Stock Overview', sub: '₹4.2Cr on hand', icon: '📦', color: '#0F8B8D', view: 'stockList', group: 'Stock & Warehouse' },
    { name: 'Buying (POs)', sub: `${openPOCount} open orders`, icon: '🧾', color: '#E8622C', view: 'poList', group: 'Stock & Warehouse' },
    { name: 'Putaway & Bins', sub: 'Guided storage', icon: '🗄', color: '#7C5CBF', view: 'putaway', group: 'Stock & Warehouse' },
    { name: 'Quarantine & Hold', sub: 'Quality hold buffer', icon: '⛔', color: '#C4433A', view: 'quarantine', group: 'Stock & Warehouse' },
    { name: 'Sales Dashboard', sub: 'CRO overview', icon: '📈', color: '#14213D', view: 'salesDash', group: 'Sales & Customers' },
    { name: 'Quotations', sub: 'Pipeline & pricing', icon: '📝', color: '#7C5CBF', view: 'quoteList', group: 'Sales & Customers' },
    { name: 'Sales Orders', sub: 'Orders & dispatch', icon: '💬', color: '#1F8A5F', view: 'soList', group: 'Sales & Customers' },
    { name: 'Credit Control', sub: 'Exposure monitor', icon: '🛡', color: '#B9790A', view: 'creditControl', group: 'Sales & Customers' },
    { name: 'Finance Dashboard', sub: 'CFO overview', icon: '🧭', color: '#14213D', view: 'financeDash', group: 'Finance & Accounting' },
    { name: 'Chart of Accounts', sub: 'GL hierarchy', icon: '🌳', color: '#0F8B8D', view: 'coaList', group: 'Finance & Accounting' },
    { name: 'Journal Entries', sub: 'Ledger postings', icon: '📗', color: '#7C5CBF', view: 'jeList', group: 'Finance & Accounting' },
    { name: 'AP 3-Way Match', sub: 'Invoice verification', icon: '📤', color: '#C4433A', view: 'apDash', group: 'Finance & Accounting' },
    { name: 'Product Costing', sub: 'Standard cost rollup', icon: '🧮', color: '#0F8B8D', view: 'productCosting', group: 'Finance & Accounting' },
    { name: 'Quality Command', sub: 'Quality dashboard', icon: '✔', color: '#C4433A', view: 'qualityDash', group: 'Quality Management' },
    { name: 'Inspection Plans', sub: 'AQL sampling', icon: '📐', color: '#7C5CBF', view: 'inspectionPlanList', group: 'Quality Management' },
    { name: 'In-Process / SPC', sub: 'Control charts live', icon: '📈', color: '#B9790A', view: 'spcMonitor', group: 'Quality Management' },
    { name: 'NCR Management', sub: '5-Why & RCA', icon: '⚑', color: '#C4433A', view: 'ncrList', group: 'Quality Management' },
    { name: 'CAPA Management', sub: 'Stage-gate tracking', icon: '🛠', color: '#7C5CBF', view: 'capaList', group: 'Quality Management' },
    { name: 'Certificates (COA)', sub: 'e-Signed release', icon: '📜', color: '#0F8B8D', view: 'qcoaList', group: 'Quality Management' },
    { name: 'MEP Command Center', sub: 'Chillers, power, HVAC', icon: '⚡', color: '#10B981', view: 'mepDash', group: 'MEP & Facilities' },
    { name: 'HR Command Center', sub: '128 active workforce', icon: '👥', color: '#6366F1', view: 'hrCommandCenter', group: 'Human Resources & HRMS' },
    { name: 'Employee Master (360)', sub: 'Operators & Engineers', icon: '👤', color: '#0F8B8D', view: 'hrEmployeeList', group: 'Human Resources & HRMS' },
    { name: 'Attendance & Punches', sub: 'Biometric shift logs', icon: '⏰', color: '#06B6D4', view: 'hrAttendance', group: 'Human Resources & HRMS' },
    { name: 'Shift Roster & Planning', sub: 'Machine lines coverage', icon: '🗓', color: '#3B82F6', view: 'hrShiftRoster', group: 'Human Resources & HRMS' },
    { name: 'Skill Matrix & Training', sub: 'IATF 16949 / 5-level', icon: '🏆', color: '#EC4899', view: 'hrSkillsTraining', group: 'Human Resources & HRMS' },
    { name: 'Safety (EHS) & PPE', sub: 'Zero-harm incident log', icon: '🛡', color: '#EF4444', view: 'hrSafetyPpe', group: 'Human Resources & HRMS' },
    { name: 'Payroll & Allowances', sub: 'Biometric synced slips', icon: '💵', color: '#10B981', view: 'hrPayroll', group: 'Human Resources & HRMS' },
    { name: 'Labor Law & CLRA', sub: 'Statutory registers', icon: '📑', color: '#F59E0B', view: 'hrCompliance', group: 'Human Resources & HRMS' },
  ];

  const groups = Array.from(new Set(modules.map((m) => m.group)));

  return (
    <div className="space-y-6">
      {/* Launch Hero */}
      <div className="launch-hero">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-[#9AA5C4] mb-1.5">
            Good morning, Priya &middot; Plant 01 (Hosūr)
          </div>
          <h1>Reboot &mdash; Workspace Overview</h1>
          <p>
            Connected plastic manufacturing ERP from resin intake to finished part dispatch.
          </p>
        </div>
        <div className="launch-kpis">
          <div>
            <b>92.4%</b>
            <span>OEE today</span>
          </div>
          <div>
            <b>{openPOCount}</b>
            <span>Open POs</span>
          </div>
          <div>
            <b>{lowStockCount}</b>
            <span>Low stock alerts</span>
          </div>
        </div>
      </div>

      {/* Angular Architecture Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-[#0F8B8D]/10 via-[#E8622C]/10 to-transparent border border-[#E8622C]/30 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#E8622C] text-white flex items-center justify-center font-bold text-sm shrink-0">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#14213D]">Angular 18+ Architecture &amp; Migration Blueprint</h4>
            <p className="text-xs text-[#6B7280]">
              Full architectural specification for converting this ERP into standalone feature modules, lazy routing, Signals state and OnPush performance.
            </p>
          </div>
        </div>
        <button
          onClick={openAngularGuide}
          className="btn btn-sm btn-primary shrink-0"
        >
          Open Angular Spec &rarr;
        </button>
      </div>

      {/* HRMS Quick Launch Spotlight */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/90 via-[#14213D] to-teal-950/90 text-white border border-indigo-500/30 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              👥
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Human Resources &amp; Workforce Management (HRMS)
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">128 ACTIVE STAFF</span>
              </h3>
              <p className="text-[11.5px] text-indigo-200/80">
                Biometric shift attendance, machine line staffing, competency matrix, zero-harm EHS, and statutory payroll.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('hrCommandCenter')}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Open HR Command Center &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2 border-t border-white/10">
          <button
            onClick={() => onNavigate('hrEmployeeList')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Employee 360°</div>
            <div className="text-[10px] text-indigo-200/70">128 Personnel</div>
          </button>
          <button
            onClick={() => onNavigate('hrShiftRoster')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Shift Roster</div>
            <div className="text-[10px] text-indigo-200/70">IMM Press Staffing</div>
          </button>
          <button
            onClick={() => onNavigate('hrAttendance')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Biometrics</div>
            <div className="text-[10px] text-indigo-200/70">Punch Reconciliation</div>
          </button>
          <button
            onClick={() => onNavigate('hrSkillsTraining')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Skill Matrix</div>
            <div className="text-[10px] text-indigo-200/70">5-Level Competency</div>
          </button>
          <button
            onClick={() => onNavigate('hrSafetyPpe')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Safety &amp; PPE</div>
            <div className="text-[10px] text-rose-300">412 Safe Days</div>
          </button>
          <button
            onClick={() => onNavigate('hrPayroll')}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-left transition-colors"
          >
            <div className="text-[11px] font-semibold text-white">Payroll &amp; PF</div>
            <div className="text-[10px] text-emerald-300">Salary Disbursal</div>
          </button>
        </div>
      </div>

      {/* Module Groups */}
      {groups.map((group) => {
        const groupModules = modules.filter((m) => m.group === group);
        return (
          <div key={group}>
            <div className="group-label">{group}</div>
            <div className="module-grid">
              {groupModules.map((m) => (
                <div
                  key={m.name}
                  onClick={() => onNavigate(m.view)}
                  className="module-card flow-trigger group"
                >
                  <div className="m-icon" style={{ backgroundColor: m.color }}>
                    {m.icon}
                  </div>
                  <div>
                    <h4>{m.name}</h4>
                    <div className="m-sub">{m.sub}</div>
                  </div>
                  <div className="flow-bar" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
