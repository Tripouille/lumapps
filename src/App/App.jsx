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
import { getCharacters, getCharacterComics, getCharacterEvents } from '../api';
import CharacterDetails from '../components/CharacterDetails';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [characters, setCharacters] = React.useState([]);
	const [character, setCharacter] = React.useState({});
	const [characterComics, setCharacterComics] = React.useState([]);
	const [characterEvents, setcharacterEvents] = React.useState([]);
  const resultsPath = "/results/";
  const detailsPath = "/details";

  const onSearch = async () => {
    if (searchQuery !== '') {
      const chars = await getCharacters({ nameStartsWith: searchQuery.trim(), orderBy: 'name' });
      
      setCharacters(chars);
    }
  };
  
  const onDetails = async (characterId) => {
    const character = characters.find((character) => character.id === characterId);
    const comics = await getCharacterComics({characters: characterId, orderBy: '-onsaleDate', limit: 4});
    const events = await getCharacterEvents({characters: characterId, orderBy: '-modified'});
    
    setCharacter(character);
		setCharacterComics(comics);
    setcharacterEvents(events);
	}

  return (
	<>
		<Router>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} resultsPath={resultsPath} />
			<Switch>
				<Route exact path={`${resultsPath}:currentPage`}>
					<SearchResult characters={characters} resultsPath={resultsPath} onDetails={onDetails} detailsPath={detailsPath} />
				</Route>
        <Route exact path={detailsPath}>
          <CharacterDetails character={character} characterComics={characterComics} characterEvents={characterEvents} />
        </Route>
			</Switch>
		</Router>
	</>
  );
}

export default App;
