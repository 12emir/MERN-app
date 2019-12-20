import React from 'react';

const UnsplashImage = ({ url, key }) => (
    <div className="image-item" key={key} >
        <img style={{ width: "350px" }} src={url} />
    </div>
);

export default UnsplashImage