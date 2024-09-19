import '../Login/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const  Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/usuarios')
            const usuarios = await response.json()

            const usuarioEncontrado = usuarios.find((usuario:any) => usuario.email === email && usuario.senha === senha)

            if (usuarioEncontrado) {
                localStorage.setItem('autenticado', 'true')
                localStorage.setItem('usuarioId', usuarioEncontrado.id)
                localStorage.setItem('usuarioNome', usuarioEncontrado.nome)
                navigate('/dashboard')
            } else {
                alert('E-mail ou senha incorretos')
            }
        } catch (error) {
            console.error('Erro de autenticação: ', error)
        }
    }

    return (
        <>
            <div className='flex-row login-bg'>
                <div className='form-container-login column'>
                    <div className='img-login'>
                        <img src="../src/imgs/frase-login.png" alt="Birdy colecione suas histórias" />
                    </div>

                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} className='input-login column'>
                        <input
                            className='input-area'
                            type="text"
                            placeholder='E-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='input-area'
                            type="password"
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        /> <br />
                        <button type='submit' className='btn-style btn-yellow'>Entrar</button>
                    </form>
                    <div className='flex-row f-12'>
                        <p className='space f-branco'>Ainda não tem cadastro?</p>
                        <Link className='texto-link' to='/cadastro-usuario'>
                            <span className='texto-link'>Cadastrar</span>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
