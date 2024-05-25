import axios from 'axios';
import { auth, Role } from "./Authorization";

export function requestUrl(path) {
    //return `http://192.168.1.196:9090${path}`
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

export async function download(url, role) {
    const [, token] = auth(role);

    fetch(requestUrl(url), {
        method: 'GET',
        headers: new Headers({
            "Authorization": "Bearer " + token,
            "responseType": 'blob'
    })})

    .then(res => (async() => {
        let filename = undefined;
        for (const entry of res.headers.entries()) {
            if (entry[0] === 'content-disposition') {
                filename = entry[1].split('filename=')[1]
            }
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();    
        a.remove();
    })());
}
