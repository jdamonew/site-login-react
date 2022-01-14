import React from "react";
import "./style.scss";

const Avatar = ({src}) =>{
    return(
        <div className="container-avatar">
            {/* <Blob img={src}/> */}
            <img alt="avatar" src={src} className="avatar"/>
            <div className="blob"/>
        </div>
    )
}

export default Avatar