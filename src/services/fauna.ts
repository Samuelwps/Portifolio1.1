import {Client} from "faunadb"

export const fauna = new Client({
  secret: process.env.REACT_APP_FAUNA_KEY,
})

import { query as q } from "faunadb"

export async function Feste(InputValue: string, setInputValue:React.Dispatch<React.SetStateAction<string>>){
        try{
          console.log(process.env.REACT_APP_FAUNA_KEY)
          await fauna.query(
          q.Create(
            q.Collection("contact"),
            {data : {InputValue}}
          )
        )
        setInputValue("")

          window.alert("certo")
      } catch {
        window.alert("errado") 
      }
    }