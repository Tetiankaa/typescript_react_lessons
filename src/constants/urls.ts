const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';
const auth = '/auth';
const users = '/users';

const urls = {
    cars,
    auth:{
        register:`${users}`,
        login:`${auth}`,
        me:`${auth}/me`,
        refresh:`${auth}/refresh`
    }
}

export {
    urls, baseURL
}