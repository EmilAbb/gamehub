import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import GenreList from "../components/GenreList"
import Banner from "../components/Banner"
import TrendingGames from "../components/TrendingGames"
import GamesByGenresId from "../components/GamesByGenresId"


const Home = () => {

    const [allGameList,setAllGameList] = useState()
    const [gameListByGenres,setGameListByGenres] = useState([])
    const [selectedGenresName,setSelectedGenresName]=useState('Action')

    useEffect(()=>{
        getAllGamesList()
        getGamesListByGenresId(4)
    },[])


    const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
    setAllGameList(resp.data.results)
    })
    }

    const getGamesListByGenresId = (id) => {
    GlobalApi.getGamesListByGenreId(id).then((resp) => {
    console.log(resp.data.results);
    setGameListByGenres(resp.data.results)
    })
    }

    return (
        <div className="custom-container grid grid-cols-4 mt-5 px-5">
            <div className=" hidden md:block"><GenreList genereId={(genereId)=>getGamesListByGenresId(genereId)} 
            selectedGenresName={(name)=>setSelectedGenresName(name)}/></div>
            <div className="col-span-4 md:col-span-3  px-5">
                {allGameList?.length > 0 && gameListByGenres.length >0? <div>
                    <Banner allGameList={allGameList[0]}/>
                    <TrendingGames gameBanner={allGameList}/>
                    <GamesByGenresId gameListByGenres={gameListByGenres}
                    selectedGenresName={selectedGenresName}/>
                </div> :null}
            </div>
        </div>
    )
}

export default Home
