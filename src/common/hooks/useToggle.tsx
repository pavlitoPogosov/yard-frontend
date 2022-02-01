import React, { useCallback, useState } from 'react'

export interface UseToggleToggler {
  value: boolean
  change: React.Dispatch<React.SetStateAction<boolean>>
  set: () => void
  unset: () => void
  toggle: () => void
}

export const useToggle = (initialValue?: boolean): UseToggleToggler => {
  const [toggler, setToggler] = useState(Boolean(initialValue))

  const set = useCallback(() => {
    setToggler(true)
  }, [])

  const unset = useCallback(() => {
    setToggler(false)
  }, [])

  const toggle = useCallback(() => {
    setToggler((prev) => !prev)
  }, [])

  return {
    value: toggler,
    change: setToggler,
    set,
    unset,
    toggle,
  }
}
