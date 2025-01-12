"use client";
import Brain from "@/components/brain";
import { motion, useScroll, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container     */}
      <div className="h-full overflow-scroll lg:flex ref={containerRef}">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/5594561b-0ea5-49b5-bf88-92936d715416.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="100"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M97.6992 50.7115C85.6246 50.7115 73.5868 51.8342 61.5857 51.8342C55.8474 51.8342 50.1092 51.8342 44.3709 51.8342C40.3595 51.8342 43.3119 49.1077 45.1818 47.094C53.0464 38.6244 60.2969 29.7334 68.509 21.5213C72.7322 17.2982 75.7552 12.9944 79.1123 8.11129C80.1009 6.67326 83.2984 -0.697448 81.7319 2.43542C76.084 13.7314 73.9208 28.1733 72.9998 40.6072C71.2168 64.6777 67.5407 88.8679 58.4047 111.337C51.8877 127.366 42.3693 147.173 24.2247 152.254C13.2814 155.318 5.60624 148.292 2.26967 138.282"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M37.0734 146.141C48.0842 133.907 60.0758 119.606 68.509 105.474C73.2493 97.5311 78.736 90.158 82.4804 81.6482C83.1678 80.0858 88.1671 73.1656 84.7882 73.1656C77.2141 73.1656 78.6133 85.0617 78.6133 90.0061C78.6133 99.9575 82.3184 106.892 85.599 116.078C88.2189 123.413 92.4982 137.628 86.2227 144.145C83.7277 146.736 72.6336 156.349 68.509 151.193C65.7327 147.723 62.0335 142.975 61.7728 138.282C61.679 136.594 59.9316 131.118 60.7125 135.413C61.2758 138.511 63.63 141.751 65.1409 144.395C74.9713 161.598 92.7757 124.421 95.4538 116.951C100.195 103.724 106.927 90.9004 112.294 77.9058C116.929 66.6859 123.521 56.4493 123.521 43.9753C123.521 40.2204 123.728 30.6112 118.469 29.4426C114.266 28.5086 113.417 44.8664 113.417 47.3434C113.417 65.3263 112.294 83.1842 112.294 101.171C112.294 110.464 112.294 119.758 112.294 129.051C112.294 131.578 113.1 135.909 112.045 138.282C110.133 142.584 111.172 157.086 111.172 152.378C111.172 147.662 112.8 140.74 115.101 136.598C117.647 132.015 121.072 127.526 125.205 124.311C128.999 121.36 125.767 132.73 125.767 135.164C125.767 140.901 125.521 144.576 128.262 149.509C130.913 154.281 137.255 155.123 142.046 155.123C148.398 155.123 155.041 154.793 158.076 148.386C161.182 141.828 160.57 134.661 160.57 127.617C160.57 123.292 150.893 119.786 148.221 123.126C144.932 127.237 143.73 129.272 143.73 134.914C143.73 138.87 142.491 145.996 145.102 149.26C146.57 151.094 148.46 152.877 151.027 152.877C154.602 152.877 154.227 149.028 155.518 146.702C156.182 145.507 157.202 132.334 157.202 136.598C157.202 142.209 160.041 145.861 162.566 150.632C163.616 152.615 165.579 154.552 167.868 155.06C180.594 157.888 194.671 156.245 207.599 156.245C255.17 156.245 302.2 154.494 349.683 151.755C363.734 150.944 405.921 149.509 391.847 149.509"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M170.675 74.2883C170.675 65.1605 165.122 57.4989 164.001 48.5285C162.99 40.4437 186.645 50.1806 190.634 50.961C194.96 51.8075 199.911 52.4068 204.356 51.7719C208.119 51.2342 207.984 47.0596 205.977 50.2126C199.718 60.0493 198.734 72.3507 195.374 83.2699C193.475 89.4419 193.509 96.2182 191.382 102.293C189.604 107.376 187.558 112.828 186.393 118.074C184.852 125.007 182.57 134.201 179.407 140.528C177.571 144.199 177.796 149.509 172.359 149.509C169.321 149.509 167.307 140.924 167.307 138.282"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M177.411 148.386C186.503 148.386 191.826 144.076 198.181 137.721C203.708 132.194 207.724 127.559 207.724 119.758C207.724 114.112 204.721 120.205 204.418 122.627C203.615 129.049 202.11 135.393 202.11 141.9C202.11 146.747 203.36 161.495 211.965 153.751C216.806 149.394 222.936 145.033 225.687 138.844C227.111 135.64 231.058 133.187 231.301 129.301C231.367 128.237 227.921 135.45 227.371 136.661C225.331 141.149 222.253 152.514 225.687 156.807C228.973 160.915 240.229 149.348 241.405 146.702C242.415 144.429 245.771 141.543 245.771 138.968C245.771 136.114 243.65 144.41 243.65 147.264C243.65 150.445 243.65 153.626 243.65 156.807C243.65 159.5 249.233 159.02 250.636 157.618C253.935 154.319 261.33 146.472 261.614 141.65C261.674 140.625 266.296 119.629 259.119 126.806C254.463 131.461 257.184 139.147 264.358 137.097C271.943 134.93 280.975 128.15 287.997 124.248C289.609 123.353 294.985 121.454 296.168 123.687C298.53 128.149 295.314 124.553 294.172 123.126C290.045 117.968 283.675 127.546 281.822 129.862C278.511 134.001 275.884 140.628 276.209 146.141C276.314 147.936 279.921 150.169 281.323 150.57C286.049 151.92 286.642 149.098 288.808 146.391C291.532 142.986 290.863 133.244 291.864 128.739C292.933 123.929 291.926 130.672 291.926 132.669C291.926 136.59 292.173 139.673 292.987 143.334C294.546 150.352 297.903 157.38 304.276 150.632C310.056 144.512 311.783 138.302 314.131 130.673C314.512 129.435 314.108 120.858 312.135 124.311C310.442 127.274 309.89 130.416 309.89 133.791C309.89 141.938 321.981 134.838 325.607 132.918C329.047 131.097 328.466 127.451 325.857 132.669C324.609 135.165 323.362 138.409 323.362 141.089C323.362 148.097 324.139 154.528 332.905 150.632C340.599 147.212 344.75 138.45 349.683 132.107C351.718 129.492 352.039 125.238 353.924 122.814C354.004 122.711 350.751 126.341 350.369 127.679C347.841 136.528 341.042 160.114 359.288 152.004C364.242 149.803 370.841 148.049 373.634 142.773C374.922 140.34 385.329 129.41 380.62 127.055"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M357.043 107.969C357.043 105.809 357.735 102.549 356.17 100.984C353.453 98.2672 353.191 103.188 353.737 105.1C354.232 106.832 358.7 116.748 360.162 115.579C361.465 114.536 367.496 106.665 367.085 105.225C366.273 102.383 358.823 110.023 358.166 111.337"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M209.969 105.724C216.034 105.724 208.847 98.4068 208.847 102.917C208.847 107.949 212.215 107.403 212.215 102.356"
                  stroke="#1E1E1E"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
              {/* BIOGRAPHY SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center">
            <motion.h1
              initial={{ x: "-300px" }}
               animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ASP.NET Core
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap5
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS3
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          <div
            className="flex flex-col gap-12 justify-center pb-48"
             ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Ornate TechnoService Pvt. Ltd
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
