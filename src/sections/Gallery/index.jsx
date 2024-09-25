import { useState, useEffect } from "react";

import './gallery.css'

export default function Gallery() {
  const [active, setActive] = useState(3); // Initial active slide
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
      if (index === active) {
        return {
          transform: 'none',
          zIndex: 1,
          filter: 'none',
          opacity: 1,
        };
      } else if (index > active) {
        const stt = index - active;
        return {
          transform: `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
          // zIndex: -stt,
          filter: 'blur(5px)',
          opacity: stt > 2 ? 0 : 0.6,
        };
      } else {
        const stt = active - index;
        return {
          transform: `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
          // zIndex: -stt,
          filter: 'blur(5px)',
          opacity: stt > 2 ? 0 : 0.6,
        };
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1 < items.length ? prevActive + 1 : prevActive));
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
  };

  const styles = loadShow();

  return (
    <section id='gallerySection'>
      <div className='slider'>
        {items.map((item, index) => (
          <div className='item' key={index} style={styles[index]}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlide}>Prev</button>
      <button id="next" onClick={nextSlide}>Next</button>
    </section>
  );
};