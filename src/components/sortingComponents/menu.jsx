import React, { Component } from "react";
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";
import SwitchLabels from "./formControlLabel";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

class Menu extends Component {
  render() {
    return (
      <div className="flex justify-center items-center bg-gray-200 gap-10 py-2">
        <Link
          to="/visualize"
          className="font-bold py-2 px-5 pl-6 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center transition duration-150 ease-in-out"
        >
          <MdArrowBackIos size={20} />
        </Link>

        <button
          className="transition duration-150 ease-in-out py-2 px-5 mr-2 text font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
          onClick={this.props.onRandomize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Randomize
        </button>

        <DiscreteSlider
          default={20}
          min={10}
          max={100}
          step={10}
          title="Data Size"
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
        <div className="flex">
          <SimpleSelect
            pos={0}
            onAlgoChanged={this.props.onAlgoChanged}
            onRandomize={this.props.onRandomize}
            disable={this.props.disable}
          />
          <SwitchLabels
            disable={this.props.disable}
            onDoubleChange={this.props.onDoubleChange}
          />
          <SimpleSelect
            pos={1}
            onAlgoChanged={this.props.onAlgoChanged}
            onRandomize={this.props.onRandomize}
            disable={this.props.disable}
          />
        </div>
        <button
          className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text px-5 py-2 transition duration-150 ease-in-out"
          onClick={this.props.onViusalize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Visualize
        </button>
      </div>
    );
  }

  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Menu;
