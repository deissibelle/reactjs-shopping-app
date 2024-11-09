import React, { Component } from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utilities/Animation";

export default class Banner extends Component {
  render() {
    return (
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
          {/* Banner Img */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={BannerPng}
              alt=""
              className="w-[300px] md:max-w-[400px] h-full object-cover"
            />
          </div>
          {/* Brand Info */}

          <div className=" flex flex-col justify-center">
            <div className="text-center md:text-left spacy-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                animate="visible"
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeUp(1.2)}
                initial="hidden"
                animate="visible"
                className="text-grey-400"
              >
                Healthy and yummy food for fresh morning breakfast. Eat Daily
                for good health and mind Order now and get 20% off on your first
                order
              </motion.p>

              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                animate="visible"
                
              >
                Healthy and yummy food for fresh morning breakfast. Eat Daily
                for good health and mind Order now and get 20% off on your first
                order
              </motion.p>
              {/* Button section */}
              <motion.div
                variants={FadeUp(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn flex items-center gap-2">
                  <span></span>
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
