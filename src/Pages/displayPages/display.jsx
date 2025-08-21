import React from "react";
import './display.css';
import Content from "../display_content/conten";
import Recomen from "../recomended/recomen";
import { useParams } from "react-router-dom";

const Display = () => {
    // useParams is used to get the params from the url like req.params in express
    // and the pass its to display content for display specific video
    const { categoryID, displayID } = useParams();
    return (
        <div>
            <div className="display_container">
                <div className="main-content"><Content displayID={displayID} /></div>
                <div className="side-content"><Recomen categoryID={categoryID} /></div>
            </div>
        </div>
    );
}
export default Display;