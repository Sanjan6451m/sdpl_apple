import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-request-service',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './request-service.component.html',
  styleUrl: './request-service.component.scss'
})
export class RequestServiceComponent implements OnInit {
  contactForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      device: ['', [Validators.required]]
    });
    emailjs.init("PTmfxUAnOlAZlyhRB");

  }

  devices = ['IT-Training',
    'macOS-Basic',
    'macOS-Advanced',
    'iOS-Essentials',
    'iOS - Technical',
  ];

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      this.message = 'Sending message...';
      
      emailjs.send("service_kuiothp", "template_xa36knk", {
          to_name: "SDPL",
          from_name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          device: this.contactForm.value.device,
          message: this.contactForm.value.message,
          reply_to: this.contactForm.value.email
      })
      .then((response) => {
          this.message = 'Message sent successfully!';
          this.contactForm.reset();
          console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
          this.message = 'Error sending message. Please try again later.';
          console.error('FAILED...', error);
      });
  } else {
      this.message = 'Please fill in all required fields correctly.';
  }
  }

} 
