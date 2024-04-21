import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  // 왜 변수랑 밑에 movie를 맞춰줘야 하는지(저건 json 정보를 따라야 하는거 아닌지)
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // {status: 200, stasd: sdsd, data: {movie: {id:0}}}
    //movies = {id:0}
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  //왜 여기는 경고가 떴는지
  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        // map함수로 받아오면 오류나는 이유
        <div className={styles.detail_box}>
          <img
            className={styles.img}
            src={movies.large_cover_image}
            alt={movies.large_cover_image}
          />
          <h1>Title: {movies.title}</h1>
          <br />

          <div>
            <h4>year: {movies.year} </h4>
            <h4>rate: {movies.rating}/10 </h4>
            <h4>runtime: {movies.runtime}min</h4>
          </div>

          <br />
          <div>
            <h3>Description:</h3> {movies.description_full}
          </div>
          <br />
        </div>
      )}
    </div>
  );
}

export default Detail;
