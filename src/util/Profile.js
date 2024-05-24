import { auth, Role } from "./Authorization";
import { getRequest } from "./Request";

export async function getUserName(role) {
    const [id, ] = auth(role);

    switch (role) {
        case Role.student:
            return getStudentName(id);
        case Role.firm:
            return getFirmName(id);
        case Role.coordinator:
            return "Coordinator";
        case Role.secretary:
            return "Secretary";
        default:
            throw new Error("Unknown user role");
    }
}

async function getStudentName(id) {
    const res = await getRequest(`/student/get/${id}`, Role.student);
    const data = res.data;

    return {name: data.name, surname: data.surname};
}

async function getFirmName(id) {
    const res = await getRequest(`/firm/get/${id}`, Role.firm);
    const data = res.data;

    return data.firmName;
}