import React from 'react'
import { FlexBox, Alignment } from '@lumx/react';
import './index.scss';
import SearchField from '../SearchField';

const Header = () => {
    return (
        <header className="lumx-spacing-padding-big header">
            <FlexBox vAlign={Alignment.right}>
                <SearchField />
            </FlexBox>
        </header>
    )
}

export default Header;