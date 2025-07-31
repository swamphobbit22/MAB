import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  imports: [NgFor],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})


export class EventListComponent implements OnInit{
  events: any[] = [];

  //contrscutor injects service
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
