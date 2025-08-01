# Project Plan - Kirsty's Amazing Events App
## Summary

The app will display a homepage that renders a list of events from an events list component - this will retrieve data from an events service file. The homepage will have an add event button which will pop up a modal with a form that takes the event details and when submitted the data will be passed to the events services file. The Event service file is at the heart of the app and will perform the data operations.

### AppComponent
Handles the routing and main layout
### HeaderComponent
Will display a nav bar and heading

### homeComponent
will display a button to add events and will display a list of events - from the eventList component.
### eventsListComponent
This will returns data from the event service file
### formModalComponent
This will contain a form that allows the user to add a new event and either submit or cancel
### eventServices
This will perform the data operations and contain the methods for getting the array data and adding to the array etc. The event interface will also go here.

## Data flow
* The event services file manages state and data operations
* The eventList component gets the data from the event services
* the modal form collects the users data and sends the new event data to event services

## Validation and error handling
* the plan is to use Angular reactive form
* make fields required
* add validation for format and length
* display useful error messages

