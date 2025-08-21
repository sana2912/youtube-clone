import React from "react";
import './home.css'
import Feeds from "../feeds/feeds";
import Search_content from "../feeds/search_content";
const Home = ({ side_bar, category, search_input }) => {
    // side_bar represents side-bar toggler for app component

    // this useState we will use useState for set category display for our feeds
    // and we will use side-bar component to set it and effect to feeds component 
    return (
        <>
            <div className={`${side_bar === 'side-bar' ? "container" : "large-container"}`}>
                {search_input
                    ? <Search_content search_input={search_input} />
                    : <Feeds category={category} />}
            </div>
        </>
    );
}

export default Home;    