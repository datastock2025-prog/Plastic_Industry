import React from 'react';
import {
  Grid,
  Box,
  Tag,
  Settings,
  BarChart3,
  Calendar,
  ClipboardList,
  Layers,
  Hash,
  UserCheck,
  Inbox,
  Tv,
  Wrench,
  RotateCw,
  Trash2,
  Timer,
  Dna,
  FileText,
  Sliders,
  Package,
  Search,
  Receipt,
  Truck,
  Archive,
  ShoppingBag,
  TrendingUp,
  FileEdit,
  MessageSquare,
  Undo2,
  ShieldCheck,
  Compass,
  GitFork,
  BookOpen,
  DollarSign,
  Building,
  CheckCircle2,
  Landmark,
  CheckSquare,
  Ruler,
  FileSpreadsheet,
  AlertOctagon,
  Award,
  Sparkles,
  ChevronDown,
  Code,
  LogOut,
  RefreshCw,
  Cpu,
  FolderTree,
  Scale,
  GitBranch,
  GitCompare,
  Zap,
  Droplets,
  Wind,
  Activity,
  Thermometer,
  Users,
  Clock,
  ShieldAlert,
  FileCheck,
  Ship,
  Leaf,
  Shield,
  Target,
  PhoneCall,
  FlaskConical,
  Calculator,
} from 'lucide-react';
import { AuthUser } from '../types';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string, param?: any) => void;
  openAngularGuide: () => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
  onSwitchUser?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  openAngularGuide,
  currentUser,
  onLogout,
  onSwitchUser
}) => {
  const isSelected = (view: string) => currentView === view;

  return (
    <aside className="w-[250px] shrink-0 bg-[#14213D] text-[#EDEFF7] flex flex-col h-screen select-none border-r border-[#1C2B4D]">
      {/* Brand Header */}
      <div
        className="flex items-center gap-2.5 px-4 py-3.5 cursor-pointer hover:bg-white/[0.04] transition-colors"
        onClick={() => onNavigate('home')}
      >
        <div className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-[#E8622C] to-[#0F8B8D] flex items-center justify-center font-bold text-xs text-white shadow-sm font-['Space_Grotesk']">
          R
        </div>
        <span className="font-['Space_Grotesk'] font-bold text-[15px] tracking-tight">
          Reboot
        </span>
      </div>

      {/* Plant Selector */}
      <div className="mx-3 mb-2 px-2.5 py-2 bg-white/[0.06] border border-white/[0.08] rounded-lg flex items-center justify-between text-xs cursor-pointer hover:bg-white/[0.09] transition-colors">
        <div>
          <span className="font-semibold block text-[11.5px]">Datastock Plastics</span>
          <span className="text-[#9AA5C4] text-[10px] block">Plant 01 &middot; Hosūr</span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#9AA5C4]" />
      </div>

      {/* Angular Guide Highlight Button */}
      <div className="mx-3 mb-2">
        <button
          onClick={openAngularGuide}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-[#E8622C]/20 to-[#0F8B8D]/20 border border-[#E8622C]/40 text-[#DCF0EF] text-xs font-semibold hover:border-[#E8622C] transition-all group"
        >
          <span className="flex items-center gap-2">
            <Code className="w-4 h-4 text-[#E8622C] group-hover:scale-110 transition-transform" />
            <span>Angular Guide</span>
          </span>
          <span className="px-1.5 py-0.5 text-[9px] rounded bg-[#E8622C] text-white font-mono font-bold">18+</span>
        </button>
      </div>

      {/* Navigation Scroll Area */}
      <div className="flex-1 overflow-y-auto px-2 py-1 space-y-4">
        {/* Workspace */}
        <div>
          <div
            className={`sb-item flex items-center gap-2.5 px-2.5 py-2 rounded-[7px] text-[13px] font-medium transition-colors cursor-pointer ${
              isSelected('home')
                ? 'bg-[#E8622C]/20 text-white font-semibold relative before:content-[\'\'] before:absolute before:-left-2 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-[#E8622C] before:rounded-r'
                : 'text-[#C7CEE6] hover:bg-white/[0.06] hover:text-white'
            }`}
            onClick={() => onNavigate('home')}
          >
            <Grid className="w-4 h-4 text-[#9AA5C4]" />
            <span>Workspace Home</span>
          </div>
        </div>

        {/* Master Data */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Master Data
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Box className="w-4 h-4" />}
              label="Item Master"
              active={isSelected('itemList') || isSelected('itemDetail')}
              onClick={() => onNavigate('itemList')}
            />
            <NavItem
              icon={<Tag className="w-4 h-4" />}
              label="BOM / Formula Grid"
              active={isSelected('bomList') || isSelected('bomDetail')}
              onClick={() => onNavigate('bomList')}
            />
            <NavItem
              icon={<Settings className="w-4 h-4" />}
              label="Machines & Molds"
              active={isSelected('machineList') || isSelected('machineDetail')}
              onClick={() => onNavigate('machineList')}
            />
          </div>
        </div>

        {/* BOM & Engineering Hub */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5 flex items-center justify-between">
            <span>BOM &amp; Engineering</span>
            <span className="px-1 py-0.2 bg-[#0F8B8D]/30 text-[#0F8B8D] rounded text-[9px] font-mono">IATF</span>
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Cpu className="w-4 h-4 text-[#0F8B8D]" />}
              label="Engineering Center"
              active={isSelected('engineeringDash') || isSelected('bomDash')}
              onClick={() => onNavigate('engineeringDash')}
            />
            <NavItem
              icon={<Sliders className="w-4 h-4 text-[#E8622C]" />}
              label="BOM Builder Workspace"
              active={isSelected('bomBuilder')}
              onClick={() => onNavigate('bomBuilder')}
            />
            <NavItem
              icon={<FolderTree className="w-4 h-4" />}
              label="Multi-Level Tree"
              active={isSelected('bomTree')}
              onClick={() => onNavigate('bomTree')}
            />
            <NavItem
              icon={<Scale className="w-4 h-4" />}
              label="Recipe &amp; Formulation"
              active={isSelected('recipeFormula')}
              onClick={() => onNavigate('recipeFormula')}
            />
            <NavItem
              icon={<GitBranch className="w-4 h-4 text-purple-400" />}
              label="ECR &amp; ECO Changes"
              active={isSelected('ecrList') || isSelected('ecoList')}
              onClick={() => onNavigate('ecrList')}
            />
            <NavItem
              icon={<GitCompare className="w-4 h-4" />}
              label="BOM Diff &amp; Compare"
              active={isSelected('bomCompare')}
              onClick={() => onNavigate('bomCompare')}
            />
            <NavItem
              icon={<Search className="w-4 h-4 text-blue-400" />}
              label="Where-Used Analysis"
              active={isSelected('whereUsed')}
              onClick={() => onNavigate('whereUsed')}
            />
          </div>
        </div>

        {/* Manufacturing */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Manufacturing
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<BarChart3 className="w-4 h-4" />}
              label="Command Center"
              active={isSelected('mfgDash')}
              onClick={() => onNavigate('mfgDash')}
            />
            <NavItem
              icon={<Calendar className="w-4 h-4" />}
              label="Planning Board"
              active={isSelected('machineSchedule')}
              onClick={() => onNavigate('machineSchedule')}
            />
            <NavItem
              icon={<ClipboardList className="w-4 h-4" />}
              label="Work Orders"
              active={isSelected('woList') || isSelected('woDetail') || isSelected('createWoGrid')}
              onClick={() => onNavigate('woList')}
            />
            <NavItem
              icon={<Layers className="w-4 h-4" />}
              label="JIT Scheduling"
              active={isSelected('jitBoard')}
              onClick={() => onNavigate('jitBoard')}
            />
            <NavItem
              icon={<Hash className="w-4 h-4" />}
              label="Production Entry Grid"
              active={isSelected('prodEntryGrid') || isSelected('excelImport')}
              onClick={() => onNavigate('prodEntryGrid')}
            />
            <NavItem
              icon={<UserCheck className="w-4 h-4" />}
              label="Operator History"
              active={isSelected('operatorHistory')}
              onClick={() => onNavigate('operatorHistory')}
            />
            <NavItem
              icon={<Inbox className="w-4 h-4" />}
              label="Material Issuing"
              active={isSelected('materialIssuing')}
              onClick={() => onNavigate('materialIssuing')}
            />
            <NavItem
              icon={<Tv className="w-4 h-4" />}
              label="Shop Floor Console"
              active={isSelected('shopFloor')}
              onClick={() => onNavigate('shopFloor')}
            />
            <NavItem
              icon={<Wrench className="w-4 h-4" />}
              label="Mold & Tooling"
              active={isSelected('moldTooling')}
              onClick={() => onNavigate('moldTooling')}
            />
            <NavItem
              icon={<RotateCw className="w-4 h-4" />}
              label="Changeover / Setup"
              active={isSelected('changeover')}
              onClick={() => onNavigate('changeover')}
            />
            <NavItem
              icon={<Trash2 className="w-4 h-4" />}
              label="Scrap & Downtime"
              active={isSelected('scrapDowntime')}
              onClick={() => onNavigate('scrapDowntime')}
            />
            <NavItem
              icon={<Timer className="w-4 h-4" />}
              label="OEE Analytics"
              active={isSelected('oeeDash')}
              onClick={() => onNavigate('oeeDash')}
            />
            <NavItem
              icon={<Dna className="w-4 h-4" />}
              label="Genealogy & EBR"
              active={isSelected('genealogy')}
              onClick={() => onNavigate('genealogy')}
            />
            <NavItem
              icon={<FileText className="w-4 h-4" />}
              label="Reports Hub"
              active={isSelected('reportsHub')}
              onClick={() => onNavigate('reportsHub')}
            />
            <NavItem
              icon={<Sliders className="w-4 h-4" />}
              label="Production Settings"
              active={isSelected('mfgSettings')}
              onClick={() => onNavigate('mfgSettings')}
            />
          </div>
        </div>

        {/* Procurement & Sourcing */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Procurement &amp; Sourcing
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<TrendingUp className="w-4 h-4" />}
              label="Procurement Hub"
              active={isSelected('procurementDash')}
              onClick={() => onNavigate('procurementDash')}
            />
            <NavItem
              icon={<Building className="w-4 h-4" />}
              label="Suppliers &amp; Vendors"
              active={isSelected('supplierList') || isSelected('supplierDetail') || isSelected('supplierScorecard') || isSelected('supplierRisk')}
              onClick={() => onNavigate('supplierList')}
            />
            <NavItem
              icon={<FileEdit className="w-4 h-4" />}
              label="Purchase Requisitions"
              active={isSelected('purchaseReqList') || isSelected('purchaseReqForm')}
              onClick={() => onNavigate('purchaseReqList')}
            />
            <NavItem
              icon={<GitCompare className="w-4 h-4" />}
              label="RFQs &amp; Comparison"
              active={isSelected('rfqList') || isSelected('rfqCompare')}
              onClick={() => onNavigate('rfqList')}
            />
            <NavItem
              icon={<Receipt className="w-4 h-4" />}
              label="Purchase Orders"
              active={isSelected('poList') || isSelected('poDetail') || isSelected('poPrint') || isSelected('poApprovals')}
              onClick={() => onNavigate('poList')}
            />
            <NavItem
              icon={<CheckSquare className="w-4 h-4" />}
              label="Goods Receipt (GRN)"
              active={isSelected('grnList')}
              onClick={() => onNavigate('grnList')}
            />
            <NavItem
              icon={<DollarSign className="w-4 h-4" />}
              label="Supplier Invoices"
              active={isSelected('supplierInvoices')}
              onClick={() => onNavigate('supplierInvoices')}
            />
            <NavItem
              icon={<Undo2 className="w-4 h-4" />}
              label="Debit Notes / Returns"
              active={isSelected('purchaseReturns')}
              onClick={() => onNavigate('purchaseReturns')}
            />
            <NavItem
              icon={<Sparkles className="w-4 h-4" />}
              label="MRP Material Planning"
              active={isSelected('procurementMrp')}
              onClick={() => onNavigate('procurementMrp')}
            />
          </div>
        </div>

        {/* Supply Chain Management (SCM) */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5 flex items-center justify-between">
            <span>Supply Chain &amp; SCM</span>
            <span className="px-1 py-0.2 bg-[#0F8B8D]/20 text-[#0F8B8D] rounded text-[9px] font-mono">TOWER</span>
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Compass className="w-4 h-4 text-[#0F8B8D]" />}
              label="SCM Control Tower"
              active={isSelected('scmControlTower')}
              onClick={() => onNavigate('scmControlTower')}
            />
            <NavItem
              icon={<TrendingUp className="w-4 h-4 text-sky-400" />}
              label="Demand Planning"
              active={isSelected('scmDemandPlanning')}
              onClick={() => onNavigate('scmDemandPlanning')}
            />
            <NavItem
              icon={<Activity className="w-4 h-4 text-emerald-400" />}
              label="Sales Forecast"
              active={isSelected('scmSalesForecast')}
              onClick={() => onNavigate('scmSalesForecast')}
            />
            <NavItem
              icon={<Sliders className="w-4 h-4 text-amber-400" />}
              label="S&amp;OP Alignment"
              active={isSelected('scmSOP')}
              onClick={() => onNavigate('scmSOP')}
            />
            <NavItem
              icon={<Package className="w-4 h-4 text-indigo-400" />}
              label="Plastic Inventory &amp; Days"
              active={isSelected('scmInventoryPlanning')}
              onClick={() => onNavigate('scmInventoryPlanning')}
            />
            <NavItem
              icon={<Layers className="w-4 h-4 text-purple-400" />}
              label="MRP Workbench"
              active={isSelected('scmMRP')}
              onClick={() => onNavigate('scmMRP')}
            />
            <NavItem
              icon={<Building className="w-4 h-4 text-teal-400" />}
              label="Supplier Portal &amp; ASN"
              active={isSelected('scmSupplierCollaboration')}
              onClick={() => onNavigate('scmSupplierCollaboration')}
            />
            <NavItem
              icon={<Ship className="w-4 h-4 text-blue-400" />}
              label="Inbound &amp; Port Customs"
              active={isSelected('scmInboundLogistics')}
              onClick={() => onNavigate('scmInboundLogistics')}
            />
            <NavItem
              icon={<Truck className="w-4 h-4 text-orange-400" />}
              label="Outbound &amp; Milk Runs"
              active={isSelected('scmOutboundLogistics')}
              onClick={() => onNavigate('scmOutboundLogistics')}
            />
            <NavItem
              icon={<FileCheck className="w-4 h-4 text-rose-400" />}
              label="16-Stage Order Timeline"
              active={isSelected('scmOrderTimeline')}
              onClick={() => onNavigate('scmOrderTimeline')}
            />
            <NavItem
              icon={<ShieldAlert className="w-4 h-4 text-rose-500" />}
              label="Exceptions &amp; CAPA"
              active={isSelected('scmExceptions')}
              onClick={() => onNavigate('scmExceptions')}
            />
            <NavItem
              icon={<Leaf className="w-4 h-4 text-emerald-500" />}
              label="Circular ESG &amp; Regrind"
              active={isSelected('scmSustainability')}
              onClick={() => onNavigate('scmSustainability')}
            />
            <NavItem
              icon={<FileSpreadsheet className="w-4 h-4 text-slate-400" />}
              label="SCM Reports"
              active={isSelected('scmReports')}
              onClick={() => onNavigate('scmReports')}
            />
          </div>
        </div>

        {/* Warehouse & Inventory */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Stock &amp; Warehouse
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Package className="w-4 h-4" />}
              label="Inventory Dashboard"
              active={isSelected('invDash')}
              onClick={() => onNavigate('invDash')}
            />
            <NavItem
              icon={<Search className="w-4 h-4" />}
              label="Stock Overview"
              active={isSelected('stockList')}
              onClick={() => onNavigate('stockList')}
            />
            <NavItem
              icon={<Layers className="w-4 h-4" />}
              label="2D Bin Map"
              active={isSelected('binMap')}
              onClick={() => onNavigate('binMap')}
            />
            <NavItem
              icon={<Archive className="w-4 h-4" />}
              label="Putaway Management"
              active={isSelected('putaway')}
              onClick={() => onNavigate('putaway')}
            />
            <NavItem
              icon={<ShoppingBag className="w-4 h-4" />}
              label="Pick &amp; Pack Staging"
              active={isSelected('picking')}
              onClick={() => onNavigate('picking')}
            />
            <NavItem
              icon={<Hash className="w-4 h-4" />}
              label="Cycle Count Audits"
              active={isSelected('cycleCount')}
              onClick={() => onNavigate('cycleCount')}
            />
            <NavItem
              icon={<AlertOctagon className="w-4 h-4" />}
              label="Quarantine &amp; Hold"
              active={isSelected('quarantine')}
              onClick={() => onNavigate('quarantine')}
            />
            <NavItem
              icon={<RotateCw className="w-4 h-4" />}
              label="Closed-Loop Regrind"
              active={isSelected('regrindScrap')}
              onClick={() => onNavigate('regrindScrap')}
            />
            <NavItem
              icon={<Truck className="w-4 h-4" />}
              label="Subcontracting (Job-Work)"
              active={isSelected('subcontractList') || isSelected('subcontractDetail')}
              onClick={() => onNavigate('subcontractList')}
            />
            <NavItem
              icon={<Tv className="w-4 h-4" />}
              label="RF Scanner Terminal"
              active={isSelected('scanner')}
              onClick={() => onNavigate('scanner')}
            />
            <NavItem
              icon={<Tag className="w-4 h-4" />}
              label="Label Generator"
              active={isSelected('labelPrint')}
              onClick={() => onNavigate('labelPrint')}
            />
          </div>
        </div>

        {/* CRM - Customer Relationship Management */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5 flex items-center justify-between">
            <span>CRM &amp; Client 360</span>
            <span className="px-1 py-0.2 bg-teal-500/20 text-teal-400 rounded text-[9px] font-mono">SALES</span>
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Target className="w-4 h-4 text-teal-400" />}
              label="CRM Command Center"
              active={isSelected('crmDashboard')}
              onClick={() => onNavigate('crmDashboard')}
            />
            <NavItem
              icon={<Users className="w-4 h-4 text-sky-400" />}
              label="Leads &amp; Qualification"
              active={isSelected('crmLeadList') || isSelected('crmLeadDetail')}
              onClick={() => onNavigate('crmLeadList')}
            />
            <NavItem
              icon={<TrendingUp className="w-4 h-4 text-indigo-400" />}
              label="Opportunity Pipeline"
              active={isSelected('crmOpportunityPipeline') || isSelected('crmOpportunityDetail')}
              onClick={() => onNavigate('crmOpportunityPipeline')}
            />
            <NavItem
              icon={<Building className="w-4 h-4 text-emerald-400" />}
              label="Accounts (Customer 360)"
              active={isSelected('crmAccountList') || isSelected('crmCustomer360')}
              onClick={() => onNavigate('crmAccountList')}
            />
            <NavItem
              icon={<PhoneCall className="w-4 h-4 text-blue-400" />}
              label="Contacts &amp; Stakeholders"
              active={isSelected('crmContactList')}
              onClick={() => onNavigate('crmContactList')}
            />
            <NavItem
              icon={<Layers className="w-4 h-4 text-purple-400" />}
              label="Activity &amp; Cadence"
              active={isSelected('crmActivityManagement')}
              onClick={() => onNavigate('crmActivityManagement')}
            />
            <NavItem
              icon={<Calculator className="w-4 h-4 text-amber-400" />}
              label="Inquiry &amp; Costing Desk"
              active={isSelected('crmInquiryCosting')}
              onClick={() => onNavigate('crmInquiryCosting')}
            />
            <NavItem
              icon={<FileText className="w-4 h-4 text-teal-400" />}
              label="Quotations &amp; Pricing"
              active={isSelected('crmQuotationManagement')}
              onClick={() => onNavigate('crmQuotationManagement')}
            />
            <NavItem
              icon={<FlaskConical className="w-4 h-4 text-cyan-400" />}
              label="Samples &amp; Mold Trials"
              active={isSelected('crmSampleRequest')}
              onClick={() => onNavigate('crmSampleRequest')}
            />
            <NavItem
              icon={<AlertOctagon className="w-4 h-4 text-rose-400" />}
              label="Customer Quality (8D)"
              active={isSelected('crmComplaintManagement')}
              onClick={() => onNavigate('crmComplaintManagement')}
            />
            <NavItem
              icon={<FileCheck className="w-4 h-4 text-amber-300" />}
              label="Documents &amp; Compliance"
              active={isSelected('crmDocumentCenter')}
              onClick={() => onNavigate('crmDocumentCenter')}
            />
            <NavItem
              icon={<Grid className="w-4 h-4 text-orange-400" />}
              label="Segmentation &amp; RFM"
              active={isSelected('crmCustomerSegmentation')}
              onClick={() => onNavigate('crmCustomerSegmentation')}
            />
            <NavItem
              icon={<BarChart3 className="w-4 h-4 text-emerald-400" />}
              label="CRM Revenue Analytics"
              active={isSelected('crmAnalyticsReports')}
              onClick={() => onNavigate('crmAnalyticsReports')}
            />
          </div>
        </div>

        {/* Sales */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Sales & Customers
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<TrendingUp className="w-4 h-4" />}
              label="Sales Dashboard"
              active={isSelected('salesDash')}
              onClick={() => onNavigate('salesDash')}
            />
            <NavItem
              icon={<FileEdit className="w-4 h-4" />}
              label="Quotations"
              active={isSelected('quoteList') || isSelected('quoteDetail')}
              onClick={() => onNavigate('quoteList')}
            />
            <NavItem
              icon={<MessageSquare className="w-4 h-4" />}
              label="Sales Orders"
              active={isSelected('soList') || isSelected('soDetail') || isSelected('soConfirm')}
              onClick={() => onNavigate('soList')}
            />
            <NavItem
              icon={<Truck className="w-4 h-4" />}
              label="Delivery Schedule"
              active={isSelected('deliverySchedule')}
              onClick={() => onNavigate('deliverySchedule')}
            />
            <NavItem
              icon={<Undo2 className="w-4 h-4" />}
              label="Returns / RMA"
              active={isSelected('rmaList') || isSelected('rmaDetail')}
              onClick={() => onNavigate('rmaList')}
            />
            <NavItem
              icon={<ShieldCheck className="w-4 h-4" />}
              label="Credit Control"
              active={isSelected('creditControl')}
              onClick={() => onNavigate('creditControl')}
            />
            <NavItem
              icon={<Receipt className="w-4 h-4" />}
              label="Billing Status"
              active={isSelected('billingStatus')}
              onClick={() => onNavigate('billingStatus')}
            />
            <NavItem
              icon={<Compass className="w-4 h-4" />}
              label="Order Tracking"
              active={isSelected('orderTracking')}
              onClick={() => onNavigate('orderTracking')}
            />
            <NavItem
              icon={<Timer className="w-4 h-4" />}
              label="Backorders"
              active={isSelected('backorderMgmt')}
              onClick={() => onNavigate('backorderMgmt')}
            />
            <NavItem
              icon={<BookOpen className="w-4 h-4" />}
              label="Contracts"
              active={isSelected('contractList') || isSelected('contractDetail')}
              onClick={() => onNavigate('contractList')}
            />
            <NavItem
              icon={<Tag className="w-4 h-4" />}
              label="Pricing & Discounts"
              active={isSelected('pricingMgmt')}
              onClick={() => onNavigate('pricingMgmt')}
            />
            <NavItem
              icon={<BarChart3 className="w-4 h-4" />}
              label="Forecast vs Actual"
              active={isSelected('salesForecast')}
              onClick={() => onNavigate('salesForecast')}
            />
            <NavItem
              icon={<Building className="w-4 h-4" />}
              label="Customers"
              active={isSelected('customerList') || isSelected('customerDetail')}
              onClick={() => onNavigate('customerList')}
            />
          </div>
        </div>

        {/* Finance & Accounting */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Finance & Accounting
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Compass className="w-4 h-4" />}
              label="Finance Dashboard"
              active={isSelected('financeDash')}
              onClick={() => onNavigate('financeDash')}
            />
            <NavItem
              icon={<GitFork className="w-4 h-4" />}
              label="Chart of Accounts"
              active={isSelected('coaList')}
              onClick={() => onNavigate('coaList')}
            />
            <NavItem
              icon={<BookOpen className="w-4 h-4" />}
              label="Journal Entries"
              active={isSelected('jeList') || isSelected('jeDetail') || isSelected('jeCreate')}
              onClick={() => onNavigate('jeList')}
            />
            <NavItem
              icon={<Receipt className="w-4 h-4" />}
              label="Accounts Payable"
              active={isSelected('apDash') || isSelected('apMatch') || isSelected('paymentRun')}
              onClick={() => onNavigate('apDash')}
            />
            <NavItem
              icon={<DollarSign className="w-4 h-4" />}
              label="Accounts Receivable"
              active={isSelected('arDash') || isSelected('arCollections')}
              onClick={() => onNavigate('arDash')}
            />
            <NavItem
              icon={<FileText className="w-4 h-4" />}
              label="Invoices"
              active={isSelected('invoiceList') || isSelected('invoiceDetail')}
              onClick={() => onNavigate('invoiceList')}
            />
            <NavItem
              icon={<Building className="w-4 h-4" />}
              label="Cost Centers"
              active={isSelected('costCenterList') || isSelected('costCenterDetail')}
              onClick={() => onNavigate('costCenterList')}
            />
            <NavItem
              icon={<Sliders className="w-4 h-4" />}
              label="Product Costing"
              active={isSelected('productCosting')}
              onClick={() => onNavigate('productCosting')}
            />
            <NavItem
              icon={<TrendingUp className="w-4 h-4" />}
              label="Production Variance"
              active={isSelected('varianceAnalysis')}
              onClick={() => onNavigate('varianceAnalysis')}
            />
            <NavItem
              icon={<CheckCircle2 className="w-4 h-4" />}
              label="Period Close"
              active={isSelected('periodClose')}
              onClick={() => onNavigate('periodClose')}
            />
            <NavItem
              icon={<Landmark className="w-4 h-4" />}
              label="Fixed Assets"
              active={isSelected('assetList') || isSelected('assetDetail')}
              onClick={() => onNavigate('assetList')}
            />
          </div>
        </div>

        {/* Quality Management */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5">
            Quality Management
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<CheckSquare className="w-4 h-4" />}
              label="Quality Command Center"
              active={isSelected('qualityDash')}
              onClick={() => onNavigate('qualityDash')}
            />
            <NavItem
              icon={<Ruler className="w-4 h-4" />}
              label="Inspection Plans"
              active={isSelected('inspectionPlanList') || isSelected('inspectionPlanDetail')}
              onClick={() => onNavigate('inspectionPlanList')}
            />
            <NavItem
              icon={<Inbox className="w-4 h-4" />}
              label="Incoming Inspection"
              active={isSelected('incomingInspection')}
              onClick={() => onNavigate('incomingInspection')}
            />
            <NavItem
              icon={<BarChart3 className="w-4 h-4" />}
              label="In-Process / SPC"
              active={isSelected('spcMonitor')}
              onClick={() => onNavigate('spcMonitor')}
            />
            <NavItem
              icon={<CheckCircle2 className="w-4 h-4" />}
              label="Final Release"
              active={isSelected('finalInspection')}
              onClick={() => onNavigate('finalInspection')}
            />
            <NavItem
              icon={<AlertOctagon className="w-4 h-4" />}
              label="NCR Management"
              active={isSelected('ncrList') || isSelected('ncrDetail')}
              onClick={() => onNavigate('ncrList')}
            />
            <NavItem
              icon={<Wrench className="w-4 h-4" />}
              label="CAPA"
              active={isSelected('capaList') || isSelected('capaDetail')}
              onClick={() => onNavigate('capaList')}
            />
            <NavItem
              icon={<FileSpreadsheet className="w-4 h-4" />}
              label="Certificate of Analysis"
              active={isSelected('qcoaList') || isSelected('qcoaDetail')}
              onClick={() => onNavigate('qcoaList')}
            />
            <NavItem
              icon={<Award className="w-4 h-4" />}
              label="Supplier Quality"
              active={isSelected('supplierScorecard')}
              onClick={() => onNavigate('supplierScorecard')}
            />
            <NavItem
              icon={<Ruler className="w-4 h-4" />}
              label="Calibration"
              active={isSelected('calibrationList')}
              onClick={() => onNavigate('calibrationList')}
            />
            <NavItem
              icon={<FileText className="w-4 h-4" />}
              label="Document Control"
              active={isSelected('docControlList')}
              onClick={() => onNavigate('docControlList')}
            />
          </div>
        </div>

        {/* MEP & Plant Utilities */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5 flex items-center justify-between">
            <span>MEP &amp; Plant Utilities</span>
            <span className="px-1 py-0.2 bg-amber-500/20 text-amber-400 rounded text-[9px] font-mono">BMS</span>
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Activity className="w-4 h-4 text-emerald-400" />}
              label="MEP Command Center"
              active={isSelected('mepDash')}
              onClick={() => onNavigate('mepDash')}
            />
            <NavItem
              icon={<Thermometer className="w-4 h-4 text-blue-400" />}
              label="Mechanical &amp; Chillers"
              active={isSelected('mepMechanical')}
              onClick={() => onNavigate('mepMechanical')}
            />
            <NavItem
              icon={<Zap className="w-4 h-4 text-amber-400" />}
              label="Electrical &amp; Substation"
              active={isSelected('mepElectrical')}
              onClick={() => onNavigate('mepElectrical')}
            />
            <NavItem
              icon={<Droplets className="w-4 h-4 text-teal-400" />}
              label="Plumbing &amp; ETP Water"
              active={isSelected('mepPlumbing')}
              onClick={() => onNavigate('mepPlumbing')}
            />
            <NavItem
              icon={<Wind className="w-4 h-4 text-purple-400" />}
              label="HVAC &amp; Cleanrooms"
              active={isSelected('mepHvac')}
              onClick={() => onNavigate('mepHvac')}
            />
            <NavItem
              icon={<Wrench className="w-4 h-4 text-orange-400" />}
              label="MEP Work Orders"
              active={isSelected('mepWorkOrders')}
              onClick={() => onNavigate('mepWorkOrders')}
            />
          </div>
        </div>

        {/* Human Resources & Workforce Management */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#7C88AC] px-2.5 mb-1.5 flex items-center justify-between">
            <span>Human Resources &amp; HRMS</span>
            <span className="px-1 py-0.2 bg-teal-500/20 text-teal-400 rounded text-[9px] font-mono">128 STAFF</span>
          </div>
          <div className="space-y-0.5">
            <NavItem
              icon={<Users className="w-4 h-4 text-indigo-400" />}
              label="HR Command Center"
              active={isSelected('hrCommandCenter')}
              onClick={() => onNavigate('hrCommandCenter')}
            />
            <NavItem
              icon={<FolderTree className="w-4 h-4 text-sky-400" />}
              label="Organization Structure"
              active={isSelected('hrOrgStructure')}
              onClick={() => onNavigate('hrOrgStructure')}
            />
            <NavItem
              icon={<UserCheck className="w-4 h-4 text-emerald-400" />}
              label="Employee Directory (360)"
              active={isSelected('hrEmployeeList') || isSelected('hrEmployeeDetail')}
              onClick={() => onNavigate('hrEmployeeList')}
            />
            <NavItem
              icon={<Sparkles className="w-4 h-4 text-orange-400" />}
              label="Onboarding &amp; Lifecycle"
              active={isSelected('hrOnboarding')}
              onClick={() => onNavigate('hrOnboarding')}
            />
            <NavItem
              icon={<Clock className="w-4 h-4 text-cyan-400" />}
              label="Attendance &amp; Punches"
              active={isSelected('hrAttendance')}
              onClick={() => onNavigate('hrAttendance')}
            />
            <NavItem
              icon={<Calendar className="w-4 h-4 text-blue-400" />}
              label="Shift Roster &amp; Machines"
              active={isSelected('hrShiftRoster')}
              onClick={() => onNavigate('hrShiftRoster')}
            />
            <NavItem
              icon={<CheckCircle2 className="w-4 h-4 text-purple-400" />}
              label="Leaves &amp; Overtime (OT)"
              active={isSelected('hrLeaveOvertime')}
              onClick={() => onNavigate('hrLeaveOvertime')}
            />
            <NavItem
              icon={<Award className="w-4 h-4 text-pink-400" />}
              label="Skill Matrix &amp; Training"
              active={isSelected('hrSkillsTraining')}
              onClick={() => onNavigate('hrSkillsTraining')}
            />
            <NavItem
              icon={<ShieldAlert className="w-4 h-4 text-rose-400" />}
              label="Safety (EHS) &amp; PPE"
              active={isSelected('hrSafetyPpe')}
              onClick={() => onNavigate('hrSafetyPpe')}
            />
            <NavItem
              icon={<DollarSign className="w-4 h-4 text-emerald-400" />}
              label="Payroll &amp; Disbursal"
              active={isSelected('hrPayroll')}
              onClick={() => onNavigate('hrPayroll')}
            />
            <NavItem
              icon={<FileCheck className="w-4 h-4 text-amber-400" />}
              label="Labor Law &amp; CLRA"
              active={isSelected('hrCompliance')}
              onClick={() => onNavigate('hrCompliance')}
            />
            <NavItem
              icon={<BarChart3 className="w-4 h-4 text-indigo-400" />}
              label="Workforce Analytics &amp; MIS"
              active={isSelected('hrReports')}
              onClick={() => onNavigate('hrReports')}
            />
          </div>
        </div>
      </div>

      {/* User Footer */}
      <div className="p-2.5 border-t border-white/[0.08] flex items-center justify-between gap-2 bg-[#101B33]">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-br ${
              currentUser?.avatarColor || 'from-[#0F8B8D] to-[#E8622C]'
            } flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm`}
          >
            {currentUser?.initials || 'PR'}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[12.5px] font-semibold text-white truncate">
              {currentUser?.name || 'Priya Rao'}
            </div>
            <div className="text-[10px] text-[#8B96B8] truncate">
              {currentUser?.role || 'Plant Manager · Admin'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onSwitchUser}
            title="Switch User / Role"
            className="p-1.5 rounded text-[#8B96B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onLogout}
            title="Sign Out / Lock Terminal"
            className="p-1.5 rounded text-[#8B96B8] hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-[7px] text-[13px] transition-all cursor-pointer ${
        active
          ? 'bg-[#E8622C]/20 text-white font-semibold relative before:content-[\'\'] before:absolute before:-left-2 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-[#E8622C] before:rounded-r'
          : 'text-[#C7CEE6] hover:bg-white/[0.06] hover:text-white'
      }`}
    >
      <span className="text-[#9AA5C4] shrink-0 opacity-80">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
};
