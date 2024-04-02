import { create }  from 'zustand'

const usePostStore = create((set) => ({
  posts: [],
  createPost: (post) => set((state) => ({ posts: [post, ...state.posts]})),
  setPosts: (post) => set({post})

}))

export default usePostStore;


