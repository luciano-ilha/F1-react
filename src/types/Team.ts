export interface TeamObj { 
  id: string
  name: string
  drivers: {
    firstDriver: string
    secondDriver: string
    testDriver?: string
  }
  constructorInitials: string
  constructorPosition: string
}

export class Team { 
  id: string
  name: string
  drivers: {
    firstDriver: string
    secondDriver: string
    testDriver?: string
  }
  constructorInitials: string
  constructorPosition: string

  constructor(properties: TeamObj) { 
    this.id = properties.id || String(Date.now)
    this.name = properties.name
    this.drivers = properties.drivers
    this.constructorInitials = properties.constructorInitials
    this.constructorPosition = properties.constructorPosition
  }

  get object(): TeamObj { 
    return {
      id: this.id,
      name: this.name,
      drivers: this.drivers,
      constructorInitials: this.constructorInitials,
      constructorPosition: this.constructorPosition
    }
  }
}
