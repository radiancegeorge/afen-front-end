import React from 'react';
import './loader.css'

const Loader = (props: any) => {

    return <React.Fragment>
        <div className="folding">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
        </div>
    </React.Fragment>
}
export { Loader };