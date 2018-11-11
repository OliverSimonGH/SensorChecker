## Sensor Project ##
The application has been developed to retrieve data around Newport from multiple
sensors (Noise, Light, Air Quality). The sensors will send data that will
be checked against a range which will be deemed appropriate, when a
sensor is out of range it will be marked red and when it's in, green.

## Code Style ##
js-standard-style


## Framework / Libraries ##
* React
* NodeJS
* SocketIO


## Installation ##
Download the .zip file and extract the contents, open a terminal in the directory of the contents and run ***npm install*** to download the missing node_modules folder (the dependencies will be downloaded)

````bash
npm install
````

When the download is finished, run ***npm start*** to bootup the project. (Only one command is needed because the project uses **concurrently** which allows two scripts to run at once)
````bash
npm start
````
package.json example of concurrently
````json
"scripts": {
    "start": "concurrently --kill-others \"npm run react\" \"npm run server\"",
    "react": "react-scripts start",
    "server": "nodemon src/server/server.js"
    }
````
## Testing ##
To run tests, type ***npm test*** into the terminal, this will execute all test and provide valid feedback (checks if test are successful or not)
````bash
npm test
````
The testing strategy makes use of unit, snapshot and integration testing with **Jest** and **Enzyme**. 
* Unit testing used Jest to test simple functions
* Snapshot testing used Jest and Enzyme to record the HTML of a component into a file which is used as a comparison to the current HTML of the component to see if there are differences
* Integration testing uses Jest and Enzyme to mock a component and simulate user interaction such as clicking on a button which will change the state of a component.

## Style ##
Bootstrap has been used to design the application, as mentioned above, the sensor data captures appears red and green to indicate if the value is appropriate.

## Versioning ##
Gitlab is the versioning software that is currently used, there is one contributor to the project which is myself.

***MIT © Oliver Simon***