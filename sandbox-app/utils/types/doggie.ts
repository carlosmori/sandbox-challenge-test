export interface Doggie {
  name: string
  image_url: string
  owner: string
  description: string
  attributes: Trait[]
}
export interface Trait {
  trait_type: string
  value: string
}
