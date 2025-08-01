import { Component } from '@angular/core';
import { EventListComponent } from '../event-list/event-list.component';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [EventListComponent, FormModalComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showModal = false;


  // handleClick() {
  //   console.log('Button has been clicked')
 
    
  // }
}
