import React from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import { useEffect } from 'react'
import axios from '../../axios'
import { useState } from 'react'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(() => {
  axios.get(props.url).then((response)=>{
    console.log(response.data)
    setMovies(response.data.results)
  })
  
  }, [])
  const opts = {
    height: '390',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoClick =(id)=>{
    console.log('Id'+id )
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
      }
      else{
        console.log("empty array")
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj,index)=>{
            return(
              <img onClick={()=>videoClick(obj.id)} className={props.isSmall?"smallPoster":"poster"} key={index} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
            )
          })
        }
      </div>
      {
       urlId && <Youtube opts={opts} videoId={urlId.key}></Youtube>
      }
      
    </div>
  )
}

export default RowPost
