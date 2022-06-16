import ButtonPrimaryStyled from './styled';
import {Button} from './types';

const PrimaryButton = ({value} : Button) => {

  return (
  
<ButtonPrimaryStyled>

{value}

</ButtonPrimaryStyled>

  )
}

export default PrimaryButton


