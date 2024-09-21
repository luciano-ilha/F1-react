import { useCircuitContext } from '../hooks/contexts/CircuitsContext'
import '../styles/CircuitsMain.styles.css'

const CircuitsMain = () => { 
  const circuit = useCircuitContext()

  return (
    <div className='flex justify-center circuits-main-content'>
      <span className='font-semibold leading-6 text-white circuits-main-title'>Circuits</span>
    </div>
  )
}

export default CircuitsMain
