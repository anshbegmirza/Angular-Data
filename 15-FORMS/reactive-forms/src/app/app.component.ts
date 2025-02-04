import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm!: FormGroup;

  forbiddenUsernames: string[] = ['mark', 'chris'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),

      gender: new FormControl('male', Validators.required),
      hobbies: new FormArray([]),
    });
  }

  // Getter method to retrieve the hobbies FormArray
  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.hobbies.push(control); // Use the getter instead of getControls()
  }

  onSubmit() {
    console.log(this.signupForm.value); // Check if hobbies are included
  }

  // Custom validator checking offline.
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) >= 0) {
      return { nameIsForbidden: true }; // Return validation error object
    }
    return null; // Return null if valid
  }

  // Asynchronous validator.
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    console.log(`forbidden`);
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === `test@test.com`) {
          console.log(`valid`);

          resolve({
            emailIsForbidden: true,
          });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
