import axios from 'axios'

const API_KEY = 'AIzaSyDe-D-A0IhdsSRNSGhk44nMXiHH-iaG0Ic'

export const searchVideos = (query) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_KEY}&maxResults=1&part=snippet` 

    try {
        return axios.get(url)
    } catch (error) {
        console.log(error)
    }
}