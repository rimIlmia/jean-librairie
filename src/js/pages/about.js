import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {

    const activityLoad = useSelector(state => state.activity.allActivity.isLoading);
    const activity = useSelector(state => state.activity.allActivity.activity);

    return (
        <div>
            <h1>Ma librairie</h1>
            { activityLoad && activity.map((about, i) => {
                    return (
                        <div className="function" key={i}>
                            <h2>{about.titre}</h2>
                            <p>{about.description}</p>
                            <img src={`http://localhost:1337${about.image[0].url}`}></img>
                        </div>
                        )
                    })
            }
        </div>
            )
}

export default About;