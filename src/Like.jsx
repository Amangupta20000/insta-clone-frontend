import React from 'react'
import pic1 from './images/1st.jpg'
import pic2 from './images/2nd.jpg'
import pic3 from './images/3rd.jpg'
import pic4 from './images/4th.png'

const Like = () => {
    return (
        <div>
            <div className="container-fluid  nav_bg">
                <div className="row ">
                    <div className="col-8 mx-auto mt-5  myFooter whiteDiv">
                    <h3 className='profileName text-center'>Activity</h3>
                        <div className='activity mt-5 p-4  text-left'>
                           
                            <h5 className='mb-4 '>Yesterday</h5>
                            <div className='row'>
                                <img className='activityImg' src={pic1} alt="" />
                                <h5 className='myActivity mt-4 mb-4'> <strong> Insta_id1, Insta_id2 </strong> and <strong>10 others</strong> started following you. <span className='dark'>1d</span> </h5>
                            </div>
                            <h5 className='mb-4 mt-5 monthORweek'>This Week</h5>
                            <div className='row'>
                                <img className='activityImg' src={pic4} alt="" />
                                <h5 className='myActivity mt-4 mb-4'>Your Contact Anonymous1 is on Instagram as <strong> Insta_id3</strong>   <span className='dark'>3d</span> </h5>
                            </div>
                            <div className='row mt-2'>
                                <img className='activityImg' src={pic3} alt="" />
                                <h5 className='myActivity mt-4 mb-4'> <strong> Insta_id4 </strong> mentioned you in a comment: Thank You 🔥 <span className='dark'>5d</span> </h5>
                            </div>
                            <h5 className='mb-4 mt-5 monthORweek'>This Month</h5>
                            <div className='row mt-2'>
                                <img className='activityImg' src={pic4} alt="" />
                                <h5 className='myActivity mt-4 mb-4'> <strong> Insta_id5 </strong> liked your comment: 🔥🔥🔥 <span className='dark'>1w</span> </h5>
                            </div>
                            <div className='row mt-2'>
                                <img className='activityImg' src={pic2} alt="" />
                                <h5 className='myActivity mt-4 mb-4'> <strong> Insta_id6 </strong> liked your comment: Nice🔥 <span className='dark'>2w</span> </h5>
                            </div>
                            <div className='row'>
                            <img className='activityImg' src={pic4} alt="" />
                            <h5 className='myActivity mt-4 mb-4'>Your Contact Anonymous2 is on Instagram as <strong> Insta_id3</strong>   <span className='dark'>3w</span> </h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Like 