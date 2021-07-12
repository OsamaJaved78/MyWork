import React from 'react';
import './Searchpage.css';
import {motion } from "framer-motion";
import Rough3 from './Rough3'

export const Searchpage = () => {
    return (
        <motion.div 
        initial={{opacity: 0}} 
            animate={{opacity:1}}
            exit={{opacity: 0 }}
            id="search-main">
        <section>
        <div className="search-foot">
  <h2  className="search-bus">Search Result</h2>
  <a href=""  className="right">Home{' > '}Bus</a>
    </div>
        </section>
        <Rough3/>
        </motion.div>

    )
}

export default Searchpage;