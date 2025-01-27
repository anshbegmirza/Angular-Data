import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'assignment3-Solution';
  showSecret = false;

  log: any[] = []; // we have to expicitely define the type of this array.

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    console.log(this.log.length + 1);

    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
