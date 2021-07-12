import React, { useEffect,useState } from 'react'
import profilePic from './images/myProfilePic.jpg'
import Posts from './Posts'
import { Image } from "./UploadImage";
import {setNumPost} from './Posts'

function Home() {
    const [numOfPost, setnumOfPost] = useState(3)
   useEffect(()=>{
    setnumOfPost(3 + setNumPost)
   },
   // eslint-disable-next-line
   [Image])
    return (
        <div>
            <div className="container-fluid  nav_bg">
                <div className="row ">
                    <div className="col-10 col-lg-8 col-xlg-8 col-md-8 col-sm-8 mx-auto mt-5 ">
                    <div className='row pb-5 myDetails'>
                        <img src={profilePic} className='profilePic' alt="..."  />
                        <div className='details ms-4'>
                            <h3 className='profileName'>Your_Insta_Id</h3>
                            <label htmlFor="" className='mt-2 numOfPosts'><strong className='postNum'>{numOfPost}</strong> posts</label>
                            <label htmlFor="" className='mt-2 ms-5'><strong>188</strong> followers</label>
                            <label htmlFor="" className='mt-2 ms-5'><strong>235</strong> following</label>
                            <br />
                            <label htmlFor="" className='mt-2'><strong>Your Name</strong></label>
                            <br />
                            <label htmlFor="" className='mt-1'>Your Desciption...</label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Posts/>
        </div>
    )
}

export default Home
