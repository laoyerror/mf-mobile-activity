import { createFileRoute } from '@tanstack/react-router'
import poster from '../pages/poster'

export const Route = createFileRoute('/poster')({
  component: poster,
})
