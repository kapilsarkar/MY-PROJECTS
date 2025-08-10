/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTvTrailer = (tvId) => {

    const dispatch = useDispatch();

    const getTvVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/" + tvId + "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        console.log(json?.results);
        const filterData = json.results.filter((video) => video?.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getTvVideos();
    }, [])
}

export default useTvTrailer;