import React from 'react'
import pic1 from './images/1st.jpg'
import pic2 from './images/2nd.jpg'
import pic3 from './images/3rd.jpg'

let setNumPost;

 const Posts = () => {
    
    let Loading = true;
    
    function get_cookies_array() {
        var cookies = { };
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i++) {
                var name_value = split[i].split("=");
                name_value[0] = name_value[0].replace(/^ /, '');
                cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
            }
        } 
        return cookies;   
    }
   
    let arr=[]
     arr = Object.entries(get_cookies_array()).slice(0,arr.length-1);
    setNumPost=arr.length;

    if(setNumPost===0 ){
        Loading=true
    }
    else{
        Loading=false
    }
    return (
        <div>
            <div className="container-fluid nav_bg postMainContainer">
                <div className="row mt-5 mb-5 ms-2 text-center">
                    <div className="col-xlg-8 col-lg-10 col-md-10 col-sm-11 col-xs-12 PostImage "> 
                        <img className='Images col-xlg-2 ' src={pic1} alt="..."  />
                        <img className='Images col-xlg-2 ' src={pic2} alt="..."  />
                        <img className='Images col-xlg-2 ' src={pic3} alt="..."  />  
                        {
                            Loading ? ('') :
                            (     
                                arr.map((curVal,index)=>{
                                    return(
                                        <img src={curVal[1]} key={index} className="Images col-xlg-2" alt="..."  />
                                 ) } )
                              ) 
                        }  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
export {setNumPost}