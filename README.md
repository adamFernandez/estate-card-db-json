## Challenge by Adam Fernandez

Tools used: 

* React
* json-server
* styled-components
* FontAwesome

This simple UI allows the user to do what was asked for the exercise. 

* View all listings
* Mark an individual listing as expired
* Easily distinguish between active and expired listings

A listing contains the following information:

* Image
* Number of bedrooms
* Address
* Postcode
* Description
* Asking price
* Status - `active` or `expired`


## Data handling

Data handled with json-server as suggested. 

## Technical Notes

You should also ask yourself the following questions before submitting the test, this is what we value and will mark you on:

* Is the code easy to maintain? 
  
  - Right now, the code shsould be easy to mantain as it is a really small application. 
    If I were to make it more scalable I would have probably started by adding a better folder structure. Separating the server from the client to start with and then adding (in case of a React app) Redux to admin data through the store and dispatch actions in a more organized manner.

* Does the proposed solution scale if more teams were to contribute?
  - This solution could definetly scale by adding the proper structure. At this point, this UI could be a single component of a much larger application.

* How difficult is it to onboard another engineer to the codebase?
  - I think it is pretty straight forward. There is not much to adapt to. The main requirement would be that the new developer should know a bit of style-components, along with the rest of the stack. I hope it will not take more than a few hours.

* Does the application work across different screen sizes?
 - I have tried to cover most breakpoints and it seems to be working. So far, so good.

* Is the logic well tested?
  - The logic has not been tested. 

* Is the application accessible to all users?
  - Not to people with impaired vision.

* Is the code semantic?
  - I think it is semantic. 

  
## Review  
  If I had more time I would probably have implemented the application with a backend (maybe with node, express or any other backend language with mongodb). And also use Redux to handle React data management.
  
  I am not too experienced on testing so I have not being able to do any this time. My testing skills are on working progress. Keen to learn and practice with Zoopla!

  All the best for everyone! 

  Many thanks 

  Adam Fernandez
