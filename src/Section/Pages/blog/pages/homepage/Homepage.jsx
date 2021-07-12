import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { motion } from "framer-motion";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <motion.div 
      initial={{opacity: 0}}
		  animate={{opacity:1}}
		  exit={{opacity: 0 }} className="home">
        <Posts />
        <Sidebar />
      </motion.div>
    </>
  );
}
