import React, {Component} from 'react';
import Rect from "./rect";
import FlipMove from 'react-flip-move';

class Rects extends Component {
    render() {
        let margin = 5;
        let width = 20;
        if( this.props.rects.length>50 ){
            margin=1;
            width=12;
        }
        return (
            <div>
                <FlipMove
                    className="flex justify-center items-end"
                    duration={this.props.speed}
                    // easing="cubic-bezier(.12,.36,.14,1.2)"
                >
                {this.props.rects.map( (rect,rectidx)=>{
                    return (
                        <Rect
                            marg={margin}
                            wid={width}
                            key={rect.kk}
                            rect={rect}
                        />
                    );
                } )}
                </FlipMove>
            </div>
        );
    }
}

export default Rects;