export default {
    state: {
        loaderName: "loading",
        imagesUrl : '',
        showMask : {
            name : false,
            maskId : ''
        }

    },
    mutations: {
        SET_LOADER_NAME: (state, payload) => {
            state.loaderName = payload
        },
        SET_IMAGES_URL: (state, payload) => {
            state.imagesUrl = payload
        },
        SET_SHOW_MASK: (state, payload) => {
            state.showMask = payload
        },
    },
    actions: {
        setLoaderName: ({commit, state}, payload) => {
            return commit('SET_LOADER_NAME', payload)
        },
        setImagesUrl: ({commit, state}, payload) => {
            return commit('SET_IMAGES_URL', payload)
        },
        setShowMask: ({commit, state}, payload) => {
            return commit('SET_SHOW_MASK', payload)
        }
    },
    getters: {
        loaderName: state => state.loaderName,
        imagesUrl: state => state.imagesUrl,
        showMask: state => state.showMask,
    }
}
