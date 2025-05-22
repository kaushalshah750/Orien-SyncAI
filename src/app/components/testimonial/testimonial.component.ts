import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  avatarBg: string;
}
@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      quote: "SyncAI has transformed how our marketing team operates. We've reduced content production time by 60% while maintaining higher quality standards.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Techtron Inc.",
      avatarInitials: "SJ",
      avatarBg: "bg-indigo-600"
    },
    {
      quote: "Implementation was seamless and our team was up and running in a day. The automation workflows have saved us countless hours of repetitive work.",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Nexus Global",
      avatarInitials: "MC",
      avatarBg: "bg-indigo-800"
    },
    {
      quote: "As a startup, we needed to streamline operations quickly. SyncAI's intuitive platform helped us scale processes without adding headcount.",
      name: "Priya Patel",
      role: "Founder & CEO",
      company: "FutureScale",
      avatarInitials: "PP",
      avatarBg: "bg-indigo-700"
    }
  ];
}
