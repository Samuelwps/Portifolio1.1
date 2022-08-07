import {Container, TextAbout, ImagesAbout} from "./styled"

import { query as q } from "faunadb"
import { Feste } from "../../services/fauna"
import { useState } from "react"

export function AboutMeHome(){

    const [InputValue, setInputValue] = useState("")

    const contact = InputValue

    return( 
        <Container>
            
            <TextAbout>
                <h2>About me</h2>
                <h1>SAMUEL RIBEIRO</h1>

                <p>
                    lorem
                </p>

                <ul>
                    <li>topics from list</li>
                </ul>
            </TextAbout>


            <ImagesAbout>

                <input type="text" value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={() => Feste(contact, setInputValue)}>SUBMIT</button>

            </ImagesAbout>

        </Container>
    )
}