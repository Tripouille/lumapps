/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';
import Character from '../Character';
import Pagination from '../Pagination';

const SearchResult = ({ characters }) => {
	const { actualPage } = useParams();
	const charactersPerPage = 4;
	const charactersOffset = (actualPage - 1) * charactersPerPage;
	const slicedCharacters = characters.slice(charactersOffset, charactersOffset + charactersPerPage);
	console.log(actualPage, charactersOffset, slicedCharacters);

	return (
		<section className="lumx-spacing-padding-horizontal-huge">
			{
				slicedCharacters.map((characterInfos, index) => <Character key={index} infos={characterInfos} />)
			}
			<Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length}></Pagination>
		</section>
	);
};

export default SearchResult;