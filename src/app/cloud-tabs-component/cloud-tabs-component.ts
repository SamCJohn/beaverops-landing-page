import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider,CloudProviders, ServiceCategory} from '../models/cloud-provider.model';
import { CategoryFilterPipe } from "../pipes/category-filter-pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cloud-tabs-component',
  imports: [CommonModule, CategoryFilterPipe,FormsModule],
  templateUrl: './cloud-tabs-component.html',
  styleUrl: './cloud-tabs-component.css'
})
export class CloudTabsComponent  {
cloudProviders: CloudProviders[] = [CloudProviders.MICROSOFT_AZURE, CloudProviders.AWS, CloudProviders.GOOGLE_CLOUD];
selectedProvider: CloudProviders  = CloudProviders.MICROSOFT_AZURE;
selectedCategory = '';
availableCategories = Object.values(ServiceCategory);
providers: Provider[] = [
  {
    name: CloudProviders.MICROSOFT_AZURE,
    isAvailable: true,
    services: [
      { title: 'Log Analytics Workspace', description: 'Collect and analyze logs across resources', icon: 'fas fa-file-alt', category: ServiceCategory.LOG_MANAGEMENT },
      { title: 'RedisCache', description: 'In-memory data store for fast access and caching', icon: 'fas fa-memory', category: ServiceCategory.DATABASES },
      { title: 'SQL ManagedInstance', description: 'Managed SQL Server with near 100% compatibility', icon: 'fas fa-server', category: ServiceCategory.DATABASES },
      { title: 'Azure Kubernetes Service', description: 'Simplified deployment of Kubernetes clusters', icon: 'fas fa-cubes', category: ServiceCategory.APPS_FUNCTIONS_CONTAINERS },
      { title: 'App Service Plan', description: 'Managed hosting for web apps and APIs', icon: 'fas fa-cloud', category: ServiceCategory.APPS_FUNCTIONS_CONTAINERS },
      { title: 'SQL Database', description: 'Fully managed relational SQL database', icon: 'fas fa-database', category: ServiceCategory.DATABASES },
      { title: 'CosmosDB', description: 'Globally distributed NoSQL database', icon: 'fas fa-globe', category: ServiceCategory.DATABASES },
      { title: 'MySQL Flexible', description: 'Managed MySQL with scalability and control', icon: 'fas fa-database', category: ServiceCategory.DATABASES },
      { title: 'Container Registry', description: 'Private Docker container storage', icon: 'fas fa-boxes', category: ServiceCategory.STORAGE },
      { title: 'Managed Disks', description: 'High-performance storage for VMs', icon: 'fas fa-compact-disc', category: ServiceCategory.STORAGE },
      { title: 'PowerBI embedded capacity', description: 'Embed Power BI reports into your apps', icon: 'fas fa-chart-line', category: ServiceCategory.DATA_ANALYTICS },
      { title: 'Storage Accounts', description: 'Durable, scalable cloud storage options', icon: 'fas fa-hdd', category: ServiceCategory.STORAGE },
      { title: 'Analysis Services', description: 'Data modeling and analysis platform', icon: 'fas fa-chart-pie', category: ServiceCategory.DATA_ANALYTICS },
      { title: 'Public IP', description: 'Static or dynamic IP address for resources', icon: 'fas fa-map-marker-alt', category: ServiceCategory.NETWORK_SECURITY_COMPONENTS },
      { title: 'Application Gateway', description: 'Load balancer with advanced traffic routing', icon: 'fas fa-project-diagram', category: ServiceCategory.NETWORK_SECURITY_COMPONENTS },
      { title: 'PostgreSQL Flexible', description: 'Flexible PostgreSQL server with high availability', icon: 'fas fa-database', category: ServiceCategory.DATABASES },
      { title: 'Open AI Search Services', description: 'AI-powered search capabilities for apps', icon: 'fas fa-robot', category: ServiceCategory.AI_ML_RESOURCES },
      { title: 'Synapse SQIPool', description: 'SQL-based big data analytics engine', icon: 'fas fa-chart-bar', category: ServiceCategory.DATA_ANALYTICS },
      { title: 'SQL ElasticPool', description: 'Shared resources across multiple databases', icon: 'fas fa-layer-group', category: ServiceCategory.DATABASES },
      { title: 'VM Scale sets', description: 'Automatically scale and manage virtual machines', icon: 'fas fa-network-wired', category: ServiceCategory.COMPUTE_SERVICES },
      { title: 'Virtual Machines', description: 'Scalable compute resources', icon: 'fas fa-server', category: ServiceCategory.COMPUTE_SERVICES },
      {title: 'Carbon Emission Footprint', description: 'Track and manage carbon emissions', icon: 'fas fa-leaf', category: ServiceCategory.EMISSION },
    ]
  },
  {
    name: CloudProviders.AWS,
    isAvailable: false,
    services: []
  },
  {
    name: CloudProviders.GOOGLE_CLOUD,
    isAvailable: false,
    services: []
  }
];


ngOnInit() {

}


selectProvider(provider: CloudProviders) {
  this.selectedProvider = provider;
}
get selectedProviderDetails(): Provider|undefined {
  return this.providers.find(p => p.name === this.selectedProvider);
}


}
