const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    theme: state => state.app.theme,
    color: state => state.app.color,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    permission_routes: state => state.permission.routes
}

export default getters