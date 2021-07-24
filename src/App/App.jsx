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
import { getCharacters, getCharacterComics } from '../api';
import CharacterDetails from '../components/CharacterDetails';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [characters, setCharacters] = React.useState([]);
	const [characterComics, setCharacterComics] = React.useState(['none']);

  const onSearch = async () => {
    console.log("onSearch");
    if (searchQuery !== '') {
      const chars = await getCharacters({ nameStartsWith: searchQuery.trim(), orderBy: 'name' });

      setCharacters(chars);
    }
  };

  const onDetails = async (characterId) => {
		const comics = await getCharacterComics({characters: characterId, orderBy: '-onsaleDate', limit: 4});
    
		setCharacterComics(comics)
	}

  return (
	<>
		<Router>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
			<Switch>
				<Route exact path="/:actualPage">
					<SearchResult characters={characters} onDetails={onDetails} />
				</Route>

        <Route exact path="/character/:id">
          <CharacterDetails characters={characters} characterComics={characterComics} />
        </Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
