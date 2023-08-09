import { Search, Sliders } from "react-feather"
import { InputGroup, InputGroupText, Input } from "reactstrap"
const NavbarSearch = () => {
  return (
    <InputGroup className='input-group-merge ms-1'>
      <InputGroupText className='round'>
        <Search className='text-muted' size={14} />
      </InputGroupText>
      <Input
        className='round'
        placeholder='Search or start a new chat'
      />
      <InputGroupText className='round'>
        <Sliders className='text-muted' size={14} />
      </InputGroupText>
    </InputGroup>
  )
}

export default NavbarSearch