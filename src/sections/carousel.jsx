import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import './carousel.css'

export default function Carousel({ imageUrls }) {
  const [imageIdx, setImageIdx] = useState(0)

  const showPrevImage = () => {
    
  }

  const showNextImage = () => {

  }


  return (
    <div style={{width: '100%', height: '100%', position:'relative'}}>
      <img src={imageUrls[imageIdx]} className="carousel-img"/>
      <button onClick={showPrevImage} className="carousel-btn" style={{left: 0}}><ArrowBigLeft /></button>
      <button onClick={showNextImage} className="carousel-btn" style={{right: 0}}><ArrowBigRight /></button>

    </div>
  )


}