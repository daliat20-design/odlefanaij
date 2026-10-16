export interface InquiryLead {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
  consentUpdates: boolean;
  createdAt: string;
}

export interface SessionItem {
  tag: string;
  title: string;
  description: string;
  accentColor: string;
  bgTint: string;
}
