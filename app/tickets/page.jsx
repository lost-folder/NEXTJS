import React, { Suspense } from 'react'
import Loading from '../loading'
import TicketList from './TicketList'

const Tickets = () => {
  return (
    <main>
    <nav>
      <div>
        <h2>Tickets</h2>
        <p><small>Currently open tickets.</small></p>
      </div>
    </nav>

        <Suspense fallback={<Loading/>}>
          <TicketList/>
        </Suspense>
  </main>
  )
}

export default Tickets