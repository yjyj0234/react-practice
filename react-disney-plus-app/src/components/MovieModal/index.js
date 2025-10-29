import React, { useEffect, useRef } from 'react'
import './MovieModal.css';
import useOnclickOutside from '../../hooks/useOnclickOutside';

const MovieModal = ({
    //props가져오기
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
const ref = useRef();//생성한 객체를 가리키고 싶은 요소에 넣어주면 해당 DOM을 가리킬수 있음
useEffect(()=>{
    

    console.log('ref',ref.current); //undefined로 뜸 
})


useOnclickOutside(ref,()=>{ 
    setModalOpen(false);
})

  return (
    <div className='presentation' role='presentation'>
        <div className='wrapper-modal'>
            <div className='modal' ref={ref}>
            <span 
                onClick={()=> setModalOpen(false)}
                className='modal-close'
            >
                X
            </span>
            <img
                className='modal_poster-img'
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt='modal-img'
            />
            <div className='modal_content'>
                <p className='modal_details'>
                    <span className='modal_user_perc'>100% for you</span>{" "}
                    {release_date ? release_date : first_air_date}
                </p>

                <h2 className='modal_title'>{title? title:name}</h2>
                <p className='modal_overview'>평점: {vote_average}</p>
                <p className='modal_overview'>{overview}</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default MovieModal