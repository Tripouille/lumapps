import React from 'react';
import { Alignment, FlexBox } from '@lumx/react';
import CharacterHeader from '../CharacterHeader';
import ComicsCollection from '../ComicsCollection';
import CharacterEventsCollection from '../CharacterEventsCollection';

const CharacterDetails = ({ character, characterComics, characterEvents }) => {
	if (character) return (
		<FlexBox hAlign={Alignment.center} id="character-details-flexblox">
			<CharacterHeader character={character} /> 
			<FlexBox id="character-more-flexbox" vAlign={Alignment.center}>
				<CharacterEventsCollection events={characterEvents} title="All events" />
				<ComicsCollection comics={characterComics} title="Latest comics" />
			</FlexBox>
		</FlexBox>
	);
	else return (null);
}

export default CharacterDetails;