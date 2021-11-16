import React from 'react';
import '../css/widget.css';

const WidgetNews = (props) => {
    return (
        <div>
            <li className="widget-news-item">
                <h6>{props.news}</h6>
                <p>{props.editTime}d Ago . {props.readers} readers</p>
            </li>
        </div>
    )
}

export default WidgetNews
