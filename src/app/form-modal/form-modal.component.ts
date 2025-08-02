import { Component, EventEmitter, Output } from '@angular/core';
import { EventService } from '../event.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from  '@angular/forms'

@Component({
  selector: 'app-form-modal',
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private eventService: EventService) {}

  applyForm = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required,),
    time: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  onSubmit(event?: Event) {
    event?.preventDefault();
    const { title, date, time, location, description} = this.applyForm.value;


    const newEvent = {
      title: title!, 
      date: date!,
      time: time!,
      location: location!,
      description: description!,
    };

    this.eventService.addEvent(newEvent)
    
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



