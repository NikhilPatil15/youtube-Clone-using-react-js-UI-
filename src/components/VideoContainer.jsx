import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Video from './Video'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
  //WHENEVER YOU ARE CALLING AN API DO IT WITHIN USEEFFECT
  const [data,setData] = useState([])
  const toggle = useSelector(state=>state.Toggle.open)
  const fetchVideos = async() =>{
    try {
      const res = await axios.get(String(import.meta.env.VITE_VIDEO_URL))
      console.log(res?.data?.items);
      setData(res?.data?.items);
    } catch (error) {
      console.log(error);
    }

    }

    useEffect(()=>{
      fetchVideos()
    },[])
  return (
    <div className={`grid ${toggle ? 'grid-cols-3 gap-3': 'grid-cols-4 gap-4'}   m-4`}>
      {data.map((video,index)=>(
        <Video key={video.id}url={video.snippet.thumbnails.high.url} title={video.snippet.title} channelName={video.snippet.channelTitle} channelId={video.snippet.channelId}/>
      ))}
    </div>
  )
}

export default VideoContainer