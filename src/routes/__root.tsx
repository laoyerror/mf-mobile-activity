import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex justify-center bg-[#f3f3f3]">
      <div className="w-full max-w-[750px] min-h-screen">
        <Outlet />
      </div>
    </div>
  ),
})
