import React from 'react';
import '../css/widget.css'
import WidgetNews from './WidgetNews';

const Widget = () => {
    return (
        <div className="widget">
            <h4>LinkedIn News</h4>
            <ul className="widget-news-container">
                <WidgetNews news="Aryan khan got bail" editTime="1" readers="3455"/>
                <WidgetNews news="Pakistan out of the T20 World Cup" editTime="2" readers="23422"/>
                <WidgetNews news="Stock Market hits all time mark today" editTime="4" readers="24533"/>
                <WidgetNews news="Rakesh Jhunjhunwala's portfolio grew..." editTime="5" readers="27688"/>
            </ul>
        </div>
    )
}

export default Widget
