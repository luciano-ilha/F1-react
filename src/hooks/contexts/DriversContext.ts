import { createContext, useContext } from "react";
import { DriverObj } from "../../types";

export const DriversContext = createContext<DriverObj[] | undefined>(undefined);

export const useDriversContext = () => {
  const driver = useContext(DriversContext)

  if (driver === undefined) {
    throw new Error('useDriversContext must be used with a DriversContext')
  }

  return driver
}
