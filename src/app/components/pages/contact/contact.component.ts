import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      device: ['']
    });
  }

  ngAfterViewInit() {
    this.contactForm.patchValue({ device: null });
    emailjs.init("PTmfxUAnOlAZlyhRB");
  }
  devices = ['MacBook Air',
    'MacBook Pro',
    'iMac',
    'Mac Mini',
    'Mac Studio',
    'Mac Pro',
    'iPad',
    'iPhone',
    'Apple Watch',
    'Airpods',
    'Other Accessories',
  ];

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.contactForm.valid) {
      emailjs.send("service_kuiothp", "template_g8fkwgh", {
        to_name: "SDPL",
        from_name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        device: this.contactForm.value.device,
        message: this.contactForm.value.message,
        reply_to: this.contactForm.value.email,
      })
        .then((response) => {
          this.message = 'Message sent successfully!';
          this.contactForm.reset();
        })
        .catch((error) => {
          this.message = 'Error sending message. Try again later.';
        });
    }
  }
}