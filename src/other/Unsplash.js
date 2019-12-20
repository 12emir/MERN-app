import React from 'react';
import axios from 'axios'
import UnsplashImage from './UnsplashImage'
import InfiniteScroll from 'react-infinite-scroll-component';
import './Unsplash.css'

const Unsplash = () => {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);

    const fetchImages = (count = 6) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "7be1cc600f228bc8b1b4f86115faeefca6824ee1988242547a8395ae2bb64742";

        axios
            .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
            .then(res => {
                setImages([...images, ...res.data]);
                setIsLoaded(true);
            });
    };


    React.useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="center" style={{ background: "white" }}>
            <div className="hero is-fullheight is-bold is-info">
                <div className="hero-body">
                    <div className="container">
                        <div className="header content">
                            <h2 className="subtitle is-6">Code Challenge #16</h2>
                            <h1 className="title is-1">
                                Infinite Scroll Unsplash Code Challenge
                            </h1>
                        </div>
                        <InfiniteScroll
                            dataLength={images}
                            next={() => fetchImages(6)}
                            hasMore={true}
                            loader={
                                <img
                                    src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                    alt="loading"
                                />}
                        >
                            <div className="image-grid">
                                {loaded ?
                                    images.map((image, index) => (
                                        <UnsplashImage url={image.urls.regular} key={index} />
                                    )) : ""}
                            </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Unsplash