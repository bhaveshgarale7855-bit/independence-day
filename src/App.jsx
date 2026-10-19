// import React, { useEffect, useRef } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Start from "./pages/Start";
// import Entry from "./pages/Entry";
// import Spirit from "./pages/Spirit";
// import Celebration from "./pages/Celebration";
// import Final from "./pages/Final";

// export default function App() {
//     const location = useLocation();

//     const musicRef = useRef(null);
//     const fireworksRef = useRef(null);

//     useEffect(() => {
//         musicRef.current = new Audio("/audio/bg-music.mp3");
//         musicRef.current.loop = true;
//         musicRef.current.volume = 0.20;

//         fireworksRef.current = new Audio("/audio/fireworks.mp3");
//         fireworksRef.current.volume = 0.55;

//         return () => {
//             musicRef.current?.pause();
//             musicRef.current = null;
//             fireworksRef.current = null;
//         };
//     }, []);

//     useEffect(() => {
//         if (location.pathname === "/celebration") {
//             setTimeout(() => {
//                 fireworksRef.current?.play().catch(() => { });
//             }, 700);
//         }
//     }, [location.pathname]);

//     const startMusic = () => {
//         musicRef.current?.play().catch(() => { });
//     };

//     return (
//         <>
//             <AnimatePresence mode="wait">
//                 <Routes location={location} key={location.pathname}>

//                     <Route
//                         path="/"
//                         element={<Start onStartMusic={startMusic} />}
//                     />

//                     <Route
//                         path="/home"
//                         element={<Entry />}
//                     />

//                     <Route
//                         path="/spirit"
//                         element={<Spirit />}
//                     />

//                     <Route
//                         path="/celebration"
//                         element={<Celebration />}
//                     />

//                     <Route
//                         path="/final"
//                         element={<Final />}
//                     />

//                 </Routes>
//             </AnimatePresence>
//         </>
//     );
// }



import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Start from "./pages/Start";
import Entry from "./pages/Entry";
import Spirit from "./pages/Spirit";
import Celebration from "./pages/Celebration";
import Final from "./pages/Final";

export default function App() {
    const location = useLocation();

    const musicRef = useRef(null);
    const fireworksRef = useRef(null);

    // Create audio
    useEffect(() => {
        musicRef.current = new Audio("/audio/bg-music.mp3");
        musicRef.current.loop = true;
        musicRef.current.volume = 0.20;

        fireworksRef.current = new Audio("/audio/fireworks.mp3");
        fireworksRef.current.volume = 0.55;

        return () => {
            musicRef.current?.pause();
            musicRef.current = null;

            fireworksRef.current?.pause();
            fireworksRef.current = null;
        };
    }, []);

    // Control music + fireworks according to slide
    useEffect(() => {

        // 🛑 START SCREEN → Music OFF
        if (location.pathname === "/") {
            if (musicRef.current) {
                musicRef.current.pause();
                musicRef.current.currentTime = 0;
            }

            // Fireworks bhi stop
            if (fireworksRef.current) {
                fireworksRef.current.pause();
                fireworksRef.current.currentTime = 0;
            }
        }

        // 🎵 Home / Spirit / Celebration → Music ON
        if (
            location.pathname === "/home" ||
            location.pathname === "/spirit" ||
            location.pathname === "/celebration"
        ) {
            musicRef.current?.play().catch(() => { });
        }

        // ❤️ Final → Music OFF
        if (location.pathname === "/final") {
            if (musicRef.current) {
                musicRef.current.pause();
                musicRef.current.currentTime = 0;
            }
        }

        // 🎆 Celebration → Fireworks
        if (location.pathname === "/celebration") {
            setTimeout(() => {
                fireworksRef.current?.play().catch(() => { });
            }, 700);
        }

    }, [location.pathname]);
    // Start music from Start screen
    const startMusic = () => {
        musicRef.current?.play().catch(() => { });
    };

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes
                    location={location}
                    key={location.pathname}
                >

                    {/* START SCREEN */}
                    <Route
                        path="/"
                        element={
                            <Start
                                onStartMusic={startMusic}
                            />
                        }
                    />

                    {/* SLIDE 1 */}
                    <Route
                        path="/home"
                        element={<Entry />}
                    />

                    {/* SLIDE 2 */}
                    <Route
                        path="/spirit"
                        element={<Spirit />}
                    />

                    {/* SLIDE 3 */}
                    <Route
                        path="/celebration"
                        element={<Celebration />}
                    />

                    {/* FINAL SLIDE */}
                    <Route
                        path="/final"
                        element={<Final />}
                    />

                </Routes>
            </AnimatePresence>
        </>
    );
}