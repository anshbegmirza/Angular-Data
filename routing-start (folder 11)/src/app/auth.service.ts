import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
        console.log(`I am here in auth`);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    return this.loggedIn; // Optional: return the new state if needed
  }

  logout() {
    this.loggedIn = false;
    return this.loggedIn; // Optional: return the new state if needed
  }
}
