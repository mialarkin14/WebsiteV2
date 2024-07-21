import { useState } from "react";
import "../pages/drawings.css"

const image1 = "src/assets/drawings-images/bubble.jpg";
const image2 = "src/assets/drawings-images/dragon.jpg";
const image3 = "src/assets/drawings-images/hi.jpg";
const image4 = "src/assets/drawings-images/sky.jpg";
const image5 = "src/assets/drawings-images/tear.jpg";
const image6 = "src/assets/drawings-images/toad.jpg";


const images = [image1, image2, image3, image4, image5, image6];


const GalleryColor = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexDirection:'column', 
    rowGap:'80px', boxShadow: '10px 15px 20px #0951ff', paddingBottom:'100px', paddingTop:'100px'}}>
      <p className="SubHeading1">
        color pencil:
      </p>
      <div style={{marginLeft:'5%'}}>
        <ImageGallery />
      </div>
      
    </div>
  );
}

export default GalleryColor


function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  const imageCards = images.map((image) => (
    <img className="image-card3" onClick={() => showImage(image)} src={image} />
  ));

  const showImage = (image: any) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e: any) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: any) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      <div>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button  className="prevD" onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow} className="imagelight"></img>
          <button className="nextD" onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}