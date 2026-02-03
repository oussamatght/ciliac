import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (email && password) {
          set({
            user: {
              id: '1',
              name: email.split('@')[0],
              email: email,
              avatar: undefined
            },
            isAuthenticated: true
          })
          return true
        }
        return false
      },
      register: async (name: string, email: string, password: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (name && email && password) {
          set({
            user: {
              id: '1',
              name: name,
              email: email,
              avatar: undefined
            },
            isAuthenticated: true
          })
          return true
        }
        return false
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      }
    }),
    {
      name: 'ciliac-auth'
    }
  )
)

interface SplashState {
  hasSeenSplash: boolean
  setSplashSeen: () => void
}

export const useSplashStore = create<SplashState>()(
  persist(
    (set) => ({
      hasSeenSplash: false,
      setSplashSeen: () => set({ hasSeenSplash: true })
    }),
    {
      name: 'ciliac-splash'
    }
  )
)
