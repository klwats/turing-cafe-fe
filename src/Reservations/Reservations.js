import React from 'react'
import './Reservations.css'
import Reservation from '../Reservation/Reservation'

const Reservations = ({ reservations }) => {
    const allReservations = reservations.map(reservation => {
        return (
            <Reservation
                id={reservation.id}
                key={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
            />
        )

    })

    return (
        <div>
            {allReservations}
        </div>
    )
}

export default Reservations;
