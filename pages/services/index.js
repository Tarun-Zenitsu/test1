import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-30 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-row">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">My services</h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">A web developer is a skilled professional who designs, develops, and maintains websites, 
              utilizing coding languages, frameworks, and various tools to create 
              functional and visually appealing online experiences.</p>
          </div>
          {/* slider */}
          <div className="flex justify-end">
          </div>
        </div>
      </div>
      <Bulb/>
    </div>
    );
};

export default Services;
