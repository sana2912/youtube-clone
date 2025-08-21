import React, { use } from "react";
import './feeds.css';

// Importing dayjs for date formatting and set it for thai locale date formatting
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/th';
dayjs.extend(relativeTime);
dayjs.locale('th'); // Set locale to Thai
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data_converter } from "../../data";
import { feed_fetching } from "../../utility_fuction/api_fetching_fucntion";


const Feeds = ({ category }) => {
    const [data, set_data] = useState([]);
    useEffect(() => {
        (async () => {
            set_data(await feed_fetching(category));
        })();
    }, [category]);
    return (
        <div className="cards">
            {data.map((item, index) => {
                return (
                    <Link to={`/display/${item.snippet.categoryId}/${item.id}`} key={index} className="card">
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div className="card-info">
                            <h3>{item.snippet.title}</h3>
                            <p>{item.snippet.channelTitle}</p>
                            <span>การดู {data_converter(item.statistics.viewCount)} ครั้ง {dayjs(item.snippet.publishedAt).fromNow()}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}

export default Feeds;