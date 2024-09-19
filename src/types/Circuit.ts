export interface CircuitObj { 
  id: string
  name: string
  oneLapDistance: string
  bestLapTime: string
  bestLapDriver: string
  bestLapTeam: string
}

export class Circuit { 
  id: string
  name: string
  oneLapDistance: string
  bestLapTime: string
  bestLapDriver: string
  bestLapTeam: string

  constructor(properties: CircuitObj) { 
    this.id = properties.id || String(Date.now)
    this.name = properties.name
    this.oneLapDistance = properties.oneLapDistance
    this.bestLapTime = properties.bestLapTime
    this.bestLapDriver = properties.bestLapDriver
    this.bestLapTeam = properties.bestLapTeam
  }

  get object(): CircuitObj { 
    return {
      id: this.id,
      name: this.name,
      oneLapDistance: this.oneLapDistance,
      bestLapTime: this.bestLapTime,
      bestLapDriver: this.bestLapDriver,
      bestLapTeam: this.bestLapTeam
    }
  }
}
