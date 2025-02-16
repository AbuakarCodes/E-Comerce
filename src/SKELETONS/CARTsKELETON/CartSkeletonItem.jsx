import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CartSkeletonItem() {
  return (
    <div className=" container space-y-4 md:flex  md:items-center md:justify-between md:gap-6 md:space-y-0">
      {/* Image Skeleton */}
      <div className="shrink-0 md:order-1">
        <Skeleton height={80} width={80} />
      </div>

      {/* Quantity Skeleton */}
      <div className="flex items-center justify-start lg:justify-center md:order-3 md:justify-end">
        <div className="text-l flex items-center  border border-gray-100 gap-x-2 p-1 rounded-sm">
          <Skeleton width={20} height={20} />
          <Skeleton width={30} height={20} />
          <Skeleton width={20} height={20} />
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <Skeleton width="100%" height={15} />
        <Skeleton width="60%" height={15} />

        {/* Remove Button Skeleton */}
        <div className="flex items-center gap-4">
          <Skeleton width={80} height={20} />
        </div>
      </div>
    </div>
  );
}

export default CartSkeletonItem;
