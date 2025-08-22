'use client';

import axios from "axios";
import './index.scss';
import { useEffect, useState } from "react";
import MovieCard from '../MovieCard';
import {Movie} from '@/types/movie';
import ReactLoading from 'react-loading';





export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);


    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        getMovies()
    }, []);



    const getMovies = async () => {
       await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '7c875ed6196573839867f05af7cd6115',
                language: 'pt-br'
            }
        }).then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
        });

        setIsLoading(false);
    }; 

    
        





    



    return (
        

        <ul className="movie-list">
            {movies.map((movie) =>
            <MovieCard
            key={movie.id}
            movie={movie}
            />
        )}
        </ul>
        
    )
}