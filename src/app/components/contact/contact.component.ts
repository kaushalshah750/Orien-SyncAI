import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { supabase } from '../../../integration/client';

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
  errorMessage: string = '';
  successMessage: string = '';
  iserror: boolean = false

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

  async onSubmit() {
    this.iserror = false;
    if (this.contactForm.valid) {
      this.errorMessage = '';
      this.successMessage = '';
      try {
        this.submitted = true;
        console.log(this.contactForm.value)
        console.log(this.contactForm.controls['name'].value)
        console.log(this.contactForm.controls['email'].value)
        console.log(this.contactForm.controls['message'].value)
        const { error } = await supabase
          .from('syncai')
          .insert([
            { name: this.contactForm.controls['name'].value, email: this.contactForm.controls['email'].value, message: this.contactForm.controls['message'].value },
          ]);

        this.submitted = false;
        this.formSubmitted = true;
        if (error) {
          this.iserror = true;
          if (error.code === '23505') {
            this.errorMessage = 'This email is already used.';
          } else {
            this.errorMessage = 'Something went wrong. Please try again.';
          }
        } else {
          this.iserror = false;
          this.successMessage = 'Thank you! Your message has been sent successfully.';
          this.contactForm.reset();
        }
      } catch (e) {
        this.errorMessage = 'Submission failed. Please check your network.';
      } finally {
        this.submitted = false;
      }


      // Simulate API call
      setTimeout(() => {

        // Hide success message after 5 seconds
        setTimeout(() => {
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
