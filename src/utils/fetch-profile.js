const fetchProfile = async (input) => {
  const res = await fetch(`https://www.instagram.com/${input}/?__a=1`)
  const json = await res.json()
  const { graphql } = json

  if (!graphql) {
    throw new Error(`Couldn't find "${input}". Are you sure this is the right name?`)
  }

  const {
    graphql: {
      user: { id, username, profile_pic_url: picture },
    },
  } = json
  return {
    id,
    username,
    picture,
  }
}

export { fetchProfile }
