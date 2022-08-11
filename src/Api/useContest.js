import { useEffect, useState } from "react"

const useContest = () => {
  const [contests, setContests] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/contest")
      .then(res =>  res.json())
      .then(data => {
        setContests(data)
      })
  }, [])

return [contests, setContests]

}
export default useContest;