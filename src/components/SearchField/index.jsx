/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = ({ searchQuery, setSearchQuery, onKeyPress }) => <TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} value={searchQuery} onChange={setSearchQuery} onKeyPress={onKeyPress} />;

export default SearchField;
