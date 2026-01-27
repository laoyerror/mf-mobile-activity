import React, { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import x from '../assets/svg/x.svg'
import logo from '../assets/images/menusifu-logo.png'

export default function Index() {
  const navigate = useNavigate()

  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, '---e----')
  }

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    // 这里你可以：裁剪 / 预览 / 上传
    console.log(file)
  }

  const [isAgreed, setIsAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAgreed) {
      alert('请先阅读并同意隐私协议')
      return
    }
    // 提交表单逻辑
    console.log('表单提交成功')
    navigate({
      to: '/poster',
      search: {
        name: 'Alex & Emma',
        date: '2024-02-14',
      },
    })
  }

  const jumpPrivacy = () => {
    navigate({
      to: '/privacy',
    })
  }

  return (
    <>
      <div className="home h-screen relative">
        <div className="fixed z-99 bottom-[2.5rem] rounded-[0.2rem] text-[0.28rem] w-[calc(7.5rem-1.2rem)] mx-[0.6rem] bg-[#E4DEDE] px-[0.6rem] py-[0.4rem]">
          <p className="text-[#7E0F10] text-center font-medium">Couple Names</p>
          <p className="text-[#7E0F10] text-center">(e.g.Alex Emma)</p>
          <input
            type="text"
            onChange={(e) => setName(e)}
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] my-[0.2rem]"
          />
          <p className="text-[#7E0F10] text-center font-medium">First Date</p>
          <input
            type="date"
            lang="en"
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] my-[0.2rem]"
          />
          <p className="text-[#7E0F10] text-center font-medium">
            Upload One Photo
          </p>
          <input
            type="file"
            lang="en"
            accept="image/*"
            capture="environment"
            className="w-full text-[0.25rem] px-[0.2rem] rounded-[0.35rem] border border-[#7E3224] h-[0.8rem] leading-[0.8rem] my-[0.2rem]"
            onChange={onSelectFile}
          />

          <div className="flex">
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
              className="h-[0.35rem] w-[0.35rem] border border-[#7E3224] mr-[0.1rem]"
            />
            <span className="text-[0.25rem] text-[#7E0F10]">
              I have read and agree to{' '}
              <span onClick={jumpPrivacy} className="font-medium">
                thePrivacy Consent Notice
              </span>
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#7E0F10] font-medium h-[0.7rem] text-[#fff] mt-[0.2rem] rounded-[0.35rem] border-[#7E3224]"
          >
            Generate My Love Poster
          </button>
        </div>
        <div className="absolute w-[7.5rem] bottom-[0.5rem] text-[#fff] font-medium flex justify-center items-center left-1/2 transform -translate-x-1/2">
          <img className="h-[0.45rem]" src={logo} />
          <img className="h-[0.25rem] mx-[0.25rem]" src={x} />
          <span className="text-[0.35rem]">Example</span>
        </div>
      </div>
    </>
  )
}
