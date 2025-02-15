import React from 'react'

function AboutCard({Image, text}) {
  return (
    <div className="col-md-3 col-sm-6 mb-3 px-3">
    <div className="card h-100">
      <img className="card-img-top img-fluid" src={Image} alt="" height={160} />
      <div className="card-body">
        <h3 className="card-title text-center text-xl font-semibold">{text}</h3>
      </div>
    </div>
  </div>
  )
}

export default AboutCard
