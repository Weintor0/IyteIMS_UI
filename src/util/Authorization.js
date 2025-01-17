export const Role = {
    student: "ROLE_STUDENT",
    firm: "ROLE_FIRM",
    coordinator: "ROLE_INTERNSHIP_COORDINATOR",
    secretary: "ROLE_DEPARTMENT_SECRETARY"
};

export function initAuth(role, id, token) {
    setCookie(role + '_ID', id);
    setCookie(role + '_TOKEN', token);
}

export function auth(role) {
    const id = getCookie(role + '_ID');
    const token = getCookie(role + '_TOKEN');

    return [id, token];
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Strict;";
}