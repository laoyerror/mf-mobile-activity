import React, { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import Cropper from 'react-easy-crop'
import { useStore } from '@tanstack/react-store'
import { counterStore } from '@/stores/store'
import x from '../assets/svg/x.svg'
import logo from '../assets/images/menusifu-logo.png'

export default function Index() {
  const navigate = useNavigate()

  const state = useStore(counterStore)

  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('state changed:', state)
  }, [state])

  let imageBlobSrc = ''

  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const [imageSrc, setImageSrc] = useState<string>('')
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)

  function getCroppedImg(imageSrc: string, crop: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = imageSrc
      image.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        canvas.width = crop.width
        canvas.height = crop.height
        ctx.drawImage(
          image,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height,
        )
        // resolve(canvas.toDataURL('image/png'))
        canvas.toBlob(
          (blob: any) => {
            if (!blob) {
              reject(new Error('Canvas is empty'))
              return
            }
            resolve(blob)
          },
          'image/png',
          1,
        )
      }
    })
  }

  // const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (!file) return
  //   const url = URL.createObjectURL(file)
  //   setImageSrc(url)
  //   setOpen(true)
  //   // 允许再次选择同一张
  //   // e.target.value = ''
  // }

  const [isAgreed, setIsAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAgreed) {
      alert('Please read and agree to the privacy agreement first')
      return
    }
    console.log(name, date)
    navigate({
      to: '/poster',
      search: {
        name,
        date,
        type: '',
        // blob: imageBlobSrc,
      },
    })
  }

  const jumpPrivacy = () => {
    navigate({
      to: '/privacy',
    })
  }

  const handleCropped = async () => {
    counterStore.setState((prev) => ({
      ...prev,
      blob: imageSrc,
      crop: croppedAreaPixels,
    }))
    setOpen(false)
  }

  return (
    <>
      <div
        className={`fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.8)] z-9999 px-[0.4rem] box-border transition-all ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <Cropper
          image={imageSrc!}
          crop={crop}
          zoom={zoom}
          aspect={1.446 / 1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={(_, croppedPixels) =>
            setCroppedAreaPixels(croppedPixels)
          }
        />
        <div className="w-full absolute z-99 px-[0.4rem] box-border left-0 bottom-[0.3rem] text-[0.3rem] text-[#fff] flex justify-between">
          <button
            onClick={() => setOpen(false)}
            className="w-[48%] h-[0.6rem] bg-[#fff] text-[#000] text-[0.35rem] font-medium rounded-[0.35rem]"
          >
            cancel
          </button>
          <button
            onClick={handleCropped}
            className="w-[48%] h-[0.6rem] bg-[#7E0F10] text-[0.35rem] font-medium rounded-[0.35rem]"
          >
            confirm
          </button>
        </div>
      </div>
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
            onChange={(e) => setDate(e.target.value)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] my-[0.2rem]"
          />
          {/* <p className="exo-2-font text-[#7E0F10] text-center font-medium">
            Upload One Photo
          </p>
          <input
            type="file"
            lang="en"
            accept="image/*"
            capture="environment"
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] leading-[0.8rem] my-[0.2rem]"
            onChange={onSelectFile}
          /> */}

          <p className="exo-2-font text-[#7E0F10] text-center font-medium">
            Things We Love Together
          </p>

          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] leading-[0.8rem] my-[0.2rem]"
          >
            <option value="" disabled>
              请选择
            </option>
            <option value="1">Food dates</option>
            <option value="2">Traveling</option>
            <option value="3">Shopping</option>
            <option value="4">Movie nights</option>
            <option value="5">Working out</option>
            <option value="6">Gaming</option>
            <option value="7">Family time</option>
            <option value="8">Walking the dog</option>
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
          <img className="h-[0.25rem] mx-[0.25rem]" src={x} />
          <span className="text-[0.35rem] exo-2-font">Example</span>
        </div>
      </div>
    </>
  )
}
