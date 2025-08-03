import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  imports: [NgFor, NgIf, NgClass],
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
      // this.events = updatedEvents;
      this.events = updatedEvents.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 
    });
  }

  onDelete(id: number){
    alert('You are about to delete an event!')
   this.eventService.removeItem(id) 
  }

  isPast(date: string | Date): boolean {
    return new Date(date).getTime() < Date.now();
  }
}
