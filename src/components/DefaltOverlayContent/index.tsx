

import { Container, Heading, Buttons } from './styles';

interface Props{
  label:string
  description: string
}

const DefaltOverlayContent: React.FC<Props>=({label, description})=>
 { return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>
      <Buttons>
        <button>Costum Order</button>
        <button className='branco'>Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaltOverlayContent;
