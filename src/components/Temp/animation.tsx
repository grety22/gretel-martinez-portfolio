import Lottie from "lottie-react";
import waiting from "./waiting.json";

const Animation = () => {
  return <Lottie className='h-auto absolute -right-10 bottom-0 hidden min-[320px]:w-60 min-[320px]:block sm:w-72 md:w-96 lg:w-[420px] min-[1200px]:w-fit' animationData={waiting} />;
}

export default Animation;