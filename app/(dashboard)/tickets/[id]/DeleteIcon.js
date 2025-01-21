"use client"
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { deleteTicket } from '../actions'

// icons & UI
// import { TiDelete } from 'react-icons/ti'

export default function DeleteIcon({ id }) {
  let [isPending, startTransition] = useTransition()

  // const [isLoading, setIsLoading] = useState(false)

  // const handleClick = async () => {
  //   setIsLoading(true)
  //   const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
  //     method: 'DELETE'
  //   })
  //   const json = await res.json()

  //   if (json.error) {
  //     console.log(error)
  //     setIsLoading(false)
  //   }
  //   if (!json.error) {
  //     router.refresh()
  //     router.push('/tickets')
  //   }
  // }
  

  return (
    <button 
      className="btn-primary" 
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending }
    >
      {isPending  && (
        <>
          
          Deleting....
        </>
      )}
      {!isPending  && (
        <>
          Delete Ticket
        </>
      )}
    </button>
  )
}