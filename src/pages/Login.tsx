import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    try {
      // const response = await fetch('http://localhost:3000/users')
      const response = [
        { id: '1', name: 'Teste Nome', email: 'teste@teste.com', password: '12345' },
        { id: '2', name: 'John Lark', email: 'john@john.com', password: '67890' },
        { id: '3', name: 'Doe Forest', email: 'doe@doe.com', password: 'qwerty' }
      ]
      // const users = await response.json()

      const authenticatedUser = response.find((user:any) => user.email === email && user.password === password)

      if (authenticatedUser) {
        localStorage.setItem('authenticated', 'true')
        localStorage.setItem('userId', authenticatedUser.id)
        localStorage.setItem('userName', authenticatedUser.name)
        navigate('/')
      } else {
        alert('E-mail ou senha incorretos')
      }
    } catch (error) {
      console.error('Erro de autenticação: ', error)
    }
  }

  return (
    <>
      <div>
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <button type='submit'>Entrar</button>
          </form>
          <div>
            <p>Ainda não tem cadastro?</p>
            <Link to='/'>
              <span>Cadastrar</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
