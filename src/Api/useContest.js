import { useEffect, useState } from "react"

const useContest = () => {
  const [contests, setContests] = useState([])
  useEffect(() => {
    fetch("contest.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setContests(data)
      })
  }, [])

return [contests, setContests]

}
export default useContest;