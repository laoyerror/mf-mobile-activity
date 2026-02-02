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
        Privacy Notice
      </h1>
      <ul>
        <li className="mb-[0.2rem]">
          <b>What we collect:</b> Your names, optional relationship date, and
          activity preferences.
        </li>
        <li className="mb-[0.2rem]">
          <b>How we use it:</b> Only to generate your Valentine's poster. We
          don't use this for marketing, AI training, or share it with anyone.
        </li>
        <li className="mb-[0.2rem]">
          <b>Who can see it:</b> This is processed automatically. Participating
          restaurants cannot access your information.
        </li>
        <li className="mb-[0.2rem]">
          <b>How long we keep it:</b> All data is automatically deleted within
          30 days after February 28, 2025.
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
  )
}
