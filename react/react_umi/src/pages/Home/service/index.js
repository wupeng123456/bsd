import request from "../../../utils/request"
export async function POSTlist(params) {
    return request(`/api/list`, {
        method: 'POST',
        body: {
			...params,
        },
    })
}