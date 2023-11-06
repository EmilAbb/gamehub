import { useEffect } from "react"

const TrendingGames = ({gameBanner}) => {

    useEffect(()=>{
    console.log(gameBanner);
    },[])
  return (
   <div className="mt-5 hidden md:block">
    <h2 className="font-bold text-[30px] dark:text-white mb-5">Trending Games</h2>
     <div className="hidden md:grid md:grid-cols-3 gap-5 lg:grid-cols-4">
        {gameBanner.map((item,index) =>index < 4  && (
            <div key={index} className="bg-[#76a8f75e] rounded-lg  hover:scale-110 ease-in-out transition-all duration-300 cursor-pointer">
                 <img className="h-[380px] object-cover rounded-t-lg" 
                 src={item.background_image} alt="" />
                 <h2 className="dark:text-white text-[20px] p-2 font-bold">{item.name}</h2>
            </div>
            ))}
    </div>
   </div>
  )
}

export default TrendingGames
