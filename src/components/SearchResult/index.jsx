/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Character from '../Character';
import Pagination from '../Pagination';

const SearchResult = ({ characters, actualPage, setActualPage }) => {
	const charactersPerPage = 4;
	const charactersOffset = (actualPage - 1) * charactersPerPage;
	const slicedCharacters = characters.slice(charactersOffset, charactersOffset + charactersPerPage);

	return (
		<section className="lumx-spacing-padding-horizontal-huge">
			{
				slicedCharacters.map((characterInfos, index) => <Character key={index} infos={characterInfos} />)
			}
			<Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length}
						setActualPage={setActualPage}></Pagination>
		</section>
	);
};

export default SearchResult;
