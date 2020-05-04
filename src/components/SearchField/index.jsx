import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = () => (
	<TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} />
);

export default SearchField;
