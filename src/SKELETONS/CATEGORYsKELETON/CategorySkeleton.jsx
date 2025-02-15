import React from "react";
import Skeleton from "react-loading-skeleton";

function CategorySkeleton() {
  const arr = Array.from({ length: 4}, (_, index) => index + 1);
  return (
    <>
      <div className="flex items-center justify-center gap-2 py-[3rem] flex-wrap">
        <Skeleton width={40} height={40} borderRadius={6} />
        {arr.map((elem) => {
          return <Skeleton width={100} height={40} borderRadius={6} />;
        })}
      </div>
    </>
  );
}

export default CategorySkeleton;
