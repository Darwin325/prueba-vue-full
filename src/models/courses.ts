export type Time = { start: string; end: string }

export interface Course {
   id: number
   name: string
   description: string
   start_date: string
   end_date: string
   time: Time
}
