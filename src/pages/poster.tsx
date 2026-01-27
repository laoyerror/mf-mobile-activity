import { useSearch } from '@tanstack/react-router'
import QRCode from 'react-qr-code'
import image03 from '../assets/images/03.png'
import image05 from '../assets/images/05.png'
import image06 from '../assets/images/06.png'
import imgFile from '../assets/images/poster.png'
import logo from '../assets/images/menusifu-logo.png'
import addressIcon from '../assets/svg/address.svg'
import linkIcon from '../assets/svg/link.svg'
import x from '../assets/svg/x.svg'

export default function Poster() {
  const searchParams: any = useSearch({
    from: '/poster',
  })
  console.log(searchParams)

  let days: number = 520

  let link =
    'https://order.mealkeyway.com/customer/release/index?mid=787277474471546776564661747575684c32394870513d3d'

  return (
    <>
      <div className="poster min-h-screen text-[0.22rem] text-[#000] pt-[0.5rem] pb-[1rem] box-border">
        <img src={image03} />
        <div className="relative">
          <div className="absolute tracking-wide font-bold flex justify-center items-center top-[1.1rem] left-1/2 transform -translate-x-1/2 z-100 w-[4.5rem] text-[0.35rem]">
            Alex <img className="h-[0.35rem] mx-[0.2rem]" src={image06} /> Emma
          </div>
          <div className="absolute top-[5.58rem] left-1/2 transform -translate-x-1/2 z-100 w-[4.5rem]">
            <p className="text-center">
              WE'VE BEEN TOGETHER FOR
              <strong className="text-[#860000]"> {days}</strong> DAYS.
            </p>
            <p className="text-center">
              VALENTINE'S DAY
              <strong className="text-[#860000]"> FEB 14, 2026</strong>
            </p>
          </div>
          <img className="absolute top-0 left-0 z-99" src={image05} />
          <div className="bg-[#fff] absolute top-[1.74rem] left-1/2 transform -translate-x-1/2 z-9 w-[4.75rem] h-[3.285rem]">
            <img className="w-full h-full" src={imgFile} />
          </div>
        </div>
        <div className="mt-[9.2rem] w-full h-auto px-[1rem] flex">
          <div className="qrcode-bg w-[1.7rem] h-[1.7rem] aspect-square pt-[0.18rem] pl-[0.16rem] box-border">
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
          <div className="pl-[0.3rem] w-[5.5rem] text-[#fff] font-medium text-[0.30rem]">
            <p className="mb-[0.1rem]">RESTAURANT</p>
            <p className="flex text-[0.25rem] items-top">
              <img
                className="w-[0.30rem] h-[0.30rem] mr-[0.1rem]"
                src={linkIcon}
              />
              <span className="inline-block w-full ellipsis">
                www.restaurant.com
              </span>
            </p>
            <p className="flex text-[0.25rem] items-top">
              <img
                className="w-[0.30rem] h-[0.30rem] mr-[0.1rem]"
                src={addressIcon}
              />
              <span className="inline-block w-full ellipsis2">
                9527 N Menusifu Hwysuite b, FL 00000
              </span>
            </p>
          </div>
        </div>
        <div className="text-[#fff] font-medium flex justify-center items-center mt-[0.5rem]">
          <img className="h-[0.45rem]" src={logo} />
          <img className="h-[0.25rem] mx-[0.25rem]" src={x} />
          <span className="text-[0.35rem]">Example</span>
        </div>
        <div className="w-[7.5rem] left-1/2 transform -translate-x-1/2 fixed z-999 bottom-[0.3rem] flex justify-between px-[0.6rem] text-[#fff] text-[0.30rem] font-medium">
          <button className="w-[48%] h-[0.65rem] bg-[#AC3636] rounded-[0.35rem]">
            Download Poster
          </button>
          <button className="w-[45%] h-[0.65rem] bg-[#AC3636] rounded-[0.35rem]">
            Share
          </button>
        </div>
      </div>
    </>
  )
}
