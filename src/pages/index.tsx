import React, { useEffect, useState } from 'react'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { counterStore } from '@/stores/store'
import logo from '@/assets/images/logo.png'

export default function Index() {
  const navigate = useNavigate()

  const searchParams: any = useSearch({
    from: '/',
  })
  useEffect(() => {
    console.log('searchParams changed:', searchParams)
  }, [searchParams])

  const state = useStore(counterStore)

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('state changed:', state)
  }, [state])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const [isAgreed, setIsAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !date || !value) {
      alert('Please complete the form content')
      return
    }
    if (!isAgreed) {
      alert('Please read and agree to the privacy agreement first')
      return
    }
    counterStore.setState((prev) => ({
      ...prev,
      orderUrl: searchParams.orderUrl,
      restAddress: searchParams.restAddress,
      restName: searchParams.restName,
      date,
      name,
      value,
    }))
    console.log(name, date)
    navigate({
      to: '/poster',
    })
  }

  const jumpPrivacy = () => {
    navigate({
      to: '/privacy',
    })
  }

  return (
    <>
      <div className="home w-[7.5rem] h-[16.21rem] relative">
        <div className="absolute z-99 bottom-[2rem] rounded-[0.2rem] text-[0.28rem] w-[calc(7.5rem-1.2rem)] mx-[0.6rem] bg-[#E4DEDE] px-[0.6rem] py-[0.4rem]">
          <p className="text-[#7E0F10] text-center font-medium exo-2-font">
            Couple Names
          </p>
          <p className="text-[#7E0F10] text-center exo-2-font">
            (e.g.Alex & Emma)
          </p>
          <input
            type="text"
            value={name}
            placeholder="Alex & Emma"
            onChange={(e) => setName(e.target.value)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] my-[0.2rem]"
          />
          <p className="text-[#7E0F10] text-center font-medium exo-2-font">
            First Date
          </p>
          <input
            type="date"
            lang="en"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] my-[0.2rem]"
          />
          <p className="exo-2-font text-[#7E0F10] text-center font-medium">
            Things We Love Together
          </p>

          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] leading-[0.8rem] my-[0.2rem]"
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="p1">Food dates</option>
            <option value="p2">Traveling</option>
            <option value="p3">Shopping</option>
            <option value="p4">Movie nights</option>
            <option value="p5">Working out</option>
            <option value="p6">Gaming</option>
            <option value="p7">Family time</option>
            <option value="p8">Walking the dog</option>
            <option value="p9">Doing nothing, Together is enough</option>
          </select>

          <div className="flex">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
              className="h-[0.35rem] w-[0.35rem] border border-[#7E3224] mr-[0.1rem]"
            />
            <span className="text-[0.25rem] text-[#7E0F10] exo-2-font">
              I have read and agree to{' '}
              <span onClick={jumpPrivacy} className="font-medium">
                thePrivacy Consent Notice
              </span>
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#7E0F10] font-medium h-[0.7rem] text-[#fff] mt-[0.2rem] rounded-[0.35rem] border-[#7E3224] exo-2-font"
          >
            Generate My Love Poster
          </button>
        </div>
        <div className="absolute w-[7.5rem] bottom-[0.5rem] text-[#fff] font-medium flex justify-center items-center left-1/2 transform -translate-x-1/2">
          <img className="h-[0.45rem]" src={logo} />
        </div>
      </div>
    </>
  )
}
