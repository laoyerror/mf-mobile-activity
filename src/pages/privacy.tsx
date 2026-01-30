import { useNavigate } from '@tanstack/react-router'
import icon from '@/assets/svg/return.svg'

export default function Privacy() {
  const navigate = useNavigate()
  return (
    <div className="h-screen relative px-[0.4rem] py-[0.2rem] bg-[#FFF] text-[0.30rem] text-[#666]">
      <img
        src={icon}
        onClick={() => navigate({ to: '..' })}
        className="w-[0.55rem] h-[0.55rem] absolute top-[0.20rem] left-[0.3rem]"
      />
      <h1 className="text-center text-[0.35rem] text-[#666] font-medium mb-[0.2rem]">
        Privacy Consent Notice
      </h1>
      <h2 className="mb-[0.2rem]">
        By participating in this Valentine’s Day experience, I understand and
        agree that:
      </h2>
      <ul>
        <li className="mb-[0.2rem]">
          The names, relationship date, and photo I voluntarily submit will be
          collected and processed by MenuSifu solely for the purpose of
          generating my Valentine’s Day memory poster
        </li>
        <li className="mb-[0.2rem]">
          My submitted information will not be used for advertising, marketing,
          AI model training, or any other commercial purposes.
        </li>
        <li className="mb-[0.2rem]">
          The information is processed through automated systems only and is not
          manually reviewed or accessed by participating restaurants.
        </li>
        <li className="mb-[0.2rem]">
          My data will be securely stored and automatically deleted within a
          defined retention period after the Valentine’s Day campaign ends.
        </li>
        <li className="mb-[0.2rem]">
          Participating restaurants do not have access to my submitted personal
          information.
        </li>
      </ul>
      <p>
        Participation is voluntary, and I may choose not to submit personal
        information.
      </p>
    </div>
  )
}
