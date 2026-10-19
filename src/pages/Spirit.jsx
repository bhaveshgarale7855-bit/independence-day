import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page";
import Chakra from "../components/Chakra";

export default function Spirit() {
    return (
        <Page className="center-page spirit-page">

            <div className="spirit-glow" />

            <section className="spirit-content">

                {/* Chakra */}
                <motion.div
                    className="spirit-chakra"
                    initial={{
                        opacity: 0,
                        scale: 0.35,
                        rotate: -120
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0
                    }}
                    transition={{
                        duration: 1.5,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <Chakra />
                </motion.div>

                {/* Year */}
                <motion.div
                    className="spirit-year"
                    initial={{ opacity: 0, letterSpacing: "0.8em" }}
                    animate={{ opacity: 1, letterSpacing: "0.25em" }}
                    transition={{
                        delay: 1.2,
                        duration: 1
                    }}
                >
                    1947 → 2026
                </motion.div>

                {/* Heading */}
                <motion.h2
                    className="spirit-title"
                    initial={{
                        opacity: 0,
                        y: 35,
                        filter: "blur(15px)"
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0)"
                    }}
                    transition={{
                        delay: 1.6,
                        duration: 1
                    }}
                >
                    THE SPIRIT
                    <br />
                    <span>OF INDIA</span>
                </motion.h2>

                {/* Tricolor line */}
                <motion.div
                    className="spirit-line"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{
                        delay: 2.5,
                        duration: 1
                    }}
                />

                {/* Messages */}
                <div className="spirit-messages">

                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.9, duration: 0.7 }}
                    >
                        ONE NATION.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.3, duration: 0.7 }}
                    >
                        ONE HEART.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.7, duration: 0.7 }}
                    >
                        ONE FREEDOM. 🇮🇳
                    </motion.div>

                </div>

                {/* Buttons */}
                <motion.div
                    className="actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 4.3,
                        duration: 0.8
                    }}
                >
                    <Link className="btn back-btn" to="/home">
                        ← BACK
                    </Link>

                    <Link
                        className="btn primary spirit-button"
                        to="/celebration"
                    >
                        CONTINUE
                        <span className="arrow">→</span>
                    </Link>
                </motion.div>
            </section>

        </Page>
    );
}