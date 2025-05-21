import { createFileRoute } from '@tanstack/react-router'
import Support  from '@/Components/Support'

export const Route = createFileRoute('/support')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
  <Support/>
  </>
}
