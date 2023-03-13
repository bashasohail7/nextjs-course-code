import React, { Fragment } from 'react'
import Head from 'next/head'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/events-search'
import { getAllEvents } from '../../helpers/api-util'
import { useRouter } from 'next/router'
export default function AllEventsPage({events}) {
  const router=useRouter()
  const findEventsHandler=(year,month)=>{
router.push(`/events/${year}/${month}`)
  }
    return (
    <Fragment>
      <Head>
        <title>NextJs Events</title>
      </Head>
        <EventsSearch onSearch={findEventsHandler}/>
<EventList items={events}/>
    </Fragment>
  )
}
export async function getStaticProps(){
  const events=await getAllEvents()
  return {
    props:{
      events
    },
    revalidate:60
  }
}
