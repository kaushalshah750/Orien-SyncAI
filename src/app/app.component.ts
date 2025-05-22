import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { FeaturesComponent } from "./components/features/features.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HowItWorksComponent } from "./components/how-it-works/how-it-works.component";
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { HeaderComponent } from "./components/header/header.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, FeaturesComponent, PricingComponent, FooterComponent, HowItWorksComponent, TestimonialComponent, HeaderComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SyncAI';
}
