import { services } from "../data"
import ServiceCard from "@/components/ServiceCard"
import { GetServerSidePropsContext, GetStaticPropsContext } from "next"

const index = () => {
  
  return (
    <div>
      <h5>Actualmente estoy cursando la carrera universitaria Ingenieria en Sistemas
        en la Universidad Nacional Abierta y a Distancia (UNAD). Soy FrontEnd Devoloper Junior 
        con aspiraciones de ser Full Stack Develoṕer.  
      </h5>

      <div>
        <h6>What I Offer</h6>
        <div>
          {
            services.map(service => (
            <ServiceCard service={service}/>
            ))
          }
        </div>
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
