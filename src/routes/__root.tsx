import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { gtmPageView } from '@/utils/gtm'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    // 如果你需要统计 query，用 pathname + search
    gtmPageView(location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex justify-center bg-[#f3f3f3]">
      <div className="w-full max-w-[750px] min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}
