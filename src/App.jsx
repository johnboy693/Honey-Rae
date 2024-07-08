import { useState } from "react";
import { getAllTickets } from "./services/ticketService";

export const App = () => {
    const [allTickets, setAllTickets] = useState([])

    getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log("tickets set!")
    })
    
    return <></>
}