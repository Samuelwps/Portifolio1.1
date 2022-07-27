
import { Project, SectionWorks, DivWorks, DivContent, DivTitle, Title, DivImage } from "./styled"

import dtmoneyimage from "./../../images/dtmoneyimage.png"


export function DtMoney() {
    return(
        <>
        <SectionWorks>
            <Project>
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

                        
                    </DivTitle>

                    <DivImage>
                        <img src={dtmoneyimage} alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </Project>
        </SectionWorks>
        </>
    )
}