import { createContext, useContext } from "react";
import { CircuitObj } from "../../types";

export const CircuitsContext = createContext<CircuitObj | undefined>(undefined)

export const useCircuitContext = () => { 
  const circuit = useContext(CircuitsContext)

  if (circuit === undefined) {
    throw new Error('useCircuitContext must be used with CircuitsContext')
  }

  return circuit
}
