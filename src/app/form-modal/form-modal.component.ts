import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-form-modal',
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private eventService: EventService) {}

  onSubmit( title:string, date:string, time:string, location:string, desc:string) {
    event?.preventDefault();
    console.log('onSubmit called')
    console.log('form date: ',{ title, date, time, location, desc})
    //send data to service file
    const newEvent = {
      title, 
      date,
      time,
      location,
      description: desc,
    };

    
    // passing it to service file
    this.eventService.addEvent(newEvent)
    // return false;
    this.close.emit()
  }

  onCancel() {
    this.close.emit();
  }

  btnTest(){
    console.log('Button test works')
    alert('responding!!!')
  }
}
