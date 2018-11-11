NEWPORT SENSORS

This app has been deisgned to intake data from readings around Newport from three different sensors, Light,Air and Sound. Each sensor will provide readings in which will be checked against a range in which is deemed appropriate. If either readings fall out of their desired range they will be marked as red, however if they are within the range they will be marked green.

Motivation
A short description of the motivation behind the creation and maintenance of the project. This should explain why the project exists.


Code style
js-standard-style

Framework
React


Electron
Features
What makes your project stand out?

Code Example
Show what the does as concisely as possible, developers should be able to figure out how your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

Installation
Download .zip file

Extract the contents 

Open ...

CMD into directory

Use command "npm start"

Go back into directory

Open srever folder

Use command "node server.js"

API Reference
Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

Tests

The best testing strategy for this react application is first of all testing if all components mount correctly. These minimal components tests aka Smoke testing verify that all components build successfully. Starting with App.js we use "Enzyme" package to shallow test all componenets. Once all componenets are tested successfully we move on to doing unit testing on them.

This is done in two parts. First mount the specific component (SensorResultsRow) by passing test data to it. Then create a row manually using the same test data. Then using "shallow" from enzyme package test whether the mounted component produces the same html as the test html. This way we then move towards testing the functions of a component. 

Finally we 're going to do integration testing. This will be done to see if child componenets are interacting correctly with the parent component and the flow of data between parent/child component is accurate.

Style
Bootstrap is used to style the application. Red color labels are used to indicate if a reading falls out of desired range. Green is used to indicate readings that are satisfactory. The data has been formatted to display in a tabular form. Whenever a new reading is detected it is added to the top of the table i.e as first row. This is done so that user does not have to scroll all the way down to see the new reading. 

How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.


Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

Anything else that seems useful
License
A short snippet describing the license (MIT, Apache etc)

MIT © Josh Teague


