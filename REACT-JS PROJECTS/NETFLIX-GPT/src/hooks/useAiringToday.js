import { API_OPTIONS } from "../utils/constant";

const useAiringToday = () => {

    


    const getAiringToday = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);

    }
}

export default useAiringToday;