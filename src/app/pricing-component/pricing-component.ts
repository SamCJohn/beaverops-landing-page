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
licenseTiers = [
  {
    name: 'Small (≤10 nodes)',
    licenseFee: '$3,500/year',
    supportFee: '$750/year',
    description: 'Basic dashboard and limited alerts for small teams.'
  },
  {
    name: 'Mid-size (10–50 nodes)',
    licenseFee: '$7,500/year',
    supportFee: '$1,500/year',
    description: 'Full features, alerting, optimization, and budgeting.'
  },
  {
    name: 'Large (50+ nodes)',
    licenseFee: '$12,000/year',
    supportFee: '$2,500/year',
    description: 'Unlimited nodes and users with premium support.'
  },
  {
    name: 'Gov / Public Sector',
    licenseFee: 'Custom',
    supportFee: 'Custom',
    description: 'Air-gapped deployment, audit features, and compliance support.'
  }
];
spendTiers = [
  { spend: '$25K–$50K', fee: '4%', minFee: '$1,200' },
  { spend: '$50K–$100K', fee: '3.5%', minFee: '$2,000' },
  { spend: '$100K+', fee: '3%', minFee: '$3,000' }
];

savingsTiers = [
  { savings: '≤ $100K', successFee: '25% of savings' },
  { savings: '$100K–$500K', successFee: '20% of savings' },
  { savings: '$500K+', successFee: '15% of savings' }
];
addOns = [
  {
    name: 'Onboarding & Setup',
    description: 'End-to-end support for seamless deployment (2 weeks)',
    price: '$1,000–$2,000',
    icon: 'fas fa-rocket'
  },
  {
    name: 'Custom Integrations',
    description: 'Connect BeaverOps to your tools and workflows',
    price: '$200/integration',
    icon: 'fas fa-plug'
  },
  {
    name: 'Dedicated Account Manager',
    description: 'Personalized support and proactive guidance',
    price: '$1,000/year',
    icon: 'fas fa-user-tie'
  },
  {
    name: 'FinOps Training & Workshops',
    description: 'Educate and empower your team on cloud cost strategies',
    price: '$500/session',
    icon: 'fas fa-chalkboard-teacher'
  }
];


}
