import React from 'react'
import { AnimatePresence,motion } from "framer-motion";

export const Trans =  {
    in:{
        opacity:1,
        y:0
    },
    out: {
        opacity:0,
        y: "-100vh"
    }
};

export default Trans;
