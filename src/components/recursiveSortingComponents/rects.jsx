import React, {Component} from 'react';
import Rect from "./rect";

class Rects extends Component {
    render() {
        let margin = 5;
        let width = 20;
        if( this.props.rects.length>50 ){
            margin=1;
            width=12;
        }

        return (
            <div className="flex justify-center items-end">
                {this.props.rects.map( (rect,rectidx)=>{
                    return (
                        <Rect
                            marg={margin}
                            wid={width}
                            key={rectidx}
                            rect={rect}
                        />
                    );
                } )}
            </div>
        );
    }
}

export default Rects;