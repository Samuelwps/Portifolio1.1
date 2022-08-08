
import { 
    ButtonGit, DivSummaryHeader, DivSummaryCategory,
    DivImageSummaryCategory, ProjectHeader, SectionWorks,
    DivImageSummary, DivContent, DivTitle,
    Title, DivImage, ProjectContent
 } from "./styled"

import dtmoneyimage from "./../../images/pageDT-Money/dtmoneyimage.png"
import dtmoneySummary from "./../../images/pageDT-Money/dtmoneySummary.png"
import dtmoneyCategory from "./../../images/pageDT-Money/dtmoneySummaryCategory.png"
import dtmoneySummaryApi from "./../../images/pageDT-Money/dtmoneySummaryApi.png"
import dtmoneySummaryModal from "./../../images/pageDT-Money/dtmoneySummaryModal.png"
import dtmoneySummaryExibion from "./../../images/pageDT-Money/dtmoneySummaryExibion.png"
import dtmoneyCategoryTransactions from "./../../images/pageDT-Money/dtmoneySummaryCategoryTransactions.png"

import { FaGithub } from 'react-icons/fa'

export function DtMoney() {
    return(
        <>
        <SectionWorks>
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
                        <img src={dtmoneyimage} alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </ProjectHeader>

            <ProjectContent>
                <DivSummaryCategory>
                    <DivSummaryHeader>
                        <DivImageSummary><h1>Summary</h1>
                            <img src={dtmoneySummary} alt="dtmoneyimage" />
                        </DivImageSummary>
                        <p>Cada uma das categorias do Summary mostra o registro das transações</p>
                    </DivSummaryHeader>
                </DivSummaryCategory>

                <DivSummaryCategory>
                    <DivImageSummaryCategory>
                        <img src={dtmoneyCategory} alt="dtmoneyimage" />
                    </DivImageSummaryCategory>
                    <div>
                        <p className="space">Se é feito uma ação do tipo deposit, esse valor é adicionado nessa categoria e no total.</p>
                        <p className="space">O mesmo acontece com as ações do tipo withdraw, ela é somada a categoria de saída mas diferente da anterior ela é “descontada”do total.</p>
                    </div>
                </DivSummaryCategory>
                <DivSummaryCategory>
                    <DivImageSummaryCategory>
                        <img src={dtmoneyCategoryTransactions} alt="Transações"/>
                    </DivImageSummaryCategory>
                </DivSummaryCategory>
                <DivSummaryCategory>
                    <DivImageSummaryCategory>
                        <img src={dtmoneySummaryApi} alt="dtmoneyimageApi" />
                    </DivImageSummaryCategory>
                    <div>
                        <p>Nesse pojeto também foi utilizado o MirajeJs para simular uma api, para que assim o Front-end fosse desenvolvido sem um back-end.</p>
                    </div>
                </DivSummaryCategory>
                <DivSummaryCategory>
                    <DivImageSummaryCategory>
                        <img src={dtmoneySummaryModal} alt="dtmoneyimageApi" />
                    </DivImageSummaryCategory>
                    <div>
                        <p>Com o react-modal é passado todos os valores e expecificações da transação e é criado uma nova transaction.</p>
                    </div>
                </DivSummaryCategory>
                <DivSummaryCategory>
                    <DivSummaryHeader>
                        <DivImageSummary>
                            <img src={dtmoneySummaryExibion} alt="dtmoneySummaryExibion" />
                        </DivImageSummary>
                        <p>Logo após ser criado uma nova transação, o array é renderizado e é exibido o novo valor adicionado.</p>
                    </DivSummaryHeader>
                </DivSummaryCategory>
            </ProjectContent>

            <ButtonGit href="https://github.com/Samuelwps/dt-money">
                <FaGithub/>
                <p>View repository</p>
            </ButtonGit>
        </SectionWorks>
        </>
    )
}