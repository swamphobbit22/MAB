import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css'
})
export class FormModalComponent {
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    //send data to service file

    this.close.emit
  }

  onCancel() {
    this.close.emit();
  }

}
