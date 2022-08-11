import {Container, Ullist} from "./styled"


export function Header(){
    return(
        <Container>
            <Ullist>
                <li><a href="#ABOUT">ABOUT</a></li>
                <li><a href="#WORKS">WORKS</a></li>
            </Ullist>
            <Ullist>
                <li><a href="#CONTACT">CONTACT</a></li>
                <li><a href="#RESUME">RESUME</a></li>
            </Ullist>
        </Container>
    );
}