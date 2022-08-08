import {
    Container, Message, TextMessage,
    IniciarProjeto

} from "./styled"




import { Feste } from "../../services/fauna"
import { useState } from "react"

export function ContactMe(){

    const [InputValue, setInputValue] = useState("")

    const contact = InputValue

    return( 
        <Container>

            <TextMessage>
                <IniciarProjeto>
                    <div/>
                    <h4>Iniciar projeto</h4>
                </IniciarProjeto>

                <h1>Vamos começar?</h1>
                <p>Conte-me sobre seu projeto<br/>Vou responder em breve</p>
            </TextMessage>


            <Message>
                <input type="text" value={InputValue}
                placeholder="Nome"
                onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="text" value={InputValue}
                placeholder="Email"
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={() => Feste(contact, setInputValue)}>SUBMIT</button>
            </Message>
        </Container>
    )
}