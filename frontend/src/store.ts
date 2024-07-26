import { configureStore } from '@reduxjs/toolkit'
import videosReducer from './reducer/videosReducer';

const store = configureStore({
  reducer: {
    videos: videosReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch