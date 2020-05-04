import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import SearchField from '../SearchField';

const Header = () => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<SearchField />
		</FlexBox>
	</header>
);

export default Header;
