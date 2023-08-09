// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarSearch from './NavbarSearch'
import { Col, Row } from 'reactstrap'
// ** Reactstrap Imports
const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin } = props

  return (
    <div className='px-0 container'>
      <Row>
        <Col md='6' className='d-flex align-items-center'>
          <h2 className='mb-0'>WELCOME TO Sandy_Shop</h2>
        </Col>
        <Col md='6'>
          <Row>
            <Col md='8'>
              <NavbarSearch />
            </Col>
            <Col md='4'>
              <NavbarUser skin={skin} setSkin={setSkin} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ThemeNavbar
