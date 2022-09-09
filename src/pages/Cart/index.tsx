import {
    Container, ProjectHeader, DivContent,
    DivTitle, Title, DivImage

} from "./styled"


import CartImage from "./../../images/pageCart/CartImage.png"


export function Cart(){
    return(
        <Container>
            <ProjectHeader>
                <DivContent>
                    <DivTitle>
                        <Title>
                            <div/>
                            <h4>DT-Money</h4>
                        </Title>
                        <p>
                            Um dos meus primeiros projetos 
                            como treinamento em desenvolvimento
                            Front-End com rocketseat-education
                        </p>
                    </DivTitle>

                    <DivImage>
                        <img src={CartImage} alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </ProjectHeader>
        </Container>
    )
}