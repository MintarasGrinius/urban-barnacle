import React from "react";
import { useSpring, animated } from "react-spring";

const MainPage = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
    </div>
  );
};

export default MainPage;
