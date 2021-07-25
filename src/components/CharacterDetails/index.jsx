import React from 'react';
import { Alignment, FlexBox } from '@lumx/react';
import CharacterHeader from '../CharacterHeader';
import ComicsCollection from '../ComicsCollection';

const CharacterDetails = ({ character, characterComics }) => {
	if (character) return (
		<FlexBox hAlign={Alignment.center} id="character-details-flexblox">
			<CharacterHeader character={character} /> 
			<FlexBox id="character-more-flexbox" vAlign={Alignment.center}>
				<div id="character-whatever">whatever</div>
				<ComicsCollection comics={characterComics} title="Latest comics"/>
			</FlexBox>
		</FlexBox>
	)
	else return (null)
}

export default CharacterDetails;