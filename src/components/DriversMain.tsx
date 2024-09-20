import { useDriversContext } from '../hooks/contexts/DriversContext'
import '../styles/DriversMain.styles.css'

const DriversMain = () => { 
  const driver = useDriversContext()

  return (
    <div className='flex flex-col justify-center drivers-main-content'>
      <span className='font-semibold leading-6 text-white drivers-main-title' style={{marginBottom: '60px'}}>Drivers</span>
      <img src={driver?.image} style={{marginBottom: '10px'}} alt="Driver image" />
      <span style={{marginBottom: '10px'}}>Name: {driver?.name} - {driver?.abbr}</span>
      <span style={{marginBottom: '10px'}}>Birthdate: {driver?.birthdate}</span>
      <span style={{marginBottom: '10px'}}>Nationality: {driver?.nationality}</span>
      <span style={{marginBottom: '10px'}}>Number: {driver?.number}</span>
      <span style={{marginBottom: '10px'}}>Career Points: {driver?.career_points}</span>
      <span style={{marginBottom: '10px'}}>Podiums: {driver?.podiums}</span>
      <span style={{marginBottom: '10px'}}>Team: {driver?.teams[0].team.name}</span>
      <span style={{marginBottom: '10px'}}>Team Logo: <img src={driver?.teams[0].team.logo} alt="Driver team logo" /></span>
    </div>
  )
}

export default DriversMain
