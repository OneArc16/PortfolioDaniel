import Bar from '@/components/Bar'
import { languages, tools } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '@/animation'

const resume = () => {

  return (
    <motion.div className='px-6 py-2' variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <div className='grid gap-6 md:grid-cols-2'>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className='my-3 text-2xl font-bold'>Education</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Ingenieria de Sistemas</h5>
              <p className='font-semibold'>Universidad Nacional Abierta y a Distancia (2023-present)</p>
              <p className='my-3'>Universidad Nacional Abierta y a Distancia (2023-Present)</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className='my-3 text-2xl font-bold'>Experience</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Developer Frontend Jr</h5>
              <p className='font-semibold'>SISM (2023-present)</p>
              <p className='my-3'>React JS</p>
            </div>
          </motion.div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className='my-2'>
              {
                languages.map((language, i) => (<Bar data={language} key={i} />))
              }
            </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className='my-2'>
              {
                tools.map(tool =><Bar data={tool} key={tool.name} />)
              }
            </div>
        </div>

      </div>
    </motion.div>
  )
}

export default resume
