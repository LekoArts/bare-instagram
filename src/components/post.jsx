import * as React from 'react'
import useNames from '../hooks/use-names'
import { getElByPropVal } from '../utils/get-element'
import External from '../icons/external'

const Image = ({ picture, dimensions, isMinimal }) => (
  <>
    {picture ? (
      <img
        alt=""
        src={picture}
        width={dimensions.width}
        height={dimensions.height}
        loading="lazy"
        className={isMinimal ? `rounded-lg shadow-lg` : `rounded-t-lg`}
      />
    ) : (
      <div className="p-12 bg-gradient-to-tl from-blue-600 to-blue-800 text-center rounded-lg shadow-lg text-xl font-medium">
        No picture available :(
      </div>
    )}
  </>
)

const Post = ({
  shortcode,
  timestamp,
  picture,
  owner,
  dimensions,
  isMinimal,
}) => {
  const [names] = useNames()
  const ownerInformation = getElByPropVal(names, 'id', owner)
  const date = new Date(timestamp * 1000).toLocaleDateString(`de-DE`)

  if (isMinimal) {
    return (
      <div>
        <Image
          picture={picture}
          dimensions={dimensions}
          isMinimal={isMinimal}
        />
      </div>
    )
  }

  return (
    <div className="shadow-lg rounded-b-lg" style={{ display: `inline-table` }}>
      <Image picture={picture} dimensions={dimensions} isMinimal={isMinimal} />
      <div className="flex flex-row bg-white dark:bg-gray-800 px-4 py-2 rounded-b-lg text-gray-500 dark:text-gray-400 justify-between">
        <a
          className="flex flex-row flex-nowrap items-center space-x-2"
          aria-label={`View this post on ${ownerInformation.username} profile`}
          href={`https://www.instagram.com/p/${shortcode}`}
        >
          <span className="text-gray-900 dark:text-gray-100 font-medium">
            {ownerInformation.username}
          </span>
          <External />
        </a>
        <div className="tracking-wide">{date}</div>
      </div>
    </div>
  )
}

export default Post
