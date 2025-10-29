import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  let {movieId} = useParams();  //let movieId = useParams().movieId 를 줄인것;
  //console.log('movieId',movieId);
  const [movie, setMovie] = useState({});  //{} 객체  [] 배열(여러항목)

  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      console.log('response', response)
      setMovie(response.data)
    }
    fetchData(); //함수 콜
  },[movieId])

  if(!movie) return null;
  return (
    <section>
      <img
        className='modal_poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='img'
      />

    </section>
  )
}

export default DetailPage