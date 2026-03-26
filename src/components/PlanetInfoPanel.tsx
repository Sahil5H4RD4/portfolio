import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader2, Info } from 'lucide-react'

interface PlanetInfoPanelProps {
  planetId: string | null
  planetName: string
  onClose: () => void
}

interface PlanetData {
  englishName: string
  mass: { massValue: number; massExponent: number }
  vol: { volValue: number; volExponent: number }
  density: number
  gravity: number
  meanRadius: number
  sideralOrbit: number
  sideralRotation: number
  moons: any[] | null
  discoveredBy: string
  discoveryDate: string
}

export function PlanetInfoPanel({ planetId, planetName, onClose }: PlanetInfoPanelProps) {
  const [data, setData] = useState<PlanetData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!planetId) return

    let isMounted = true
    setLoading(true)
    setError('')
    setData(null)

    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planetId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data')
        return res.json()
      })
      .then((json) => {
        if (isMounted) {
          setData(json)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err)
          setError('Could not retrieve planet data.')
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [planetId])

  return (
    <AnimatePresence>
      {planetId && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="info-panel"
        >
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <h2 className="panel-title">{planetName}</h2>

          {loading && (
            <div className="loading-state">
              <Loader2 className="spinner" size={32} />
              <p>Fetching astronomical data...</p>
            </div>
          )}

          {error && (
            <div className="error-state">
              <Info size={24} />
              <p>{error}</p>
            </div>
          )}

          {data && !loading && !error && (
            <div className="data-content">
              <div className="data-row">
                <span className="data-label">Mass</span>
                <span className="data-value">
                  {data.mass?.massValue} &times; 10<sup>{data.mass?.massExponent}</sup> kg
                </span>
              </div>
              <div className="data-row">
                <span className="data-label">Volume</span>
                <span className="data-value">
                  {data.vol?.volValue} &times; 10<sup>{data.vol?.volExponent}</sup> km&sup3;
                </span>
              </div>
              <div className="data-row">
                <span className="data-label">Gravity</span>
                <span className="data-value">{data.gravity} m/s&sup2;</span>
              </div>
              <div className="data-row">
                <span className="data-label">Density</span>
                <span className="data-value">{data.density} g/cm&sup3;</span>
              </div>
              <div className="data-row">
                <span className="data-label">Mean Radius</span>
                <span className="data-value">{data.meanRadius} km</span>
              </div>
              <div className="data-row">
                <span className="data-label">Orbital Period</span>
                <span className="data-value">{data.sideralOrbit} days</span>
              </div>
              <div className="data-row">
                <span className="data-label">Moons</span>
                <span className="data-value">{data.moons ? data.moons.length : 0}</span>
              </div>
              {(data.discoveredBy || data.discoveryDate) && (
                <div className="data-row discovery">
                  <span className="data-label">Discovered</span>
                  <span className="data-value">
                    {data.discoveredBy} {data.discoveryDate && `(${data.discoveryDate})`}
                  </span>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
