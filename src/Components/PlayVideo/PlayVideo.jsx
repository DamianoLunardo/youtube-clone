import React, {  useState, useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import moment from 'moment'

import { API_KEY, value_converter } from '../../data.js'

const PlayVideo = ({ videoId }) => {

    const [api, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(videoDetails_url);
            const data = await response.json();
            setApiData(data.items[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API_KEY}`;
        try {
            const response = await fetch(channelData_url);
            const data = await response.json();
            setChannelData(data.items[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchCommentsData = async () => {
        const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        try {
            const response = await fetch(commentData_url);
            const data = await response.json();
            setCommentData(data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   
    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (api) {
            fetchOtherData();
        }
    }, [api]);

    useEffect(() => {
        if (api) {
            fetchCommentsData();
        }
    }, [api]);

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3>{api ? api.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{api ? api.statistics.viewCount : "30k"} views &bull; {moment(api ? api.snippet.publishTime : "2022-01-01").fromNow()} </p>
                <div>
                    <span><img src={like} alt="like" /> {api ? value_converter(api.statistics.likeCount) : "10k"}</span>
                    <span><img src={dislike} alt="dislike" /> {api ? api.statistics.dislikeCount : "10k"} </span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : jack} alt="jack" />
                <div>
                    <p>{api ? api.snippet.channelTitle : "Channel Name"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "10"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>{api ? api.snippet.description.slice(0,350) : ""}</p>
                <hr/>
                <h4>{api ? value_converter(api.statistics.commentCount) : "10"} comments</h4>
                
                {commentData.map((item, index) => (
                 <div className="comment" key={index}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user_profile" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className="action">
                                <span><img src={like} alt="like" /> {value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <span><img src={dislike} alt="dislike" /> 127</span>
                            </div>
                        </div>
                    </div>
                ))}   
            </div>
        </div>
    )
}

export default PlayVideo