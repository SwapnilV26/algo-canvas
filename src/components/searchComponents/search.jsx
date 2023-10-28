import React, { Component } from "react";
import Rects from "./rects";
import Menu from "./menu";
import AlgoInfo from "../AlgoInfo";
import { Box } from "@mui/material";
import Algos from "../../assets/data.json";

class Sort extends Component {
    state = {
        count: 20,
        rects: [],
        speed: 50,
        isRunning: false,
        algo1: 0,
        open: false,
        num: null,
        foundAt: 0,
        resultFound: false,
        resultNotFound: false
    };

    passElement = (element) => {
        this.state.num = element;
    }

    componentDidMount() {
        this.handleRandomize();
    }

    linearSearch = async () => {
        let n = this.state.rects.length;
        for (let i = 0; i < n; i++) {
            const updatedRects = this.state.rects.map((rect, index) => {
                return {
                    ...rect,
                    isSorted: index <= i,
                    isSorting: index === i,
                    isChecked: index < i,
                    isFound: parseInt(rect.width) === parseInt(this.state.num) && index === i,
                };
            });

            this.setState({ rects: updatedRects });
            await sleep(this.state.speed);

            if (parseInt(this.state.rects[i].width) === parseInt(this.state.num)) {
                this.setState({ foundAt: i });
                this.setState({ resultFound: true });
                this.setState({ isRunning: false });
                return;
            }
        }
        this.setState({ resultNotFound: true })
        this.setState({ isRunning: false })
    }

    binarySearch = async () => {
        let left = 0;
        let right = this.state.rects.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const updatedRects = this.state.rects.map((rect, index) => {
                return {
                    ...rect,
                    isSorted: index < left || index > right,
                    isSorting: index === mid,
                    isChecked: index >= left && index <= right,
                    isFound: parseInt(rect.width) === parseInt(this.state.num) && index === mid,
                };
            });

            this.setState({ rects: updatedRects });
            await sleep(this.state.speed);

            if (parseInt(this.state.rects[mid].width) === parseInt(this.state.num)) {
                this.setState({ foundAt: mid });
                this.setState({ resultFound: true });
                this.setState({ isRunning: false });
                return;
            } else if (parseInt(this.state.rects[mid].width) < parseInt(this.state.num)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        this.setState({ resultNotFound: true });
        this.setState({ isRunning: false });
    }



    render() {
        return (
            <React.Fragment>
                <div className="py-8">
                    <Menu
                        disable={this.state.isRunning}
                        onViusalize={this.handleSort}
                        onRandomize={this.handleRandomize}
                        onRefresh={this.handleRefresh}
                        onCountChange={this.handleCountChange}
                        onAlgoChanged={this.handleAlgoChanged}
                        onSpeedChange={this.handleSpeedChanged}
                        passElement={this.passElement}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 mt-16">
                    <Rects speed={this.state.speed} rects={this.state.rects} />
                    <div>
                        <p className="font-semibold text-lg mt-5">
                            <em className="font-normal">Algorithm:</em>{" "} {Algos.searching[this.state.algo1].name}
                        </p>
                        <p className="font-semibold text-lg">
                            <em className="font-normal">Time Complexity:</em>{" "}  {Algos.searching[this.state.algo1].timeComplexity}
                        </p>
                        <button
                            onClick={this.handleClickOpen}
                            className="text-white px-5 py-2 mt-2 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        >
                            View more
                        </button>
                        <Box>
                            <AlgoInfo
                                open={this.state.open}
                                handleClose={this.handleClickOpen}
                                data={{
                                    type: "searching",
                                    index: this.state.algo1
                                }}
                            />
                        </Box>
                    </div>
                    {this.state.resultFound &&
                        <span className="text-xl text-green-600 font-bold text-center">
                            Element found at position {this.state.foundAt + 1} :)
                        </span>
                    }
                    {this.state.resultNotFound &&
                        <span className="text-xl text-red-500 font-bold text-center">
                            Element not present 😟
                        </span>
                    }
                </div>
            </React.Fragment>
        );
    }

    handleClickOpen = () => {
        this.setState({ open: !this.state.open });
    };


    handleRandomize = () => {
        const rect = getInitialRects(this.state.count);
        this.setState({ rects: rect });
        this.setState({ resultFound: false })
        this.setState({ resultNotFound: false })
    };

    handleCountChange = (val) => {
        this.setState({ count: val });
        this.handleRandomize();
    };

    handleAlgoChanged = (pos, val) => {
        if (pos === 0) {
            this.setState({ algo1: val });
        }
    };
    handleSpeedChanged = (val) => {
        const speed = 760 - val * 7.5;
        this.setState({ speed });
    };
    handleSort = () => {
        if (this.state.num === null) {
            alert("Please insert a number to search");
            return;
        }
        this.setState({ resultFound: false });
        this.setState({ resultNotFound: false })
        this.setState({ isRunning: true });
        switch (this.state.algo1) {
            case 0:
                this.linearSearch();
                break;
            case 1:
                this.binarySearch();
                break;
            default:
                this.linearSearch(this.state.rects, this.state.element)
                break;
        }
    };
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const getInitialRects = (tot) => {
    const rects = [];
    let prevWidth = 0;
    for (let i = 0; i < tot; i++) {
        const width = prevWidth + Math.floor(Math.random() * 10) + 20;
        rects.push(getRect(i, width));
        prevWidth = width - 19;
    }
    return rects;
};

const getRect = (kk, width) => {
    return {
        width: width,
        isSorted: false,
        isSorting: false,
        kk: kk,
    };
};

export default Sort;
