import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Yooo nice video</h3>
            <div className="play-video-info">
                <p>13K views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like" /> 5K</span>
                    <span><img src={dislike} alt="dislike" /> 500</span>
                    <span><img src={share} alt="share" /> Share</span>
                    <span><img src={save} alt="save" /> Save</span>
                </div>
            </div>
            <hr/>
            <div className="publisher">
                <img src={jack} alt="jack" />
                <div>
                    <p>GreatStack</p>
                    <span>1.4M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>Easy way to learn React</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h4>120 Comment</h4>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="user_profile" />
                    <div>
                        <h3>Marco Carta <span>3 days ago</span></h3>
                        <p>Great video</p>
                        <div className="action">
                            <span><img src={like} alt="like" /> 1K</span>
                            <span><img src={dislike} alt="dislike" /> 127</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo