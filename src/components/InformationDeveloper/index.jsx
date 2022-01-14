import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Config
import "./style.scss";
import socials from "../../config/social"

const InformationDeveloper = () => {
    return (
        <div className="container-information-developer">
            <h3>Jóbia Damone</h3>
            <span>Developer and Desiner</span>
            <div className="container-social" >
                {socials.map(s => (
                    <a href={s.link} target="_blank" rel="noreferrer">

                        <div href={s.link} key={s.id} className="social-icon">
                            <FontAwesomeIcon color="#f6f6f6" size="2x" icon={s.icon} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default InformationDeveloper;