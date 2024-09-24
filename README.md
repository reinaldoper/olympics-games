# Olympic Games API Integration

## Description

This project is a frontend application that consumes data from an Olympic Games API. It displays a list of Olympic events, including details such as event name, venue, discipline, and competitor information. The application also supports pagination for navigating through the events.

## Features

- Display of Olympic event details:
  - Discipline name and pictogram
  - Event name and status
  - Venue and competition dates
  - Medal events and live events indication
  - Competitors with their country, result, and position
- Pagination controls for navigating through different pages of events
- Integration with external APIs to fetch real-time data about Olympic Games

## Data Structure

The data retrieved from the API follows the structure defined by the `OlympicGamesResponse` interface. Below is an overview of the key types used:

### `OlympicGamesResponse`

The main type representing the API response.

- `data: OlympicEvent[]`: An array of `OlympicEvent` objects representing individual Olympic events.
- `links: { first, last, prev, next }`: Pagination links to navigate between pages of results.
- `meta: Meta`: Metadata about the pagination state.

### `OlympicEvent`

Represents an individual Olympic event.

- `id: number`: Unique identifier of the event.
- `day: string`: The day the event takes place.
- `discipline_name: string`: The name of the discipline.
- `discipline_pictogram: string`: A pictogram representing the discipline.
- `name: string | null`: Optional event name.
- `venue_name: string`: The name of the venue where the event takes place.
- `event_name: string`: The detailed name of the event.
- `detailed_event_name: string`: More detailed description of the event.
- `start_date: string`: Event start date.
- `end_date: string`: Event end date.
- `status: string`: The current status of the event.
- `is_medal_event: number`: Indicates if the event is a medal event (1 = Yes, 0 = No).
- `is_live: number`: Indicates if the event is currently live (1 = Yes, 0 = No).
- `gender_code: "M" | "F"`: The gender category for the event.
- `competitors: Competitor[]`: A list of competitors participating in the event.

### `Competitor`

Represents an individual competitor in an event.

- `country_id: string`: The ID of the country the competitor represents.
- `country_flag_url: string`: URL to the country's flag image.
- `competitor_name: string`: Name of the competitor.
- `position: number`: Position of the competitor in the event.
- `result_position: string`: Resulting position in the event (e.g., "1st", "2nd").
- `result_winnerLoserTie: "W" | "L" | "T"`: Indicates if the competitor won, lost, or tied.
- `result_mark: string`: Mark or result of the competitor in the event (e.g., time or score).

### `Meta`

Pagination metadata.

- `current_page: number`: The current page number.
- `from: number`: The index of the first event on the current page.
- `last_page: number`: The last available page.
- `links: PaginationLink[]`: Array of pagination link objects.
- `path: string`: The base URL for the pagination.
- `per_page: number`: Number of events per page.
- `to: number`: The index of the last event on the current page.
- `total: number`: Total number of events available.

### `PaginationLink`

Represents a link for pagination.

- `url: string | null`: The URL to navigate to a different page.
- `label: string`: The label for the pagination link (e.g., "Next", "Previous").
- `active: boolean`: Whether this pagination link is active.

## Usage

0. Clone the repository:

1. Install dependencies:

  ```bash
   npm install
  ```

2. Start the development server:

  ```bash
  npm run dev
  ```
