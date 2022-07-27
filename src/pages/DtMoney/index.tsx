
import { DivSummaryCategoryDual, DivSummaryCategory, DivImageSummaryCategory, ProjectHeader, SectionWorks, DivImageSummary, DivContent, DivTitle, Title, DivImage, ProjectContent } from "./styled"

import dtmoneyimage from "./../../images/pageDT-Money/dtmoneyimage.png"
import dtmoneySummary from "./../../images/pageDT-Money/dtmoneySummary.png"
import dtmoneyCategory from "./../../images/pageDT-Money/dtmoneySummaryCategory.png"
import dtmoneyCategoryTransactions from "./../../images/pageDT-Money/dtmoneySummaryCategoryTransactions.png"


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
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Laborum a, eligendi reiciendis
                        </p>
                    </DivTitle>

                    <DivImage>
                        <img src={dtmoneyimage} alt="dtmoneyimage" />
                    </DivImage>
                </DivContent>
            </ProjectHeader>

            <ProjectContent>
                <div>
                    <DivImageSummary><h1>Summary</h1>
                        <img src={dtmoneySummary} alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>Cada uma das categorias do Summary mostra o registro das transações</p>
                </div>

                <DivSummaryCategory>
                    <DivSummaryCategoryDual>
                        <DivImageSummaryCategory>
                            <img src={dtmoneyCategory} alt="dtmoneyimage" />
                        </DivImageSummaryCategory>
                        <div>
                            <p>Se é feito uma ação do tipo deposit, esse valor é adicionado nessa categoria e no total.</p>
                            <p>O mesmo acontece com as ações do tipo withdraw, ela é somada a categoria de saída mas diferente da anterior ela é “descontada”do total.</p>
                        </div>
                    </DivSummaryCategoryDual>
                    <img src={dtmoneyCategoryTransactions} alt="Transações"/>
                </DivSummaryCategory>
            </ProjectContent>
        </SectionWorks>
        </>
    )
}