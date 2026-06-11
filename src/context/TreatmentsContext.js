import { createContext, useContext, useEffect, useState } from 'react'
import { client, TREATMENTS_QUERY } from '../lib/sanityClient'

const TreatmentsContext = createContext({ treatments: [], loading: true })

export function TreatmentsProvider({ children }) {
  const [treatments, setTreatments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(TREATMENTS_QUERY)
      .then(data => {
        setTreatments(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch treatments from Sanity:', err)
        setLoading(false)
      })
  }, [])

  return (
    <TreatmentsContext.Provider value={{ treatments, loading }}>
      {children}
    </TreatmentsContext.Provider>
  )
}

export function useTreatments() {
  return useContext(TreatmentsContext)
}
