import axiosClient from "./axiosClient";

export function getRequest(URL: any) {
  return axiosClient.get(`${URL}`).then((response) => response);
}

export function postRequest({ URL, payload }: any) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest({ URL, payload }: any) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest({ URL, payload }: any) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
