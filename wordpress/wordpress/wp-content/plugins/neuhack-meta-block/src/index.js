const { registerBlockType } = wp.blocks
const { MediaUpload, RichText } = wp.editor
const {
  Button,
  TextareaControl,
  TimePicker,
  RadioControl,
  BaseControl,
} = wp.components
// const { lockPostSaving, unlockPostSaving } = wp.data.dispatch("core/editor")

registerBlockType("neuhack/flyer", {
  title: "Event Details",
  icon: "format-image",
  category: "common",

  attributes: {
    mediaID: {
      type: "number",
    },
    __mediaURL: {
      type: "string",
      source: "meta",
      meta: "neuhack_event_flyer_url",
      selector: "img",
      attribute: "src",
    },
    mediaURL: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src",
    },
    imageAlt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
    },
    __imageAlt: {
      type: "string",
      source: "meta",
      meta: "neuhack_event_image_alt",
    },
    __dateTime: {
      type: "string",
      source: "meta",
      meta: "neuhack_event_date_time",
    },
    date: {
      type: "array",
      source: "children",
      selector: ".neuhack-event-date",
    },
    time: {
      type: "array",
      source: "children",
      selector: ".neuhack-event-time",
    },
    eventLocation: {
      type: "array",
      source: "children",
      selector: ".neuhack-event-location",
    },
    eventIsGeneralMeeting: {
      type: "number",
    },
    __eventIsGeneralMeeting: {
      type: "number",
      source: "meta",
      meta: "neuhack_event_is_general_meeting",
    },
    agendaID: {
      type: "number",
    },
    agendaURL: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "href",
    },
    __agendaURL: {
      type: "string",
      source: "meta",
      meta: "neuhack_event_agenda",
    },
  },

  edit: props => {
    const {
      className,
      attributes: {
        mediaID,
        mediaURL,
        imageAlt,
        __dateTime,
        eventLocation,
        __eventIsGeneralMeeting,
        agendaID,
        agendaURL,
      },
      setAttributes,
    } = props

    const onSelectImage = media => {
      setAttributes({
        mediaURL: media.url,
        __mediaURL: media.url,
        mediaID: media.id,
      })
    }

    const onSelectFile = file => {
      setAttributes({
        agendaURL: file.url,
        __agendaURL: file.url,
        agendaID: file.id,
      })
    }

    const onChangeAlt = value => {
      setAttributes({
        imageAlt: value,
        __imageAlt: value,
      })
    }

    const onChangeLocation = value => {
      setAttributes({
        eventLocation: value,
      })
    }

    const onChangeDateTime = value => {
      const myDate = new Date(value)
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      const date = myDate.toLocaleDateString("en-GB", dateOptions)
      const timeOptions = {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      }
      const time = myDate.toLocaleTimeString("en-GB", timeOptions)
      setAttributes({
        __dateTime: value,
        date,
        time,
      })
    }

    const onEventTypeChange = value => {
      // RadioControl passes this through as a string, force to number
      // so we can update the state
      const n = Number(value)
      setAttributes({
        eventIsGeneralMeeting: n,
        __eventIsGeneralMeeting: n,
      })
    }

    return (
      <div className={className}>
        <BaseControl
          label="Upload a flyer with the event details"
          id="flyer-upload"
        >
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            id="flyer-upload"
            render={({ open }) => (
              <Button
                className={mediaID ? "image-button" : "button button-large"}
                onClick={open}
              >
                {!mediaID ? (
                  "Upload image"
                ) : (
                  <img src={mediaURL} alt="Event Flyer" />
                )}
              </Button>
            )}
          />
        </BaseControl>
        <TextareaControl
          label="Alt Text"
          placeholder="Describe the important details from the flyer for those who cannot see the image. This will be read out for visually impaired users."
          value={imageAlt}
          onChange={onChangeAlt}
        />
        <BaseControl
          label="Enter date and time for the event, using 24 hour time (e.g. 18:00)"
          id="date-time"
        >
          <TimePicker
            id="date-time"
            currentTime={__dateTime}
            onChange={onChangeDateTime}
          />
        </BaseControl>
        <div>
          <BaseControl label="Event Location" id="location">
            <RichText
              tagName="div"
              multiline="br"
              className="location"
              id="location"
              placeholder="Enter the event location"
              keepPlaceholderOnFocus={true}
              value={eventLocation}
              onChange={onChangeLocation}
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
          </BaseControl>
        </div>
        <RadioControl
          label="Select event type"
          selected={__eventIsGeneralMeeting}
          onChange={onEventTypeChange}
          options={[
            { label: "Other", value: 0 },
            { label: "General Meeting", value: 1 },
          ]}
        />
        <BaseControl
          label={
            agendaID
              ? "Flyer and agenda preview:"
              : "Upload the full flyer and agenda"
          }
          id="agenda-upload"
        >
          <MediaUpload
            id="agenda-upload"
            onSelect={onSelectFile}
            allowedTypes="pdf"
            value={agendaID}
            render={({ open }) => (
              <Button
                className={agendaID ? "image-button" : "button button-large"}
                onClick={open}
                style={{ width: "100%" }}
              >
                {!agendaID ? (
                  "Upload file"
                ) : (
                  <span style={{ width: "100%" }}>
                    <embed
                      src={agendaURL}
                      type="application/pdf"
                      width="100%"
                      height="600px"
                    />
                    <Button className="button button-large" onClick={open}>
                      Choose a different file
                    </Button>
                  </span>
                )}
              </Button>
            )}
          />
        </BaseControl>
      </div>
    )
  },
  save: props => {
    const {
      className,
      attributes: {
        mediaURL,
        imageAlt,
        date,
        time,
        eventLocation,
        eventIsGeneralMeeting,
        agendaURL,
      },
    } = props
    return (
      <article
        className={
          className ? className + " neuhack-event-card" : "neuhack-event-card"
        }
      >
        <img src={mediaURL} alt={imageAlt} />
        <p className="neuhack-event-date-time">
          <div className="neuhack-event-date">{date}</div>
          <div className="neuhack-event-time">{time}</div>
        </p>
        <p className="neuhack-event-location">{eventLocation}</p>
        {eventIsGeneralMeeting ? (
          <p>
            <a href={agendaURL}>View agenda</a>
          </p>
        ) : null}
      </article>
    )
  },
})
