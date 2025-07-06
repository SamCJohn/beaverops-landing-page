import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-component',
  imports: [CommonModule],
  templateUrl: './pricing-component.html',
  styleUrl: './pricing-component.css'
})
export class PricingComponent {
activeTab: string = 'saas';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
  saasPlans = [
  {
    name: 'Starter',
    monthly: '$149/mo',
    annual: '$1,499/yr',
    cloudLimit: 'Up to $10K cloud spend',
    features: ['Dashboard', 'Basic alerts'],
    cta: 'Start Free Trial'
  },
  {
    name: 'Growth',
    monthly: '$399/mo',
    annual: '$3,999/yr',
    cloudLimit: 'Up to $50K cloud spend',
    features: ['Optimization engine', 'Budget policy controls'],
    cta: 'Start Free Trial'
  },
  {
    name: 'Scale',
    monthly: '$699/mo',
    annual: '$6,999/yr',
    cloudLimit: 'Up to $100K cloud spend',
    features: ['Tagging', 'Multi-user access', 'Integrations'],
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    annual: 'Custom',
    cloudLimit: '$100K+ cloud spend',
    features: ['SSO', 'API access', 'SLA support'],
    cta: 'Contact Sales'
  }
];


}
