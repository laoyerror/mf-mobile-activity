export function getUrlParam(url: string, key: string): string | null {
  try {
    const params = new URL(url).searchParams
    return params.get(key)
  } catch (error) {
    console.error('Invalid URL:', error)
    return null
  }
}
