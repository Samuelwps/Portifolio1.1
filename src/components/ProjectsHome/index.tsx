import { 
    ListItem, SelectedWorks, Container, 
    Imgworks, DivWorks, DivForWorks, ProjectsWorks,
    ListItemReverse, ButtonAco, ContentAco,
    DivCSS, Arrows
    } from "./styled"
import dtmoneyIcon from "./../../images/dtmoneyIcon.svg"
import watchMe from "./../../images/watchMe.svg"
import Arrow from "./../../images/chevrons-right.svg"
import Todo from "./../../images/TodoIcon.svg"
import Menu from "./../../images/MenuIcon.svg"
import { useState } from 'react';

export function Projects() {

    const [content, setContent] = useState(false)


    return(
        <Container id="works">
            <DivForWorks>
                <SelectedWorks>
                    <ProjectsWorks>
                        <p>PROJECTS</p>
                        <h2>Projetos Concluídos</h2>
                    </ProjectsWorks>
                </SelectedWorks>
                <section>
                    <ListItemReverse>
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
                    </ListItemReverse>

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

                    <ListItemReverse>
                        <DivWorks>
                            <div>
                                <h1>03</h1>
                                <h4>To do</h4>
                            </div>
                            <p>
                                Um dos meus primeiros projetos 
                                como treinamento em desenvolvimento
                                Front-End com rocketseat-education
                            </p>
                            <div className="Arrow">
                                <a href="https://subtle-macaron-9e7b36.netlify.app" target="_blank"><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
                            </div>    
                        </DivWorks>
                        <Imgworks>
                            <img src={Todo} alt="DT-Money"/>
                        </Imgworks>
                    </ListItemReverse>

                    <DivCSS>
                    <ButtonAco onClick={() =>  content?(setContent(false)):(setContent(true))}>
                        <Arrows content={content}>
                            <a onClick={() =>  content?(setContent(false)):(setContent(true))}><img src={Arrow} alt="Arrow"/></a>
                        </Arrows>    
                        <h4>Conceitos com CSS</h4>
                    </ButtonAco>
                    <ContentAco content={content}>
                        <ListItem>
                        <Imgworks>
                            <img src={Menu} alt="DT-Money"/>
                        </Imgworks>
                        <DivWorks>
                            <div>    
                                <h1>01</h1>
                                <h2>Menu</h2>
                            </div> 
                            <div className="Arrow">
                                <a href="https://menu-flutuante.netlify.app" target="_blank"><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
                            </div>    
                        </DivWorks>
                    </ListItem>
                    </ContentAco>
                    </DivCSS>
                </section> 
            </DivForWorks>
        </Container>
    )
}