import { services } from "../data"
import ServiceCard from "@/components/ServiceCard"
import { GetServerSidePropsContext, GetStaticPropsContext } from "next"

const index = () => {
  
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Actualmente estoy cursando la carrera universitaria Ingenieria en Sistemas
        en la Universidad Nacional Abierta y a Distancia (UNAD). Soy FrontEnd Devoloper Junior 
        con aspiraciones de ser Full Stack Develoṕer.  
      </h5>

      <div className="flex-grow p-4 mt-5 bg-gray-400" 
        style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map(service => (
              <div className="bg-gray-200 rounded-lg lg:col-span-1">
                <ServiceCard service={service}/>
              </div>
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
