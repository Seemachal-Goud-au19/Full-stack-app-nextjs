import React from 'react'

const MeetUpDetail = (props) => {
  return (
    <>
      <img
      src={props.image}
      alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      
    </>
  )
}

export default MeetUpDetail
