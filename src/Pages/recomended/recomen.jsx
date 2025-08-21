import React from "react";
import './recomen.css';
import { Link } from "react-router-dom";
import { data_converter } from "../../data";
import { feed_fetching } from "../../utility_fuction/api_fetching_fucntion";

const Recomen = ({ categoryID }) => {
    const [data, set_data] = React.useState([]);
    React.useEffect(() => {
        // Fetch recommended videos based on the category ID
        (async () => {
            set_data(await feed_fetching(categoryID, set_data));
        })();
    }, []);
    return (
        <div className="recomen-content">
            {data.map((item, idx) => {
                return (
                    <Link key={idx} to={`/display/${item.snippet.categoryId}/${item.id}`} className="side-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="poster-youtube" />
                        <div className="side-content-description">
                            <h3>{item.snippet.title}</h3>
                            <p className="channel">{item.snippet.channelTitle}</p>
                            <p className="info">{`ดู ${data_converter(item.statistics.viewCount)} ครั้ง`}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default Recomen;