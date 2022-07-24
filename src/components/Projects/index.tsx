// import { ListItem, SelectedWorks, SectionWorks, Imgworks, DivWorks, DivForWorks, ProjectsWorks } from "./styled"
import dtmoneyIcon from "./../../images/dtmoneyIcon.svg"

import { Project, SectionWorks, DivWorks, DivContent, DivTitle, Title, DivImage, Ullist } from "./styled"

import Arrow from "./../../images/arrow.svg"


export function Projects() {
    return(
        <SectionWorks>
            <Project>
                <DivWorks>
                    <p>PROJECTS</p>
                    <h2>Projetos Concluídos</h2>
                </DivWorks>
                <DivContent>
                    <DivTitle>
                        <Title>
                            <div/>
                            <h4>DT-Money</h4>
                        </Title>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Laborum a, eligendi reiciendis
                        </p>

                        <Ullist>
                            <li><a><img src={Arrow} alt="arrow"/></a></li>
                            <li><a><img src={Arrow} className="second"alt="arrow"/></a></li>
                        </Ullist>
                    </DivTitle>

                    <DivImage></DivImage>
                </DivContent>
            </Project>
        </SectionWorks>
    )
}