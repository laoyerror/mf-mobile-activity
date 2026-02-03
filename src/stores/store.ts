import { Store } from '@tanstack/react-store'

/** localStorage key */
const STORAGE_KEY = 'counter-store'

type CounterState = {
  name: string
  date: string
  orderUrl: string
  restAddress: string
  restName: string
  value: any
}

/** 默认状态 */
const defaultState: CounterState = {
  name: '',
  date: '',
  orderUrl: '',
  restAddress: '',
  restName: '',
  value: '',
}

/** 从 localStorage 读取 */
function loadFromStorage(): CounterState {
  if (typeof window === 'undefined') return defaultState

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return JSON.parse(raw)
  } catch (err) {
    console.warn('[store] load failed:', err)
    return defaultState
  }
}

/** 创建 store（初始化即持久化恢复） */
export const counterStore = new Store<CounterState>(loadFromStorage())

/** 监听变化 → 全量写入 localStorage */
counterStore.subscribe(() => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counterStore.state))
  } catch (err) {
    console.warn('[store] save failed:', err)
  }
})

/** 可选：重置 */
export function resetCounterStore() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
  counterStore.setState(defaultState)
}
