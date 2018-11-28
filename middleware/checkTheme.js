export default function(context) {
  let path = context.route.name
  if (path === "labs") {
    context.store.commit("setBlue")
  } else {
    context.store.commit("setWhite")
  }
}
