import React from 'react';
import './App.scss';
import Header from '../components/Header';
import mockups from '../Frontend Test.png';

function App() {
  return (
	<>
		<Header />
		<section className="lumx-spacing-padding-horizontal-huge rules">
			<h1>LumApps Frontend Test</h1>
			<h3>
				Introduction
			</h3>
			<p>
				Welcome to the LumApps Frontend Technical Test. In this test, you will need to create a small frontend application using the technologies that we at LumApps use in our daily routine.
			</p>
			<h3>
				Stack
			</h3>
			<div>
				In this test, we encourage you to use the technologies that we use in our daily basis:
				<ul>
					<li>
						HTML
					</li>
					<li>
						JavaScript
					</li>
					<li>
						React JS
					</li>
					<li>
						SCSS
					</li>
					<li>
						Yarn
					</li>
					<li>
						Webpack and Webpack Dev Server
					</li>
				</ul>
			</div>
			<p>
				If you want to use other technologies or add features in order to enhance your application (such as TypeScript, Redux, Jest, Enzyme, responsive design), you are more than welcome to do so.
			</p>
			<p>
				We also ask you to use the following component library called Design System. This is an open source library created by LumApps and that we use in our current product:
				<br />
				<a href="https://github.com/lumapps/design-system" target="blank">https://github.com/lumapps/design-system</a>
			</p>
			<div>
				When using this component library, please consider the following:
				<ul>
					<li>
						Use the color palette provided by the library.
					</li>
					<li>
						Stick to the UX/UI and development guidelines provided.
					</li>
				</ul>
			</div>
			<h3>
				Application
			</h3>
			<p>
				In this technical test, you will be creating a small frontend application that lists the different superheroes and supervillains from Marvel, where you will be able to search for a character based on their name. Upon clicking on a specific result, you will be redirected to a detail page of that character, where you will need to show some information related to that selected character.
			</p>
			<p>
				For the information that you will be using, you will need to consume Marvel's Open API to retrieve the different characters and their information. You can take a look at the API and how to use it here:
				<br />
				<a href="https://developer.marvel.com/docs" target="blank">https://developer.marvel.com/docs</a>
			</p>
			<p>
				You will need an API key in order to execute these requests. Please use the following one:
				<br />
				<span>8fb61ed0d8ae4cc76943c8d2b8e2ed9c</span>
			</p>
			<h3>
				Mockup
			</h3>
			<p>
				<img src={mockups} alt="App mockup" />
			</p>
			<h3>
				Rules
			</h3>
			<div>
				<ul>
					<li>
						We strongly suggest that you use the technologies suggested under the Stack section. If you want to use another technology such as Angular JS or Vue JS because you do not know React, you can do so, but take into consideration that we do not use them in our daily basis
					</li>
					<li>
						If you want to use your own boilerplate, feel free to override the whole repository.
					</li>
					<li>
						Keep in mind several aspects of the application, not only functionality. Such as accessibility, performance, usability, maintainability, scalability.
					</li>
					<li>
						This test should take you a day to complete, if you need more time or if you have any questions, please reach out to LumApps.
					</li>
					<li>
						In order to deliver the project, please create a public GitHub repository and upload your code to it.
					</li>
				</ul>
			</div>
		</section>
	</>
  );
}

export default App;
