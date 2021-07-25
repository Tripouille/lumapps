import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';

const Comic = ({ infos }) => {
	return (
		<FlexBox className="comic-flexbox" hAlign={Alignment.center}>
			<h3 className="comic-name">{infos.title}</h3>
			<p className="comic-onsale">On sale: {infos.onsale}</p>
			<p className="comic-price">Price: ${infos.price}</p>
		</FlexBox>
	);
}

export default Comic;