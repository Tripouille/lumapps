/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router';
import Character from '../Character';
import Pagination from '../Pagination';

const SearchResult = ({ characters, resultsPath, onDetails, detailsPath }) => {
	const { currentPage } = useParams();
	const charactersPerPage = 4;
	const charactersOffset = (currentPage - 1) * charactersPerPage;
	const slicedCharacters = characters.slice(charactersOffset, charactersOffset + charactersPerPage);

	return (
		<section className="lumx-spacing-padding-horizontal-huge">
			{
				slicedCharacters.map((characterInfos, index) => <Character key={index} infos={characterInfos} onDetails={onDetails} detailsPath={detailsPath} />)
			}
			<Pagination itemPerPage={charactersPerPage} itemNumber={characters.length} path={resultsPath} ></Pagination>
		</section>
	);
};

export default React.memo(SearchResult);
