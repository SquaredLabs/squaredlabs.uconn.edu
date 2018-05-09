export default function (context) {
    let path = context.route.path;
    if (path == '/labs') {
        context.store.commit('setBlue')
    }
    else {
        context.store.commit('setWhite')
    }
}