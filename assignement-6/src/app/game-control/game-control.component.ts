import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  interval: any;
  @Output() intervalFired: any = new EventEmitter<number>();
  lastNumber: number = 0;

  constructor() {}

  onStartGame() {
    this.interval = setInterval(() => {
      // console.log(`this.onStartGame function called`);
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    // console.log(`onPauseGame called !`);
    clearInterval(this.interval);
  }
}
