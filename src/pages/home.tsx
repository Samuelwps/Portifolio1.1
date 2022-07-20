import {AiOutlineLinkedin} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <>

    <div className="divHello"> 
      <div className="me">
          <p>hi i'm</p>
          <h1>SAMUEL RIBEIRO</h1>
          <p>FRONT-END | DEVELOPER</p>
          <div className="links">
            <AiOutlineLinkedin className="icons"/>
            <FaGithub className="icons"/>
          </div>
      </div>    
      <div className="about">
        <h1>About me</h1>
        <p>Eu sou um desenvolvedor Front-End. 
          Com o objetivo de ser Full Stack, 
          atualmete focado em Next.js
        </p>
      </div>         
      <div className="inline"></div>
    </div>
   
    </>
  )
}
