import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { email, password } = formData;

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

const onSubmit = (e) => {
  e.preventDefault()
}

  return (
    <>
    <section>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login to your account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          id="email" 
          name="email"
          value={email}
          placeholder="Enter your email."
          onChange={onChange} 
        />
        <input
          type="password"
          id="password" 
          name="password"
          value={password}
          placeholder="Enter your password."
          onChange={onChange} 
        />
        <div>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
    </>
    )
}

export default Login