import React from 'react'

import { Helmet } from 'react-helmet'

import './catalog.css'

const Catalog = (props) => {
  return (
    <div className="catalog-container">
      <Helmet>
        <title>Catalog - Mobillio Online Store</title>
        <meta property="og:title" content="Catalog - Mobillio Online Store" />
      </Helmet>
    </div>
  )
}

export default Catalog
