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







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
