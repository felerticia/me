import React, { Component } from 'react';



class Scroller extends Component {
    componentDidMount(){
        document.querySelector('.scroller').addEventListener('click', (e) => {
            e.preventDefault();
            let pos = document.getElementById("section2").offsetTop - 2;
            scrollTo( pos, 500); 
        });
        function scrollTo(to, duration) {
            var start = document.documentElement.scrollTop,
                change = to - start,
                currentTime = 0,
                increment = 20;
            var animateScroll = function(){        
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                document.documentElement.scrollTop = val;
                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };
    }

    render() {
        return (
            <a className="scroller" href="#section2"><span></span></a>
        );
    }
}

export default Scroller;



