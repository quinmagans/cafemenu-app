import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);