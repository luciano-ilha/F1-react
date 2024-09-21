export type Team = {
  id: number
  city: string
  first_team_entry: string
  world_championships: string
  pole_positions: string
  fastest_laps: string
  president: string
  director: string
  chassis: string
  engine: string
  logo: string
  technical_manager: string
  tyres: string
}

export interface DriverObj {
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
  team: Team
}
