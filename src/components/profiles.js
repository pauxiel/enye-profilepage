import React from 'react'

const Profiles = ({ profiles }) => {
  return (
    <div>
      <center><h1>profile List</h1></center>
      {profiles.map((profile) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{profile.firstname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{profile.lastname}</h6>
            <p class="card-text">{profile.gender}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Profiles;