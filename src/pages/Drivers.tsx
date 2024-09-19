import { useState } from 'react'
import { DriversContext } from '../hooks/contexts/DriversContext'
import { DriverObj } from '../types'
import DriversMain from '../components/DriversMain'
import Header from '../components/Header'
import '../styles/Custom.styles.css'

const Drivers = () => {
  const [driver] = useState<DriverObj>({
    id: '1',
    name: 'Peter Parker',
    age: 26,
    gridInitials: 'PTP',
    gridPosition: '1',
    team: 'McLaren'
  })

  return (
    <div className="custom-container">
      <DriversContext.Provider value={driver}>
        <Header />
        <DriversMain />
      </DriversContext.Provider>
    </div>
  )
}

export default Drivers
