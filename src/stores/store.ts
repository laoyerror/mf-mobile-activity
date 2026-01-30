import { Store } from '@tanstack/react-store'

// type Crop = {
//   x: number
//   y: number
//   width: number
//   height: number
// }

type CounterState = {
  // blob: string
  // crop: Crop | null
  name: string
  date: string
  orderUrl: string
  restAddress: string
  restName: string
  value: any
}

// 创建 store，传入初始状态
export const counterStore = new Store<CounterState>({
  // blob: '',
  // crop: null,
  name: '',
  date: '',
  orderUrl: '',
  restAddress: '',
  restName: '',
  value: '',
})
