const fetchPosts = async (input) => {
  const res = await fetch(`https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${input}","first":100,"after":null}`)
  const json = await res.json()
  const { data: { user } } = json

  if (!user) {
    throw new Error(`Couldn't find any posts for ${input}`)
  }

  const rawPosts = user.edge_owner_to_timeline_media.edges
  const posts = rawPosts.map(({ node: r }) => {
    const d = r.edge_media_to_caption.edges
    const hasNoDesc = d.length === 0

    return {
      shortcode: r.shortcode,
      description: hasNoDesc ? '' : d[0].node.text.split(`#`)[0],
      timestamp: r.taken_at_timestamp,
      dimensions: {
        height: r.dimensions.height,
        width: r.dimensions.width,
      },
      picture: r.display_url,
      owner: r.owner.id,
    }
  })

  return posts
}

export { fetchPosts }
