import './index.scss'

import { useState } from 'react'

import PhotoAlbum from "react-photo-album"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import photos from "./photos"

const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
    })),
}));

const DayInTheLife = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="home-page">
      <div className="text-zone">
        <a
          href="https://docs.google.com/presentation/d/1RFwsyfqnD7fuHOl1-T4GqwUMtI9QeWelsL5bvqDl_bs/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"> 
          Day in the Life
        </a>
      </div>

      <div className="photo-container2">
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={(event, photo, index) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
}

export default DayInTheLife