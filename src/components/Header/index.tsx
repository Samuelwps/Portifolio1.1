import {Container, Ullist} from "./styled"


export function Header(){
    return(
        <Container>
            <Ullist>
                <li><a href="home">HOME</a></li>
                <li><a href="About">ABOUT</a></li>
            </Ullist>
            <Ullist>
                <li><a href="Works">WORKS</a></li>
                <li><a href="Resume">RESUME</a></li>
            </Ullist>
        </Container>
    );
}