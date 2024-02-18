import type { show } from './shows'
import isShowResource from './shows'

type search = {
  score: number
  show: show
}

export default function isSearchResource(data: unknown): data is search {
  return (
    !!data &&
    typeof data === 'object' &&
    'score' in data &&
    'show' in data &&
    isShowResource(data.show)
  )
}
