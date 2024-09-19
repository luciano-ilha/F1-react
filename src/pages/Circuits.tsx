import { useState } from 'react';
import { CircuitsContext } from '../hooks/contexts/CircuitsContext';
import { CircuitObj } from '../types';
import CircuitsMain from '../components/CircuitsMain'
import Header from '../components/Header'
import '../styles/Custom.styles.css'

const Circuits = () => {
  const [circuit] = useState<CircuitObj>({
    id: '1',
    name: 'Imola',
    oneLapDistance: '4.58km',
    bestLapTime: '2:05:121',
    bestLapDriver: 'Peter Parker',
    bestLapTeam: 'McLaren'
  })

  return (
    <div className="custom-container">
      <CircuitsContext.Provider value={circuit}>
        <Header />
        <CircuitsMain />
      </CircuitsContext.Provider>
    </div>
  );
};

export default Circuits
