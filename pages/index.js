import React from 'react'
import Head from 'next/head'
// import { getFeaturedEvents } from '../dummy-data'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'
import NewsletterRegistration from '../components/input/newsletter-registration'

export default function HomePage({featuredEvents}) {
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta name='description' content='find featured events'/>
      </Head>
      <NewsletterRegistration/>
     <EventList items={featuredEvents}/>
    </div>
  )
}
export  async function getStaticProps(){
  const featuredEvents=await getFeaturedEvents()
  // let res =await fetch(`https://nextjs-course-af310-default-rtdb.firebaseio.com/`)
  return {
    props:{
      featuredEvents
    },
    revalidate:1800
  }
}
