import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtr from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import ProjectsBtn from "../components/ProjectsBtn";


const Home = () => {
  return(
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-grandient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
            <h1 className="h1">
              Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span>{''}
            </h1>
            {/* subtitle */}
            <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Praesentium voluptas ab libero, ipsum accusantium autem, 
              culpa laborum assumenda nemo possimus rem dicta dolorum! 
              Voluptate officiis amet consequuntur veniam quibusdam quas.</p>
              {/* btn */}
              <div className="flex justify-center xl:hidden">
                <ProjectsBtn />
              </div>
              <motion.div 
              variants={fadeIn('down', 0.4)} 
              initial="hidden" 
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
              >
              <ProjectsBtn/>
              </motion.div>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
    
  )
};

export default Home;
