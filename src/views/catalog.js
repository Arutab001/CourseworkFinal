import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks2 from '../components/navigation-links2'
import './catalog.css'

const Catalog = (props) => {
  return (
    <div className="catalog-container">
      <Helmet>
        <title>Catalog - Mobillio Online Store</title>
        <meta property="og:title" content="Catalog - Mobillio Online Store" />
      </Helmet>
      <header data-role="Accordion" className="catalog-header">
        <h1>ARTEM</h1>
        <div className="catalog-separator"></div>
        <nav className="catalog-nav">
          <NavigationLinks2 rootClassName="rootClassName19"></NavigationLinks2>
        </nav>
        <div data-role="AccordionHeader" className="catalog-accordion-header">
          <svg viewBox="0 0 1024 1024" className="catalog-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="catalog-accordion-content">
          <div className="catalog-nav1">
            <NavigationLinks2 rootClassName="rootClassName20"></NavigationLinks2>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Catalog
