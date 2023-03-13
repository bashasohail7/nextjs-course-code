import EventItem from "./EventItem"
import classes from '../../styles/event-list.module.css'
function EventList(props){
    const {items}=props
    return <ul className={classes.list}>
        {items?.map(info=>(
        <EventItem
        key={info.id}
        id={info.id} 
        title={info.title}
        location={info.location}
        image={info.image}
        date={info.date}
        />
             ))}
    </ul>
}
export default EventList