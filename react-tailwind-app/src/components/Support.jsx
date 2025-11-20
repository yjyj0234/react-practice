import React from 'react'
import supportImg from '../assets/support.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const Support = () => {
  return (
    <section
      name='support'
      className='w-full mt-24'
    >
      <div className='w-full h-[700px] bg-slate-900/90 absolute'>
        <img src={supportImg} className='object-cover w-full h-full mix-blend-overlay' alt='support'/>
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-3xl text-center uppercase text-slate-300'>Support</h2>
          <h3 className='py-6 text-5xl font-bold text-center'> We support you</h3>
          <p className='py-4 text-3xl text-slate-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis ipsum sit amet ligula ullamcorper congue.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 px-4 pt-12 text-black gap-x-8 gap-y-16 sm:pt-20 '>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold'>Support</h3>
              <p className='text-xl text-gray-600'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, deserunt illum mollitia officiis qui exercitationem perferendis 
neque quasi a recusandae necessitatibus tempora iusto! Blanditiis error iste,
 totam fugiat recusandae rerum laborum perferendis molestiae aperiam asperiores nemo.
 Magni dolor maxime debitis vitae, eaque hic ab mollitia voluptatibus, a nostrum eveniet laborum!
              </p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>
                More info...<FaArrowRight className='w-5 ml-2'/>
              </p>
            </div>
          </div>
                <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold'>Support</h3>
              <p className='text-xl text-gray-600'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, deserunt illum mollitia officiis qui exercitationem perferendis 
neque quasi a recusandae necessitatibus tempora iusto! Blanditiis error iste,
 totam fugiat recusandae rerum laborum perferendis molestiae aperiam asperiores nemo.
 Magni dolor maxime debitis vitae, eaque hic ab mollitia voluptatibus, a nostrum eveniet laborum!
              </p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>
                More info...<FaArrowRight className='w-5 ml-2'/>
              </p>
            </div>
          </div>
                <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='my-6 text-2xl font-bold'>Support</h3>
              <p className='text-xl text-gray-600'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, deserunt illum mollitia officiis qui exercitationem perferendis 
neque quasi a recusandae necessitatibus tempora iusto! Blanditiis error iste,
 totam fugiat recusandae rerum laborum perferendis molestiae aperiam asperiores nemo.
 Magni dolor maxime debitis vitae, eaque hic ab mollitia voluptatibus, a nostrum eveniet laborum!
              </p>
            </div>
            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>
                More info...<FaArrowRight className='w-5 ml-2'/>
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Support