import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import classes from './RootLayout.module.css'

const RootLayout = () => {
  return (
    <>
        <Navigation />
        <main className={classes.content}>
        <Outlet /> {/* this specifies where the child routes should be rendered on screen */}
        </main>
    </>
  )
}

export default RootLayout