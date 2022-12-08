import React, { useEffect } from 'react';

const Slide = (props) => {
  const btnContainer = {
    display: 'inline-block',
    float: 'right',
  };
  const btn = {
    border: 'none',
    background: 'blue',
    color: 'white',
    fontSize: '22px',
    padding: '5px 10px',
    borderRadius: '10px',
    margin: '0 10px',
  };
  return (
    <React.Fragment>
      <img src={props.image.link} alt='Sliderr_image' />
      <h1>
        {props.image.title}
        <span style={btnContainer}>
          <button style={btn} onClick={props.slidePrev}>
            {'<'} Prevs
          </button>
          |
          <button style={btn} onClick={props.slideNext}>
            {'>'} Next
          </button>
        </span>
      </h1>
    </React.Fragment>
  );
};
const App = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      id: 1,
      title: 'First Slide',
      link: 'https://via.placeholder.com/750x350/FF0000/FFFFFF',
    },
    {
      id: 2,
      title: 'Second Slide',
      link: 'https://via.placeholder.com/750x350/00FF00/000000',
    },
    {
      id: 3,
      title: 'Third Slide',
      link: 'https://via.placeholder.com/750x350/0000FF/FFFFFF',
    },
    {
      id: 4,
      title: 'Fourth Slide',
      link: 'https://via.placeholder.com/750x350/F000F0/000000',
    },
  ];
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <React.Fragment>
      <h1>
        React Slider{' '}
        <small>
          <em>(we have {slides.length} slides)</em>
        </small>
      </h1>
      <Slide
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
      />
    </React.Fragment>
  );
};

export default App;
