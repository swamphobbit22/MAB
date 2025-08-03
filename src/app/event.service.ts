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

  private events: Event[] = [
    {
      id: 1, 
      title: 'Rock Out Weekend',
      date: '2025-08-30',
      time: '10:00 am',
      location: 'Derby',
      description: 'Come and rock out in Derby for a weekend of fun on the 30th August 2025. All your favourite bands'
    },
    {
      id: 2,
      title: 'Madness',
      date: '2025-09-18',
      time: '19:00',
      location: 'Rock City, Nottingham',
      description: 'Come and party at Rock City!'
    }
  ]

  private storageKey = 'events';
  constructor() {this.loadFromLocalStorage()};

  private nextID = 3;

  private eventsSubject = new BehaviorSubject<Event[]>(this.events);
  event$ = this.eventsSubject.asObservable();

  getEvents(): Event[] {
    return this.events;
  }

  addEvent(event: Omit<Event, 'id'>) {
    const newEvent: Event = {
      id: this.nextID++,
      ...event
    };

    this.events.push(newEvent);
    this.saveToLocalStorage()
    this.eventsSubject.next([...this.events])
  }

  private loadFromLocalStorage(): void {
    try {
      const value = localStorage.getItem(this.storageKey);
      if(value) {
        this.events = JSON.parse(value);

        if(this.events.length > 0) {
          const maxId =  Math.max(...this.events.map(event => event.id));
          this.nextID = maxId + 1;
        }
        this.eventsSubject.next([...this.events])
      }
      
    } catch (error) {
      console.error('Error - cannot read from local storage');
    }
  }

  private saveToLocalStorage(): void {
    try {
      const jsonValue = JSON.stringify(this.events);
      localStorage.setItem(this.storageKey, jsonValue)
    } catch (error) {
      console.error('Error - cannot save to local storage');
    }
  }

  // remove from local storage - remove just one
  removeItem(eventId: number): void {
    this.events = this.events.filter(event => event.id !== eventId)
    this.saveToLocalStorage();
    this.eventsSubject.next([...this.events])
  }

  // cleanup local storage
  clear(): void {
    localStorage.clear();
  }
}

