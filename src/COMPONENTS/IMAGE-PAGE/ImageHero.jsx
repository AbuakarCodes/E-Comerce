import React from "react";
import image from "../../assets/IMAGES/main.jpg"

export default function ImageHero() {
  return (
    <div class="hero border-1 pb-3 pt-6">
      <div class="card bg-dark text-white border-0 mx-3">
        <img
          class="card-img img-fluid"
          src={image}
          alt="Card"
          height="500"
        />
        <div class="card-img-overlay d-flex align-items-center">
          <div class="container">
            <h5 class="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
            <p class="card-text fs-5 d-none d-sm-block ">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
