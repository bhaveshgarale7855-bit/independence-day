import React from "react";
import {motion} from "framer-motion";
import Fireworks from "./Fireworks";
export default function Page({children,fireworks=false,className=""}){
 return <motion.main className={`page ${className}`} initial={{opacity:0,scale:1.015,filter:"blur(5px)"}} animate={{opacity:1,scale:1,filter:"blur(0px)"}} exit={{opacity:0,scale:.985,filter:"blur(5px)"}} transition={{duration:.55,ease:[.22,1,.36,1]}}>
  <div className="aurora"/><div className="stars"/>{fireworks&&<Fireworks/>}{children}
 </motion.main>;
}