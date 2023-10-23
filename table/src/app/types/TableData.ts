import { PersonData } from "./PersonData"

export type TableData = {
  count: number,
  next: string | null,
  previous: string | null,
  results: PersonData[];
}