import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}
@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for small teams getting started with automation.',
      features: [
        'Up to 5 team members',
        '25 automated workflows',
        'Basic integrations',
        'Email support',
        '5GB storage'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      description: 'Ideal for growing teams with advanced automation needs.',
      features: [
        'Up to 20 team members',
        'Unlimited workflows',
        'Advanced integrations',
        'Priority support',
        '25GB storage',
        'Custom AI training'
      ],
      buttonText: 'Choose Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations with complex needs.',
      features: [
        'Unlimited team members',
        'Unlimited workflows',
        'All integrations',
        '24/7 dedicated support',
        'Unlimited storage',
        'Advanced security controls',
        'Custom onboarding'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];
}
