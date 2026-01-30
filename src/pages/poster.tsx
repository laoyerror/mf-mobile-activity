import { useSearch } from '@tanstack/react-router'
import QRCode from 'react-qr-code'
import { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import image06 from '@/assets/images/06.png'
import image07 from '@/assets/images/07.png'
import imageTitle from '@/assets/images/title.png'
import addressIcon from '@/assets/svg/address.svg'
import logo from '@/assets/images/logo.png'

export default function Poster() {
  const ref = useRef<HTMLDivElement>(null)
  const searchParams: any = useSearch({
    from: '/poster',
  })
  useEffect(() => {
    console.log('searchParams changed:', searchParams)
    console.log('0-0-0-', ref.current)

    if (ref.current) {
      console.log('DOM 元素已挂载:', ref.current)
    }
  }, [searchParams])

  let days: number = 520

  let link =
    'https://order.mealkeyway.com/customer/release/index?mid=787277474471546776564661747575684c32394870513d3d'

  const generate = async () => {
    console.log('ref--', ref)

    if (!ref.current) return

    console.log('90909')

    const canvas = await html2canvas(ref.current, {
      useCORS: true,
      scale: window.devicePixelRatio,
      backgroundColor: null,
    })

    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b!), 'image/png'),
    )

    const url = URL.createObjectURL(blob)
    window.open(url)
  }

  const share = () => {
    // window.open(
    //   'https://www.facebook.com/sharer/sharer.php?u=https://www.example.com/share',
    //   '_blank',
    // )
    window.location.href =
      'fb://facewebmodal/f?href=' +
      encodeURIComponent(
        'https://www.facebook.com/sharer/sharer.php?u=https://example.com',
      )
  }

  return (
    <>
      <div
        ref={ref}
        className="poster relative z-1 w-[7.5rem] h-[16.21rem] text-[0.22rem] text-[#000] pt-[0.5rem] pb-[1rem] box-border"
      >
        <img
          className="w-full h-full absolute top-0 left-0 z-2"
          src={image07}
        />
        <img className="w-full" src={imageTitle} alt="" />
        <div className="absolute flex items-center top-[4.3rem] left-[0.4rem] text-white font-bold tracking-wide exo-2-font">
          <span className="text-[0.35rem] leading-none">Alex</span>
          <img src={image06} className="h-[0.35rem] mx-[0.2rem]" />
          <span className="text-[0.35rem] leading-none">Emma</span>
        </div>
        <div className="text-right w-[2.1rem] absolute z-3 top-[5.8rem] right-[0.4rem] text-[0.35rem] text-white exo-2-font leading-[0.45rem]">
          Good food tastes even better together.
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
          <p className="mt-[0.1rem]">OOOO N Menusifu Hwy suite b. FL O0000</p>
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
          className="w-[7.5rem] left-1/2 transform -translate-x-1/2 fixed z-999 bottom-0 flex justify-between px-[0.6rem] py-[0.3rem] text-[#fff] text-[0.30rem] font-medium exo-2-font backdrop-blur-md bg-white/30"
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
