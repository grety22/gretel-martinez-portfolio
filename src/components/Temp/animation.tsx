import Lottie from "lottie-react";
import waiting from "./waiting.json";

const Animation = () => {
  return <Lottie className='w-100 right-2 absolute -bottom-40' animationData={waiting} />;
};

export default Animation;