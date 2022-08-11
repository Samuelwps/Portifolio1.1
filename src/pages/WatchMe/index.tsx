
import { 
    ButtonGit,SectionWorks,ProjectHeader ,
    DivContent, DivTitle, Title,
    DivImage, Projectcontent, DivImageContent,
    DivProjectSideBar, DivP, ProjectContent,
    DivImageSidebar
 } from "./styled"

import WatchMeImage from "./../../images/pageWatchMe/WatchMeImage.png"
import SideBar from "./../../images/pageWatchMe/SideBar.png"
import Content from "./../../images/pageWatchMe/Content.png"

import { FaGithub } from 'react-icons/fa'

export function WatchMe() {
    return(
        <>
        <SectionWorks>
            <ProjectHeader>
                <DivContent>
                    <DivTitle>
                        <Title>
                            <div/>
                            <h4>WatchMe</h4>
                        </Title>
                        <p>
                            Projetos como meu treinamento em desenvolvimento Front-End com rocketseat-education
                        </p>
                    </DivTitle>

                    <DivImage>
                        <img src={WatchMeImage} alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </ProjectHeader>

            <Projectcontent>
                <DivProjectSideBar>
                    <DivImageSidebar>
                        <img src={SideBar} alt="SideBar"/>
                    </DivImageSidebar>
                    <DivP>
                        <Title>
                            <h4>SideBar</h4>
                        </Title>
                        
                            <p>O principal desafio desse componente é o compartilhamento de estado já que é responsavel por controlar qual genero vai ser exibido no content</p>
                    </DivP>
                </DivProjectSideBar>
                <ProjectContent>
                    <Title>
                        <h4>Content</h4>
                    </Title>
                    <DivImageContent>
                        <img src={Content} alt="Content"/>
                    </DivImageContent>
                    <p>Responsavel pela exibição do conteúdo atravez de uma requisição de uma api, usando como “norte” a SideBar para saber qual genero está selecionado</p>
                </ProjectContent>
            </Projectcontent>
            

            <ButtonGit href="https://github.com/Samuelwps/01-Catalogo-de-filme">
                <FaGithub/>
                <p>View repository</p>
            </ButtonGit>
        </SectionWorks>
        </>
    )
}