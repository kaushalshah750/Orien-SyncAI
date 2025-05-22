import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Feature {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '🤖',
      title: 'AI Task Automation',
      description: "Automate repetitive tasks with our intelligent AI that learns from your workflow patterns and adapts to your team's needs."
    },
    {
      icon: '⚡',
      title: 'Smart Integrations',
      description: 'Seamlessly connect with your favorite tools and platforms. SyncAI works with over 100+ applications out of the box.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards ensure your data stays protected and private at all times.'
    }
  ];
}
