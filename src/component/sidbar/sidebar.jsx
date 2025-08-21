import React, { use } from "react";
import './sidebar.css';

import home_icon from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobile_icon from '../../assets/automobiles.png';
import music_icon from '../../assets/music.png';
import blogs_icon from '../../assets/blogs.png';
import entertainment_icon from '../../assets/entertainment.png';
import news_icon from '../../assets/news.png';
import tech_icon from '../../assets/tech.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const set_callaps = (side_bar, loc) => {
    if (loc && side_bar === 'side-callaps') {
        return 'hide';
    }
    else {
        return side_bar;
    }
}
const SideBar = ({ side_bar, category, setCategory, set_reload }) => {
    const location = useLocation();

    const [action, setAction] = useState(() => {
        // Initialize the action state based on the current side_bar state and location
        // This will ensure that the sidebar state is set correctly on the first render
        const loc = location.pathname.startsWith('/display');
        return set_callaps(side_bar, loc);
    });

    // remenber useEffect Runs After the Render
    useEffect(() => {
        // Update the action state whenever side_bar or location.pathname changes
        // This will ensure that the sidebar state is updated correctly
        const loc = location.pathname.startsWith('/display');
        setAction(set_callaps(side_bar, loc));
    }, [side_bar, location.pathname]);

    const reload_func = () => {
        set_reload(prev => !prev);
    }

    return (
        <div className={action}>
            <div className="navigate-link">
                <Link to='/' className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => { setCategory(0); reload_func(); }}>
                    <img src={home_icon} alt="home-icon" />
                    <p>หน้าแรก</p>
                </Link>
                <Link to='/' className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => { setCategory(20); reload_func(); }}>
                    <img src={game_icon} alt="game-icon" />
                    <p>เกม</p>
                </Link>
                <Link to='/' className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => { setCategory(2); reload_func(); }}>
                    <img src={automobile_icon} alt="automobile-icon" />
                    <p>ยานยนต์</p>
                </Link>
                <Link to='/' className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => { setCategory(10); reload_func(); }}>
                    <img src={music_icon} alt="music-icon" />
                    <p>เพลง</p>
                </Link>
                <Link to='/' className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => { setCategory(22); reload_func(); }}>
                    <img src={blogs_icon} alt="blogs-icon" />
                    <p>บล็อก</p>
                </Link>
                <Link to='/' className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => { setCategory(24); reload_func(); }}>
                    <img src={entertainment_icon} alt="entertainment-icon" />
                    <p>ความบันเทิง</p>
                </Link>
                <Link to='/' className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => { setCategory(25); reload_func(); }}>
                    <img src={news_icon} alt="news-icon" />
                    <p>ข่าว</p>
                </Link>
                <Link to='/' className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => { setCategory(28); reload_func(); }}>
                    <img src={tech_icon} alt="tech-icon" />
                    <p>เทคโนโลยี</p>
                </Link>
            </div>
            <hr />
        </div >
    );
}

export default SideBar;