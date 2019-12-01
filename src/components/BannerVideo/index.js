import React, { Component } from 'react';
import VideoLab from '../../components/BannerVideo/lab.mp4'

require('./style.css');

let time = "#t=,2.9";

export default class VideoBanner extends Component {

    render() {
        return (
            <div className="video-banner">
                <video autoPlay muted loop>
                    <source src={VideoLab + time} type="video/mp4" preload="metadata" />
                </video>
            </div>
        )
    }
}