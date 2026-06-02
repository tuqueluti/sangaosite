export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  mlUrl: string;
  category?: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
