import CardSkeleton from "./CardSkeleton";

function CardSkeletonBg() {
    const arr = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arr.map( (elem)=>{
            return <div className="flex items-center justify-center"> <CardSkeleton/> </div>
        })}
    </div>
  )
}

export default CardSkeletonBg
