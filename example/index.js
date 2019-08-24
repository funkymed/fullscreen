import React, {Component} from 'react'
import {render} from 'react-dom'
import $ from "jquery";
import '../dist/Fullscreen'

let node = document.getElementById('app');

class Example extends Component
{
    constructor()
    {
        super();
        this.resize = this.resize.bind(this);
    }

    componentDidMount()
    {
        $('.imgresized').Fullscreen({fade:3000});
        this.resize();
        $(window).on('resize', this.resize);
        $('.info').css('opacity',.9);
    }

    resize()
    {
        var _w = $(window).width();
        var _h = $(window).height();
        var item = $('.info');
        item.css({
            top:_h/2 - item.height()/2 - 15/2,
            left:_w/2 - item.width()/2 - 15/2
        });
    };

    render()
    {
        return (
            <div>
                <img className="imgresized" src="images/image7.jpg" />
            </div>
        );
    }
}

render(
<Example/>,
    node
);
