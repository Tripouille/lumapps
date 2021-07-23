import React from 'react';
import { Button } from '@lumx/react';


const Pagination = ({ charactersPerPage, totalCharacters, setActualPage }) => {
	const lastPageNumber = Math.ceil(totalCharacters / charactersPerPage)
	const pageNumbers = [];

	for (let i = 1; i <= lastPageNumber; ++i) {
		pageNumbers.push(i);
	}
	
	const clickHandler = ({ target }) => {
		setActualPage(target.textContent);
	}

	return (
		<nav id="pagination">
			{
				pageNumbers.map((number) => <Button key={number} className="page-number" onClick={clickHandler}>{number}</Button>)
			}
		</nav>
	)
}

export default Pagination