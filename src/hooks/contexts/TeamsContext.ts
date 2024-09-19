import { createContext, useContext } from "react";
import { TeamObj } from "../../types";

export const TeamsContext = createContext<TeamObj | undefined>(undefined)

export const useTeamsContext = () => { 
  const teams = useContext(TeamsContext)

  if (teams === undefined) {
    throw new Error('useTeamsContext must be used with TeamsContext')
  }

  return teams
}