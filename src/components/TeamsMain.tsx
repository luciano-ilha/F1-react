import { useTeamsContext } from '../hooks/contexts/TeamsContext'
import '../styles/TeamsMain.styles.css'
import { TeamsObj } from '../types'

const TeamsMain = () => { 
  const teams = useTeamsContext()

  return (
    <div className='flex flex-col justify-center teams-main-content'>
      <span className='font-semibold leading-6 text-white teams-main-title' style={{ marginBottom: '50px' }}>Teams</span>
      {teams.map((team: TeamsObj) => (
        <div key={team.id} className='flex flex-col justify-center' style={{ marginBottom: '20px' }}>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Nome: {team.name}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Cidade: {team.city}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Voltas mais rápidas: {team.fastest_laps}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Pole positions: {team.pole_positions}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Campeonatos Mundiais: {team.world_championships}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Pneus: {team.tyres}</span>
        </div>
      ))}
    </div>
  )
}

export default TeamsMain
