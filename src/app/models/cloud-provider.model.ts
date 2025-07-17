export enum CloudProviders {
  AWS = 'AWS',
  MICROSOFT_AZURE = 'Microsoft Azure',
  GOOGLE_CLOUD = 'Google Cloud'
}
export enum ServiceCategory {
  COMPUTE_SERVICES = 'Compute Services',
  DATABASES = 'Databases',
  APPS_FUNCTIONS_CONTAINERS = 'Apps/Functions/Containers',
  NETWORK_SECURITY_COMPONENTS = 'Network/Security Components',
  STORAGE = 'Storage',
  DATA_ANALYTICS = 'Data Analytics',
  AI_ML_RESOURCES = 'AI/ML Resources',
  EMISSION = 'Emission',
  LOG_MANAGEMENT = 'Log Management'
}
export type Provider = {
  name: CloudProviders;
  services: Service[];
  isAvailable: boolean;
}
export type Service = {
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
} 