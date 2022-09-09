import {
    Container, ProjectHeader, DivContent,
    DivTitle, Title, DivImage,
    Projectcontent, DivSummaryCategory, DivSummaryHeader,
    DivImageSummary, ButtonGit

} from "./styled"

import CartImage from "./../../images/pageCart/CartImage.png" 
import requestImage from "./../../images/pageCart/requestImage.png" 
import HomeImage from "./../../images/pageCart/HomeImage.png" 
import renderingProducts from "./../../images/pageCart/renderingProducts.png"
import cartProvider from "./../../images/pageCart/cartProvider.png"
import addProduct from "./../../images/pageCart/addProduct.png"
import UpdateProductAmount from "./../../images/pageCart/UpdateProductAmount.png"
import RemoveProduct from "./../../images/pageCart/RemoveProduct.png"

import { FaGithub } from 'react-icons/fa'

export function Cart(){
    return(
        <Container>
            <ProjectHeader>
                <DivContent>
                    <DivTitle>
                        <Title>
                            <div/>
                            <h4>Cart</h4>
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

            <Projectcontent>
                <DivSummaryHeader>
                    <h1>Home</h1>
                    <DivImageSummary>
                        <img src={HomeImage} alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>Na home desse projeto cada um dos itens são<br/>requisitados de uma API local e depois gerados</p>

                    <DivImageSummary>
                        <img src={requestImage} alt="dtmoneyimage" />
                    </DivImageSummary>

                    <DivImageSummary>
                        <img src={renderingProducts} alt="dtmoneyimage" />
                    </DivImageSummary>
                    
                    
                    <h1>Carrihno</h1>
                    <p><br/>Todas as interações do carrinho são armazenadas<br/>no localStorage com um Hook chamado useCart<br/>para serem usadas futuramente.</p>
                        <DivImageSummary>
                            <img src={cartProvider} alt="dtmoneyimage" />
                        </DivImageSummary>
                    <p>Dentre eles são:</p>
                    <DivImageSummary>
                        <img src={addProduct} alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>addProduct que vai ou adicionar um produto novo<br/>no carrinho ou se ja existir o produto que vai ser<br/>adicionado, ele é incrementado a quantidade que já<br/>está armazenado.</p>
                    <DivImageSummary>
                        <img src={UpdateProductAmount} alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>updateProductAmount que vai adicionar um mais<br/>um produto no carrihno ou remover</p>
                    <DivImageSummary>
                        <img src={RemoveProduct} alt="dtmoneyimage" />
                    </DivImageSummary>
                    <p>removeProduct que vai remover um produto do<br/>inteiro do carrinho.</p>
                    </DivSummaryHeader>
            </Projectcontent>
            <ButtonGit href="https://github.com/Samuelwps/dt-money">
                <FaGithub/>
                <p>View repository</p>
            </ButtonGit>
        </Container>
    )
}