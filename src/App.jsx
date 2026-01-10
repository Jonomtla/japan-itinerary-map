import { useState, useEffect, useRef, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { itineraryData, tripInfo, routeConnections } from './data/itinerary'
import './App.css'

// Fix for default marker icons in Leaflet with Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom marker icon creator with number
const createCustomIcon = (color, isSelected, number) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-pin ${isSelected ? 'selected' : ''}" style="background-color: ${color};">
        <span class="marker-number">${number}</span>
      </div>
    `,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42]
  })
}

// Transport icons
const transportIcons = {
  'Flight': '\u2708',
  'Shinkansen': '\u{1F685}',
  'Train': '\u{1F683}',
  'Bus/Train': '\u{1F68C}'
}

// Component to handle map view changes
function MapController({ selectedDestination, isPlaying, currentIndex, onAnimationComplete }) {
  const map = useMap()
  const animationRef = useRef(null)

  useEffect(() => {
    if (isPlaying && currentIndex < itineraryData.length) {
      const dest = itineraryData[currentIndex]
      map.flyTo(dest.coordinates, currentIndex === 0 ? 6 : 9, {
        duration: 2
      })
    }
  }, [isPlaying, currentIndex, map])

  useEffect(() => {
    if (selectedDestination && !isPlaying) {
      map.flyTo(selectedDestination.coordinates, 10, {
        duration: 1.5
      })
    }
  }, [selectedDestination, isPlaying, map])

  return null
}

// Animated route component
function AnimatedRoute({ routeCoordinates, currentIndex, isPlaying }) {
  const visibleCoordinates = isPlaying
    ? routeCoordinates.slice(0, currentIndex + 1)
    : routeCoordinates

  return (
    <>
      {/* Full route - faded */}
      <Polyline
        positions={routeCoordinates}
        color="#ccc"
        weight={3}
        opacity={0.3}
        lineCap="round"
        lineJoin="round"
      />
      {/* Visible route - outer glow */}
      <Polyline
        positions={visibleCoordinates}
        color="#e91e63"
        weight={8}
        opacity={0.3}
        lineCap="round"
        lineJoin="round"
      />
      {/* Visible route - main path */}
      <Polyline
        positions={visibleCoordinates}
        color="#e91e63"
        weight={4}
        opacity={0.9}
        lineCap="round"
        lineJoin="round"
      />
    </>
  )
}

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationSpeed, setAnimationSpeed] = useState(4000) // ms per destination
  const timelineRef = useRef(null)

  // Create polyline coordinates for route
  const routeCoordinates = itineraryData.map(dest => dest.coordinates)

  // Auto-play animation
  useEffect(() => {
    let timer
    if (isPlaying) {
      if (currentIndex < itineraryData.length - 1) {
        timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1)
        }, animationSpeed)
      } else {
        // Animation complete
        setTimeout(() => {
          setIsPlaying(false)
        }, animationSpeed)
      }
    }
    return () => clearTimeout(timer)
  }, [isPlaying, currentIndex, animationSpeed])

  // Update selected destination during playback
  useEffect(() => {
    if (isPlaying) {
      setSelectedDestination(itineraryData[currentIndex])
      setActiveTab('details')
    }
  }, [currentIndex, isPlaying])

  // Scroll timeline to current destination
  useEffect(() => {
    if (timelineRef.current) {
      const activeItem = timelineRef.current.querySelector('.timeline-item.active')
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [currentIndex, selectedDestination])

  const handleDestinationClick = (destination, index) => {
    setSelectedDestination(destination)
    setCurrentIndex(index)
    setActiveTab('details')
    if (isPlaying) {
      setIsPlaying(false)
    }
  }

  const handlePlayPause = () => {
    if (!isPlaying) {
      // Starting playback
      if (currentIndex >= itineraryData.length - 1) {
        setCurrentIndex(0)
      }
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }

  const handlePrev = () => {
    setIsPlaying(false)
    const newIndex = Math.max(0, currentIndex - 1)
    setCurrentIndex(newIndex)
    setSelectedDestination(itineraryData[newIndex])
    setActiveTab('details')
  }

  const handleNext = () => {
    setIsPlaying(false)
    const newIndex = Math.min(itineraryData.length - 1, currentIndex + 1)
    setCurrentIndex(newIndex)
    setSelectedDestination(itineraryData[newIndex])
    setActiveTab('details')
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentIndex(0)
    setSelectedDestination(null)
    setActiveTab('overview')
  }

  const getPhaseLabel = (phase) => {
    return tripInfo.phases[phase]?.label || phase
  }

  const getPhaseColor = (phase) => {
    return tripInfo.phases[phase]?.color || '#666'
  }

  const getTransportBetween = (fromIndex) => {
    const connection = routeConnections.find(c => c.from === fromIndex + 1)
    return connection || null
  }

  const currentDestination = selectedDestination || (isPlaying ? itineraryData[currentIndex] : null)

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>{tripInfo.title}</h1>
            <p className="header-subtitle">
              {tripInfo.dates} | {tripInfo.totalDays} Days | {tripInfo.destinations} Destinations
            </p>
          </div>
          <div className="header-controls">
            <button
              className={`control-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handlePlayPause}
              title={isPlaying ? 'Pause' : 'Play Trip Animation'}
            >
              {isPlaying ? '\u23F8' : '\u25B6'} {isPlaying ? 'Pause' : 'Play Trip'}
            </button>
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-tabs">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="overview-panel">
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-value">{tripInfo.workSummary.totalWorkDays}</span>
                  <span className="stat-label">Work Days</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">{tripInfo.workSummary.lightWorkDays}</span>
                  <span className="stat-label">Light Work</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">{tripInfo.workSummary.fullDaysOff}</span>
                  <span className="stat-label">Days Off</span>
                </div>
              </div>

              <div className="travel-notes">
                <h3>Travel Notes</h3>
                <ul>
                  {tripInfo.travelNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>

              <div className="destination-list">
                <h3>Destinations</h3>
                {itineraryData.map((dest, idx) => (
                  <div key={dest.id}>
                    <div
                      className={`destination-item ${currentDestination?.id === dest.id ? 'selected' : ''} ${isPlaying && idx <= currentIndex ? 'visited' : ''}`}
                      onClick={() => handleDestinationClick(dest, idx)}
                    >
                      <div className="dest-number" style={{ backgroundColor: dest.color }}>
                        {idx + 1}
                      </div>
                      <div className="dest-info">
                        <span className="dest-name">{dest.destination}</span>
                        <span className="dest-dates">{dest.dates}</span>
                      </div>
                      <span
                        className="dest-phase"
                        style={{ backgroundColor: getPhaseColor(dest.phase) }}
                      >
                        {dest.nights}N
                      </span>
                    </div>
                    {idx < itineraryData.length - 1 && (
                      <div className="transport-connector">
                        <span className="transport-icon">
                          {transportIcons[getTransportBetween(idx)?.transport] || '\u2192'}
                        </span>
                        <span className="transport-info">
                          {getTransportBetween(idx)?.transport} {getTransportBetween(idx)?.duration}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && currentDestination && (
            <div className="details-panel">
              <div
                className="details-header"
                style={{ backgroundColor: currentDestination.color }}
              >
                <div className="details-nav">
                  <button
                    className="nav-btn"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                  >
                    \u2190 Prev
                  </button>
                  <span className="nav-position">{currentIndex + 1} / {itineraryData.length}</span>
                  <button
                    className="nav-btn"
                    onClick={handleNext}
                    disabled={currentIndex === itineraryData.length - 1}
                  >
                    Next \u2192
                  </button>
                </div>
                <h2>{currentDestination.destination}</h2>
                <p>{currentDestination.dates} | {currentDestination.nights} nights</p>
                <span className="phase-badge">
                  {getPhaseLabel(currentDestination.phase)}
                </span>
              </div>

              <div className="details-content">
                <p className="travelling-with">
                  <strong>Travelling with:</strong> {currentDestination.travellingWith}
                </p>

                <div className="details-section">
                  <h4>Highlights</h4>
                  <ul className="highlights-list">
                    {currentDestination.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h4>Activities & Schedule</h4>
                  <div className="activities-list">
                    {currentDestination.activities.map((act, idx) => (
                      <div key={idx} className="activity-item">
                        <span className="activity-day">{act.day}</span>
                        <span className="activity-desc">{act.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {currentDestination.workSpaces.length > 0 && (
                  <div className="details-section">
                    <h4>Coworking Spaces</h4>
                    <div className="workspace-list">
                      {currentDestination.workSpaces.map((space, idx) => (
                        <div key={idx} className="workspace-item">
                          <span className="workspace-name">{space.name}</span>
                          <span className="workspace-details">{space.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next destination preview */}
                {currentIndex < itineraryData.length - 1 && (
                  <div className="next-destination">
                    <div className="next-transport">
                      <span className="transport-icon-large">
                        {transportIcons[getTransportBetween(currentIndex)?.transport] || '\u2192'}
                      </span>
                      <div className="transport-details">
                        <span>{getTransportBetween(currentIndex)?.transport}</span>
                        <span className="transport-duration">{getTransportBetween(currentIndex)?.duration}</span>
                      </div>
                    </div>
                    <div className="next-preview" onClick={() => handleDestinationClick(itineraryData[currentIndex + 1], currentIndex + 1)}>
                      <span className="next-label">Next Stop</span>
                      <span className="next-name">{itineraryData[currentIndex + 1].destination}</span>
                    </div>
                  </div>
                )}
              </div>

              <button
                className="back-btn"
                onClick={handleReset}
              >
                Back to Overview
              </button>
            </div>
          )}

          {activeTab === 'details' && !currentDestination && (
            <div className="no-selection">
              <p>Click on a destination marker on the map or select from the overview list to see details.</p>
              <button className="start-tour-btn" onClick={handlePlayPause}>
                \u25B6 Start Trip Walkthrough
              </button>
            </div>
          )}
        </aside>

        {/* Map */}
        <div className="map-container">
          <MapContainer
            center={[30, 145]}
            zoom={4}
            className="leaflet-map"
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <MapController
              selectedDestination={currentDestination}
              isPlaying={isPlaying}
              currentIndex={currentIndex}
            />

            <AnimatedRoute
              routeCoordinates={routeCoordinates}
              currentIndex={currentIndex}
              isPlaying={isPlaying}
            />

            {/* Destination markers */}
            {itineraryData.map((dest, idx) => (
              <Marker
                key={dest.id}
                position={dest.coordinates}
                icon={createCustomIcon(
                  dest.color,
                  currentDestination?.id === dest.id,
                  idx + 1
                )}
                opacity={!isPlaying || idx <= currentIndex ? 1 : 0.3}
                eventHandlers={{
                  click: () => handleDestinationClick(dest, idx)
                }}
              >
                <Popup>
                  <div className="popup-content">
                    <h3>{idx + 1}. {dest.destination}</h3>
                    <p><strong>{dest.dates}</strong> | {dest.nights} nights</p>
                    <p className="popup-phase" style={{ color: getPhaseColor(dest.phase) }}>
                      {getPhaseLabel(dest.phase)}
                    </p>
                    <button
                      className="popup-btn"
                      onClick={() => handleDestinationClick(dest, idx)}
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Playback controls overlay */}
          {isPlaying && (
            <div className="playback-overlay">
              <div className="playback-info">
                <span className="playback-destination">{itineraryData[currentIndex].destination}</span>
                <span className="playback-dates">{itineraryData[currentIndex].dates}</span>
              </div>
              <div className="playback-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${((currentIndex + 1) / itineraryData.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="map-legend">
            <h4>Trip Phases</h4>
            {Object.entries(tripInfo.phases).map(([key, value]) => (
              <div key={key} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: value.color }}
                ></span>
                <span>{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline-controls">
          <button className="timeline-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            \u2190
          </button>
          <button className="timeline-btn play-btn" onClick={handlePlayPause}>
            {isPlaying ? '\u23F8' : '\u25B6'}
          </button>
          <button className="timeline-btn" onClick={handleNext} disabled={currentIndex === itineraryData.length - 1}>
            \u2192
          </button>
        </div>
        <div className="timeline-scroll" ref={timelineRef}>
          <div className="timeline-track">
            {itineraryData.map((dest, idx) => (
              <div key={dest.id} className="timeline-segment">
                <div
                  className={`timeline-item ${currentDestination?.id === dest.id ? 'active' : ''} ${isPlaying && idx < currentIndex ? 'visited' : ''}`}
                  onClick={() => handleDestinationClick(dest, idx)}
                  style={{ borderColor: dest.color }}
                >
                  <div className="timeline-marker" style={{ backgroundColor: dest.color }}>
                    {idx + 1}
                  </div>
                  <div className="timeline-info">
                    <span className="timeline-dest">{dest.destination}</span>
                    <span className="timeline-dates">{dest.dates}</span>
                    <span className="timeline-nights">{dest.nights}N</span>
                  </div>
                </div>
                {idx < itineraryData.length - 1 && (
                  <div className={`timeline-connector ${isPlaying && idx < currentIndex ? 'visited' : ''}`}>
                    <span className="connector-icon">
                      {transportIcons[getTransportBetween(idx)?.transport] || '\u2192'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
