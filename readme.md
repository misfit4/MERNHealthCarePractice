MD extension = markdwon documentation.

highlight critcal building 



The purpose of this application is to create and store patient information pertaining to their name, date of birth, insurance provider, patient identification number and if they have been discharged. This will be useful in terms of holding details for patients. The information for every patient can be updated and deleted for modification purposes. The information will be displayed on a card component, having a home webpage, a webpage to create a patient, & a webpage page to display the patient information. Updating of patient information or deleting of a patient will done on the card component. nformationnodemon = Nodemon is a popular tool that is used for the development of applications based on node. js. It simply restarts the node application whenever it observes the changes in the file present in the working directory of your project

BackENd Confirguration:

mongoose = Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment

express = Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. I

cors = Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.

command: npm install mongoose cors express nodemon

- insert screenshot if dependencies in json


![Alt text](MD%20images/Screenshot%20(6).png)

CRUD OPERATIONS FOR BACKEND:


1.) Create Post Request to populate DB

*insert screen shot of using post request url to send information to DB
![Usage of Post Request](MD%20images/Screenshot%20(8).png)


2.) Create Get request to get all information from DB. 
*insert screenshot of using get requet to fetch values from collection from DB
![Create Get request](MD%20images/Screenshot%20(9).png)

3.) Create get request to fetch individual value from Db

*screen shot of using request to fetch individual value from DB
![Fetch Individual Value](MD%20images/Screenshot%20(13).png)

4.) Create update request to update information for values in collection. 

*insert screenshot of using update request to update information
![Update Information](MD%20images/Screenshot%20(12).png)

5.) Create delete request to delete a value from collection.
![Delete Request](MD%20images/Screenshot%20(11).png)


npx - NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available 
on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.

Create Client Folder. command to install REACT: npx create-react-app .

install react router for URLS and CRUD ops: 
command: npm install react-router-dom@6

install MaterialUI Library to render images
command: npm install @mui/material @emotion/react @emotion/styled

then search for icons after download in search bar on smae page:
icons command: 
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

or npm install @mui/icons material


then npm start:

1.) Create home page with navigation bar and image:
![Home Page](MD%20Images/Home Page.png)

2.) Create "Add Patient" webpage to send values to collection
![AddPatient](MD%20Images/AddPatient.png)

3.) Update Patient Information
![Update Patient](MD20%Images/AddPatient.png)
![Alt text](MD%20images/Update%20Patient.png)
4.) Create Patient InformationWebpage to display information from collection
![Alt text](MD%20images/PatientInformation.png)

5.) Delete Patient from Patient Information Webpage
![Alt text](MD%20images/Delete%20Patient.png)
