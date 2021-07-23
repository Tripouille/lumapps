import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';

const Character = ({ infos }) => (
	<FlexBox className="character-flexbox" hAlign={Alignment.spaceBetween}>
		<img className="character-image" src={infos.image} alt={infos.name}></img>
		<FlexBox className="character-infos-flexbox" vAlign={Alignment.spaceBetween}>
			<h1 className="character-name">{infos.name}</h1>
			<div className="character-description">{infos.description}</div>
			<Button className="see-details-button">See details</Button>
		</FlexBox>
	</FlexBox>
);

export default Character