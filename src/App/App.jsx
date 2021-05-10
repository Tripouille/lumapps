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
import { getCharacters } from '../api';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [characters, setCharacters] = React.useState([]);

  const onSearch = async () => {
    if (searchQuery !== '') {
      const chars = await getCharacters({ nameStartsWith: searchQuery });

      setCharacters(chars);
    }
  };

  return (
	<>
		<Router>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
			<Switch>
				<Route
					exact
					path="/"
				>
					<Search searchQuery={searchQuery} characters={characters} />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
