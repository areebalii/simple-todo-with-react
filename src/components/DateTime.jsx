import { useEffect, useState } from "react"

function DateTime() {
  const [dateTime, setDateTime] = useState("")

  // Date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const currDate = now.toLocaleDateString()
      const currTime = now.toLocaleTimeString()

      setDateTime(`${currDate} - ${currTime}`)

    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <h2>{dateTime}</h2>
  )
}

export default DateTime