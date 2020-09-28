// All Rocket Data Types
export interface AllRockets {
  id: number
  rocket_name: string
  flickr_images: string[]
  description: string
  company: string
  active: boolean
}

// Single Rocket Data Types
export interface Rocket {
  rocket_name: string
  flickr_images: string[]
  description: string
  company: string
  active: boolean
  rocket_type: string
  cost_per_launch: number
  height: {
    feet: number
  }
  mass: {
    kg: number
  }
  country: string
  first_flight: string
  wikipedia: string
  diameter: {
    meters: number
  }
}
