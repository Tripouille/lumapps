import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';
import { Link } from 'react-router-dom';

const Character = ({ infos, onDetails, detailsPath }) => {
	return (
		<FlexBox className="character-flexbox" hAlign={Alignment.spaceBetween}>
			<img className="character-image" src={infos.image} alt={infos.name}></img>
			<FlexBox className="character-infos-flexbox" vAlign={Alignment.spaceBetween}>
				<Link className="link" onClick={() => onDetails(infos.id)} to={detailsPath}><h1 className="character-name">{infos.name}</h1></Link>
				<div className="character-description">{infos.description}</div>
				<Link className="link" onClick={() => onDetails(infos.id)} to={detailsPath}><Button className="see-details-button">See details</Button></Link>
			</FlexBox>
		</FlexBox>
	);
}

export default Character