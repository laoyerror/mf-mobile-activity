import QRCode from 'react-qr-code'
import { useEffect, useRef, useState } from 'react'
import { counterStore } from '@/stores/store'
import { useStore } from '@tanstack/react-store'
import html2canvas from 'html2canvas'
import jsonData from '@/data/config.json'
import imageTitle from '@/assets/images/title.png'
import addressIcon from '@/assets/images/08.png'
import logo from '@/assets/images/logo.png'
import p1 from '@/assets/images/p1.png'
import p2 from '@/assets/images/p2.png'
import p3 from '@/assets/images/p3.png'
import p4 from '@/assets/images/p4.png'
import p5 from '@/assets/images/p5.png'
import p6 from '@/assets/images/p6.png'
import p7 from '@/assets/images/p7.png'
import p8 from '@/assets/images/p8.png'
import p9 from '@/assets/images/p9.png'
import close from '@/assets/svg/close.svg'

export default function Poster() {
  const ref = useRef<HTMLDivElement>(null)
  const state = useStore(counterStore)
  const IMG_MAP = {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
  } as const
  type ImgType = keyof typeof IMG_MAP
  let type: ImgType = state.value

  const info = jsonData.filter((e: any) => e.value === state.value) || 'p9'

  useEffect(() => {
    console.log('state changed:', state)
  }, [state])

  let days: number = Math.abs(daysFromToday(state.date))

  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState('')

  let link = state.orderUrl

  const [name1, name2] = state.name.split(/\s*&\s*/)

  const generate = async () => {
    if (!ref.current) return
    const canvas = await html2canvas(ref.current, {
      useCORS: true,
      scale: window.devicePixelRatio,
      backgroundColor: null,
    })
    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b!), 'image/png'),
    )
    const url = URL.createObjectURL(blob)
    // window.open(url)
    setPreview(url)
    setOpen(true)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // 平滑滚动
    })
  }

  const share = () => {
    window.open('https://www.facebook.com/', '_blank')
    // window.location.href =
    //   'fb://facewebmodal/f?href=' +
    //   encodeURIComponent(
    //     'https://www.facebook.com/sharer/sharer.php?u=https://example.com',
    //   )
  }

  function daysFromToday(dateStr: string) {
    const [year, month, day] = dateStr.split('-').map(Number)
    const targetDate = new Date(year, month - 1, day)
    const today = new Date()
    targetDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    const diffTime = targetDate.getTime() - today.getTime()
    return Math.round(diffTime / (1000 * 60 * 60 * 24))
  }

  return (
    <>
      <div
        ref={ref}
        className="poster relative z-1 w-[7.5rem] h-[16.21rem] text-[0.22rem] text-[#000] pt-[0.5rem] pb-[1rem] box-border"
      >
        <div
          className={`w-full h-full absolute top-0 left-0 z-99 bg-[rgba(0,0,0,0.8)] text-center ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <img
            src={close}
            onClick={() => setOpen(false)}
            className="w-[0.8rem] absolute top-[0.4rem] right-[0.4rem]"
          />
          <img className="w-[50%] mx-auto mt-[3rem]" src={preview} alt="" />
          <p className="text-white font-medium text-[0.5rem] text-center px-[0.4rem] mt-[0.4rem] exo-2-font">
            Press and hold the image to save it to your device
          </p>
        </div>
        <img
          className="w-full h-full absolute top-0 left-0 z-2"
          src={IMG_MAP[type]}
        />
        <img className="w-full" src={imageTitle} alt="" />
        <div className="absolute flex items-center top-[4.3rem] left-[0.4rem] text-white font-bold tracking-wide exo-2-font">
          <span className="text-[0.35rem] leading-none">{name1 || '--'}</span>
          <span className="text-[0.35rem] mx-[0.1rem]">❤️</span>
          <span className="text-[0.35rem] leading-none">{name2 || '--'}</span>
        </div>
        <div className="text-right w-[2.1rem] absolute z-3 top-[5.8rem] right-[0.4rem] text-[0.35rem] text-white exo-2-font leading-[0.45rem]">
          {info[0]?.label || '--'}
        </div>
        <div className="text-right w-[2.1rem] absolute z-3 top-[8.3rem] right-[0.4rem] text-[0.25rem] text-white exo-2-font">
          <span className="text-[0.30rem] font-medium text-[#FEEBCF] italic">
            SURPRISE U
          </span>
          <br />
          <span className="text-[0.28rem]">
            Scan & visit us toreceive a specialValentine's surprise
          </span>
        </div>
        <div className="qrcode-bg absolute z-3 right-[0.4rem] top-[10.6rem] w-[1.7rem] h-[1.7rem] aspect-square pt-[0.16rem] pl-[0.16rem] box-border">
          <QRCode
            value={link}
            level="H"
            style={{
              width: '90%',
              height: '90%',
            }}
            bgColor="#851615"
            fgColor="#fff"
          />
        </div>
        <div className="w-full absolute left-0 top-[12.65rem] border-t border-dashed border-white text-center text-white">
          <p className="text-[0.35rem] font-medium mt-[0.3rem] mb-[0.3rem]">
            RESTAURANT
          </p>
          <img className="w-[0.35rem] mx-auto" src={addressIcon} />
          <p className="mt-[0.1rem]">{state.restAddress}</p>
        </div>
        <img className="w-full absolute bottom-[0.45rem] left-0" src={logo} />
        <div className="absolute top-[4.9rem] left-[0.4rem] z-3 w-[4.5rem] text-white text-[0.25rem]">
          <p className="exo-2-font">
            WE'VE BEEN TOGETHER FOR
            <strong className="text-[#FEEBCF]"> {days}</strong> DAYS.
          </p>
          <p className="exo-2-font">
            VALENTINE'S DAY
            <strong className="text-[#FEEBCF]"> FEB 14, 2026</strong>
          </p>
        </div>
        <div
          data-html2canvas-ignore
          className="w-[7.5rem] left-1/2 transform -translate-x-1/2 fixed z-98 bottom-0 flex justify-between px-[0.6rem] py-[0.3rem] text-[#fff] text-[0.30rem] font-medium exo-2-font backdrop-blur-md bg-white/30"
        >
          <button
            onClick={generate}
            className="w-[48%] h-[0.65rem] bg-[#AC3636] rounded-[0.35rem]"
          >
            Generate Poster
          </button>
          <button
            onClick={share}
            className="w-[45%] h-[0.65rem] bg-[#AC3636] rounded-[0.35rem]"
          >
            Share
          </button>
        </div>
      </div>
    </>
  )
}
