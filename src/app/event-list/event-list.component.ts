import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  imports: [NgFor, NgIf],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})


export class EventListComponent implements OnInit{
  events: any[] = [];
  

  //contrscutor injects service
  constructor(private eventService: EventService) {}

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    this.eventService.event$.subscribe((updatedEvents) => {
      this.events = updatedEvents;
    });
  }

  onDelete(id: number){
    alert('You are about to delete an event!')
   this.eventService.removeItem(id) 
  }
}
