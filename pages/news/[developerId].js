import React from 'react'
import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const developer = () => {

  const router = useRouter()

  const developerId = parseInt(router.query.developerId);

  const developerDetails = details.find(developer => developer.id === developerId)

  return (
    <div>
      {developerDetails ? (
        <div>
          {developerDetails.name} {developerDetails.role}
        </div>
      ) : "Developer doesn't exist"}
    </div>
  )
}

export default developer
