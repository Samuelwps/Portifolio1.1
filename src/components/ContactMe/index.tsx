import {
    Container, Message, TextMessage,
    IniciarProjeto, MessageData, ContainerMessage

} from "./styled"




import { Feste } from "../../services/fauna"
import { useState } from "react"

export function ContactMe(){

    const [InputValue, setInputValue] = useState("")

    const contact = InputValue

    return( 
        <Container>
            <ContainerMessage>
                <TextMessage>
                    <IniciarProjeto>
                        <div/>
                        <h4>Iniciar projeto</h4>
                    </IniciarProjeto>

                    <h1>Vamos começar?</h1>
                    <p>Conte-me sobre seu projeto<br/>Vou responder em breve</p>
                </TextMessage>


                <Message>
                    <MessageData>
                        <input type="text" value={InputValue}
                        placeholder="Nome"
                        onChange={(e) => setInputValue(e.target.value)}
                        />
                        <input type="text" value={InputValue}
                        placeholder="Email"
                        onChange={(e) => setInputValue(e.target.value)}
                        />

                        <textarea placeholder="Message"/>

                        <button type="submit" onClick={() => Feste(contact, setInputValue)}>SUBMIT</button>
                    </MessageData>
                </Message>
            </ContainerMessage>
        </Container>
    )
}