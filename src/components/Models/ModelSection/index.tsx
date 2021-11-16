import React from 'react'

import { Container } from './styles';
/*linha que estende a expecificação que o usuario vai receber a interface props vai receber uma DIV (NÃO É OBRIGATORIO)*/
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overLayNode: React.ReactNode
}


const ModelSection:React.FC <Props>=({modelName, overLayNode, children, ...props})=>{
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
