import { Mail, Home, Heart, User, MessageSquare, ShoppingCart, Settings, Clock } from 'react-feather'
export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'explore',
    title: 'Explore',
    icon: <Mail size={20} />,
    navLink: '/explore'
  },
  {
    id: 'saved',
    title: 'Saved',
    icon: <Heart size={20} />,
    navLink: '/saved'
  },
  {
    id: 'cart',
    title: 'Cart',
    icon: <ShoppingCart size={20} />,
    navLink: '/cart'
  },
  {
    id: 'selling',
    title: 'Selling',
    icon: <Mail />,
    navLink: '/selling'
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: <User size={20} />,
    navLink: '/profile'
  },
  {
    id: 'prchase',
    title: 'Prchase History',
    icon: <Clock size={20} />,
    navLink: '/prchase-history'
  },
  
  {
    id: 'contact',
    title: 'Contact Us',
    icon: <MessageSquare size={20} />,
    navLink: '/contact-us'
  },
  
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    navLink: '/settings'
  }  
]
