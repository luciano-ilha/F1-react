import { createContext, useContext } from "react";
import { TeamsObj } from "../../types";

export const TeamsContext = createContext<TeamsObj | undefined>(undefined)

export const useTeamsContext = () => { 
  const teams = useContext(TeamsContext)

  if (teams === undefined) {
    throw new Error('useTeamsContext must be used with TeamsContext')
  }

  return teams
}