import { load } from '@2gis/mapgl';

export async function loadApi (store) {
    try {
        const api = await load()
        store.commit('setApi', api)
    } catch (err) {
        throw new Error('Maps API not available')
    }
}
export async function createMap (store, el) {

    const { userLocation = null} = store.state
    const center = userLocation === null? [55.31878, 25.23584]: [userLocation.longitude, userLocation.latitude]

    const map = new store.state.api.Map(el, {
        center,
        copyright: 'topRight',
        zoom: 13,
        zoomControl: false,
        key: process.env.MAPGL_KEY,
    });

    store.commit('setMap', map)
}
export async function setWatchPosition (store) {
    if (store.handlerId === null)
        throw new Error('Handler is already installed')

    const success = (position) => {
        const {coords} = position
        store.commit('updateUserLocation', coords)
    }
    const error = (err) => {
        console.warn(`WatchPosition ERROR(${err.code}): ${err.message}`)
    }

    const id = navigator.geolocation.watchPosition(success, error)
    store.commit('setHandlerId', id)
}


export async function init (store, el) {
    try {
        store.dispatch('setWatchPosition')
        await store.dispatch('loadApi')
        await store.dispatch('createMap', el)
    } catch (err) {
        throw err
    }
}
