import React, { useState, useEffect, useRef } from "react";
import Rects from "./rects";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
} from "../../algorithms/sortingAlgorithms";
import Menu from "./menu";
// import Header from "../Header";

function Sort() {
  const [state, setState] = useState({
    count: 20,
    rects: [],
    rects2: [],
    doubles: false,
    speed: 50,
    isRunning: false,
    isRunning1: false,
    isRunning2: false,
    algo1: 0,
    algo2: 0,
  });

  const rectRef = useRef();
  const rect2Ref = useRef();

  useEffect(() => {
    const rect = getInitialRects(state.count);
    const rect2 = [...rect];
    setState({ ...state, rects: rect, rects2: rect2 });
  }, [state.count]);

  const handleRandomize = () => {
    const rect = getInitialRects(state.count);
    const rect2 = [...rect];
    setState({ ...state, rects: rect, rects2: rect2 });
  };

  const handleRefresh = () => {
    const rects = state.rects.map((rect) => ({
      ...rect,
      isSorted: false,
      isSorting: false,
    }));
    const rects2 = [...rects];
    setState({ ...state, rects, rects2 });
  };

  const handleDouble = (val) => {
    setState({ ...state, doubles: val });
  };

  const handleCountChange = (val) => {
    setState({ ...state, count: val });
  };

  const handleAlgoChanged = (pos, val) => {
    if (pos === 0) {
      setState({ ...state, algo1: val });
    } else {
      setState({ ...state, algo2: val });
    }
  };

  const handleSpeedChanged = (val) => {
    const speed = 760 - val * 7.5;
    setState({ ...state, speed });
  };

  const handleSort = () => {
    setState({ ...state, isRunning: true });
    let steps1;

    switch (state.algo1) {
      case 0:
        steps1 = bubbleSort(state.rects);
        break;
      case 1:
        steps1 = selectionSort(state.rects);
        break;
      case 2:
        steps1 = insertionSort(state.rects);
        break;
      default:
        steps1 = bubbleSort(state.rects);
        break;
    }

    let steps2;

    if (state.doubles) {
      switch (state.algo2) {
        case 0:
          steps2 = bubbleSort(state.rects2);
          break;
        case 1:
          steps2 = selectionSort(state.rects2);
          break;
        case 2:
          steps2 = insertionSort(state.rects2);
          break;
        default:
          steps2 = bubbleSort(state.rects2);
          break;
      }
    }

    handleFirst(steps1);
    if (state.doubles) handleSecond(steps2);
  };

  const handleFirst = async (steps) => {
    setState({ ...state, isRunning1: true });
    const prevRect = [...state.rects];

    for (let i = 0; i < steps.length; i++) {
      if (i !== 0) {
        prevRect[steps[i - 1].xx] = {
          ...prevRect[steps[i - 1].xx],
          isSorting: false,
        };
        prevRect[steps[i - 1].yy] = {
          ...prevRect[steps[i - 1].yy],
          isSorting: false,
        };
      }

      if (steps[i].xx === steps[i].yy) {
        prevRect[steps[i].xx] = {
          ...prevRect[steps[i].xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (steps[i].changed) {
        const recti = { ...prevRect[steps[i].xx], isSorting: true };
        const rectj = { ...prevRect[steps[i].yy], isSorting: true };
        prevRect[steps[i].yy] = recti;
        prevRect[steps[i].xx] = rectj;
      } else {
        prevRect[steps[i].xx] = { ...prevRect[steps[i].xx], isSorting: true };
        prevRect[steps[i].yy] = { ...prevRect[steps[i].yy], isSorting: true };
      }

      if (i === steps.length - 1) {
        setState({ ...state, isRunning1: false });

        if (!state.isRunning2) {
          setState({ ...state, isRunning: false });
        }
      }

      setState({ ...state, rects: [...prevRect] });
      rectRef.current = prevRect;
      await sleep(state.speed);
    }
  };

  const handleSecond = async (steps) => {
    setState({ ...state, isRunning2: true });
    const prevRect = [...state.rects2];

    for (let i = 0; i < steps.length; i++) {
      if (i !== 0) {
        prevRect[steps[i - 1].xx] = {
          ...prevRect[steps[i - 1].xx],
          isSorting: false,
        };
        prevRect[steps[i - 1].yy] = {
          ...prevRect[steps[i - 1].yy],
          isSorting: false,
        };
      }

      if (steps[i].xx === steps[i].yy) {
        prevRect[steps[i].xx] = {
          ...prevRect[steps[i].xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (steps[i].changed) {
        const recti = { ...prevRect[steps[i].xx], isSorting: true };
        const rectj = { ...prevRect[steps[i].yy], isSorting: true };
        prevRect[steps[i].yy] = recti;
        prevRect[steps[i].xx] = rectj;
      } else {
        prevRect[steps[i].xx] = { ...prevRect[steps[i].xx], isSorting: true };
        prevRect[steps[i].yy] = { ...prevRect[steps[i].yy], isSorting: true };
      }

      if (i === steps.length - 1) {
        setState({ ...state, isRunning2: false });

        if (!state.isRunning1) {
          setState({ ...state, isRunning: false });
        }
      }

      setState({ ...state, rects2: [...prevRect] });
      rect2Ref.current = prevRect;
      await sleep(state.speed);
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const getInitialRects = (tot) => {
    const rects = [];
    for (let i = 0; i < tot; i++) {
      rects.push(getRect(i));
    }
    return rects;
  };

  const getRect = (kk) => {
    return {
      width: Math.floor(Math.random() * 200) + 50,
      isSorted: false,
      isSorting: false,
      kk: kk,
    };
  };

  return (
    <React.Fragment>
      <section>
        <div className="py-10">
        <Menu
          disable={state.isRunning}
          onDoubleChange={handleDouble}
          onViusalize={handleSort}
          onRandomize={handleRandomize}
          onRefresh={handleRefresh}
          onCountChange={handleCountChange}
          onAlgoChanged={handleAlgoChanged}
          onSpeedChange={handleSpeedChanged}
        />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <Rects speed={state.speed} rects={state.rects} ref={rectRef} />
          {state.doubles && <hr style={{ width: "90%" }} />}
          {state.doubles && <Rects rects={state.rects2} ref={rect2Ref} />}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sort;
