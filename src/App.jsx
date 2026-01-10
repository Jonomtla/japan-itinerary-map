import { useState } from 'react'
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

// Component to handle map view changes
function MapController({ selectedDestination }) {
  const map = useMap()

  if (selectedDestination) {
    map.flyTo(selectedDestination.coordinates, 10, {
      duration: 1.5
    })
  }

  return null
}

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')

  // Create polyline coordinates for route
  const routeCoordinates = itineraryData.map(dest => dest.coordinates)

  // Calculate center point for initial map view
  const centerLat = itineraryData.reduce((sum, dest) => sum + dest.coordinates[0], 0) / itineraryData.length
  const centerLng = itineraryData.reduce((sum, dest) => sum + dest.coordinates[1], 0) / itineraryData.length

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination)
    setActiveTab('details')
  }

  const getPhaseLabel = (phase) => {
    return tripInfo.phases[phase]?.label || phase
  }

  const getPhaseColor = (phase) => {
    return tripInfo.phases[phase]?.color || '#666'
  }

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>{tripInfo.title}</h1>
          <p className="header-subtitle">
            {tripInfo.dates} | {tripInfo.totalDays} Days | {tripInfo.destinations} Destinations
          </p>
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
                  <div
                    key={dest.id}
                    className={`destination-item ${selectedDestination?.id === dest.id ? 'selected' : ''}`}
                    onClick={() => handleDestinationClick(dest)}
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
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && selectedDestination && (
            <div className="details-panel">
              <div
                className="details-header"
                style={{ backgroundColor: selectedDestination.color }}
              >
                <h2>{selectedDestination.destination}</h2>
                <p>{selectedDestination.dates} | {selectedDestination.nights} nights</p>
                <span className="phase-badge">
                  {getPhaseLabel(selectedDestination.phase)}
                </span>
              </div>

              <div className="details-content">
                <p className="travelling-with">
                  <strong>Travelling with:</strong> {selectedDestination.travellingWith}
                </p>

                <div className="details-section">
                  <h4>Highlights</h4>
                  <ul className="highlights-list">
                    {selectedDestination.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h4>Activities & Schedule</h4>
                  <div className="activities-list">
                    {selectedDestination.activities.map((act, idx) => (
                      <div key={idx} className="activity-item">
                        <span className="activity-day">{act.day}</span>
                        <span className="activity-desc">{act.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDestination.workSpaces.length > 0 && (
                  <div className="details-section">
                    <h4>Coworking Spaces</h4>
                    <div className="workspace-list">
                      {selectedDestination.workSpaces.map((space, idx) => (
                        <div key={idx} className="workspace-item">
                          <span className="workspace-name">{space.name}</span>
                          <span className="workspace-details">{space.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                className="back-btn"
                onClick={() => {
                  setSelectedDestination(null)
                  setActiveTab('overview')
                }}
              >
                Back to Overview
              </button>
            </div>
          )}

          {activeTab === 'details' && !selectedDestination && (
            <div className="no-selection">
              <p>Click on a destination marker on the map or select from the overview list to see details.</p>
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
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapController selectedDestination={selectedDestination} />

            {/* Route line - outer glow */}
            <Polyline
              positions={routeCoordinates}
              color="#e91e63"
              weight={8}
              opacity={0.3}
              lineCap="round"
              lineJoin="round"
            />
            {/* Route line - main path */}
            <Polyline
              positions={routeCoordinates}
              color="#e91e63"
              weight={4}
              opacity={0.9}
              lineCap="round"
              lineJoin="round"
            />
            {/* Route line - animated direction arrows */}
            <Polyline
              positions={routeCoordinates}
              color="#ffffff"
              weight={2}
              opacity={0.8}
              dashArray="0, 20"
              lineCap="round"
            />

            {/* Destination markers */}
            {itineraryData.map((dest, idx) => (
              <Marker
                key={dest.id}
                position={dest.coordinates}
                icon={createCustomIcon(dest.color, selectedDestination?.id === dest.id, idx + 1)}
                eventHandlers={{
                  click: () => handleDestinationClick(dest)
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
                      onClick={() => handleDestinationClick(dest)}
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

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
    </div>
  )
}

export default App
