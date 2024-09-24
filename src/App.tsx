import { getApiOlympicsGames } from './service/api'
import { useEffect, useState } from 'react'
import { OlympicGamesAPI } from './typeApi/apiOlympicsType'
import { OLYMPICS } from './endpoint/endpoint'
import EndPoint from './components/EndPoint'

import './css/App.css'

function App() {
  const [olympicGames, setOlympicGames] = useState<OlympicGamesAPI>()
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    getApiOlympicsGames(OLYMPICS).then((res) => {
      setOlympicGames(res)
    })
  }, [])

  const olympicGamesListEvents = () => {
    return (
      <div>
        <h1>Data Olympics Games</h1>
        <h1>{olympicGames?.message}</h1>
        <h2><EndPoint url={olympicGames?.endpoints.events.url} /></h2>
      </div>
    )
  }

  const olympicGamesListVenues = () => {
    return (
      <div>
        <h1>Data Olympics Games</h1>
        <h1>{olympicGames?.message}</h1>
        <h2><EndPoint url={olympicGames?.endpoints.venues.url} /></h2>
      </div>
    )
  }

  const olympicGamesListCountries = () => {
    return (
      <div>
        <h1>Data Olympics Games</h1>
        <h1>{olympicGames?.message}</h1>
        <h2><EndPoint url={olympicGames?.endpoints.countries.url} /></h2>
      </div>
    )
  }

  const olympicGamesListDiscipline = () => {
    return (
      <div>
        <h1>Data Olympics Games</h1>
        <h1>{olympicGames?.message}</h1>
        <h2><EndPoint url={olympicGames?.endpoints.disciplines.url} /></h2>
      </div>
    )
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'events':
        return olympicGamesListEvents()
      case 'venues':
        return olympicGamesListVenues()
      case 'countries':
        return olympicGamesListCountries()
      case 'disciplines':
        return olympicGamesListDiscipline()
      default:
        return <h1>Select a section to view details</h1>
    }
  }

  return (
    <>
      <h1 className='header-olympics'>Olympics Games</h1>
      {olympicGames ? (
        <div className=''>
          <div className='container'>
            <div>
              <h2 className='select' onClick={() => setActiveSection('events')}>List Events Olympics Games</h2>
              <h2 className='select' onClick={() => setActiveSection('countries')}>List Countries Olympics Games</h2>
              <h2 className='select' onClick={() => setActiveSection('venues')}>List Venues Olympics Games</h2>
              <h2 className='select' onClick={() => setActiveSection('disciplines')}>List Disciplines Olympics Games</h2>
            </div>
            <div className='events'>
              {renderActiveSection()}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default App
