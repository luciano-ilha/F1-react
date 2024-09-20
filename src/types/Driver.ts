export type DriverTeams = {
  season: string
  team: {
    id: number
    logo: string
    name: string
  }
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
  podiums: number
  teams: DriverTeams[]
}
