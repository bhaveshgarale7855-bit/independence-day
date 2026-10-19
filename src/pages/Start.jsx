import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page";

export default function Start({ onStartMusic }) {
    const navigate = useNavigate();

    const startExperience = () => {
        onStartMusic();
        navigate("/home");
    };

    return (
        <Page className="start-page">

            <div className="start-glow" />

            <motion.div
                className="start-chakra"
                initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
                animate={{ opacity: 0.22, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="start-chakra-ring" />
            </motion.div>

            <section className="start-content">

                <motion.div
                    className="start-flag"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <span />
                    <span />
                    <span />
                </motion.div>

                <motion.p
                    className="start-small"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    A CINEMATIC TRIBUTE TO INDIA
                </motion.p>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 30,
                        filter: "blur(12px)"
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0)"
                    }}
                    transition={{
                        delay: 1,
                        duration: 1
                    }}
                >
                    INDIA
                </motion.h1>

                <motion.p
                    className="start-date"
                    initial={{ opacity: 0, letterSpacing: "0.8em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{
                        delay: 1.7,
                        duration: 1
                    }}
                >
                    15 • 08 • 2026
                </motion.p>

                <motion.button
                    className="start-button"
                    onClick={startExperience}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2.4,
                        duration: 0.8
                    }}
                    whileHover={{
                        scale: 1.04
                    }}
                    whileTap={{
                        scale: 0.96
                    }}
                >
                    <span>▶</span>
                    START EXPERIENCE
                </motion.button>

                <motion.p
                    className="created-by"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2.8,
                        duration: 0.8
                    }}
                >
                    Created with ❤️ by <span>Bhavesh</span>
                </motion.p>

                <motion.p
                    className="start-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.1 }}
                >
                    🎵 SOUND ON • EXPERIENCE WITH HEADPHONES
                </motion.p>

            </section>

        </Page>
    );
}