/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';

function App() {
  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
				>
					<Search />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
