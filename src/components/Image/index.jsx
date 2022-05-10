import React from 'react';

import PropTypes from 'prop-types';

export default function Image({ imageUrl, altName = 'img' }) {
	return <img src={imageUrl} alt={altName} />;
}

Image.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	altName: PropTypes.string
};
