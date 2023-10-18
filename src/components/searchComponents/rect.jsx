import React, { Component } from 'react';
import './style.css';
class Rect extends Component {

    render() {
        return (
            <div
                className='rect'
                style={{
                    height: this.props.rect.width,
                    // background: this.checkColor(),
                    background: this.getColorClass(),
                    margin: this.props.marg,
                    // float:'left',
                    verticalAlign: 'middle',
                    width: this.props.wid,
                    color: 'white',
                    textAlign: 'center'
                }}
            >
                {this.props.rect.width}
            </div>
        );
    }
    // checkColor = () => {
    //     if (this.props.rect.isSorted) {
    //         return "green";
    //     } else if (this.props.rect.isSorting) {
    //         return "red";
    //     } else {
    //         return "black"
    //     }
    // }

    getColorClass = () => {
        if (this.props.rect.isFound) {
            return 'green';
        } else if (this.props.rect.isSorting) {
            return 'red';
        } else if (this.props.rect.isChecked) {
            return 'black';
        } else {
            return 'black';
        }
    }
}

export default Rect;