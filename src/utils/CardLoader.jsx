import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardLoader = () => (
  <div className="cards">
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Skeleton height={300} duration={2} />
    </SkeletonTheme>
  </div>
);

export default CardLoader;
