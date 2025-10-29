import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import requests from '../api/request'
import './Banner.css'
import styled from 'styled-components'

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(()=>{
    fetchData();
  },[])
//async 비동기 처리방식
// response 가 오지 않은 상태가 아닌 결과값을 받은 이후의 값을 처리할때 : await
  const fetchData = async ()=>{
    //../api/axios.js 를 가져오기
    //현재 상영중인 영화 정보 가져오기(여러 영화)
    const response = await axios.get(requests.fetchNowPlaying);

    //여러 영화중 영화 하나의 ID를 가져오기(영화가 지금 20개 있고 거기서 하나를 뽑은 뒤 Id를 가져오는식)
    const movieId = response.data.results[
      Math.floor(Math.random()*response.data.results.length)
    ].id
     
    //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieId}`,{
      //더 무비db 에서 이렇게 하라고 약속한것
      params: {append_to_response: "videos"}
    })
    console.log('movieDetail ',movieDetail);
    setMovie(movieDetail);

    console.log(response);

  }
  
  const truncate = (str,n) =>{
    return str?.length>n?str.substring(0, n) +"..." : str;
  }

  if(isClicked){
    return(
      <>
      <Container>
        <HomeContainer>
          <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controlls=0&autopllay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow='autoplay; fullscreen'
           >
          </Iframe>
        </HomeContainer>
      </Container>
      <button onClick={()=>setIsClicked(false)}>X</button>
      </>
    )
  }else{
  return (
    <header
    className='banner'
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: "top center",
      backgroundSize: "cover"

    }}
    >
      <div className='banner_contents'>
      <h1 className='banner_title'>
        {movie.title || movie.name || movie.original_name}
      </h1>
      <div className='banner_buttons'>
        {/*movie가 o, video가 o result[0]이 있을때, key가 있을때 보여줌 */}
      {movie?.videos?.results[0]?.key &&
      <button
        className='banner_button play'
        onClick={()=>setIsClicked(true)}
        >
            play
      </button>
      }
      </div>
      <p className='banner_description'>
        {truncate(movie.overview,100)}
      </p>
      </div>
        <div className='banner-fadebottom '/>

    </header>
  )
  } 

}

export default Banner

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;