/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import SearchResult from '../components/SearchResult';
import { getCharacters } from '../api';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [characters, setCharacters] = React.useState([]);
	const [actualPage, setActualPage] = React.useState(1);


  const onSearch = async () => {
    console.log("onSearch");
    if (searchQuery !== '') {
      const chars = await getCharacters({ nameStartsWith: searchQuery, orderBy: 'name' });

      setActualPage(1);
      setCharacters(chars);
    }
  };

  return (
	<>
		<Router>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
			<Switch>
				<Route exact path="/">
					<SearchResult searchQuery={searchQuery} characters={characters} actualPage={actualPage} setActualPage={setActualPage} />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
