export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    spotify:null,
    top_artists:null,
    item:null,
    discover_weekly:null,
    // token:'BQCe7vDgQdVxr03XjAE5WvZ5Cg5AbiMmDImPjWnY1Xhuu--5Zghhomkzq613MP2oMrTwKBmuGuVpTIDhzrgrlJ_9LuGiq6AnIB-QkrexJVIgT6hJoCEUNjOOB62oK6shJ7XfJQHb4Vj9Hptf_SMr0zeAQyjXxglK-dovKclWIt0RApIDHZVRt3ZRSxKi1xe2yJXAR_JHenlZLyId'
}

const reducer = (state,action)=>{
    console.log(action)

    switch(action.type){
        case'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                 ...state,
                 playlists: action.playlists
                }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
                }
        case 'SET_PLAYING':
            return{
                ...state,
                playing:action.playing
            }
        case 'SET_ITEM':
            return{
                ...state,
                item:action.item
            }
        case 'SET_TOP_ARTISTS':
            return{
                ...state,
                top_artists:action.top_artists
            }
        case 'SET_SPOTIFY':
            return{
                ...state,
                spotify:action.spotify
            }                    
        default:
            return state
    }
}
export default reducer