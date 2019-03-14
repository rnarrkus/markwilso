const linkResolver = (doc) => {
  switch (doc.type) {
    case 'post':
      return `/posts/${doc.uid}`
      break
    case 'side_project':
      return `/projects/${doc.uid}`
      break
    default:
      return '/'
      break
  }
}

module.exports = {
  linkResolver
}
