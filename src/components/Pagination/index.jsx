import React from 'react';
import { Button } from '@lumx/react';
import { NavLink } from 'react-router-dom';

const Pagination = ({ itemPerPage, itemNumber, path }) => {
	const lastPageNumber = Math.ceil(itemNumber / itemPerPage)
	const pageNumbers = [];

	for (let i = 1; i <= lastPageNumber; ++i) {
		pageNumbers.push(i);
	}
	
	return (
		<nav id="pagination">
			{
				pageNumbers.map((number) => (
					<NavLink className="navlink" key={number} to={`${path}${number}`}>
						<Button className="navlink-button">{number}</Button>
					</NavLink>
				))
			}
		</nav>
	);
}

export default Pagination