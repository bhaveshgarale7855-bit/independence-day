import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page";
import Chakra from "../components/Chakra";

// export default function Entry() {
export default function Entry({ onStartMusic }) {
    return (
        <Page className="entry-page">

            <div className="entry-glow" />

            {/* Floating Chakra */}
            <motion.div
                className="entry-chakra"
                initial={{ opacity: 0, scale: 0.2, rotate: -90 }}
                animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                <Chakra />
            </motion.div>

            {/* Tricolor light */}
            <motion.div
                className="tricolor-light"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                    duration: 2.5,
                    delay: 0.4,
                    ease: "easeInOut"
                }}
            />

            <section className="hero">

                {/* Date */}
                <motion.span
                    className="eyebrow"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    15 AUGUST 2026 • INDIA 🇮🇳
                </motion.span>

                {/* HAPPY */}
                <motion.div
                    className="entry-word happy-word"
                    initial={{ opacity: 0, y: 45, filter: "blur(15px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ delay: 1, duration: 0.9 }}
                >
                    HAPPY
                </motion.div>

                {/* INDEPENDENCE */}
                <motion.div
                    className="entry-word independence-word"
                    initial={{ opacity: 0, y: 45, filter: "blur(15px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ delay: 1.55, duration: 0.9 }}
                >
                    INDEPENDENCE
                </motion.div>

                {/* DAY */}
                <motion.div
                    className="entry-word day-word"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 2.1,
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    DAY
                </motion.div>

                <motion.p
                    className="entry-subtitle"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.8 }}
                >
                    A little cinematic journey made for the
                    <br />
                    friends who make life unforgettable. ❤️
                </motion.p>

                <motion.div
                    className="actions entry-actions"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                >
                    <Link className="btn back-btn" to="/">
                        ← BACK
                    </Link>

                    <Link className="btn primary entry-button" to="/spirit">
                        BEGIN THE JOURNEY
                        <span className="arrow">→</span>
                    </Link>
                </motion.div>
            </section>

        </Page>
    );
}