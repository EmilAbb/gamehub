
import axios from "axios";
const key ="f8e75fc0e16e42da87d6688bf3f5d1f4";

const axiosCreate= axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
const getGamesListByGenreId = (id) =>axiosCreate.get('/games?key='+key+'&genres='+id+'&page_size=100')

export default {
getGenreList,getAllGames,getGamesListByGenreId
}