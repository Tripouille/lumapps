# LumApps Frontend Test

### Introduction

Welcome to the LumApps Frontend Technical Test for Interns. In this test, you will need to create a functionality in an existing frontend application using the technologies that we at LumApps use in our daily routine.

### Application

This application is an amazing Marvel characters Search! The user is allowed to enter a text on the search box and hit enter. This will trigger a request to Marvel's open API and return a list of characters. But now we need to display those characters on the page as a list!

You will need to create the necessary code in order to render that list of characters on the page. To do so, please take a look at the Search component located [here](./src/components/Search).

You will notice that the component receives as a parameter something called `characters`. This is a list of characters associated with the current search query. You will need to iterate through that list and render those characters on the page!

If you want some inspiration, you can take a look at the following image that shows how the page should look like after rendering those characters.

![App mockup](src/Frontend%20Test.png)

### Setup

In the project directory, you need to run: `yarn`
This will setup the necessary dependencies to execute this project.

To start development, you can execute `yarn start`, which will run the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

In order to use this project locally, you have to edit your `/etc/hosts` file, adding this line `127.0.0.1   develop.lumapps.com`.
