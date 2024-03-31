import { CatLoader } from "../CatLoader/CatLoader";
import "./image.css";

interface ImageProps {
  src: string;
  alt: string;
  loading: boolean;
}

export function Image({ src, alt, loading }: ImageProps) {
  return (
    <figure className="img-container">
      {!loading ? (
        <img className="img" src={src} alt={alt} />
      ) : (
        <div className="img">
          <div className="skeleton" />
          <div className="skeleton-img">
            <CatLoader />
          </div>
        </div>
      )}
    </figure>
  );
}
