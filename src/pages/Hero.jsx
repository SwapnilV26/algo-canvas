import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Feature from "../components/Feature";
// import HeroPic form '../../'

const Hero = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-32 px-4 mx-auto max-w-7xl sm:px-6">
          <div className="md:flex items-center gap-6">
            <div>
              <img src="/hero-image.gif" alt="Hero img" />
            </div>

            <div className="max-w-2xl">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter">
                  Unlock the Power of Algorithms with Visualization!
                </h1>
                <span className="bg-clip-text font-extrabold leading-tighter tracking-tighter text-4xl md:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Algo-canvas
                </span>
                <p className="my-6 text-gray-700 text-xl tracking-tighter">
                  Transform data structures and algorithms from perplexing
                  puzzles to crystal-clear concepts with our intuitive DSA
                  visualization – just a tap away!
                </p>
                <div>
                  <Link
                    to="/visualize"
                    className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded md:text-lg"
                  >
                    Let's Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature">
          <Feature />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Hero;
