import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import './carousel.css'



export default function Carousel({ images }) {
  const [imageIdx, setImageIdx] = useState(0)

  const showPrevImage = () => {
    setImageIdx(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  const showNextImage = () => {
    setImageIdx(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  return (
    <section aria-label='Image Carousel'
      style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden'
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={typeof image === 'string' ? image : ''}
            aria-hidden={imageIdx !== index}
            className="carousel-img"
            style={{ translate: `${-100 * imageIdx}%` }}
          />
        ))}

        {/* {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIdx !== index}
            className="carousel-img"
            style={{ translate: `${-100 * imageIdx}%` }} />
        ))} */}
      </div>
      <button
        onClick={showPrevImage}
        className="carousel-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image">
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="carousel-btn"
        style={{ right: 0 }}
        aria-label="View Previous Image">
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          translate: '-50%',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="carousel-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIdx(index)}
          >
            {index === imageIdx ? <CircleDot aria-hidden /> : <Circle />}
          </button>
        ))}
      </div>
    </section>
  )


}