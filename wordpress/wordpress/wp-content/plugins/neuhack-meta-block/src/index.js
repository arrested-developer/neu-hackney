const { registerBlockType } = wp.blocks
const { MediaUpload } = wp.editor
const { Button, TextareaControl } = wp.components

registerBlockType("neuhack/flyer", {
  title: "Flyer Meta Block",
  icon: "format-image",
  category: "common",

  attributes: {
    mediaID: {
      type: "number",
    },
    mediaURL: {
      type: "string",
      source: "meta",
      meta: "neuhack_flyer_url",
      selector: "img",
      attribute: "src",
    },
    imageAlt: {
      type: "string",
      source: "meta",
      meta: "neuhack_image_alt",
    },
  },

  edit: props => {
    const {
      className,
      attributes: { mediaID, mediaURL, imageAlt },
      setAttributes,
    } = props

    const onSelectImage = media => {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
      })
    }

    const onChangeAlt = value => {
      setAttributes({
        imageAlt: value,
      })
    }

    return (
      <div className={className}>
        <MediaUpload
          onSelect={onSelectImage}
          allowedTypes="image"
          value={mediaID}
          render={({ open }) => (
            <Button
              className={mediaID ? "image-button" : "button button-large"}
              onClick={open}
            >
              {!mediaID ? (
                "Add event flyer"
              ) : (
                <img src={mediaURL} alt="Event Flyer" />
              )}
            </Button>
          )}
        />
        <TextareaControl
          label="Details from the flyer for screen readers"
          value={imageAlt}
          onChange={onChangeAlt}
        />
      </div>
    )
  },
  save: () => {
    return null
  },
})
