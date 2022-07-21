import { ListItem } from "./styled"

export function Projects() {
    return(
        <section>
            <ListItem>
                <h2>Selected Works</h2>
            </ListItem>
            <ListItem>
                <h5>01.</h5>
                <a href="" target="_blank"><h3>Nubank</h3></a>
                <img src="img/lp-nubank.png" alt=""/>
            </ListItem>

            <ListItem>
                <h5>02.</h5>
                <a href="" target="_blank"><h3>FrontPUSH</h3></a>
                <img src="img/lp-frontpush.png" alt=""/>
                
            </ListItem>
        </section>
    )
}