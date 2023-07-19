
//final 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const workSlides = [
  {
    images: [
      {
        title: "Movies Details Website Using React",
        path: "/img7.png",
        githubLink: "https://github.com/Tarun-Zenitsu/movix",
        demoLink: "https://movix-iota-jade.vercel.app/",
      },
      
    ],
  },
  {
    images: [
      {
        title: "Todo App Using Firebase",
        path: "/img8.jpg",
        githubLink: "https://github.com/Tarun-Zenitsu/todo",
        demoLink: "https://todo-delta-pied.vercel.app/login",
      },
      
    ],
  },
  {
    images: [
      {
        title: "Potfolio Website",
        path: "/img1.jpg",
        githubLink: "https://github.com/Tarun-Zenitsu/portfolio001",
        demoLink: "https://portfoliotarun001.netlify.app/",
      },
     
    ],
  },
  {
    images: [
      {
        title: "Weather App Using React",
        path: "/img2.jpg",
        githubLink: "https://github.com/Tarun-Zenitsu/weather_app_using_react",
        demoLink: "https://weatherappbytarun.netlify.app/",
      },
     
    ],
  },
  {
    images: [
      {
        title: "Potfolio Website",
        path: "/img9.jpeg",
        githubLink: "https://github.com/Tarun-Zenitsu/portfolio_",
        demoLink: "https://tarun-zenitsu.github.io/portfolio_/",
      },
      
    ],
  },
  {
    images: [
      {
        title: "Socialapp With DarkMode",
        path: "/img3.jpeg",
        githubLink: "https://github.com/Tarun-Zenitsu/socialbook",
        demoLink: "https://tarun-zenitsu.github.io/socialbook/",
      },
      
    ],
  },
];

const IndexPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3, // Display 3 slides by default
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1, // Display 1 slide on smaller devices with a breakpoint at 768px
        },
      },
    ],
  };

  return (
    <>
    <Circles />
    <section id='portfolio' className="py-10 space-y-5 mt-20">
      <motion.h5 
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="text-center mt-10">My Projects <span className='text-accent'>,</span></motion.h5>
      <motion.p
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='max-w-[800px] mx-auto text-white text-center'> All Websita is Immersive, interactive, and fully responsive project with exceptional UI, 
               providing a seamless user experience that captivates and engages.</motion.p>
      <div className="container mx-auto">
        <Slider {...settings}>
          {workSlides.map((slides, index) => (
            <div key={index}>
              {slides.images.map((image, imageIndex) => (
                <motion.article 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                key={imageIndex} className='bg-bg-variant p-5  rounded-2xl border border-transparent transition bg-[#260e5c] p-6 rounded-lg shadow'>
                  <div>
                    <img src={image.path} alt={image.title} width={500} height={200} />
                  </div>
                  <h3 className="text-lg font-semibold text-center mt-4">{image.title}</h3>
                  <div className="portfolio_item-cta flex justify-center mt-4 flex gap-4">
                    <a href={image.githubLink} className='bg-[#350f59] hover:bg-[#140424] text-primary-500 border p-4 rounded-lg shadow 
                    hover:scale-105 transition-transform hover:shadow-lg border-primary-500 py-2 px-3 rounded-lg inline-block cursor-pointer transition' target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                    <a href={image.demoLink} className='bg-[#350f59] hover:bg-[#140424] text-primary-500 border 
                      p-4 rounded-lg shadow hover:scale-105 transition-transform hover:shadow-lg border-primary-500 py-2 px-3 rounded-lg inline-block cursor-pointer transition' target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </Slider>
      </div>
      <Bulb/>
    </section>
    </>
  );
}

export default IndexPage;
