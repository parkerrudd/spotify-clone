export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null, 
    //Remove after development 
    token: "BQDNxazrehJJoFeH4jmZ2O8JeWiadMXVl_rPXfM85N50U6w-8997NLMckpgZxCy498oS4HWbLi6xq-OsoWemBT5b4xkNc-m9BSg1kOlM200G7v58Wc2UpHoKNy8HXAFTUTLK1aDKTmb3I7D0_lsxCUcdKSDWKhMH4T81jRi4wHi6Rdvdr2It2k3qiY80dJkSky4gKtvSA9W5ORExhugb"
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN': 
            return {
                ...state, 
                token: action.token
            }
        default: 
            return state    
    }
}

export default reducer