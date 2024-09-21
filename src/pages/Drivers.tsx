import { useEffect, useRef, useState } from 'react'
import { DriversContext } from '../hooks/contexts/DriversContext'
import { DriverObj } from '../types'
import { initialDrivers } from '../utils/Drivers.utils'
import DriversMain from '../components/DriversMain'
import Header from '../components/Header'
import '../styles/Custom.styles.css'

const BASE_URL = 'http://localhost:3000/drivers'

const Drivers = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [drivers, setDrivers] = useState<DriverObj[]>(initialDrivers)

  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchDrivers = async () => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    setIsLoading(true)

    try {
      const response = await fetch(BASE_URL)
      const driversInfo = await response.json();

      setDrivers(driversInfo)
    } catch (e: any) {
      if (e.name === 'AbortError') {
        console.log('Aborted')
        return
      }

      setError(e)
    } finally { 
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDrivers()
  }, [])

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>Something went wrong</div>)
  }

  return (
    <div className="custom-container">
      <DriversContext.Provider value={drivers}>
        <Header />
        <DriversMain />
      </DriversContext.Provider>
    </div>
  )
}

export default Drivers
