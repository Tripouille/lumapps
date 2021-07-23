/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Character from '../Character';

const SearchResult = ({ characters }) => {
  return (
	<section className="lumx-spacing-padding-horizontal-huge">
		{
			characters.map((characterInfos, index) => <Character key={index} infos={characterInfos} />)
		}
	</section>
  );
};

export default SearchResult;
