export interface DriverObj { 
  id: string
  name: string
  age: number
  gridInitials: string
  gridPosition: string
  team: string
}

export class Driver { 
  id: string
  name: string
  age: number
  gridInitials: string
  gridPosition: string
  team: string

  constructor(properties: DriverObj) { 
    this.id = properties.id || String(Date.now)
    this.name = properties.name
    this.age = properties.age
    this.gridInitials = properties.gridInitials
    this.gridPosition = properties.gridPosition
    this.team = properties.team
  }

  get object(): DriverObj { 
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      gridInitials: this.gridInitials,
      gridPosition: this.gridPosition,
      team: this.team
    }
  }
}
