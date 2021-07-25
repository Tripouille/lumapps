/* eslint-disable react/prop-types */
import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';
import { Link, useHistory } from 'react-router-dom';
import SearchField from '../SearchField';
import MarvelLogo from './MarvelLogo.svg';

const Header = ({ searchQuery, setSearchQuery, onSearch, resultsPath }) => {
	const history = useHistory();

	const searchFieldKeyPressHandler = ({ key }) => {
		if (key === 'Enter') {
			history.push(`${resultsPath}1`);
			onSearch();
		}
	}

	return (
		<header className="lumx-spacing-padding-big header">
			<FlexBox id="header-flexbox" vAlign={Alignment.spaceBetween}>
				<img id="marvel-logo" src={MarvelLogo} alt="marvel logo" />
				<FlexBox id="search-flexbox" vAlign={Alignment.right}>
					<SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery}
									onKeyPress={searchFieldKeyPressHandler} />
					<Link className="link" to={`${resultsPath}1`}><Button id="search-button" onClick={onSearch}>Search</Button></Link>
				</FlexBox>
			</FlexBox>
		</header>
	);
};

export default Header;
