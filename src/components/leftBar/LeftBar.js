
import './leftBar.scss'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../acitons/userActions';


const LeftBar = () => {
  const dispatch = useDispatch()
  const {id} = useSelector(state=>state.userLogin.userInfo)
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <Link to='/home'>
            <div className='item'>
              <HomeIcon />
              <span>Home</span>
            </div>
          </Link>
          <Link to='/chat'>
          
            <div className='item'>
              <MessageIcon />
              <span>Messages</span>
            </div>
          </Link>
          <Link to={`/home/profile/${id}`}>
          
            <div className='item'>
              <Person2Icon />
              <span>Profile</span>
            </div>
          </Link>
          
            <div className='item' onClick={handleLogout}>
              <LogoutIcon />
              <span>Logout</span>
            </div>
    
        </div>
      </div>
    </div>
  )
}

export default LeftBar
