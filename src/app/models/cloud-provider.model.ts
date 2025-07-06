export enum CloudProviders {
  AWS = 'AWS',
  MICROSOFT_AZURE = 'Microsoft Azure',
  GOOGLE_CLOUD = 'Google Cloud'
}

export type Service = {
  title: string;
  description: string;
  icon: string;
} 

export type Category = {
  name: string;
  services: Service[];
  isAvailable: boolean;
}

export type Provider = {
  name: CloudProviders;
  categories: Category[];
  isAvailable: boolean;
}