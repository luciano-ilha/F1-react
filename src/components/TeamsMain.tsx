import { useTeamsContext } from '../hooks/contexts/TeamsContext'
import '../styles/TeamsMain.styles.css'

const TeamsMain = () => { 
  const teams = useTeamsContext()

  return (
    <div className='flex justify-center teams-main-content'>
      <span className='font-semibold leading-6 text-white drivers-main-title' style={{ marginBottom: '60px' }}>Teams</span>
      {/* {teams.map((team => { 
        <span>{team.name}</span>
      }))} */}
    </div>
  )
}

export default TeamsMain
