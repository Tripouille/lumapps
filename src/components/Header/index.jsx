/* eslint-disable react/prop-types */
import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';
import SearchField from '../SearchField';
import MarvelLogo from './MarvelLogo.svg';

const Header = ({ searchQuery, setSearchQuery, onSearch }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox id="header-flexbox" vAlign={Alignment.spaceBetween}>
			<img id="marvel-logo" src={MarvelLogo} alt="marvel logo" />
			<FlexBox id="search-flexbox" vAlign={Alignment.right}>
				<SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery}
								onKeyPress={({ key }) => {
									if (key === 'Enter')
										onSearch();
								}} />
				<Button id="search-button" onClick={onSearch}>Search</Button>
			</FlexBox>
		</FlexBox>
	</header>
);

export default Header;
