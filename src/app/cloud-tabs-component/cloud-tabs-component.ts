import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudProvider, Card } from '../models/cloud-provider.model';

@Component({
  selector: 'app-cloud-tabs-component',
  imports: [CommonModule],
  templateUrl: './cloud-tabs-component.html',
  styleUrl: './cloud-tabs-component.css'
})
export class CloudTabsComponent {
cloudProviders: CloudProvider[] = ['AWS', 'Microsoft Azure', 'Google Cloud'];
selectedProvider: CloudProvider = 'AWS';


cards :Record<CloudProvider, Card[]> = {
  'AWS': [
    { title: 'Auto Rightsizing', description: 'Reduce EC2 waste in real-time.', icon: '🧠' },
    { title: 'Savings Plans Optimizer', description: 'Buy only what you use.', icon: '📉' }
  ],
  'Microsoft Azure': [
    { title: 'Disk Cleanup', description: 'Auto-remove unused disks.', icon: '🧹' },
    { title: 'Reserved Instances', description: 'Get deep discounts for commitments.', icon: '💰' }
  ],
  'Google Cloud': [
    { title: 'Spot VM Optimization', description: 'Auto swap expensive workloads.', icon: '⚡️' },
    { title: 'Billing Alerts', description: 'Stay on top of cloud costs.', icon: '🔔' }
  ]
};

selectProvider(provider: CloudProvider) {
  this.selectedProvider = provider;
}
get selectedCards(): Card[] {
  return this.cards[this.selectedProvider];
}


}
