import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Alignment, Button, FlexBox } from '@lumx/react';
import Comic from '../Comic'

const CharacterDetails = ({ characters, characterComics }) => {
	const { id } = useParams();
	const characterInfos = characters.find((character) => character.id === parseInt(id));
	const history = useHistory();

	const previousPage = () => {
		history.goBack();
	}

	if (characterInfos) return (
		<FlexBox hAlign={Alignment.center} id="character-details-flexblox">
			<FlexBox id="character-header-flexbox" vAlign={Alignment.center}>
				<FlexBox id="character-infos-flexbox" hAlign={Alignment.center}>
					<Button id="previous-page-button" onClick={previousPage}>Back to results</Button>
					<h1 id="character-name">{characterInfos.name}</h1>
					<div id="character-description">{characterInfos.description}</div>
				</FlexBox>
				<img id="character-image" src={characterInfos.image} alt={characterInfos.name}></img>
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