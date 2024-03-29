import { create } from 'zustand'

const useAuthStore = create((set) => ({
  // si luego de autenticarse, te rediriges a la pagina de autenticacion,
  // el usuario no se mantendra autenticado por que user:null
  // por eso se usa localStorage para mantener la sesion
  // user: null, <-- version anterior
  user: JSON.parse(localStorage.getItem('user-info')), // <-- version actual
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}))

export default useAuthStore
