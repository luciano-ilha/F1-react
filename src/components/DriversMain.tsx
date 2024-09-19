import { useDriversContext } from '../hooks/contexts/DriversContext'
import '../styles/DriversMain.styles.css'

const DriversMain = () => { 
  const driver = useDriversContext()
  console.log(driver)

  return (
    <div className='flex justify-center drivers-main-content'>
      <span className='font-semibold leading-6 text-white drivers-main-title'>Drivers</span>
    </div>
  )
}

export default DriversMain
