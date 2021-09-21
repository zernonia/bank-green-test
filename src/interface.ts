export interface CardType {
  love: boolean
  image: string
  years_old: number
  price: string
  address: string
  amenities: {
    bedroom: number
    bathroom: number
  }
  realtor: {
    image: string
    name: string
    phone_number: string
  }
}
