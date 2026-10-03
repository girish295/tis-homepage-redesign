import { useEffect, useState } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

// True only for mouse-like devices, so touch screens never get the custom cursor.
export default function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return fine
}
