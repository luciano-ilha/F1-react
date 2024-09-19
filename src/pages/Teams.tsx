import { useState } from 'react'
import { TeamsContext } from '../hooks/contexts/TeamsContext'
import { TeamObj } from '../types'
import Header from '../components/Header'
import TeamsMain from '../components/TeamsMain'
import '../styles/Custom.styles.css'

const Teams = () => {
  const [team] = useState<TeamObj>({
    id: '1',
    name: 'McLaren',
    drivers: {
      firstDriver: 'Peter Parker',
      secondDriver: 'Miles Morales',
    },
    constructorInitials: 'MCL',
    constructorPosition: '1'
  })

  return (
    <div className="custom-container">
      <TeamsContext.Provider value={team}>
        <Header />
        <TeamsMain />
      </TeamsContext.Provider>
    </div>
  )
}

export default Teams
