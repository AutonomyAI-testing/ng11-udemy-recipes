import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  styles: [`
    label { font-weight: 700; }
    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched { border: 1px solid red; }
  `]
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted: boolean = false;
  successMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initContactForm();
  }

  private initContactForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      'phone': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9\-\+\(\)\s]+$/)
      ]),
      'message': new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
      const formData = this.contactForm.value;
      console.log('Contact Form Submitted:', formData);
      
      // Display success message
      this.successMessage = 'Thank you! Your message has been sent successfully.';
      
      // Reset form and success message after 3 seconds
      setTimeout(() => {
        this.onReset();
      }, 3000);
    }
  }

  onReset(): void {
    this.contactForm.reset();
    this.submitted = false;
    this.successMessage = '';
  }

}
