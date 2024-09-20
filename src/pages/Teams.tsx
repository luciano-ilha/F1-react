import { useEffect, useRef, useState } from 'react'
import { TeamsContext } from '../hooks/contexts/TeamsContext'
import { TeamsObj } from '../types'
import { initialTeams } from '../utils/Teams.utils'
import Header from '../components/Header'
import TeamsMain from '../components/TeamsMain'
import '../styles/Custom.styles.css'

const API_KEY = '3e1b1588663da7f83d12f7386fe0e4de'; 
const BASE_URL = 'https://v1.formula-1.api-sports.io/teams'

const Teams = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [teams, setTeams] = useState<TeamsObj[]>(initialTeams)

  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchTeams = async () => {
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

      const teamsInfo = await response.json()

      setTeams(teamsInfo.response)
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
    fetchTeams()
  }, [])

  // if (isLoading) {
  //   return (<div>Loading...</div>)
  // }

  // if (error) {
  //   return (<div>Something went wrong</div>)
  // }

  return (
    <div className="custom-container">
      <TeamsContext.Provider value={teams}>
        <Header />
        <TeamsMain />
      </TeamsContext.Provider>
    </div>
  )
}

export default Teams
