/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css'
import React from "react";
import { bool, func } from "prop-types";
import SVG from "./SVG/SVG";

const CustomLeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <SVG icon="left" className="scaled-svg" />
    </button>
  );
});

const CustomRightNav = React.memo(({ disabled, onClick }) => {
    return (
        <button
          type="button"
          className="image-gallery-icon image-gallery-right-nav"
          disabled={disabled}
          onClick={onClick}
          aria-label="Next Slide"
        >
          <SVG icon="right" className="scaled-svg" />
        </button>
      );
  });
  


const ImageGalleryComponent = ({items}) => {

  const updatedItems = items.map(item => {
    const newItem = { ...item };
    if (/\.(png|jpg|jfif|gif)$/i.test(newItem.original)) {
        newItem.renderItem = renderImage;
    } else {
        newItem.renderItem = renderVideo;
    }
    return newItem;
  });
  

  const iframeStyle = {
    width: '100%', // Ensures the iframe takes the full width of its container
    height: '56vh', // You can adjust the height as needed
    border: 'none', // Optional: Removes border around iframe
  };

  function renderThumb(item) {
    return (

          <img src={item.thumbnail} alt="" />

      );
  }

  function renderImage(item) {
    return (
      <div className="image-gallery-image">
        <img src={item.original} className="custom-image" alt="" />
      </div>
    );
  };

  function renderVideo(item) {
    return (
    <div className="image-gallery-image">
        <iframe
          className="iframe-video"
          src={item.embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    );
  }

  const gallerySettings = {
    items: updatedItems,
    showPlayButton: false,
    showBullets: true,
    thumbnailPosition: 'bottom', // Adjust thumbnail position as needed
    renderThumbInner: renderThumb, // Custom rendering for thumbnails
    renderLeftNav: (onClick, disabled) => (
        <CustomLeftNav onClick={onClick} disabled={disabled} />
      ),
    renderRightNav: (onClick, disabled) => (
        <CustomRightNav onClick={onClick} disabled={disabled} />
      ),
    // Add more settings as needed
  };

  return <ReactImageGallery  {...gallerySettings}/>;
};



export default ImageGalleryComponent;