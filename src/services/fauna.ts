import {Client} from "faunadb"

export const fauna = new Client({
  secret: process.env.REACT_APP_FAUNA_KEY,
})

import { query as q } from "faunadb"

export async function Feste(contact: string, setInputValue:React.Dispatch<React.SetStateAction<string>>){
      try{
        console.log(process.env.REACT_APP_FAUNA_KEY)
        await fauna.query(
          q.Create(
            q.Collection("contact"),
            {data : {contact}}
          )
        )
        setInputValue("")
        return true
      } catch {
        return false 
      }
    }