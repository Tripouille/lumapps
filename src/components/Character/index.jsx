import React from 'react';

const Character = ({ infos }) => {
	console.log("Character");
	return (
		<p>{infos.name}</p>
	);
};

export default Character