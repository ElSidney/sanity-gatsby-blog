import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with <a href='https://5depositcasinos.com' rel='nofollow'>Casinos</a>{' '}
          &amp;
          {` `}
          <a href='https://5slotscasinos.co.uk' rel='nofollow'>Slots</a>{' '}
&amp;
          {` `}
          <a href='https://5bettingsites.co.uk' rel='nofollow'>Betting</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
