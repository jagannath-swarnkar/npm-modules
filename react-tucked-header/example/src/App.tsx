import React from 'react'

import { TuckerComponent } from 'react-tuck-header'
import 'react-tuck-header/dist/index.css'

const App = () => {
  return (
    <div>
      <TuckerComponent>
        <h2>This is header</h2>
      </TuckerComponent>
      <div className="container azure">
        <div className="height_70">1</div>
        <div className="height_70">2</div>
        <div className="height_70">3</div>
      </div>
      <div className="container green"></div>
      <div className="container yellow"></div>
      <div className="container black"></div>
      <div className="container white"></div>
      <div className="container orage"></div>
    </div>
  )
}

export default App
