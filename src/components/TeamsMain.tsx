import { useEffect } from 'react'
import { useTeamsContext } from '../hooks/contexts/TeamsContext'
import '../styles/TeamsMain.styles.css'

const TeamsMain = () => { 
  const teams = useTeamsContext()

  return (
    <div className='flex flex-col justify-center teams-main-content'>
      <span className='font-semibold leading-6 text-white teams-main-title' style={{ marginBottom: '60px' }}>Teams</span>
      <span className='font-semibold text-white' style={{ marginBottom: '15px' }}>Nome: {teams[0].name}</span>
      <span className='font-semibold text-white' style={{ marginBottom: '15px' }}>Motor: {teams[0].engine}</span>
    </div>
  )
}

export default TeamsMain
