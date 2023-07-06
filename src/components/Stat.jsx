import React from "react"
import ReactDOM from "react-dom/client"

export default function Stat() {
    return (
        <div className="stat-container">
            <div className="follower-box">
                <p>80K</p>
                <p>Followers</p>
            </div>
            <div className="likes-box">
                <p>803K</p>
                <p>Likes</p>
            </div>
            <div className="photos-box">
                <p>1.4K</p>
                <p>Photos</p>
            </div>
        </div>
    )
}