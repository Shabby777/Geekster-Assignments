import React from 'react'
import './Card.css'

export const Card = ({content, imgUrl, author, role}) => {
  return (
    <>
    <div class="card-wrapper">
    <blockquote id="card-text">
        <p>{content}</p>
        </blockquote>
            <div class="card-author">
            <img src={imgUrl} alt="photo" style={{ height: '50px', width: '50px' , borderRadius:'50%' }}></img>
            <div class="card-author-name">
            <strong>{author}</strong>
            <p>{role}</p>
            </div>
        </div>
    </div>
    </>
  )
}