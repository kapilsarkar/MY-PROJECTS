/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTvTrailer = (tvId) => {


    const getTvVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvId + "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        console.log(json);

    }

    useEffect(() => {
        getTvVideos();
    }, [])
}

export default useTvTrailer;