// CRM Module Types for Plastic Manufacturing ERP

export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Unqualified' | 'Converted' | 'Lost' | 'Duplicate' | 'On Hold';
export type OpportunityStage =
  | 'Qualification'
  | 'Requirement Identified'
  | 'Technical Discussion'
  | 'Sample Submitted'
  | 'Quotation Sent'
  | 'Negotiation'
  | 'Customer Review'
  | 'Won'
  | 'Lost'
  | 'On Hold';

export type ProductInterestType =
  | 'Raw Resin / Polymer'
  | 'Color Masterbatch'
  | 'Performance Additive'
  | 'Recycled Regrind / PCR'
  | 'Finished Plastic Product'
  | 'Custom Injection Molded Part'
  | 'Blow Molded Container'
  | 'Extruded Sheet / Film';

export interface LeadRequirement {
  productInterest: ProductInterestType;
  polymerType?: 'PP' | 'HDPE' | 'LDPE' | 'LLDPE' | 'ABS' | 'PC' | 'POM' | 'Nylon PA6/66' | 'PET' | 'Custom Blend';
  grade?: string;
  colorOrShade?: string;
  mfiTarget?: string; // Melt Flow Index (g/10min)
  density?: string;
  customerPartNumber?: string;
  specificationDetails?: string;
  expectedQuantity: number;
  uom: 'KG' | 'MT' | 'PCS' | 'THOUSAND' | 'BAGS';
  targetPrice: number;
  requiredDeliveryDate: string;
  moqAcceptance: boolean;
  packagingRequirement?: '25kg Kraft Bags' | '500kg Jumbo Bags' | 'Corrugated Carton' | 'Palletized & Shrink-Wrapped' | 'Returnable Automotive Dunnage';
  coaRequired: boolean;
  msdsRequired: boolean;
  sampleRequired: boolean;
}

export interface Lead {
  id: string;
  leadName: string;
  companyName: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  mobile?: string;
  website?: string;
  address?: string;
  city: string;
  state: string;
  country: string;
  source: 'Website Inquiry' | 'PlastIndia Exhibition' | 'Trade Fair' | 'Direct Referral' | 'Cold Call' | 'Agent' | 'Existing Customer Referral';
  status: LeadStatus;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  assignedSalesperson: string;
  expectedValue: number;
  expectedQuantity: number;
  leadScore: number; // 0-100
  industry: 'Automotive OEM / Tier-1' | 'FMCG & Packaging' | 'Medical & Healthcare' | 'Electronics & Appliances' | 'Agriculture & Pipes' | 'Consumer Goods';
  competitorInfo?: string;
  notes?: string;
  createdAt: string;
  nextFollowUpDate: string;
  requirements: LeadRequirement;
  convertedAccountId?: string;
  convertedOpportunityId?: string;
  convertedContactId?: string;
}

export interface Opportunity {
  id: string;
  opportunityName: string;
  accountName: string;
  accountId: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  stage: OpportunityStage;
  winProbability: number; // 0-100%
  expectedValue: number;
  expectedQuantity: number;
  uom: string;
  targetPrice: number;
  expectedCloseDate: string;
  salesperson: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'Won' | 'Lost' | 'On Hold';
  source: string;
  stageAgeDays: number;
  productCategory: ProductInterestType;
  customerPartNumber?: string;
  polymerGrade?: string;
  moldToolingRequired?: boolean;
  sampleApprovalStatus?: 'Pending' | 'Sample Dispatched' | 'Trial Passed' | 'Sample Approved' | 'Rejected';
  quotationId?: string;
  quotationAmount?: number;
  marginPct?: number;
  competitors?: Array<{
    name: string;
    quotedPrice?: number;
    strengths: string;
    weaknesses: string;
  }>;
  nextActivity?: string;
  nextActivityDueDate?: string;
  wonReason?: string;
  lostReason?: 'Price Too High' | 'Competitor Tooling Advantage' | 'Lead Time Failure' | 'Sample Trial Failed' | 'Customer Project Canceled' | 'Quality Spec Mismatch';
  lostNotes?: string;
  createdAt: string;
}

export interface Account {
  id: string;
  accountCode: string;
  accountName: string;
  customerGroup: 'Automotive Tier-1' | 'FMCG Major' | 'Healthcare/Pharma' | 'Industrial OEM' | 'Packaging Converter' | 'Distributor';
  customerType: 'Key Strategic Account' | 'High Volume Account' | 'Standard Account' | 'Contractual Molder';
  industry: string;
  accountManager: string;
  status: 'Active' | 'Under Review' | 'Dormant' | 'Blocked';
  creditStatus: 'Good Standing' | 'Near Limit' | 'Overdue Hold' | 'Credit Blocked';
  riskRating: 'Low' | 'Moderate' | 'High';
  isPreferredCustomer: boolean;
  isBlocked: boolean;
  blockReason?: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  city: string;
  state: string;
  country: string;
  gstin?: string;
  panNumber?: string;
  creditLimit: number;
  availableCredit: number;
  outstandingBalance: number;
  overdueAmount: number;
  paymentTerms: 'Advance 100%' | 'Net 15 Days' | 'Net 30 Days' | 'Net 45 Days' | 'Net 60 Days' | 'LC at Sight';
  openOpportunitiesValue: number;
  openOrdersValue: number;
  totalRevenueYtd: number;
  lastOrderDate: string;
  nextExpectedOrderDate: string;
  customerRating: number; // 1-5 stars
  healthScore: number; // 0-100
  segmentTier: 'Tier 1 - Strategic' | 'Tier 2 - Enterprise' | 'Tier 3 - Growth' | 'Tier 4 - Standard';
}

export interface Contact {
  id: string;
  contactName: string;
  accountId: string;
  accountName: string;
  designation: string;
  department: 'Purchasing' | 'Engineering' | 'Quality' | 'Finance' | 'Production' | 'Logistics' | 'Executive Management';
  contactType: 'Decision Maker' | 'Influencer' | 'Technical Contact' | 'Buyer' | 'Quality Contact' | 'Finance Contact';
  phone: string;
  mobile: string;
  email: string;
  preferredCommunicationChannel: 'Email' | 'Phone' | 'WhatsApp' | 'In-Person Meeting';
  address?: string;
  isActive: boolean;
  avatarUrl?: string;
  notes?: string;
  lastContactedDate: string;
}

export type ActivityType =
  | 'Call'
  | 'Meeting'
  | 'Email'
  | 'Task'
  | 'Follow-Up'
  | 'Demo'
  | 'Technical Discussion'
  | 'Sample Follow-Up'
  | 'Complaint Follow-Up'
  | 'Quotation Follow-Up';

export interface Activity {
  id: string;
  subject: string;
  activityType: ActivityType;
  relatedToType: 'Lead' | 'Opportunity' | 'Account' | 'Contact' | 'Complaint' | 'Sample';
  relatedToId: string;
  relatedToName: string;
  assignedTo: string;
  dueDate: string;
  dueTime?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'In Progress' | 'Completed' | 'Overdue' | 'Canceled';
  description: string;
  outcomeNotes?: string;
  createdBy: string;
  createdAt: string;
  completedAt?: string;
}

export interface CustomerInquiry {
  id: string;
  inquiryCode: string;
  customerName: string;
  accountId?: string;
  contactPerson: string;
  email: string;
  phone: string;
  inquiryDate: string;
  source: 'Email' | 'Phone' | 'Website' | 'Exhibition' | 'Referral' | 'Sales Visit';
  productInterest: ProductInterestType;
  itemCodeOrProposed: string;
  customerPartNumber?: string;
  specification: string;
  polymerResin?: string;
  expectedQuantity: number;
  uom: string;
  targetPrice: number;
  requiredDate: string;
  packagingRequirement?: string;
  qualityDocRequirement?: string;
  sampleRequirement: boolean;
  status: 'New' | 'Assigned' | 'Under Review' | 'Technical Review' | 'Quotation Created' | 'Converted to Opportunity' | 'Closed' | 'Lost';
  assignedSalesperson: string;
  notes?: string;
}

export interface QuotationLineItem {
  id: string;
  itemCode: string;
  itemName: string;
  customerPartNumber?: string;
  description: string;
  quantity: number;
  uom: string;
  unitCost: number;
  unitPrice: number;
  discountPct: number;
  taxPct: number;
  lineTotal: number;
  leadTimeDays: number;
  moq: number;
  targetPrice?: number;
  competitorPrice?: number;
}

export interface Quotation {
  id: string;
  quotationNumber: string;
  customerName: string;
  accountId: string;
  contactPerson: string;
  opportunityId?: string;
  opportunityName?: string;
  quoteDate: string;
  validUntil: string;
  paymentTerms: string;
  incoterms: string;
  currency: string;
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  totalAmount: number;
  marginPct: number;
  salesperson: string;
  status: 'Draft' | 'Pending Approval' | 'Approved' | 'Sent' | 'Customer Reviewing' | 'Accepted' | 'Lost' | 'Expired' | 'Converted to Sales Order';
  approvalRequired: boolean;
  approvalStatus?: 'Pending Director Approval' | 'Approved' | 'Rejected';
  lineItems: QuotationLineItem[];
  customerSpecificLabels?: string;
  specialNotes?: string;
  convertedSalesOrderId?: string;
}

export interface SampleRequest {
  id: string;
  sampleCode: string;
  customerName: string;
  accountId: string;
  contactPerson: string;
  opportunityId?: string;
  itemDescription: string;
  customerPartNumber?: string;
  sampleQuantity: number;
  uom: string;
  sampleType: 'Raw Material Pellet Sample' | 'Color Masterbatch Plaque' | 'Additive Blend Specimen' | 'Regrind Quality Trial' | 'Custom Injection Molded Prototype';
  requiredSpecification: string;
  colorGrade: string;
  trialPurpose: string;
  dispatchWarehouse: string;
  batchLotReference: string;
  coaRequired: boolean;
  msdsRequired: boolean;
  requestedDate: string;
  dispatchDate?: string;
  targetTrialDate?: string;
  status: 'Requested' | 'Approved' | 'Prepared' | 'Dispatched' | 'Trial In Progress' | 'Feedback Received' | 'Sample Approved' | 'Sample Rejected' | 'Closed';
  assignedTo: string;
  trialFeedback?: {
    trialDate: string;
    machineModelUsed: string;
    trialResult: 'Success' | 'Minor Adjustment Needed' | 'Failed';
    qualityFeedback: string;
    colorMatchRating: 'Exact Match' | 'Slightly Off-Spec' | 'Unacceptable';
    performanceScore: number; // 1-10
    approvedForBulkOrder: boolean;
    remarks: string;
    nextAction: string;
  };
}

export interface CustomerComplaint {
  id: string;
  complaintCode: string;
  customerName: string;
  accountId: string;
  contactPerson: string;
  complaintDate: string;
  channel: 'Email' | 'Phone' | 'Customer Portal' | 'Salesperson Direct';
  productItem: string;
  customerPartNumber?: string;
  batchLotNumber: string;
  salesOrderRef?: string;
  invoiceRef?: string;
  complaintType: 'Quality Defect' | 'Dimensional Variation (GD&T)' | 'Color / Shade Mismatch' | 'Contamination / Black Specs' | 'Packaging Damage' | 'Delivery Delay' | 'Documentation / COA Issue' | 'Wrong Material Supplied';
  severity: 'Critical' | 'Major' | 'Minor';
  status: 'New' | 'Acknowledged' | 'Under Investigation' | 'Action Planned' | 'In Progress' | 'Customer Response Sent' | 'Closed' | 'Reopened';
  assignedInvestigator: string;
  slaDueDate: string;
  isSlaBreached: boolean;
  description: string;
  customerRequestedAction: 'Immediate Replacement Lot' | 'Credit Note (RMA)' | 'On-Site Quality Audit' | 'Engineering CAPA Report';
  investigationDetails?: string;
  rootCauseAnalysis?: string;
  linkedNcrNumber?: string;
  linkedCapaId?: string;
  salesReturnRmaId?: string;
  resolutionSummary?: string;
  closedDate?: string;
}

export interface CustomerDocument {
  id: string;
  documentCode: string;
  customerName: string;
  accountId: string;
  documentType: 'Customer Registration' | 'GST / Tax Certificate' | 'Purchase Order' | 'Master Sales Contract' | 'Technical 2D/3D Drawing' | 'Specification Sheet' | 'Packaging Artwork' | 'Label Artwork' | 'COA Requirement' | 'MSDS Requirement' | 'Sample Approval Certificate' | 'Quality Agreement' | 'NDA' | 'Customer Audit Report';
  documentName: string;
  fileSize: string;
  version: string;
  effectiveDate: string;
  expiryDate?: string;
  uploadedBy: string;
  status: 'Active & Verified' | 'Pending Review' | 'Expired' | 'Superseded';
  relatedItemCode?: string;
}

export interface CustomerSegmentation {
  id: string;
  segmentName: string;
  classification: 'Strategic Account' | 'High Volume Account' | 'Regular Account' | 'New Account' | 'Dormant Account' | 'High Risk Account';
  customerCount: number;
  totalRevenueContribution: number;
  revenueContributionPct: number;
  averageHealthScore: number;
  colorTag: string;
  description: string;
}

export interface CrmReportTemplate {
  id: string;
  title: string;
  category: 'Lead Reports' | 'Opportunity Reports' | 'Quotation Reports' | 'Customer Reports' | 'Sample Reports' | 'Complaint Reports';
  description: string;
  lastGenerated: string;
  formats: string[];
}

export interface CrmSettingsConfig {
  leadNumberingPrefix: string;
  autoAssignLeads: boolean;
  leadScoringThreshold: number;
  defaultPaymentTerms: string;
  quotationValidityDays: number;
  maxDiscountWithoutApprovalPct: number;
  complaintSlaCriticalHours: number;
  complaintSlaMajorHours: number;
  sampleApprovalReminderDays: number;
  creditRiskLimitAlertPct: number;
}

export interface CrmRolePermission {
  roleId: string;
  roleName: string;
  description: string;
  modules: Array<{
    moduleName: string;
    view: boolean;
    edit: boolean;
    approve: boolean;
    export: boolean;
  }>;
}
