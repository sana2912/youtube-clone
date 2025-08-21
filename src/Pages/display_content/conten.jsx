import React, { use } from "react";
import './content.css';
import like_icon from '../../assets/like.png';
import dislike_icon from '../../assets/dislike.png';
import share_icon from '../../assets/share.png';
import save_icaon from '../../assets/save.png';
import user_portait from '../../assets/user_profile.jpg';
import jack from '../../assets/jack.png';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import { data_converter } from "../../data";
import { channel_fetching, comments_fetching, video_fetching } from "../../utility_fuction/api_fetching_fucntion";
dayjs.locale('th'); // Set locale to Thai

const Content = () => {
    const [loading, setLoading] = useState(true);
    const { displayID } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    const [content, setContent] = useState(null);
    const [channel, setChannel] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        (async () => {
            setContent(await video_fetching(displayID));
        })();
    }, [displayID]);

    useEffect(() => {
        if (content && content.snippet && content.snippet.channelId) {
            (async () => {
                setChannel(await channel_fetching(content.snippet.channelId));
                setComments(await comments_fetching(content.id));
                setLoading(false);
            })();
        }
        // this state will run get channel data when content is fetched
    }, [content])
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    if (loading) return <p>data is loading</p>
    return (
        <div className="content-container">
            <iframe
                src={`https://www.youtube.com/embed/${displayID}?autoplay=1&mute=1`}
                title={content ? content.snippet.title : ''}
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
            >
            </iframe>
            <h2 className="title">{content ? content.snippet.title : ''}</h2>
            <div className="publisher">
                <div className="publisher-info">
                    <img src={channel ? channel.snippet.thumbnails.default.url : ''} alt="User Portrait" className="user-portrait" />
                    <div className="publisher-details">
                        <h3 className="author">{content ? content.snippet.channelTitle : ''}</h3>
                        <p className="publisher-subscription"><span>{channel ? data_converter(channel.statistics.subscriberCount) : ''} ผู้ติดตาม</span></p>
                    </div>
                    <button className="action-button follow-button">
                        ติดตาม
                    </button>
                </div>
                <div className="publisher-actions">
                    <button className="action-button like-button">
                        <img className="action-btn" src={like_icon} alt="Like" /><span>{content ? data_converter(content.statistics.likeCount) : ''}</span>
                    </button>
                    <button className="action-button dislike-button">
                        <img className="action-btn" src={dislike_icon} alt="Dislike" />
                    </button>
                    <button className="action-button share-button">
                        <img className="action-btn" src={share_icon} alt="Share" /><span>แชร์</span>
                    </button>
                    <button className="action-button save-button">
                        <img className="action-btn" src={save_icaon} alt="Save" /><span>บันทึก</span>
                    </button>
                </div>
            </div>
            <div className="content-info">
                <h3>{`การดู ${content ? content.statistics.viewCount : ''} ครั้ง ${dayjs(content ? content.snippet.publishedAt : '').format('D MMMM YYYY')}`}</h3>
                <div onClick={toggleDescription} className={`${isExpanded ? 'description-expanded' : 'description'}`}>
                    <p>{content ? content.snippet.description : ''}</p>
                </div>
            </div>
            <div className="comment-section">
                <h3>{content ? content.statistics.commentCount : ''} ความคิดเห็น</h3>
                {comments.map((item, indx) => {
                    return (
                        <div key={indx} className="comment">
                            <div className="head-section">
                                <img className="user-accout" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user profile comment" />
                                <h4 className="author">{item.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                                <span>{dayjs(item.snippet.topLevelComment.snippet.publishedAt).format('D MMMM YYYY')}</span>
                            </div>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img className="action-btn-cm" src={like_icon} alt="like icom img" />
                                <span style={{ fontSize: '12px' }}>ชอบ {data_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img className="action-btn-cm" src={dislike_icon} alt="dislike icon img" />
                                <span style={{ fontSize: '12px' }}>ไม่ชอบ</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Content;