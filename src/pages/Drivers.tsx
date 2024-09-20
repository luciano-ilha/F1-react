import { useEffect, useRef, useState } from 'react'
import { DriversContext } from '../hooks/contexts/DriversContext'
import { DriverObj } from '../types'
import { initialDriver } from '../utils/Drivers.utils'
import DriversMain from '../components/DriversMain'
import Header from '../components/Header'
import '../styles/Custom.styles.css'

const API_KEY = '3e1b1588663da7f83d12f7386fe0e4de'; 
const BASE_URL = 'https://v1.formula-1.api-sports.io/drivers?id=1'

const Drivers = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [driver, setDriver] = useState<DriverObj>(initialDriver)

  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchDrivers = async () => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    setIsLoading(true)

    try {
      const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY
        },
        signal: abortControllerRef.current?.signal
      })

      const driverInfo = await response.json()

      setDriver(driverInfo.response[0])
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

  // if (isLoading) {
  //   return (<div>Loading...</div>)
  // }

  // if (error) {
  //   return (<div>Something went wrong</div>)
  // }

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
