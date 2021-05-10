/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = ({ searchQuery, setSearchQuery }) => <TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} value={searchQuery} onChange={setSearchQuery} />;

export default SearchField;
