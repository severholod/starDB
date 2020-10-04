export class SwapiService {

    _swapiDev = 'https://swapi.dev/api'
    _imageUrl = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => {
        const res = await fetch(`${this._swapiDev}${url}`)
        if (!res.ok) {
            throw new Error(`Not found by ${url}`)
        }
        const body = await res.json()
        return body
    }
     getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }
    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`)
        return this._transformPerson(person)
    }

     getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship)
    }

    _transformPlanet = (planet) => {
        return {
            id: this._getId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformPerson = (person) => {
        return {
            id: this._getId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
    _transformStarship = (starship) => {
        return {
            id: this._getId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
    _getId(item) {
        // const reg = /\/([0-9]*)\/$/
        // const id = item.url.match(reg)[1]
        const arr = item.url.split('/')
        return arr[arr.length - 2]
    }
    getPersonImage = ({id}) => {
        return `${this._imageUrl}/characters/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `${this._imageUrl}/starships/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `${this._imageUrl}/planets/${id}.jpg`
    }
}