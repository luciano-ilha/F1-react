import { useDriversContext } from '../hooks/contexts/DriversContext'
import '../styles/DriversMain.styles.css'

const DriversMain = () => { 
  const drivers = useDriversContext()
  console.log(drivers)
  return (
    <div className='flex flex-col justify-center drivers-main-content'>
      <div className='flex flex-col drivers-main-column'>
        <div className='drivers-main-title-wrapper'>
          <h1 className='font-semibold leading-6 text-white drivers-main-title'>All Drivers</h1>
        </div>
        <div className='drivers-main-driver-name-wrapper'>
          {drivers.map((driver) => (<span className='leading-6 text-white drivers-main-driver-name'>{driver.name}</span>))}
        </div>
      </div>
    </div>
  )
}

export default DriversMain
