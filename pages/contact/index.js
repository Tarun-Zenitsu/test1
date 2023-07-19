// import Circles from '/components/Circles';
// import Bulb from '../../components/Bulb';
// import { BsArrowRight } from 'react-icons/bs';

// import { motion } from 'framer-motion';
// import {FadeIn, fadeIn} from '../../variants'

// const Contact = () => {
//   return (
//       <div className='h=full bg-primary/30'>
//         <Bulb/>
//         <div className='container mx-auto py-32 text-center xl:text-left flex items=center
//         justify-center h-full'>
//           <div className='flex flex-col w-full max-w-[700px]'>
//             <motion.h2 
//             variants={fadeIn('up', 0.2)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='h2 text-center mb-12 mt-8'>
//               Let's <span className='text-accent'>connect.</span>
//             </motion.h2>
//             {/* form */}
//             <motion.form 
//             variants={fadeIn('up', 0.4)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='flex-1 flex flex-col gap-6 w-full mx-auto'>
//               <div className='flex gap-x-6 w-full'>
//                 <input type='text' placeholder='name' className='input'/>
//                 <input type='text' placeholder='email' className='input'/>
//               </div>
//                 <input type='text' placeholder='subject' className='input'/>
//                 <textarea placeholder='message' className='textarea'></textarea>
//                 <button className='btn rounded-full border border-white/50 max-w[170px]
//                 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
//                 hover:border-accent group'>
//                   <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
//                   transition-all duration-500'>Let's talk</span>
//                   <BsArrowRight className='-translate-y-[120%] mt-14 opacity-0 group-hover:flex
//                   group-hover:-translaty-y-0 group-hover:opacity-100 transition-all duration-300
//                   absolute text-[22px]' />
//                 </button>
//             </motion.form>
//           </div>
//           <Circles/>
//         </div>
//       </div>
//     );
// };

// export default Contact;



import React, { useState } from 'react';
import Circles from '/components/Circles';
import Bulb from '../../components/Bulb';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FadeIn, fadeIn } from '../../variants';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceID = 'service_wi4zldg';
      const templateID = 'template_8f7isov';
      const userID = 'XMoehkNpirDy2emZN';

      await emailjs.send(serviceID, templateID, formData, userID);

      alert('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending the email:', error);
      alert('Failed to send the email. Please try again later.');
    }
  };

  return (
    <div className='h=full bg-primary/30'>
      <Bulb />
      <div className='container mx-auto py-32 text-center xl:text-left flex items=center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12 mt-8'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={handleChange}
                className='input'
              />
              <input
                type='text'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className='input'
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              value={formData.subject}
              onChange={handleChange}
              className='input'
            />
            <textarea
              name='message'
              placeholder='message'
              value={formData.message}
              onChange={handleChange}
              className='textarea'
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w[170px]
                px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
                hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                  transition-all duration-500'>Let's talk</span>
              <BsArrowRight className='-translate-y-[120%] mt-14 opacity-0 group-hover:flex
                  group-hover:-translaty-y-0 group-hover:opacity-100 transition-all duration-300
                  absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
        <Circles />
      </div>
    </div>
  );
};

export default Contact;
