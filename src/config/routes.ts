//to avoid hashcode
const routes = {
    home: '/',
    mailBox: '/mail-box',
    mailContent: '/mail-box/content',
    mailSearch: '/mail-box/search',
    newEmail: '/mail-box/content/newEmail',
    manage: '/manage',
    memory: '/memory',
    post: '/post',
    createpost: '/createpost',
    profile: '/:username',
    reservation: '/reservation',
    search: '/search',
    video: '/video',
    comment: '/comment/:idBaiViet',
    myInfo: '/my-info/:username'
};

export default routes;