export type Driver = {
  id: number
  name: string
  abbr: string
  birthdate: string
  image: string
  nationality: string
  number: number
  career_points: string
  winnings: number
  team_name: string
  championships: number
}

export interface TeamsObj { 
  id: number
  name: string
  city: string
  first_team_entry: number
  world_championships: number
  pole_positions: number
  fastest_laps: number
  president: string
  director: string
  chassis: string
  engine: string
  logo: string
  technical_manager: string
  tyres: string
  drivers: Driver[]
}
