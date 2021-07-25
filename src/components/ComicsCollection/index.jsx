import React from 'react';
import Comic from '../Comic'

const ComicsCollection = ({ comics, title }) => {
	return (
		<div id="comics-collection">
			<h2 id="collection-title">{title}</h2>
				{
					comics.map((comic, index) => <Comic key={index} infos={comic} />)
				}
		</div>
	);
}

export default ComicsCollection;
