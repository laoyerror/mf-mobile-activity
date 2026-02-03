import React, { useEffect, useState } from 'react'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { counterStore } from '@/stores/store'
import logo from '@/assets/images/logo.png'
import close from '@/assets/svg/close1.svg'

export default function Index() {
  const navigate = useNavigate()

  const searchParams: any = useSearch({
    from: '/',
  })
  useEffect(() => {
    console.log('searchParams changed:', searchParams)
  }, [searchParams])

  const state = useStore(counterStore)
  const [open, setOpen] = useState(false)

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('state changed:', state)
  }, [state])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const [isAgreed, setIsAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!Object.keys(searchParams).length) {
      alert('The page does not carry link parameters')
    }
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
      orderUrl: decodeURIComponent(searchParams.orderUrl),
      restAddress: decodeURIComponent(searchParams.restAddress),
      restName: decodeURIComponent(searchParams.restName),
      date,
      name,
      value,
    }))
    console.log(name, date)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cs_custom_event',
        custom_type: 'christmas-popup',
        custom_action: 'start', // start/save/share
      })
    }
    navigate({
      to: '/poster',
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
            (e.g.James & Mary)
          </p>
          <input
            type="text"
            value={name}
            placeholder="James & Mary"
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
              I have read and agree to the{' '}
              <span
                // onClick={jumpPrivacy}
                onClick={() => setOpen(true)}
                className="font-medium underline decoration-solid"
              >
                Privacy Consent Notice
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

        <div
          className={`fixed z-999 bottom-0 left-1/2 bg-[#E4DEDE] w-full transform -translate-x-1/2 rounded-tl-[0.35rem] rounded-tr-[0.35rem] text-[0.30rem] p-[0.4rem] ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <img
            className="absolute top-[0.25rem] right-[0.25rem] w-[0.5rem]"
            src={close}
            onClick={() => setOpen(false)}
          />
          <h1 className="text-center text-[0.35rem] text-[#666] font-medium mb-[0.2rem]">
            Privacy Notice
          </h1>
          <ul>
            <li className="mb-[0.2rem]">
              <b>What we collect:</b> Your names, optional relationship date,
              and activity preferences.
            </li>
            <li className="mb-[0.2rem]">
              <b>How we use it:</b> Only to generate your Valentine's poster. We
              don't use this for marketing, AI training, or share it with
              anyone.
            </li>
            <li className="mb-[0.2rem]">
              <b>Who can see it:</b> This is processed automatically.
              Participating restaurants cannot access your information.
            </li>
            <li className="mb-[0.2rem]">
              <b>How long we keep it:</b> All data is automatically deleted
              within 30 days after February 28, 2025.
            </li>
            <li className="mb-[0.2rem]">
              <b>Your data, your choice:</b> Participation is voluntary. You can
              request deletion anytime at{' '}
              <a className="text-[#1447E6]" href="mailto:info@menusifu.com">
                info@menusifu.com
              </a>{' '}
              or{' '}
              <a className="text-[#1447E6]" href="tel:+12129665888">
                (212) 966-5888
              </a>
              .
            </li>
            <li className="mb-[0.2rem]">
              <b>Age requirement:</b> Must be 18+. For complete details, see our{' '}
              <a
                className="text-[#1447E6]"
                target="_blank"
                href="https://www.menusifu.com/privacy"
              >
                Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p>
            By continuing, you agree to this notice and our Privacy Policy and
            confirm you are 18 years old or older.
          </p>
        </div>
      </div>
    </>
  )
}
