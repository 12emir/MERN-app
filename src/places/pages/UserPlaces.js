import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id: "p1",
        creator: 'u1',

        title: "Empire state building",
        description: "Lorem ipsum",
        imageUrl: 'https://source.unsplash.com/random',
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }

    },
    {
        id: "p2",
        creator: 'u2',

        title: "Empire state building",
        description: "Lorem ipsum",
        imageUrl: 'https://source.unsplash.com/random',
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    },
    {
        id: "p3",
        creator: 'u3',
        title: "Empire state building",
        description: "Lorem ipsum",
        imageUrl: 'https://source.unsplash.com/random',
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        }
    }

]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PlaceList items={loadedPlaces}>

        </PlaceList>)
}

export default UserPlaces