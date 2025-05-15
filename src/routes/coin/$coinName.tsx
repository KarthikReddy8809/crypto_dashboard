import { createFileRoute } from '@tanstack/react-router'
import {useParams} from '@tanstack/react-router'

export const Route = createFileRoute('/coin/$coinName')({
  component: RouteComponent,
})

function RouteComponent() {
  const {coinName}=useParams({from:Route.id})
  return <div className="text-white">Hello {coinName}</div>
}
