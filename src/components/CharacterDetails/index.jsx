import React from 'react';
import { useHistory } from 'react-router-dom';
import { Alignment, Button, FlexBox } from '@lumx/react';
import Comic from '../Comic'

const CharacterDetails = ({ character, characterComics }) => {
	const history = useHistory();

	const previousPage = () => {
		history.goBack();
	}

	if (character) return (
		<FlexBox hAlign={Alignment.center} id="character-details-flexblox">
			<FlexBox id="character-header-flexbox" vAlign={Alignment.center}>
				<FlexBox id="character-infos-flexbox" hAlign={Alignment.center}>
					<Button id="previous-page-button" onClick={previousPage}>Back to results</Button>
					<h1 id="character-name">{character.name}</h1>
					<div id="character-description">{character.description}</div>
				</FlexBox>
				<img id="character-image" src={character.image} alt={character.name}></img>
			</FlexBox>
			<FlexBox id="character-more-flexbox" vAlign={Alignment.center}>
				<div id="character-whatever">whatever</div>
				<div id="character-latest-comics">
					<h2 id="character-latest-comics-title" >Latest comics</h2>
					{
						characterComics.map((comic, index) => <Comic key={index} infos={comic} />)
					}
				</div>
			</FlexBox>
		</FlexBox>
	)
	else return (null)
}

export default CharacterDetails;