import { calculateSizeAdjustValues } from 'next/dist/server/font-utils'
import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css'
export default function MainHeader() {
  return (
<header className={classes.header}>
    <div className={classes.logo}>
        <Link href='/'>Event Mania</Link>

    </div>
    <nav className={classes.navigation}>
        <ul>
            <li>
                <Link href='/events'>Browse All Events</Link>
            </li>
        </ul>
    </nav>
</header>
  )
}
