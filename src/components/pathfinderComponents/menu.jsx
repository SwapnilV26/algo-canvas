import React, { Component } from 'react';
import SimpleSelect from "./simpleSelect";
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark" >
                <div>
                    <SimpleSelect
                        onAlgoChanged={this.props.onAlgoChanged}
                        items={this.props.algorithms}
                    />
                </div>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={this.props.onCreateMaze}>
                    Create Maze
                </button>
                <button
                    onClick={this.props.onVisualize}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >Visualize</button>
                <button
                    onClick={this.props.onClearPath}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Clear Path</button>
                <button
                    onClick={this.props.onClearBoard}
                    className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Clear Board</button>
            </nav>
        );
    }
}

export default Menu;