import * as actionTypes from "./actionTypes"

export function getEventsSuccess(events) {
    return { type: actionTypes.GET_EVENTS_SUCCESS, payload: events }
}

export function getEvents() {
    return function (dispatch) {
        let url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=m9ZfRg1hwpuHYvD9fGKHNmUSGManvdTu"
        return fetch(url).then(response => response.json()).then(result => dispatch(getEventsSuccess(result)))
    }
}