import {Client} from "faunadb"

export const fauna = new Client({
  secret: process.env.REACT_APP_FAUNA_KEY,
})

import { query as q } from "faunadb"

export async function Feste(
  contact: {Name:string, Email:string, Message:string}, 
  setInputName:React.Dispatch<React.SetStateAction<string>>, 
  setInputEmail:React.Dispatch<React.SetStateAction<string>>,
  setAreaTextMessage:React.Dispatch<React.SetStateAction<string>>
)  
{
  if(contact.Name === "" || contact.Email === ""|| contact.Message === ""){
    alert("Complete todos os campos")
    
  } else{
      try{
      await fauna.query(
        q.Create(
          q.Collection("contact"),
          {data : {contact}}
        )
      )
      setInputName("")
      setInputEmail("")
      setAreaTextMessage("")
      return true
    } catch {
      return false 
    }
  }
}