import Head from 'next/head';
import { Fragment,useEffect,useState } from 'react';
import { useRouter, } from 'next/router';
import useSWR from 'swr';
import EventList from '../../components/events/EventList';
// import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';

// import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
  const[loadedEvents,setLoadedEvents]=useState([])
  const router = useRouter();
  console.log("royer",router.query)
  const filterData = router.query.slug;
  console.log("filter",filterData)
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const {data,error}=useSWR(`https://nextjs-course-af310-default-rtdb.firebaseio.com/events.json`,fetcher)
  useEffect(()=>{
    const events=[]
    for(const key in data){
     events.push({
         id:key,...data[key]
     })
    }
   setLoadedEvents(events)
  },[data])
  
  if (!loadedEvents) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData&& filterData[0];
  const filteredMonth = filterData&&filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12||error
    ) {
      return (
        <Fragment>
        {/* <ErrorAlert> */}
          <p>Invalid filter. Please adjust your values!</p>
        {/* </ErrorAlert> */}
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  let filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {/* <ErrorAlert> */}
          <p>No events found for the chosen filter!</p>
        {/* </ErrorAlert> */}
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <Head>
            <title>Filtered Events</title>
            <meta 
            name='description'
            content={`All events for ${numMonth}/${numYear}`}
            />
        </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}


export default FilteredEventsPage;