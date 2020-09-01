import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

    const functionsLoad = useSelector(state => state.functions.allFunctions.isLoading);
    const functions = useSelector(state => state.functions.allFunctions.functions);

    return (
        <div>
            <h1>Ma librairie</h1>
            { functionsLoad && functions.map((fonctionalité, i) => {
                    return (
                        <div className="function" key={i}>
                            <h2>{fonctionalité.titre}</h2>
                            <p>{fonctionalité.description}</p>
                        </div>
                        )
                    })
            }
        </div>
            )
}

export default About;