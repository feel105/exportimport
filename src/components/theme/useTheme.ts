'use client'

import { useCallback, useEffect, useSyncExternalStore } from 'react'

export type ThemePref = 'system' | 'light' | 'dark'

const KEY = 'exim.theme'
const ORDER: ThemePref[] = ['system', 'light', 'dark']
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY) listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

function readPref(): ThemePref {
  try {
    const value = localStorage.getItem(KEY)
    return value === 'light' || value === 'dark' ? value : 'system'
  } catch {
    return 'system'
  }
}

function resolve(pref: ThemePref): 'light' | 'dark' {
  if (pref !== 'system') return pref
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function apply(theme: 'light' | 'dark', animate: boolean) {
  const root = document.documentElement
  if (root.getAttribute('data-theme') === theme) return
  if (animate) {
    root.classList.add('theme-anim')
    window.setTimeout(() => root.classList.remove('theme-anim'), 260)
  }
  root.setAttribute('data-theme', theme)
}

export function useTheme() {
  const pref = useSyncExternalStore(subscribe, readPref, () => 'system' as ThemePref)

  useEffect(() => {
    apply(resolve(pref), true)
    if (pref !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => apply(resolve('system'), true)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [pref])

  const cycle = useCallback(() => {
    const current = readPref()
    const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length]
    try {
      if (next === 'system') localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, next)
    } catch {
      /* persisted per browser only */
    }
    emit()
  }, [])

  return { pref, theme: resolve(pref), cycle }
}
