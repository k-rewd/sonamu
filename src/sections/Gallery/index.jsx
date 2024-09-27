import { useState, useEffect } from "react";

import './gallery.css'
import Carousel from "../Components/Carousel/carousel";

export default function Gallery() {
  const [active, setActive] = useState(3); // Initial active slide
  const images = ['1', '2','3']
  const items = [
    {
      title: "Slide 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 6",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
    {
      title: "Slide 7",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia...",
    },
  ];

  const loadShow = () => {
    return items.map((_, index) => {
      const position = (index - active + items.length) % items.length;

      if (position === 0) {
        return {
          transform: 'none',
          zIndex: 2,
          filter: 'none',
          opacity: 1,
        };
      } else if (position === 1 || position === 2) {
        return {
          transform: `translateX(${220 * position}px) scale(${1 - 0.2 * position}) perspective(60px) rotateY(-1deg)`,
          zIndex: 1,
          filter: 'blur(5px)',
          opacity: 0.6,
        };
      } else if (position === items.length - 1 || position === items.length - 2) {
        const adjustedPos = items.length - position;
        return {
          transform: `translateX(${-120 * adjustedPos}px) scale(${1 - 0.2 * adjustedPos}) perspective(16px) rotateY(1deg)`,
          zIndex: 1,
          filter: 'blur(5px)',
          opacity: 0.6,
        };
      } else {
        return {
          opacity: 0, // Hide other slides
          zIndex: -1,
          filter: 'none',
          transform: 'none',
        };
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1) % items.length);
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 + items.length) % items.length);
  };

  const styles = loadShow();

  return (
    <section id='gallerySection'>
      
      <div className='slider'>
        {items.map((item, index) => (
          <div className='item' key={index} style={styles[index]}>
            <h1 id='artistName'>{item.title}</h1>
            {/* <p>{item.content}</p> */}
            <Carousel images={images} />
            
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlide}>Prev</button>
      <button id="next" onClick={nextSlide}>Next</button>
    </section>
  );
};

// transform: `translateX(${220 * position}px) scale(${1 - 0.2 * position}) perspective(60px) rotateY(-1deg)`,
// transform: `translateX(${-120 * adjustedPos}px) scale(${1 - 0.2 * adjustedPos}) perspective(16px) rotateY(1deg)`,

