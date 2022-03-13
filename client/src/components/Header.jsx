import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import '../stylesheets/Header.css'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header>
      <div className="logo">
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        {user ? (
        <li>
          <button className='button' onClick={onLogout}>
            <FaSignOutAlt/> Logout
          </button>
        </li>) :
        (
          <>
            <div className="links-container">
              <li className='links'>
                <Link to='/login'>
                  <FaSignInAlt/> Login
                </Link>
              </li>
              <li className='links'>  
                <Link to='/register'>
                  <FaUser/> Register
                </Link>
              </li>
            </div>
          </>
        )}
        
      </ul>
    </header>
    )
}

export default Header