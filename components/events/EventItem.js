import Link from "next/link";
import styles from './event-item.module.css';
import Button from "../ui/Button";
import DateIcon from "../icons/date-icons";
import AddressIcon from "../icons/adress-icons";
import ArrowRightIcon from "../icons/arrow-right-icons";
import Image from "next/image";

function EventItem(props){
    const{title,image,date,location,id}=props;
    const humanReadableDate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric',
    })

    const formattedAdress=location.replace(', ','\n');
    const exploreLink = `/events/${id}`;

    return (
    <li className={styles.item}>
        <Image src={'/'+image} alt={title} width={250} height={160}/>
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{formattedAdress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={styles.icon}>
                        <ArrowRightIcon/>
                    </span>
                    </Button>
            </div>
        </div>
    </li>
    )
}
export default EventItem;