import classes from '../../styles/event-item.module.css'
import Image from 'next/image';
import Button from '../ui/button'
import { AiFillCalendar } from "react-icons/ai";
import { MdLocationOn,MdArrowRightAlt } from "react-icons/md"
export default function EventItem(props) {
    const {title,image,date,location,id}=props
    const readableDate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    // const formattedAddress=location.replace(', ','\n')
    const exploreLink=`/events/${id}`
  return( <li className={classes.item}>
    <Image src={'/'+image} alt='' width={256} height={160}/>
    <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
            <AiFillCalendar/>
                <time>{readableDate}</time>
            </div>
            <div className={classes.address}>
                <MdLocationOn/>
                {/* <address>{formattedAddress}</address> */}
            </div>
        </div>
        <div className={classes.actions}>
            <Button link={exploreLink}>
                <span>Explore the event</span>
                <span className={classes.icon}><MdArrowRightAlt/></span>
                </Button>
            {/* <Link href={exploreLink}>Explore the event</Link> */}
        </div>
    </div>
  </li>)
}
