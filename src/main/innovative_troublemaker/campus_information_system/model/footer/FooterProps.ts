
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface FooterLink {
    label: string;
    url: string;
  }
  
  export interface CompanyInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
  }
  
  export interface FooterProps {
    companyInfo: CompanyInfo;
    socialLinks: SocialLink[];
    footerLinks: FooterLink[];
  }
  