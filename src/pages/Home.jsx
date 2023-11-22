import { motion } from "framer-motion";
import {
  Chat,
  FoodApp,
  MovieApp,
  Skills,
  bgBlack,
  // bigBall,
  // shadow
} from "../index";

const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
    }
  }
}

// const sliderVariant = {
//   initials: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 20,
//     },
//   },
// }

function Home() {
  return (
    <>
      <main className="pt-40 bg- dark:bg-slate-600 " id="home">
        <div className="container mx-auto px-4 relative ">
          <div className="md:grid grid-cols-2 space-y-10 items-center justify-center lg:justify-between  " >
            <div className="hero__image shadow-lg"></div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-center">
              <motion.h1
                variants={textVariants}
                className="text-[#061f3b] dark:text-gray-100 text-5xl md:text-6xl font-bold"
              >
                Front-End <span className="text-[#26269a] dark:text-violet-400">Junior</span> Developer.
              </motion.h1>
              <div className="absolute "><img src={bgBlack} alt="" /></div>
              <motion.p
                variants={textVariants}
                className="py-6 text-base text-black dark:text-gray-200 font-normal">
                Hi, Im Kongkon. A passionate Front-end Developer based in Dhaka, Bangladesh. As a Junior Front-End Developer, I bring a robust set of skills to the table, including proficiency in HTML, CSS, JavaScript, React, Redux Tailwind, and SCSS, Firebase, Figma .
              </motion.p>
            </motion.div>
          </div>
          {/* <div>
            <motion.div
              variants={sliderVariant}
              initial="initial"
              animate="animate"
              className="text-8xl text-violet-200 opacity-10 absolute -bottom-20 mx-auto w-72 right-0 font-extrabold"
            >
              dev_kongkon
            </motion.div>
          </div> */}
        </div>
        {/* skill icons  */}
        <section>
          <Skills />
        </section>
        {/* Project section */}
        <section className="container px-4 mx-auto py-10 flex flex-col items-center justify-center gap-y-20" id="projects">
          <MovieApp />
          <FoodApp />
        </section>
        <section id="contact">
          <Chat />
        </section>
      </main>
    </>
  )
}

export default Home;
