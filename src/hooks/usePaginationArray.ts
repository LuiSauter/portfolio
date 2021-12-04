import { useState, useEffect } from "react"

interface IUsePaginationArray {
  dataDisplayed: any[]
  next: () => void
  currentPage: number
  maxPage: number
}

const usePaginationArray = (
  data: any[],
  itemsPerPage: number
): IUsePaginationArray => {
  const [currentPage, setCurrentPage] = useState(1)
  const [dataDisplayed, setDataDisplayed] = useState<Project[]>([])
  const maxPage = Math.ceil(data.length / itemsPerPage) || 1

  useEffect(() => {
    // effect
    let isSubscribed = true
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    const dataSlice = data.slice(begin, end)
    dataSlice.forEach((element) => {
      if (isSubscribed) {
        setDataDisplayed((dataDisplayed) => [...dataDisplayed, element])
      }
    })
    return () => {
      // cleanup
      isSubscribed = false
    }
  }, [currentPage])

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
  }

  return { dataDisplayed, next, currentPage, maxPage }
}

export default usePaginationArray