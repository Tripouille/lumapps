import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';
import { Link } from 'react-router-dom';

const Character = ({ infos }) => {
	const characterDetailsUrl = `/character/${infos.id}`

	return (
		<FlexBox className="character-flexbox" hAlign={Alignment.spaceBetween}>
			<img className="character-image" src={infos.image} alt={infos.name}></img>
			<FlexBox className="character-infos-flexbox" vAlign={Alignment.spaceBetween}>
				<Link className="link" to={characterDetailsUrl}><h1 className="character-name">{infos.name}</h1></Link>
				<div className="character-description">{infos.description}</div>
				<Link className="link" to={characterDetailsUrl}><Button className="see-details-button">See details</Button></Link>
			</FlexBox>
		</FlexBox>
	);
}

export default Character