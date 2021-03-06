import base from "@/service/spotify/api/base";

export default {
    setPause(device_id, authToken) {
        return base.put('/me/player/pause', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
    },
    setPlay(device_id, authToken, tracks, album) {
        return base.put('/me/player/play', {
            device_id,
            uris: tracks,
            context_uri: album
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
    },
    nextTrack(device_id, authToken) {
        return base.post('/me/player/next', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
    },
    previousTrack(device_id, authToken) {
        return base.post('/me/player/previous', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
        })
    },
    setRepeatMode(device_id, authToken, state) {
        return base.put('/me/player/repeat', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            params: {
                state
            }
        })
    },
    setShuffle(device_id, authToken, state) {
        return base.put('/me/player/shuffle', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            params: {
                state
            }
        })
    },
    setVolume(device_id, authToken, volume) {
        return base.put('/me/player/volume', {
            device_id
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            params: {
                volume_percent: volume
            }
        })
    },
    recentlyPlayed(authToken, limit) {
        return base.get('/me/player/recently-played', {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            params: {
                limit
            }
        })
    },
    transferPlayback(device_id, authToken) {
        return base.put('/me/player', {
            device_ids: [`${device_id}`],
            play: true
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
    }
}
