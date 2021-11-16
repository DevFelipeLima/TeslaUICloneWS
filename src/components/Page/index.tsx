import React from "react";
import { ModelSection, ModelsWrapper } from "../Models";
import DefaltOverlayContent from "../DefaltOverlayContent";


import {Container} from './styles'

const Page: React.FC = ()=>{
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    <ModelSection 
                        modelName='modelone'
                        overLayNode={
                            <DefaltOverlayContent 
                            label='model one'
                            description='order online for delivery'
                            />

                        }                    
                    />
                    
                </div>
            </ModelsWrapper>
        </Container>
    )
}

export default Page