// Création d'un interface afin de typer un user, à partir de la doc du site 'https://randomuser.me/documentation#results'
export interface User {
  name: {
    title:string,
    first: string,
    last: string
  },
  login: {
    username: string;
  }
  location: {
    city: string,
    country: string,
    coordinates: {
      latitude: number,
      longitude: number
    }
  },
  email: string,
  phone: number,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}
