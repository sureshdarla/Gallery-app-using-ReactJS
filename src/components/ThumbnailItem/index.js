import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, onClickSelectImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImageDetails
  console.log(eachImageDetails)

  const thumbnailClicked = () => {
    onClickSelectImage(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={thumbnailClicked}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
