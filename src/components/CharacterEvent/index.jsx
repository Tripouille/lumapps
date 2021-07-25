import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';

const CharacterEvent = ({ infos }) => {
	return (
		<FlexBox hAlign={Alignment.left} className="event-container">
			<h3 className="event-title">{infos.title}</h3>
			<p className="event-description">{infos.description}</p>
		</FlexBox>
	);
}

export default CharacterEvent;