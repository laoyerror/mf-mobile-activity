declare global {
  interface Window {
    dataLayer: any[]
  }
}

export function gtmPageView(pathname: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'cs_page_view',
    page_router: pathname,
  })
}
