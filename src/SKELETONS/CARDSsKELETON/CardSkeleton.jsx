import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
    return (
        <div className="bg-white relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center">
          <Skeleton width="100%" height="100%" />
          <span className="h-full w-full">
            <Skeleton width={100} />
          </span>
        </div>
        <div className="mt-4 px-2 pb-5">
          <Skeleton height={24} width="80%" />
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <Skeleton height={30} width={80} />
              <Skeleton height={20} width={60} />
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} circle height={20} width={20} />
              ))}
              <span className="mr-2 ml-3 rounded  px-2.5 py-0.5 text-xs font-semibold">
                <Skeleton width={20} />
              </span>
            </div>
          </div>
          <Skeleton height={40} width="100%" />
        </div>
      </div>
    );
  
     
}

export default CardSkeleton
