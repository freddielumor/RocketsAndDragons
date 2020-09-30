// All Dragon Data Types
export interface AllDragons {
  id: string
  name: string
  flickr_images: string[]
  description: string
  type: string
  active: boolean
}

// Single Dragon Data Types
export interface Dragon {
  name: string
  description: string
  launch_payload_mass: {
    kg: number
  }
  crew_capacity: number
  active: boolean
  type: string
  height_w_trunk: {
    feet: number
  }
  dry_mass_kg: number
  orbit_duration_yr: number
  first_flight: string
  wikipedia: string
  diameter: string
}
