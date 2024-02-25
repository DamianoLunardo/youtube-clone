import React from "react"
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import music from '../../assets/music.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'



const Sidebar = ({sidebar, category, setCategory}) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="sortcut-links">
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={()=>setCategory(0)}>
                    <img src= { home } alt="home" /> <p>Home</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={()=>setCategory(20)}>
                    <img src= { game_icon } alt="home" /> <p>Gaming</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={()=>setCategory(2)}>
                    <img src= { automobiles } alt="home" /> <p>Automobiles</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={()=>setCategory(17)}>
                    <img src= { sports } alt="home" /> <p>Sports</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={()=>setCategory(24)}>
                    <img src= { entertainment } alt="home" /><p>Entertainment</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={()=>setCategory(28)}>
                    <img src= { tech } alt="home" /> <p>Tecnology</p>
                </div>
            </div>
            <div className="sortcut-links">
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={()=>setCategory(10)}>
                    <img src= { music } alt="home" /> <p>Music</p>
                </div>
            </div>
            {/* <div className="sortcut-links">
                <div className={`side-link ${category === 21 ? "active" : ""}`}onClick={()=>setCategory(21)}>
                    <img src= { blogs } alt="home" /> <p>Blogs</p>
                </div>
            </div> */}
            <div className="sortcut-links">
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={()=>setCategory(25)}>
                    <img src= { news } alt="home" /> <p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h1>Subscribed</h1>
                <div className="side-link">
                    <img  src= { jack } alt="name" /> <p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img  src= { simon } alt="name" /> <p>MrBeast</p>
                </div>
                <div className="side-link">
                    <img  src= { tom } alt="name" /> <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img  src= { megan } alt="name" /> <p>5-Minute Workouts</p>
                </div>
                <div className="side-link">
                    <img  src= { cameron } alt="name" /> <p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar