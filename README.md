# MEET APP

## Link to Meet App
[Meet App](https://marvel2410.github.io/meet-app/)

## GitHub Repo
[GitHub Repository](https://github.com/Marvel2410/meet-app)

### Objective
Develop a Progressive Web Application (PWA), using React and test-driven development (TDD).  The app uses the Google Calendar API to retrive the information (events).  

### Overview
This project merges different technologies to create a website that is user friendly, works on any device, and also works offline.  

### Key Features
- Check out events in different cities
- Easily see/hide event details
- Pick how many events a user wants to see
- Use the website without the internet (cached data)
- Add it like an app to your phone's home screen

### Tech Specs
- React
- Recharts
- Google Calendar API
- Servless functions (AWS Lambda)
- GitHub hosted
- Lighthouse PWA
- VS Code (code editor)

# Stories

**Filter Events by City**
As a user searching for specific events,
I should be able to filter events based on a chosen city,
so that I can quickly find an attend events in a particular location.

**Show/Hide Event Details**
As a user looking for details of an event,
I should be able to toggle event details on and off,
So that I can view or hide any additioanl information based on my preference. 

**Specify Number of Events**
As a user
I should be able to specify the number of events displayed,
So taht I can manage and control the amount of events shown to me at once.

**Use the App When Offline**
As a user,
I should be able to access the app's main features without internet connection,
So that I can still view basic information and/or access data when offline.

**Add an App Shortcut to the Home Screen**
As a user,
I should be able to add a shortcut to the app on my device's home screen
So that I can easily access the app without having to navigate a browser

**Display Charts Visualizing Event Details**
As a user interested in more visual details of an event,
I should be able to view visual charts presenting event details and statistics,
So that I can easily comprehend and analyze event data in a chart/graphics type format.


# Scenarios

**Filter Events by City**
User wants to filter events by city
Given a list of events is displayed
When the user selects a specific city
Then only events from that city should be shown

**Show/Hide Event Details**
User wants to see/hide event details
Given a list of events is displayed
When the user clicks on an event/hide an event
When the event details should be shown/hidde

**Specify Number of Events**
User wants to see a specific number of events
Given a list of events is displayed
When the user specifies the number of events to show
Then only that number of events should be displayed

**Use the App When Offline**
User wants to use the app offline
Given the user has loaded the app
When the user loses internet connection
Then the app should still display data

**Add an App Shortcut to the Home Screen**
User wants to add a shortcut to the app
Given the app is installed on the device
When the user selects -- Add to Home Screen
Then a shortcut to the app should appear on the home screen

**Display Charts Visualizing Event Details**
User wants to view event details through charts
Given event details are available
When the user selects the 'View Charts' option
Then charts visualizing event details should be displayed

**How Serverless Function will be Used in Meet App:**
- Login and Security: These serverless functions, like those on AWS Lambda, can help make sure only authorized people access the app's calendar info. They handle logins securely without needing you to manage big servers.

- Finding Events: As an example, when someone wants to see events in a specific city. These functions can help find and sort those events, making it easier for users to see what's happening near them.

- Working Offline: These functions can also help the app work when there's no internet. They can store some info so users can still see things even if they're not connected.

Background Optimization: Behind the scenes work, such as organizing data or making sure everything runs smoothly, even though users might not see it happening.