import { useCircuitContext } from '../hooks/contexts/CircuitsContext'
import { CircuitObj } from '../types'
import '../styles/CircuitsMain.styles.css'

const CircuitsMain = () => { 
  const circuits = useCircuitContext()

  return (
    <div className='flex flex-col justify-center circuits-main-content'>
      <span className='font-semibold leading-6 text-white drivers-main-title' style={{marginBottom: '50px'}}>Circuits</span>
      {circuits.map((circuit: CircuitObj) => (
        <div key={circuit.id} className='flex flex-col justify-center' style={{ marginBottom: '30px' }}>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Nome: {circuit.name}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Cidade: {circuit.location}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Volta mais rápida (tempo): {circuit.lap_record_time}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Volta mais rápida (piloto): {circuit.lap_record_driver_name}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Número de voltas: {circuit.laps}</span>
          <span className='font-semibold text-white' style={{ marginBottom: '10px' }}>Distância: {circuit.race_distance}</span>
        </div>
      ))}
    </div>
  )
}

export default CircuitsMain
