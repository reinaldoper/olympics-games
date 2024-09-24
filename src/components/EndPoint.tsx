import { useEffect, useState } from "react"
import { getApiOlympicsGames } from "../service/api"
import { CODANTE } from "../endpoint/endpoint"
import { OlympicDataCountry } from "../typeApi/apiOlympicsType"
import { OlympicDataDisciplines } from "../typeApi/apiOlympicsType"
import { OlympicDataVenue } from "../typeApi/apiOlympicsType"
import { OlympicDataEvents } from "../typeApi/apiOlympicsType"
import image from '../assets/images.jpeg'

const EndPoint = ({ url }: { url: string | undefined }) => {

  const [dataCountry, setDataCountry] = useState<OlympicDataCountry>()
  const [dataDisciplines, setDataDisciplines] = useState<OlympicDataDisciplines>()
  const [dataVenue, setDataVenue] = useState<OlympicDataVenue>()
  const [dataEvent, setDataEvent] = useState<OlympicDataEvents>()

  const urlValited = url ? url : ''

  const URL = CODANTE + urlValited

  useEffect(() => {
    getApiOlympicsGames(URL).then((res) => {
      switch (urlValited) {
        case '/olympic-games/disciplines':
          setDataDisciplines(res)
          break;
        case '/olympic-games/venues':
          setDataVenue(res)
          break;
        case '/olympic-games/countries':
          setDataCountry(res)
          break;
        default:
          setDataEvent(res)
          break;
      }
    })
  }, [url, urlValited, URL])


  const datas = () => {
    switch (urlValited) {
      case '/olympic-games/disciplines':
        return (
          <div>
            {dataDisciplines ? dataDisciplines.data.map((item) => (
              <div className="render-venues" key={item.id}>
                <p>{item.name}</p>
                <img src={item.pictogram_url.length ? item.pictogram_url : image} alt={item.name} />
              </div>
            )) : <h1>Disciplines</h1>}
          </div>
        )
      case '/olympic-games/venues':
        return (
          <div>
            {dataVenue ? dataVenue.data.map((item) => (
              <div className="render-venues" key={item.id}>
                <p>{item.name}</p>
                <a target="_blank" href={item.url}>Page</a>
              </div>
            )) : <h1>Venues</h1>}
          </div>
        )
      case '/olympic-games/countries':
        return (
          <div>
            {dataCountry ? dataCountry.data.map((item) => (
              <div className="render-venues" key={item.id}>
                <p>{item.name}</p>
                <p>Pos: {item.rank}</p>
                <p>Tot: {item.total_medals}</p>
                <img src={item.flag_url} alt="" />
              </div>
            )) : <h1>Countries</h1>}
          </div>
        )
      default:
        return (
          <div>
            {dataEvent ? dataEvent.data.map((item) => (
              <div className="render-venues" key={item.id}>
                <p>{item.discipline_name}</p>
                <p>{item.venue_name}</p>
                {item.competitors.map((competitor) =>(
                  <p key={competitor.country_id}>{competitor.competitor_name}</p>
                ))}
              </div>
            )) : <h1>Events</h1>}
          </div>
        )
    }
  }

  return (
    <>
      {datas()}
    </>
  )
}

export default EndPoint
