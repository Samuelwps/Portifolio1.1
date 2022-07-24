import { Container, Me, Links, About } from "./styled"

import {AiOutlineLinkedin} from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

export function AboutMe() {
  return (
    <Container> 
      <Me>
          <p>hi i'm</p>
          <h1>SAMUEL RIBEIRO</h1>
          <p>FRONT-END | DEVELOPER</p>
          <Links>
            <AiOutlineLinkedin className="icons"/>
            <FaGithub className="icons"/>
          </Links>
      </Me>    
      <About>
        <h1>About me</h1>
        <p>Eu sou um desenvolvedor Front-End. 
          Com o objetivo de ser Full Stack, 
          atualmete focado em Next.js
        </p>
      </About>         
    </Container>
  )
}
