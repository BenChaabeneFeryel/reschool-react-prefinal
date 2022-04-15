import React from 'react'
import {BrowserRouter as Router, Route , Navigate, Routes} from 'react-router-dom';
import Sidebar from '../Sidebar'
import Header from './Header'
import Footer from './Footer'
import routes from '../../routes'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <Routes>
          {routes.map((route, idx)=> {
            return(
              route.component && (
                <Route 
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props)=> (<route.component {...props} /> )}
                />
              )
            )
            })
          }
          <Navigate replace to="/admin/dashboard"/>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
