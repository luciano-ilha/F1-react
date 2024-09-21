import { useEffect, useRef, useState } from 'react';
import { CircuitsContext } from '../hooks/contexts/CircuitsContext';
import { CircuitObj } from '../types';
import { initialCircuits } from '../utils/Circuits.utils';
import CircuitsMain from '../components/CircuitsMain'
import Header from '../components/Header'
import '../styles/Custom.styles.css'

const BASE_URL = 'http://localhost:3000/circuits'

const Circuits = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [circuits, setCircuits] = useState<CircuitObj[]>(initialCircuits)

  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchCircuits = async () => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    setIsLoading(true)

    try {
      const response = await fetch(BASE_URL)
      const circuitsInfo = await response.json();

      setCircuits(circuitsInfo)
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
    fetchCircuits()
  }, [])

  if (isLoading) {
    return (<div>Loading...</div>)
  }

  if (error) {
    return (<div>Something went wrong</div>)
  }

  return (
    <div className="custom-container">
      <CircuitsContext.Provider value={circuits}>
        <Header />
        <CircuitsMain />
      </CircuitsContext.Provider>
    </div>
  );
};

export default Circuits
