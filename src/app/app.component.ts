import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
    
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

}


// RouterOutlet,
// EventListComponent
// templateUrl: './app.component.html',