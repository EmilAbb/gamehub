import { useEffect } from "react"

const Banner = ({allGameList}) => {
    useEffect(()=>{
    console.log(allGameList);
    },[])
  return (
    <div className="relative"> 
      <div className="absolute bottom-0 p-7 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[30px] text-slate-100 font-bold mb-3">{allGameList.name}</h2>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">Get Now</button>
      </div>
      <img src={allGameList.background_image} className="md:h-[400px] w-full object-center rounded-xl" alt="" />
    </div>
  )
}

export default Banner
