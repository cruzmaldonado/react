import React from 'react'

export const CardUser = ({key,user}) => {
  return (
    <article>

        <img src={user?.picture.large} alt="" />
        <h2> {`${user?.name.title}`}</h2>
        <h2> {`${user?.name.first}`} {`${user?.name.last}`}</h2>
    </article>
  )
}