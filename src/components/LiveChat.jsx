import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessage, setMessage } from '../redux/Features/ChatSlice'
import { generateRandomName, generateRandomMessage } from '../RandomGeneration/random'

const LiveChat = () => {
    const chat = useSelector(state=> state.Chat.message)
    const dispatch = useDispatch()


    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}))
        },5000)

        return(()=>{
            clearInterval(timer)
            dispatch(clearMessage())
        })
    },[])
  return (
    <div className='px-4 py-1'>
        <div>
            {chat.map((item,index)=>{

                return(
                    <ChatMessage item={item} key={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default LiveChat