import React from "react";
import './search_content.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data_converter } from "../../data";
import { channel_fetching, search_fetching, video_fetching } from "../../utility_fuction/api_fetching_fucntion";

const Search_content = ({ search_input }) => {
    const [loading, setLoading] = useState(true);
    const [data, set_data] = useState([]);
    const [channel, setChannel] = useState([]);
    const [video_data, set_video_data] = useState([]);

    useEffect(() => {
        (async () => {
            set_data(await search_fetching(search_input));
        })();
    }, [search_input]);

    useEffect(() => {
        if (data.length !== 0) {
            (async () => {
                const channels = [];
                const videos = [];

                for (const item of data) {
                    const ob1 = await channel_fetching(item.snippet.channelId);
                    const ob2 = await video_fetching(item.id.videoId);
                    channels.push(ob1);
                    videos.push(ob2);
                }

                setChannel(channels);
                set_video_data(videos);
                setLoading(false);
            })();
        }

    }, [data])
    if (loading) {
        return (
            <div className="loading_box">
                <div className="spinner"></div>
            </div>
        )
    }
    return (
        <div className="search-content">
            {data.map((item, idx) => {
                return (
                    <Link key={idx} to={`/display/${video_data[idx] ? video_data[idx].snippet.categoryId : ''}/${item.id.videoId}`} className="search-list">
                        <img className="poster" src={item.snippet.thumbnails.medium.url} alt="poster-youtube" />
                        <div className="search-content-description">
                            <h3>{item.snippet.title}</h3>
                            <p className="info">{`ดู ${data_converter(video_data[idx] ? video_data[idx].statistics.viewCount : '')} ครั้ง`}</p>
                            <div className="channel">
                                <img style={{ marginBottom: 0 }} src={channel[idx] ? channel[idx].snippet.thumbnails.default.url : ''} /><span>{item.snippet.channelTitle}</span>
                            </div>
                            <p className="desc">
                                {video_data[idx] ? video_data[idx].snippet.description.slice(0, 200) : ''}
                            </p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Search_content;