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
    x: 800,
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
      <main className="pt-40 bg-violet-100 dark:bg-slate-600 " id="home">
        <div className="container mx-auto px-4 relative ">
          <div className="md:grid grid-cols-2 space-y-10 items-center justify-center xl:px-52 " >
            <div className="hero__image shadow-lg"></div>
            {/* <div className="absolute left-0 animate-bounce duration-500">
              <img
                className=""
                src={bigBall} alt="" />
            </div> */}
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
        {/* About section */}

        {/* <section className="container px-4 mx-auto flex flex-col justify-center items-center max-w-5xl py-6">
          <h1 className="text-center text-2xl py-4">Passionate Front-end Junior Developer</h1>
          <div>
            <p className=" text-justify">As a Junior Front-End Developer, I bring a robust set of skills to the table, including proficiency in <span> HTML, CSS, JavaScript, React, Tailwind, and SCSS, Firebase, Figma</span> . My strength lies in the creation and maintenance of responsive websites, ensuring a seamless and enjoyable user experience. I specialize in developing vibrant interfaces by producing meticulous, well-optimized code and leveraging the latest tools and methodologies in web development. Beyond technical acumen, I pride myself on being a collaborative team player, thriving in environments where I can work closely with cross-functional teams to deliver exceptional web applications.</p>
          </div>
        </section> */}
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
