import FiveGridCard from '@/components/shared/CardsGroup/FiveGridCard'
import React from 'react'

const ShowCase = () => {
  return (
    <div
    data-aos={"fade-in"}
    className="w-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400  align-middle flex items-center justify-center mx-auto"
  >
    <FiveGridCard animation={"fade-down-right"} />
  </div>
  )
}

export default ShowCase