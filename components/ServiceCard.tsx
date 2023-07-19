import { IService } from "@/type"
import { FunctionComponent } from "react"

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon,about,title},
}) => {
  return (
    <div>
        <Icon />
        <div>
            <h4>{title}</h4>
            <p>{about}</p>
        </div>
    </div>
  )
}

export default ServiceCard
