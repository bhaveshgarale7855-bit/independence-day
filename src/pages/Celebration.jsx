import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page";

export default function Celebration() {
  return (
    <Page fireworks className="center-page celebration-page">

      <section className="celebration-copy">

        {/* TOP SMALL TEXT */}
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          THE FREEDOM TO DREAM • LAUGH • BE TOGETHER
        </motion.span>


        {/* FREEDOM */}
        <motion.h2
          className="freedom-title"
          initial={{
            opacity: 0,
            scale: 0.65,
            y: 50,
            filter: "blur(18px)"
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          transition={{
            duration: 1.4,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          FREEDOM
        </motion.h2>


        {/* FREEDOM LINES */}
        <div className="freedom-lines">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
          >
            THE FREEDOM TO DREAM.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.55 }}
          >
            THE FREEDOM TO LAUGH.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.0 }}
          >
            THE FREEDOM TO BE TOGETHER.
          </motion.p>

        </div>


        {/* INDEPENDENCE DAY */}
        <motion.h3
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 3.6
          }}
        >
          HAPPY INDEPENDENCE DAY 🇮🇳
        </motion.h3>


        {/* BUTTONS */}
        <motion.div
          className="actions"
          initial={{
            opacity: 0,
            y: 35
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 4.3
          }}
        >

          <Link className="btn secondary" to="/spirit">
            ← BACK
          </Link>

          <Link className="btn primary continue-btn" to="/final">
            CONTINUE ✨
          </Link>

        </motion.div>

      </section>

    </Page>
  );
}