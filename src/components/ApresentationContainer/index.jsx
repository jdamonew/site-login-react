import React, {useState} from "react"
import ModalDeveloper from "../ModalDeveloper";
import "./style.scss"

const ApresentationContainer = () =>{
    const [modal, setModal] = useState(false);

    const setModalState=()=>{setModal(!modal)}

    return(
        <div className="container-apresentation">
            <img alt="logo" src="logo.png" className="logo-apresentation"/>
            <h1 className="title-apresentation">welcome to my site.</h1>
            <img alt="img-background.png" src="img-background.png" className="image-background"/>
            
            <div className='footer-apresentation'>
                <p className='footer-title'>Developed by</p>
                <ModalDeveloper open={modal} onClick={()=>setModalState()}/>
            </div>
        </div>
    )
}

export default ApresentationContainer;