"https://developer.spotify/documentation/web-playback-sdk/quick-start/#"

export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "https://parkerrudd.github.io/spotify-clone/"

const clientId = "024a0534cbc64ad899014f6b4faa4752"

const scopes = [
    "user-read-currently-playing", 
    "user-read-recently-played", 
    "user-read-playback-state", 
    "user-top-read", 
    "user-modify-playback-state", 
    "user-library-read"
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=') 
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}