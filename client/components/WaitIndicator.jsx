import React from 'react'
import { useSelector } from 'react-redux'

export default function WaitIndicator () {
  const waiting = useSelector(globalState => globalState.waiting)

  return (
    <>
      <div className="waitIndicator">
        { waiting
          ? <>
            <img src="./images/house_search.png" alt="loading indicator" className="waitIndicator--img"/>
            <img src="./images/house_search.png" alt="loading indicator" className="waitIndicator--img"/>
            <img src="./images/house_search.png" alt="loading indicator" className="waitIndicator--img"/>
          </>
          : '\u00a0' }
      </div>
    </>
  )
}
