import React from "react";
import './navbar.css';
import menu_icon from '../../assets/menu.png';
import logi_icon from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { search_autocomplete } from "../../utility_fuction/api_fetching_fucntion";

const Navbar = ({ set_side_bar, set_search_input, set_reload }) => {
    const [input, set_input] = useState(null);
    const [autoComplete, setautoComplate] = useState([]);
    const extends_bar = () => {
        set_side_bar((prev) => prev === 'side-bar' ? 'side-callaps' : 'side-bar');
    }
    const get_input_field = async (event) => {
        const input_data = event.target.value;
        if (input_data !== "") {
            set_input(input_data);
            const data = await search_autocomplete(input_data);
            setautoComplate(data);
        }
        else (setautoComplate([]));
    }
    const search_action = async () => {
        await set_search_input(input);
    }
    const item_search_action = async (input) => {
        await set_search_input(input);
    }
    const reload_func = () => {
        set_reload(prev => !prev);
    }
    console.log(autoComplete);
    return (
        <nav className="flex-div">
            <div className="left flex-div">
                <img className="menu_icon" onClick={extends_bar} src={menu_icon} alt="menu-icon" />
                <Link onClick={reload_func} to='/'><img className="logo_icon" src={logi_icon} alt="logo-icon" /></Link>
            </div>
            <div className="center flex-div ">
                <div className="search_box">
                    <input type="search" name="search" id="search" placeholder="ค้นหา" onChange={get_input_field} autoComplete="off" />
                    <img onClick={search_action} src={search_icon} alt="serach-icon" />
                </div>
                {
                    autoComplete.length > 0 &&
                    <div className="auto_complete">
                        {autoComplete.map((item, idx) => {
                            return (
                                <p onClick={() => item_search_action(item)} className="autoComplete_item" key={idx}>{item}</p>
                            )
                        })}
                    </div>
                }
            </div>
        </nav>
    );
}

export default Navbar;