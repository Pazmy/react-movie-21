import React, { useState, useEffect } from "react";
import {
  SlideShowContainer,
  SlideShowSlider,
  Slide,
  SlideShowDots,
  SlideShowDot,
  Text,
} from "./SlideShow.style";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";

const SlideShow = ({ img }) => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const delay = 2500;
  //   const initial = useRef(true);

  useEffect(() => {
    // if (initial.current) {
    //   initial.current = false;
    //   return;
    // }
    const time = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => clearTimeout(time);
  }, [index, img.length]);

  return (
    <>
      <SlideShowContainer>
        <SlideShowSlider
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {img.map((i, index) => (
            <Slide
              key={index}
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${i.backdrop_path}`}
            >
              <Text>
                <h1>{i.title}</h1>
                <p>{i.overview}</p>
              </Text>
            </Slide>
          ))}
        </SlideShowSlider>
        <SlideShowDots>
          {img.map((_, idx) => (
            <SlideShowDot
              key={idx}
              bgColor={index === idx ? `#717171` : "#bbb"}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))}
        </SlideShowDots>
      </SlideShowContainer>
    </>
  );
};

export default SlideShow;
