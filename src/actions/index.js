export const openModal = mediaId =>{
    return {
        type: 'OPEN_MODAL',
        payload: {
          mediaId
        }
    }
}

export const closeModal = () =>{
    return {
        type: 'CLOSE_MODAL',
    }
}

export const searchEntities = query =>{
    return{
        type:'SEARCH_ENTITIES',
        payload: {
            query,
        }
    }
}

export const searchEntitiesAsync = query =>{
    return (dispatch) =>{

        dispatch(isLoading(true))
        setTimeout(() => {
            dispatch(isLoading(false))
            dispatch(searchEntities(query))
        }, 5000);
    }
}

export const isLoading = value => {
    return {
        type: 'IS_LOADING',
        payload: {
            value
        }
    }
}