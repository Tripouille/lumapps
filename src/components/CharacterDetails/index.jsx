import React from 'react';
import { useParams } from 'react-router';

const CharacterDetails = ({ characters }) => {
	const { id } = useParams();
	const characterInfos = characters.find((character) => character.id === parseInt(id));

	console.log(characterInfos);
	return (
		<p>Coucou</p>
	)
}

export default CharacterDetails;