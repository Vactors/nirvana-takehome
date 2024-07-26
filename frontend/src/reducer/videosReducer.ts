import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type Video = {
    id: number,
    name: string,
    url: string,
    updatedAt: Date,
    createdAt: Date
}

type CreateVideoRequest = {
    name: string,
    url: string,
}

type VideosState = {
    videos: Video[]
}

const initialState: VideosState = {
    videos: []
}

const videosSlice = createSlice(
    {
        name: "videos",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            // add error handling here
            builder.addCase(fetchVideosAsync.fulfilled, (state, action) => {
                state.videos = action.payload;
            })
            .addCase(createVideoAsync.fulfilled, (state, action) => {
                state.videos = action.payload;
            })
        }
    }
)

export const fetchVideosAsync = createAsyncThunk(
    'videos/get',
    async () => {
      const response = await fetch("http://localhost:3000/videos", {method: "GET"});
      const body = await response.json()
      return body;
    }
  );

export const createVideoAsync = createAsyncThunk(
    'videos/post',
    async (createVideoRequest: CreateVideoRequest) => {
        console.log(createVideoRequest)
        await fetch("http://localhost:3000/videos", {
            method: "POST",
            body: JSON.stringify(createVideoRequest),
            headers: {
                "Content-Type": "application/json",
            },
        }); // Should probably do some error handling

        // probably a way to dispatch the get again but this works for now
        const response = await fetch("http://localhost:3000/videos", {method: "GET"});
        const body = await response.json()
        return body;
    }
)


export default videosSlice.reducer
