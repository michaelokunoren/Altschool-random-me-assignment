import React from 'react'

function ErrorBoundaryTestPage({heroName}) {
    if(heroName === "Joker") {
        throw new Error ('Not a hero')
    }


  return (
    <div>{heroName}</div>
  )
}

export default ErrorBoundaryTestPage