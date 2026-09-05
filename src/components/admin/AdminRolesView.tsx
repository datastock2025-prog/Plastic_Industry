import React, { useState } from 'react';
import {
  ShieldCheck,
  Plus,
  Copy,
  Check,
  X,
  Lock,
  Users,
  Save,
  CheckSquare,
  Square,
  HelpCircle,
  Eye,
  FilePlus,
  Edit,
  Trash2,
  CheckCircle,
  Download,
} from 'lucide-react';
import { AdminRole, ModulePermission } from '../../types/admin';
import { mockAdminRoles } from '../../data/mockAdminData';

interface AdminRolesViewProps {
  showToast?: (msg: string) => void;
}

export const AdminRolesView: React.FC<AdminRolesViewProps> = ({ showToast = (_msg: string) => {} }) => {
  const [roles, setRoles] = useState<AdminRole[]>(mockAdminRoles);
  const [selectedRoleId, setSelectedRoleId] = useState<string>(roles[0]?.id || '');
  const [isCreatingRole, setIsCreatingRole] = useState(false);
  const [newRoleData, setNewRoleData] = useState({
    name: '',
    code: '',
    description: '',
  });

  const selectedRole = roles.find((r) => r.id === selectedRoleId) || roles[0];

  const modulesList = [
    'Master Data',
    'Engineering & BOM',
    'Manufacturing & MES',
    'Inventory & Warehouse',
    'Procurement & Sourcing',
    'Sales & Commercial',
    'Finance & Accounting',
    'Quality & Laboratory',
    'MEP & Plant Utilities',
    'Human Resources',
    'Supply Chain Control',
    'CRM & Client 360',
    'Admin & System Config',
  ];

  const handleTogglePermission = (
    moduleName: string,
    action: keyof ModulePermission
  ) => {
    if (selectedRole.isSystemRole && selectedRole.code === 'SYS_SUPER_ADMIN') {
      showToast('Super Administrator permissions are immutable and cannot be restricted.');
      return;
    }

    setRoles((prev) =>
      prev.map((role) => {
        if (role.id === selectedRoleId) {
          const currentPerms = role.permissions[moduleName] || {
            view: false,
            create: false,
            edit: false,
            delete: false,
            approve: false,
            export: false,
          };
          return {
            ...role,
            permissions: {
              ...role.permissions,
              [moduleName]: {
                ...currentPerms,
                [action]: !currentPerms[action],
              },
            },
          };
        }
        return role;
      })
    );
  };

  const handleToggleAllRow = (moduleName: string, enable: boolean) => {
    if (selectedRole.isSystemRole && selectedRole.code === 'SYS_SUPER_ADMIN') return;
    setRoles((prev) =>
      prev.map((role) => {
        if (role.id === selectedRoleId) {
          return {
            ...role,
            permissions: {
              ...role.permissions,
              [moduleName]: {
                view: enable,
                create: enable,
                edit: enable,
                delete: enable,
                approve: enable,
                export: enable,
              },
            },
          };
        }
        return role;
      })
    );
  };

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleData.name) {
      showToast('Please enter a role name.');
      return;
    }

    const newRole: AdminRole = {
      id: `ROLE-${Date.now().toString().slice(-4)}`,
      name: newRoleData.name.trim(),
      code: newRoleData.code.trim().toUpperCase() || 'CUSTOM_ROLE',
      description: newRoleData.description.trim() || 'Custom department role',
      isSystemRole: false,
      userCount: 0,
      createdDate: new Date().toISOString().split('T')[0],
      permissions: Object.fromEntries(
        modulesList.map((m) => [
          m,
          { view: true, create: false, edit: false, delete: false, approve: false, export: false },
        ])
      ),
    };

    setRoles([...roles, newRole]);
    setSelectedRoleId(newRole.id);
    setIsCreatingRole(false);
    setNewRoleData({ name: '', code: '', description: '' });
    showToast(`Custom role "${newRole.name}" created with base read access.`);
  };

  const handleSaveRole = () => {
    showToast(`Permissions saved for role: ${selectedRole.name}. Policy applied across active sessions.`);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#0F8B8D]" />
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mt-1">Granular Permission Matrix</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure view, create, update, delete, authorization sign-off, and export privileges across all 13 ERP enterprise modules.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsCreatingRole(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Role
          </button>
          <button
            onClick={handleSaveRole}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F8B8D] hover:bg-[#0c7274] rounded-lg shadow-sm transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Roles List (Left Column) */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Defined Roles</span>
            <span className="text-[11px] font-mono text-slate-400">{roles.length} Total</span>
          </div>

          <div className="space-y-1.5">
            {roles.map((r) => {
              const isSelected = r.id === selectedRoleId;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoleId(r.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-[#0F8B8D]/10 border-[#0F8B8D] text-slate-900 shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-xs text-slate-900">{r.name}</div>
                    {r.isSystemRole ? (
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                        System
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">
                        Custom
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{r.description}</div>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                    <Users className="w-3 h-3" />
                    <span>{r.userCount} assigned users</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Permission Matrix Grid (Right 3 Columns) */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          {/* Active Role Meta Banner */}
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-sm text-slate-900">{selectedRole.name}</h2>
                <span className="font-mono text-xs text-slate-400">({selectedRole.code})</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{selectedRole.description}</p>
            </div>

            {selectedRole.code === 'SYS_SUPER_ADMIN' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                <Lock className="w-3.5 h-3.5" />
                Immutable System Superuser
              </span>
            )}
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4 min-w-[200px]">ERP Module</th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-500" /> View
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <FilePlus className="w-3.5 h-3.5 text-slate-500" /> Create
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <Edit className="w-3.5 h-3.5 text-slate-500" /> Edit
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5 text-slate-500" /> Delete
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-slate-500" /> Approve
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1">
                      <Download className="w-3.5 h-3.5 text-slate-500" /> Export
                    </span>
                  </th>
                  <th className="py-3 px-3 text-center">Bulk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {modulesList.map((mod) => {
                  const perm = selectedRole.permissions[mod] || {
                    view: false,
                    create: false,
                    edit: false,
                    delete: false,
                    approve: false,
                    export: false,
                  };

                  const allActive =
                    perm.view && perm.create && perm.edit && perm.delete && perm.approve && perm.export;

                  return (
                    <tr key={mod} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900 text-xs">
                        {mod}
                      </td>

                      {/* View */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'view')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.view
                              ? 'bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.view ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Create */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'create')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.create
                              ? 'bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.create ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Edit */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'edit')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.edit
                              ? 'bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.edit ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Delete */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'delete')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.delete
                              ? 'bg-rose-100 text-rose-800 font-bold hover:bg-rose-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.delete ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Approve */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'approve')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.approve
                              ? 'bg-indigo-100 text-indigo-800 font-bold hover:bg-indigo-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.approve ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Export */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleTogglePermission(mod, 'export')}
                          className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                            perm.export
                              ? 'bg-teal-100 text-teal-800 font-bold hover:bg-teal-200'
                              : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {perm.export ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        </button>
                      </td>

                      {/* Bulk Row Toggle */}
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleAllRow(mod, !allActive)}
                          title={allActive ? 'Revoke All for this module' : 'Grant All for this module'}
                          className="px-2 py-1 text-[10px] font-semibold text-slate-500 hover:text-slate-900 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                          {allActive ? 'Clear' : 'All'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs text-slate-500">
            <span>Privileges are enforced at both frontend route guards and backend API controllers.</span>
            <button
              onClick={handleSaveRole}
              className="px-3.5 py-1.5 rounded-lg bg-[#0F8B8D] text-white font-semibold text-xs hover:bg-[#0c7274] transition-colors"
            >
              Commit Changes
            </button>
          </div>
        </div>
      </div>

      {/* Modal: Create Role */}
      {isCreatingRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6">
            <h3 className="font-bold text-slate-900 text-base mb-1">Create Custom RBAC Role</h3>
            <p className="text-xs text-slate-500 mb-4">
              Define a tailored access profile for specific plant operational responsibilities.
            </p>

            <form onSubmit={handleCreateRole} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Role Display Name *</label>
                <input
                  type="text"
                  required
                  value={newRoleData.name}
                  onChange={(e) => setNewRoleData({ ...newRoleData, name: e.target.value })}
                  placeholder="e.g. Masterbatch Compounder & Lab Tech"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#0F8B8D]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Role Unique Code</label>
                <input
                  type="text"
                  value={newRoleData.code}
                  onChange={(e) => setNewRoleData({ ...newRoleData, code: e.target.value })}
                  placeholder="e.g. ROLE_MB_TECH"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 uppercase font-mono focus:outline-none focus:ring-1 focus:ring-[#0F8B8D]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={newRoleData.description}
                  onChange={(e) => setNewRoleData({ ...newRoleData, description: e.target.value })}
                  placeholder="Responsibilities, approvals, and scope..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#0F8B8D]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsCreatingRole(false)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#0F8B8D] hover:bg-[#0c7274] text-white font-semibold shadow-sm"
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
