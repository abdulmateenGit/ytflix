import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ddd1c6d054msh245a5b7a998694ap1fa3ecjsn6f2b82efd981',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };


    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.results;
    console.log(main_data)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;