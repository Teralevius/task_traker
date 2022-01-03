import React from 'react'
import Header from '../Header/Header'

import styles from './Layout.module.scss'

const Layout: React.FC  = ({ children}) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className={styles.content}>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
