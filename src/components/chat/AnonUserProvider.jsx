import { useMutation } from "convex/react"
import { useState, } from "react"
import { api } from "../../../convex/_generated/api"
import { useEffect } from "react"
import   {AnonUserContext} from "./AnonUserContext"


export const AnonUserProvider = ({ children }) => {
  const [anonUserId, setAnonUserId] = useState(null)

  const createAnonymousUser = useMutation(api.users.createAnonymousUser)

  
  
  useEffect(() => {
    console.log('inside create user useeffect')
    
    createAnonymousUser()
    .then((id) =>{
        setAnonUserId(id)
    }).catch(console.error)
     },[createAnonymousUser])
       return <AnonUserContext.Provider value={anonUserId}>{children}
    </AnonUserContext.Provider>
  
}
