import React, { Component } from "react";
import SimpleSelect from "./simpleSelect";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
// import './menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="flex justify-center items-center bg-gray-200 gap-10 py-1">
        <Link
          to="/visualize"
          className="font-bold py-2 px-5 pl-6 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center transition duration-150 ease-in-out"
        >
          <MdArrowBackIos size={20} />
        </Link>
        <div>
          <SimpleSelect
            onAlgoChanged={this.props.onAlgoChanged}
            items={this.props.algorithms}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.props.onCreateMaze}
        >
          Create Maze
        </button>
        <button
          onClick={this.props.onVisualize}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Visualize
        </button>
        <button
          onClick={this.props.onClearPath}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Path
        </button>
        <button
          onClick={this.props.onClearBoard}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear Board
        </button>
      </nav>
    );
  }
}

export default Menu;
