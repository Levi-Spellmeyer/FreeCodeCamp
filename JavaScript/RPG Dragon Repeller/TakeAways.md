1. When it comes to creating an interactive html environment for a user:
    - <span> tags can be used for displayed text and adding an id to that tag allows for text to be manipulated using js
    - <div> tags can be used to create sections of a page, in this project they were used to create borders between buttons and text

2. const button1 = document.querySelector('#button1');
    - This stores a reference to the html tag with id of #button1 in the const button1 variable
    - To edit this html element or the text displayed by this element, using .innerText can be used to change displayed text

3. Creating objects and an update function to change elements on the page is a lot easier than creating a function for every change of the page

4.   return hit > 0 ? hit : 0;
    - A one line if-else statement of the format `return condition ? ifTrue : ifFalse`

5. Math.floor(Math.random() * #)
    - Random number generation in js using math.floor and math.random methods
    - '#' represents any arbitrary number that sets the ceiling of the random number generation