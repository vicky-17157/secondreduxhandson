import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>Redux</h1>
    <p>This is a Redux App.</p>

    <Link to="/posts" className="button">
      View Posts
    </Link>
  </section>
)

export default DashboardPage