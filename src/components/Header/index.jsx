/* eslint-disable react/prop-types */
import React from 'react';
import { FlexBox, Alignment, Button } from '@lumx/react';
import SearchField from '../SearchField';

const Header = ({ searchQuery, setSearchQuery, onSearch }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<Button onClick={onSearch}>Search</Button>
		</FlexBox>
	</header>
);

export default Header;
