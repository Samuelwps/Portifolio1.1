import { ListItem, SelectedWorks, SectionWorks, Imgworks, DivWorks } from "./styled"
import dtmoneyIcon from "./../../images/dtmoneyIcon.svg"
import watchMe from "./../../images/watchMe.svg"
import Arrow from "./../../images/chevrons-right.svg"

export function Projects() {
    return(
        <SectionWorks>
            <SelectedWorks>
                <p>PROJECTS</p>
                <h2>Projetos Concluídos</h2>
            </SelectedWorks>
            <div>
                <ListItem>
                    <DivWorks>
                        <div>
                            <h1>01</h1>
                            <h4>DT-Money</h4>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Laborum a, eligendi reiciendis
                        </p>
                        <div className="Arrow">
                            <a href=""><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
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
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Laborum a, eligendi reiciendis
                        </p>
                        <div className="Arrow">
                            <a href=""><img src={Arrow} alt="Arrow"/>Visualizar projeto</a>
                        </div>    
                    </DivWorks>
                </ListItem>
            </div> 
        </SectionWorks>
    )
}