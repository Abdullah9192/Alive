import React from 'react'

export const CaroussalItem = ({status,image}) => {
  return (
    <div class={`carousel-item ${status}`}>
    <div class="d-flex align-items-center mb-4 text-white">
      <img
        width="80"
        height="80"
        class="rounded-circle bg-dark p-2"
        src={image}
        alt="Image"
      />
      <div class="pl-4">
        <h4 class="text-primary">Client Name</h4>
        <p class="m-0">Profession</p>
      </div>
    </div>
    <div class="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
      Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est
      duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum
      sanctus clita
    </div>
  </div>
  )
}
