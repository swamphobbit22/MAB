import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})


export class EventService {
  // test list
  private events: Event[] = [
    {
      id: 1, 
      title: 'Rock Out Weekend',
      date: '30/08/2025',
      time: '10.00 am',
      location: 'Derby',
      description: 'Come and rock out in Derby for a weekend of fun on the 30th August 2025. All your favourite bands'
    },
    {
      id: 2,
      title: 'Madness',
      date: '10/09/2025',
      time: '7pm',
      location: 'Rock City, Nottingham',
      description: 'Come and party at Rock City!'
    }
  ]

  //set the next id to 3 - then to be incrementd for add event
  private nextID = 3;

  private eventsSubject = new BehaviorSubject<Event[]>(this.events);
  event$ = this.eventsSubject.asObservable();

  getEvents(): Event[] {
    console.log(this.events, '<<< all events')
    return this.events;
  }

  addEvent(event: Omit<Event, 'id'>) {
    const newEvent: Event = {
      id: this.nextID++,
      ...event
    };

    this.events.push(newEvent);
    this.eventsSubject.next([...this.events])
    console.log(newEvent, '<<< the new event')
   
  }
  
}
