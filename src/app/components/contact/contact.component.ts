import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted = false;
  formSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field);
    return formControl ? (formControl.invalid && (formControl.dirty || formControl.touched)) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;

      // Simulate API call
      setTimeout(() => {
        this.submitted = false;
        this.formSubmitted = true;
        this.contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }, 1500);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}
