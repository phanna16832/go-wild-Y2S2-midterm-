import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {

  locations = [
    "",

  ]

  submitted = false;

  bookingData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    nationality: '',
    travelers: '',
    experience: '',
    message: ''
  };

  onSubmit() {
    this.submitted = true;

    const isInvalid =
      !this.bookingData.firstName ||
      !this.bookingData.lastName ||
      !this.bookingData.phone ||
      !this.bookingData.email ||
      !this.bookingData.nationality ||
      !this.bookingData.travelers ||
      !this.bookingData.experience;

    if (isInvalid) {
      return; 
    }

    console.log('✅ Booking Submitted:', this.bookingData);

  
    this.bookingData = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      nationality: '',
      travelers: '',
      experience: '',
      message: ''
    };

    // 2. Optional: Reset the 'submitted' flag to hide validation messages
    this.submitted = false;
  }
}