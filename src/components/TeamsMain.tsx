import { useTeamsContext } from '../hooks/contexts/TeamsContext'
import '../styles/TeamsMain.styles.css'

const TeamsMain = () => { 
  const teams = useTeamsContext()
  console.log(teams)

  return (
    <div className='flex justify-center teams-main-content'>
      <span className='font-semibold leading-6 text-white teams-main-title'>Teams</span>
    </div>
  )
}

export default TeamsMain
