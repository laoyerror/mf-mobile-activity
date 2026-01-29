import { Store } from '@tanstack/react-store'

type Crop = {
  x: number
  y: number
  width: number
  height: number
}

type CounterState = {
  blob: string
  crop: Crop | null
}

// 创建 store，传入初始状态
export const counterStore = new Store<CounterState>({
  blob: '',
  crop: null,
})
