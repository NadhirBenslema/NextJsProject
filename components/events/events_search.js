import { useRef } from "react";
import Button from "../ui/Button";
import styles from "./events-search.module.css";

function EventsSearch(props){
    const yearInputRef = useRef();
     const monthInputRef=useRef();

    function submitHandler(event){
        event.preventDefault();
        const seletedYear=yearInputRef.current.value;
        const seletedMonth=monthInputRef.current.value;
        props.onSearch(seletedYear,seletedMonth);


    }

    return(
        <form className={styles.form} onSubmit={submitHandler}> 
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>

                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">  February</option>
                        <option value="3">Mars</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>

    )
}
export default EventsSearch;