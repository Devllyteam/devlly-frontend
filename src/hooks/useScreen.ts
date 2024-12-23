import { useMediaQuery } from 'usehooks-ts'

export function useScreenSize() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const isTabletAndAbove = useMediaQuery('(min-width: 768px)')

  return { isMobile, isTabletAndAbove }
}

