import { ListItem, SelectedWorks, Container, Imgworks, DivWorks, DivForWorks, ProjectsWorks } from "./styled"
import dtmoneyIcon from "./../../images/dtmoneyIcon.svg"
import watchMe from "./../../images/watchMe.svg"
import Arrow from "./../../images/chevrons-right.svg"

export function Projects() {
    return(
        <Container>
            <DivForWorks>
                <SelectedWorks>
                    <ProjectsWorks>
                        <p>PROJECTS</p>
                        <h2>Projetos Concluídos</h2>
                    </ProjectsWorks>
                </SelectedWorks>
                <div>
                    <ListItem>
                        <DivWorks>
                            <div>
                                <h1>01</h1>
                                <h4>DT-Money</h4>
                            </div>
                            <p>
                                Um dos meus primeiros projetos 
                                como treinamento em desenvolvimento
                                Front-End com rocketseat-education
                            </p>
                            <div className="Arrow">
                                <a href="/DtMoney"><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
                            </div>    
                        </DivWorks>
                        <Imgworks>
                            <img src={dtmoneyIcon} alt="DT-Money"/>
                        </Imgworks>
                    </ListItem>

                    <ListItem>
                        <Imgworks>
                            <img src={watchMe} alt="DT-Money"/>
                        </Imgworks>
                        <DivWorks>
                            <div>    
                                <h1>02</h1>
                                <h4>WatchMe</h4>
                            </div> 
                            <p>
                                Projetos como meu treinamento em desenvolvimento Front-End com rocketseat-education
                            </p>
                            <div className="Arrow">
                                <a href="/WatchMe"><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
                            </div>    
                        </DivWorks>
                    </ListItem>
                </div> 
            </DivForWorks>
        </Container>
    )
}