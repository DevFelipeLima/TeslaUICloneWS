import React from "react";
import { ModelSection, ModelsWrapper } from "../Models";
import DefaltOverlayContent from "../DefaltOverlayContent";


import {Container} from './styles'

/*Criação do array para seleção de cada modelo com map definido no item ModelSection*/
const Page: React.FC = ()=>{
    return(
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model One',
                        'Model Two',
                        'Model Three',
                        'Model Four',
                        'Model Five',
                        'Model Six',
                        'Model Seve',

                    ].map(modelName =>(
                        <ModelSection 
                        key={modelName}
                        className='colored'
                        modelName={modelName}
                        overLayNode={
                            <DefaltOverlayContent 
                            label={modelName}
                            description='order online for delivery'
                            />

                        }                    
                    />
                    ))}
                    
                    
                </div>
            </ModelsWrapper>
        </Container>
    )
}

export default Page