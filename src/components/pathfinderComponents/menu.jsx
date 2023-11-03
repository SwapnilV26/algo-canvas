import React, { Component } from "react";
import SimpleSelect from "./simpleSelect";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
// import './menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="flex justify-center items-center bg-slate-100 gap-10 py-2">
        <Link
          to="/visualize"
          className="font-bold py-2 px-5 pl-6 mr-16 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center transition duration-150 ease-in-out"
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
          className="transition duration-150 ease-in-out py-2 px-5 mr-2 text font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-50 hover:text-blue-700"
          onClick={this.props.onCreateMaze}
        >
          Create Maze
        </button>
        <button
          onClick={this.props.onVisualize}
          className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-md text px-5 py-2 transition duration-150 ease-in-out"
        >
          Visualize
        </button>
        <button
          onClick={this.props.onClearPath}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Clear Path
        </button>
        <button
          onClick={this.props.onClearBoard}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
        >
          Clear Board
        </button>
      </nav>
    );
  }
}

export default Menu;
