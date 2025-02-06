import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrl: './server-elements.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementsComponent {
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };
}

// srvElement is the alias name of the element which we will use outside this component to bind it to different things.
