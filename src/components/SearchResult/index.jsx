/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Character from '../Character';

const SearchResult = ({ characters }) => {
	const [actualPage, setActualPage] = React.useState(1);
	const [characterPerPage, setcharacterPerPage] = React.useState(4);
	const charactersOffset = (actualPage - 1) * characterPerPage;
	const slicedCharacters = characters.slice(charactersOffset, charactersOffset + characterPerPage);
	console.log(characters.length);

	return (
		<section className="lumx-spacing-padding-horizontal-huge">
			{
				slicedCharacters.map((characterInfos, index) => <Character key={index} infos={characterInfos} />)
			}
		</section>
	);
};

export default SearchResult;
