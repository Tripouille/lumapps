# LumApps Frontend Test

### Introduction

Welcome to the LumApps Frontend Technical Test. In this test, you will need to create a small frontend application using the technologies that we at LumApps use in our daily routine.

### Stack

In this test, we encourage you to use the technologies that we use in our daily basis:

*   HTML
*   JavaScript
*   React JS
*   SCSS
*   Yarn
*   Webpack and Webpack Dev Server


If you want to use other technologies or add features in order to enhance your application (such as TypeScript, Redux, Jest, Enzyme, responsive design), you are more than welcome to do so.

We also ask you to use the following component library called Design System. This is an open source library created by LumApps and that we use in our current product:  
[https://github.com/lumapps/design-system](https://github.com/lumapps/design-system)

When using this component library, please consider the following:

*   Use the color palette provided by the library.
*   Stick to the UX/UI and development guidelines provided.


### Application

In this technical test, you will be creating a small frontend application that lists the different superheroes and supervillains from Marvel, where you will be able to search for a character based on their name. Upon clicking on a specific result, you will be redirected to a detail page of that character, where you will need to show some information related to that selected character.

For the information that you will be using, you will need to consume Marvel's Open API to retrieve the different characters and their information. You can take a look at the API and how to use it here:  
[https://developer.marvel.com/docs](https://developer.marvel.com/docs)

You will need an API key in order to execute these requests. Please use the following one:  
`8fb61ed0d8ae4cc76943c8d2b8e2ed9c`

NB: In order to use this API key, you have to edit your `/etc/hosts` file, adding this line `127.0.0.1   develop.lumapps.com`.

### Mockup

![App mockup](src/Frontend%20Test.png)

### Rules

*   We strongly suggest that you use the technologies suggested under the Stack section. If you want to use another technology such as Angular JS or Vue JS because you do not know React, you can do so, but take into consideration that we do not use them in our daily basis
*   If you want to use your own boilerplate, feel free to override the whole repository.
*   Keep in mind several aspects of the application, not only functionality. Such as accessibility, performance, usability, maintainability, scalability.
*   This test should take you a day to complete, if you need more time or if you have any questions, please reach out to LumApps.
*   In order to deliver the project, please create a public GitHub repository and upload your code to it.

## Setup

In the project directory, you need to run: `yarn`
This will setup the necessary dependencies to execute this project.

To start development, you can execute `yarn start`, which will run the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.<br />
You will also see any lint errors in the console.
