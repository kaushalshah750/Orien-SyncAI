import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Step {
  number: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: 1,
      title: 'Connect Your Tools',
      description: 'Link SyncAI with your existing tools and platforms in just a few clicks. Our setup wizard guides you through the process effortlessly.'
    },
    {
      number: 2,
      title: 'Train Your AI',
      description: 'Teach SyncAI your workflows by demonstrating tasks once. The intelligent system learns your patterns and preferences automatically.'
    },
    {
      number: 3,
      title: 'Automate & Scale',
      description: 'Watch SyncAI handle repetitive tasks with precision while you focus on high-value work. Scale automation across your entire team.'
    }
  ];
}
