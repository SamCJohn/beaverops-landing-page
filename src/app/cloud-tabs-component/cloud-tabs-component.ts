import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider,CloudProviders} from '../models/cloud-provider.model';

@Component({
  selector: 'app-cloud-tabs-component',
  imports: [CommonModule],
  templateUrl: './cloud-tabs-component.html',
  styleUrl: './cloud-tabs-component.css'
})
export class CloudTabsComponent  {
cloudProviders: CloudProviders[] = [CloudProviders.MICROSOFT_AZURE, CloudProviders.AWS, CloudProviders.GOOGLE_CLOUD];
selectedProvider: CloudProviders  = CloudProviders.MICROSOFT_AZURE;
providers: Provider[] = [
  {
    name: CloudProviders.MICROSOFT_AZURE,
    isAvailable: true,
    categories: [
      {
        name: 'Compute Services',
        isAvailable: true,
        services: [
          { title: 'Virtual Machines', description: 'Scalable compute resources', icon: 'fas fa-server' },
          { title: 'VM Scale sets', description: 'Automatically scale and manage virtual machines', icon: 'fas fa-network-wired' }
        ]
      },
      {
        name: 'Databases',
        isAvailable: true,
        services: [
          { title: 'SQL Database', description: 'Fully managed relational SQL database', icon: 'fas fa-database' },
          { title: 'SQL ManagedInstance', description: 'Managed SQL Server with near 100% compatibility', icon: 'fas fa-server' },
          { title: 'SQL ElasticPool', description: 'Shared resources across multiple databases', icon: 'fas fa-layer-group' },
          { title: 'CosmosDB', description: 'Globally distributed NoSQL database', icon: 'fas fa-globe' },
          { title: 'PostgreSQL Flexible', description: 'Flexible PostgreSQL server with high availability', icon: 'fas fa-database' },
          { title: 'MySQL Flexible', description: 'Managed MySQL with scalability and control', icon: 'fas fa-database' },
          { title: 'RedisCache', description: 'In-memory data store for fast access and caching', icon: 'fas fa-memory' }
        ]
      },
      {
        name: 'Apps/Functions/Containers',
        isAvailable: true,
        services: [
          { title: 'App Service Plan', description: 'Managed hosting for web apps and APIs', icon: 'fas fa-cloud' },
          { title: 'Azure Kubernetes Service', description: 'Simplified deployment of Kubernetes clusters', icon: 'fas fa-cubes' }
        ]
      },
      {
        name: 'Network/Security Components',
        isAvailable: true,
        services: [
          { title: 'Public IP', description: 'Static or dynamic IP address for resources', icon: 'fas fa-map-marker-alt' },
          { title: 'Application Gateway', description: 'Load balancer with advanced traffic routing', icon: 'fas fa-project-diagram' }
        ]
      },
      {
        name: 'Storage',
        isAvailable: true,
        services: [
          { title: 'Storage Accounts', description: 'Durable, scalable cloud storage options', icon: 'fas fa-hdd' },
          { title: 'Managed Disks', description: 'High-performance storage for VMs', icon: 'fas fa-compact-disc' },
          { title: 'Container Registry', description: 'Private Docker container storage', icon: 'fas fa-boxes' }
        ]
      },
      {
        name: 'Data Analytics',
        isAvailable: true,
        services: [
          { title: 'Synapse SQIPool', description: 'SQL-based big data analytics engine', icon: 'fas fa-chart-bar' },
          { title: 'Analysis Services', description: 'Data modeling and analysis platform', icon: 'fas fa-chart-pie' },
          { title: 'PowerBI embedded capacity', description: 'Embed Power BI reports into your apps', icon: 'fas fa-chart-line' }
        ]
      },
      {
        name: 'AI/ML Resources',
        isAvailable: true,
        services: [
          { title: 'Open AI Search Services', description: 'AI-powered search capabilities for apps', icon: 'fas fa-robot' },
          { title: 'Translator', description: 'Real-time multilingual translation services', icon: 'fas fa-language' }
        ]
      },
      {
        name: 'Log Management',
        isAvailable: true,
        services: [
          { title: 'Log Analytics Workspace', description: 'Collect and analyze logs across resources', icon: 'fas fa-file-alt' }
        ]
      }
    ]
  },
  {
    name: CloudProviders.AWS,
    isAvailable: false,
    categories: []
  },
   {
    name: CloudProviders.GOOGLE_CLOUD,
    isAvailable: false,
    categories: []
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
