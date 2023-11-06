import { useEffect, useState } from "react"
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genereId,selectedGenresName}) => {

    const [genreList, setGenreList] = useState([])

    const [activeIndex,setActiveIndex] = useState(0)

    useEffect(() => {
        getGenreList()
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            setGenreList(resp.data.results)
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-[500] dark:text-white">Genres</h2>
            {
            genreList.map((item,index)=>(
                <div onClick={() =>{setActiveIndex(index),genereId(item.id)
                selectedGenresName(item.name)}} key={index}>
                    <div className={`genre-left flex gap-2
                     items-center mb-2 rounded-lg cursor-pointer hover:bg-gray-300 ease-in duration-200 p-2 dark:hover:bg-gray-600 ${activeIndex == index? 'bg-gray-300 dark:bg-gray-600'  : null}`}>
                        <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg  transition-all ease-out duration-300
                        ${activeIndex==index? "scale-105" :null}`} alt="" />
                        <h3 className={`dark:text-white text-[18px] font-[400]   transition-all ease-out duration-300 ${activeIndex==index? "font-bold" :null}`}>{item.name}</h3>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default GenreList
