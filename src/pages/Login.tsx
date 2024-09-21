import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('user', JSON.stringify(data.user))

        navigate('/')
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Email ou senha incorretos.')
      }
    } catch (error) {
      console.error('Erro de autenticação:', error)
      setError('Erro de conexão com o servidor.')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br />
        <button type="submit">Entrar</button>
      </form>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div>
        <p>Ainda não tem cadastro?</p>
        <Link to='/'>
          <span>Cadastrar</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
