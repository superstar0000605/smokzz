// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import CartDropdown from './CartDropdown'
import NotificationDropdown from './NotificationDropdown'
const NavbarUser = () => {
  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      <CartDropdown />
      <NotificationDropdown />
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
