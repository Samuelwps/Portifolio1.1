import {Container, Ullist} from "./styled"


export function Header(){
    return(
        <Container>
            <Ullist>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#works">WORKS</a></li>
            </Ullist>
            <Ullist>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="https://drive.google.com/drive/folders/1b2ZqhIa0Fy1WXgugUwF9N3_3bDtKCpQz?usp=sharing">RESUME</a></li>
            </Ullist>
        </Container>
    );
}