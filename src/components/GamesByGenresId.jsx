import { useEffect } from "react"
import {AiFillStar} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import {AiTwotoneFire} from 'react-icons/ai'

const GamesByGenresId = ({gameListByGenres,selectedGenresName}) => {
  useEffect(() => {
     console.log("GameList",gameListByGenres);
  },[])
  return (
   <div className="mt-7">
    <h2 className="font-bold text-[30px] dark:text-white">{selectedGenresName} Games</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
      {gameListByGenres.map((item,index) => (
            <div key={index} className="bg-[#76a8f75e] p-3 rounded-lg h-[360px] hover:scale-110 cursor-pointer ease-in-out duration-300">
               <img className="w-full h-[80%] rounded-xl object-cover"  src={item.background_image}/>
               <h2 className="text-[18px] text-white font-bold">{item.name}<span className="rounded-sm ml-2 text-[10px] bg-green-100
               text-green-700 font-medium p-1">{item.metacritic}</span></h2>
               <h2 className="flex items-center gap-2 text-gray-500 dark:text-gray-200"><AiFillStar className="text-amber-400"/>{item.rating}<FaComment className="text-white"/>{item.reviews_count}
               <AiTwotoneFire className="text-orange-500"/>{item.suggestions_count}</h2>
            </div>
      )) 
      }
    </div>
   </div>
  )
}

export default GamesByGenresId
