import * as React from "react"
import useNames from "../hooks/use-names"
import { getElByPropVal } from '../utils/get-element'

const Post = ({ shortcode, description, timestamp, picture, owner, dimensions }) => {
  const [names] = useNames()
  const ownerInformation = getElByPropVal(names, 'id', owner)

  return (
    <div>
      <div>
        {picture ? (
          <img alt="" src={picture} width={dimensions.width} height={dimensions.height} loading="lazy" className="rounded-lg shadow-lg" />
        ) : (
          <div>No picture available :(</div>
        )}
      </div>
    </div>
  )
}

export default Post
