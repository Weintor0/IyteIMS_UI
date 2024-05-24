import axios from 'axios';
import { auth, Role } from "./Authorization";

function requestUrl(path) {
    return `http://localhost:9090${path}`
}

export async function getRequest(url, role) {
    const [, token] = auth(role);
    return await axios.get(requestUrl(url), {
        headers: { "Authorization": "Bearer " + token }});
}

export async function patchRequest(url, data, role) {
    const [, token] = auth(role);
    return await axios.patch(requestUrl(url), data, 
        {headers: { "Authorization": "Bearer " + token }});
}

export async function postRequest(url, data, role) {
    const [, token] = auth(role);
    return await axios.post(requestUrl(url), data, 
        {headers: { "Authorization": "Bearer " + token }});
}

export async function putRequest(url, data, role) {
    const [, token] = auth(role);
    return await axios.put(requestUrl(url), data, 
        {headers: { "Authorization": "Bearer " + token }});
}

export async function upload(url, files, role) {
    const [, token] = auth(role);

    const formData = new FormData();
      files.forEach((file) => {
        formData.append('file', file);
      });

    return await axios.post(requestUrl(url), formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        }}
    );
}
