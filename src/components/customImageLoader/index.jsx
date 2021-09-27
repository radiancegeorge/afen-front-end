import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const CustomImageLoader = ({ src }) => {
  return (
    <LazyLoad height={200}>
      <LazyLoadImage effect={"blur"} src={src} alt={src} />
    </LazyLoad>
  );
};
export default CustomImageLoader;
