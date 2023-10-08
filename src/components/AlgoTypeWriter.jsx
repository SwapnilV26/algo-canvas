import React from 'react'
import Typewriter from "typewriter-effect";


const AlgoTypeWriter = () => {
  return (
    <div>
        <span className="font-bold text-2xl md:text-4xl text-white">
                <Typewriter
                    options={{
                        strings: ['Sorting Algorithm',"Searching Algorithm", "Pathfinding Algorithm", "Tree Tarversal"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
    </div>
  )
}

export default AlgoTypeWriter