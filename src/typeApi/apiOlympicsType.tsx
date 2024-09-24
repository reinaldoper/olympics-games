
export interface QueryParameters {
  country: string;
  discipline: string;
  venue: string;
  date: string;
  competitor: string;
}

export interface Event {
  url: string;
  description: string;
  query_parameters: QueryParameters;
}

export interface Countries {
  url: string;
  description: string;
}

export interface Venue {
  url: string;
  description: string;
}

export interface Endpoint {
  events: Event;
  countries: Countries;
  venues: Venue;
  disciplines: Disciplines;
}

export interface Disciplines {
  url: string;
  description: string;
}

export interface OlympicGamesAPI {
  message: string;
  endpoints: Endpoint;
}

export interface CountryData {
  id: string;
  name: string;
  continent: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}

export interface OlympicDataCountry {
  data: CountryData[];
}


export interface DisciplinesDataCountry {
  id: string;
  name: string;
  pictogram_url: string;
  pictogram_url_dark: string;
}

export interface OlympicDataDisciplines {
  data: DisciplinesDataCountry[];
}

export interface VenueData {
  id: string;
  name: string;
  url: string;
}

export interface OlympicDataVenue {
  data: VenueData[];
}

// Tipo para os dados do competidor
interface Competitor {
  country_id: string;
  country_flag_url: string;
  competitor_name: string;
  position: number;
  result_position: string;
  result_winnerLoserTie: "W" | "L" | "T";
  result_mark: string;
}

interface OlympicEvent {
  id: number;
  day: string;
  discipline_name: string;
  discipline_pictogram: string;
  name: string | null;
  venue_name: string;
  event_name: string;
  detailed_event_name: string;
  start_date: string;
  end_date: string;
  status: string;
  is_medal_event: number;
  is_live: number;
  gender_code: "M" | "F";
  competitors: Competitor[];
}

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface OlympicDataEvents {
  data: OlympicEvent[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: Meta;
}

