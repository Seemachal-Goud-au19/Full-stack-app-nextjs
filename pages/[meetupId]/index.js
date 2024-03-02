import React from 'react'
import MeetUpDetail from '../../components/meetups/MeetUpDetail'
import { useRouter } from 'next/router';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ark_of_the_Covenant_church_in_Axum_Ethiopia.jpg',
        address: 'Some address 1'
    },
    {
        id: 'm2',
        title: 'A Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ark_of_the_Covenant_church_in_Axum_Ethiopia.jpg',
        address: 'Some address 2'
    },
    {
        id: 'm3',
        title: 'A Third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ark_of_the_Covenant_church_in_Axum_Ethiopia.jpg',
        address: 'Some address 3'
    }
]



const MeetUpDetails = () => {

    const router = useRouter()
    const meetupId = router.query.meetupId

    const MeetupItem = DUMMY_MEETUPS.find((meetup) => meetup.id == meetupId)

    return (
        <MeetUpDetail
            id={MeetupItem.id}
            title={MeetupItem.title}
            image={MeetupItem.image}
            address={MeetupItem.address}
        />
    )
}

export default MeetUpDetails
