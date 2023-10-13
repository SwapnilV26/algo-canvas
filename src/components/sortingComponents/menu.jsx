import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import RangeSlider from "./doubleSlider";
import SwitchLabels from "./formControlLabel";


class Menu extends Component {
    render() {
        return (
            <div className="flex justify-center items-center bg-sky-100">
                <button
                    className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700'
                    onClick={this.props.onRandomize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Randomize
                </button>

                {/* <RangeSlider
                    disable={this.props.disable}
                /> */}

                <DiscreteSlider
                    default={20}
                    min={10}
                    max={100}
                    step={10}
                    title="Numbers"
                    onCountChange={this.props.onCountChange}
                    disable={this.props.disable}
                />
                <DiscreteSlider
                    default={50}
                    min={10}
                    max={100}
                    step={1}
                    title="Speed"
                    onCountChange={this.props.onSpeedChange}
                    disable={false}
                />
                <SimpleSelect
                    pos={0}
                    onAlgoChanged={this.props.onAlgoChanged}
                />
                <SwitchLabels
                    disable={this.props.disable}
                    onDoubleChange={this.props.onDoubleChange}
                />
                <SimpleSelect
                    pos={1}
                    onAlgoChanged={this.props.onAlgoChanged}
                />
                <button
                    className='text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2'
                    onClick={this.props.onViusalize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Visualize
                </button>

            </div>
        );
    }
    isClickable = () =>{
        if( this.props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}


export default Menu;
