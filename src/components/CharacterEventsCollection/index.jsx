import React from 'react';
import { Alignment, FlexBox } from '@lumx/react';
import CharacterEvent from '../CharacterEvent';

const CharacterEventsCollection = ({ events, title }) => {
	return (
		<FlexBox hAlign={Alignment.left} id="events-collection">
			<h2 id="events-collection-title">{title}</h2>
			{
				events.map((event, index) => (
					<CharacterEvent key={index} infos={event} />
				))
			}
		</FlexBox>
	);
}

export default CharacterEventsCollection;