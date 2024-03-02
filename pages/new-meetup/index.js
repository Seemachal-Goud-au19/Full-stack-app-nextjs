import React from 'react'
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage= () => {
    const addMeetuphandler =(enteredMeetupdata)=>{
console.log(enteredMeetupdata)
    }

  return <NewMeetupForm onAddMeetup={addMeetuphandler} />
}

export default NewMeetupPage
