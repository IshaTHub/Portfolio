"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Covid Tracker",
    desc: "To fetch real-time data, I integrated external APIs, ensuring that the information displayed is accurate and up-to-date. This project showcases my ability to create responsive and interactive web applications while leveraging external data sources to provide valuable insights to users using npm package manager.",
    img: "/covidtracker.png",
    link: "https://covid-tracker-ten-nu.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Rent Management System",
    desc: "Developed a Rent Management System using ASP.NET Core 8 MVC with a Microsoft SQL Server database, designed to help companies efficiently manage workspace rentals. Implemented authentication with login/logout functionality and session management, along with a “Forgot Password” feature involving email notifications and OTP generation for password reset. Integrated CRUD operations for tenants, rent, maintenance, lease agreements, and electricity bills, ensuring comprehensive record management.",
    img: "/rent.png",
    link: "https://github.com/IshaTHub/Rental-Management-Project",
  },
  {
    id: 3,
    color: "from-purple-300 to-red-300",
    title: "My Book Store",
    desc: "Developed Full-Stack CRUD Application using React.js, Node.js, and MySQL to manage dynamic data. Implemented RESTful APIs with Node.js and Express to handle Create, Read, Update, and Delete (CRUD) operations on a MySQL database. Performed Database Operations such as table creation, data insertion, and data retrieval with MySQL queries. Optimized Backend Performance by structuring Node.js routes and middleware for efficient request handling. Managed Version Control using Git, collaborating with team members and tracking progress through GitHub/GitLab.",
    img: "/book.png",
    link: "https://github.com/IshaTHub/MyBookStore",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Mytheresa e-commerce website",
    desc: "Using HTML, CSS, and JavaScript, responsive user interfaces were designed and built for an e-commerce website, guaranteeing smooth operation across a variety of hardware and browser combinations. Created a user-friendly website with payment, add-to-cart, login, and landing pages.",
    img: "/mythresa.png",
    link: "https://ecommerce-web-mytherisa.vercel.app/",
  },
];

//new changes made here 

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-lg font-bold md:text-3.6xl lg:text-5.4xl xl:text-7.2xl">
                    {item.title}
                  </h1>
                  <div className="relative w-72 h-50 md:w-86 md:h-58 lg:w-[450px] lg:h-[315px] xl:w-[540px] xl:h-[378px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1.8 text-sm md:p-3.6 md:text-md lg:p-7.2 lg:text-lg bg-white text-gray-600 font-semibold m-3.6 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Back-end Dev
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;



