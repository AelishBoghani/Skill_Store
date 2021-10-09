import React from 'react'
import Banner from '../components/Banner/Banner'
import Cards from '../components/Cards/Cards'
import './Homepage.css'

function MainPage() {
    return (
    <div>
        <div className="banner">
          <Banner />
        </div>
        <div className="skills">
          <Cards />
        </div>
      </div>
    )
}

export default MainPage
