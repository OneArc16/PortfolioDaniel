import { services } from "../data"
import ServiceCard from "@/components/ServiceCard"
import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { motion } from "framer-motion"
import { fadeInUp, stagger } from "@/animation"

const index = () => {
  
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
        Actualmente estoy cursando la carrera universitaria Ingenieria en Sistemas
        en la Universidad Nacional Abierta y a Distancia (UNAD). Soy FrontEnd Devoloper Junior 
        con aspiraciones de ser Full Stack Develoṕer.  
      </h6>

      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" 
        style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h4 className="my-3 text-xl font-semibold tracking-wide">What I Offer</h4>
        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map(service => (
              <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
              variants={fadeInUp}>
                <ServiceCard service={service}/>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()


//   return {
//     props:{
//       services: data.services
//     }
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()


//   return {
//     props:{
//       services: data.services
//     }
//   }
// }
