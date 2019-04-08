const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.editor;
const {
	Button,
	TextareaControl,
	BaseControl,
	TimePicker,
	RadioControl,
} = wp.components;
import richTextToString from '../utils/richTextToString';

registerBlockType( 'neu-hackney/event', {
	title: 'Event Details',
	icon: 'format-image',
	category: 'common',
	attributes: {
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		__mediaURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_image_url',
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
		},
		__imageAlt: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_image_alt',
		},
		__dateTime: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_date_time',
		},
		date: {
			type: 'array',
			source: 'children',
			selector: '.neuhack-event-date',
		},
		time: {
			type: 'array',
			source: 'children',
			selector: '.neuhack-event-time',
		},
		eventDetails: {
			type: 'array',
			source: 'children',
			selector: '.neuhack-event-details',
		},
		__eventDetails: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_details',
		},
		eventIsGeneralMeeting: {
			type: 'number',
		},
		__eventIsGeneralMeeting: {
			type: 'number',
			source: 'meta',
			meta: 'neuhack_event_is_general_meeting',
		},
		agendaID: {
			type: 'number',
		},
		agendaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		__agendaURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_attachment_url',
		},
	},
	edit: ( {
		className,
		attributes: {
			mediaID,
			mediaURL,
			imageAlt,
			__eventIsGeneralMeeting,
			__dateTime,
			eventDetails,
			agendaID,
			__agendaURL,
		},
		setAttributes,
	} ) => {
		const onSelectImage = media => {
			setAttributes( {
				mediaID: media.id,
				mediaURL: media.url,
				__mediaURL: media.url,
			} );
		};

		const onChangeAlt = text => {
			setAttributes( {
				imageAlt: text,
				__imageAlt: text,
			} );
		};

		const onChangeDateTime = newDateTime => {
			const d = new Date( newDateTime );
			const date = d.toLocaleDateString( 'en-GB', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			} );
			const time = d.toLocaleTimeString( 'en-GB', {
				hour12: true,
				hour: 'numeric',
				minute: '2-digit',
			} );
			setAttributes( {
				__dateTime: newDateTime,
				date,
				time,
			} );
		};

		const onChangeDetails = details => {
			setAttributes( {
				eventDetails: details,
				__eventDetails: richTextToString( details ),
			} );
		};

		const onEventTypeChange = value => {
			const n = Number( value );
			setAttributes( {
				eventIsGeneralMeeting: n,
				__eventIsGeneralMeeting: n,
			} );
		};

		const onSelectFile = file => {
			setAttributes( {
				agendaID: file.id,
				agendaURL: file.url,
				__agendaURL: file.url,
			} );
		};

		return (
			<section className={ className }>
				<BaseControl
					label="Add a flyer for the event, which should include the event details"
					id="flyer-upload"
				>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						id="flyer-upload"
						render={ ( { open } ) => (
							<Button
								className={ mediaID ? 'image-button' : 'button button-large' }
								onClick={ open }
							>
								{ ! mediaID ? (
									'Upload image'
								) : (
									<img src={ mediaURL } alt="Event Flyer" />
								) }
							</Button>
						) }
					/>
				</BaseControl>
				<BaseControl
					label="Enter date and time for the event, using 24 hour time (e.g. 18:00)"
					id="date-time"
				>
					<TimePicker
						id="date-time"
						currentTime={ __dateTime }
						onChange={ onChangeDateTime }
					/>
				</BaseControl>
				<BaseControl label="Event Details" id="event-details">
					<RichText
						tagName="div"
						// multiline="br"
						format="string"
						id="event-details"
						placeholder="Enter the key event details, e.g. location"
						value={ eventDetails }
						onChange={ onChangeDetails }
						style={ {
							marginTop: '1rem',
							marginBottom: '1rem',
						} }
					/>
				</BaseControl>
				<div
					className="neuhack-event-settings"
					style={ {
						background: '#ccc',
						padding: '0 1rem 1rem 1rem',
						borderRadius: '5px',
						paddingTop: '1rem !important',
					} }
				>
					<h4>Event Settings</h4>
					<TextareaControl
						label="Flyer Alt Text"
						placeholder="Describe the important details from the flyer for those who cannot see the image. This will be read out for visually impaired users."
						value={ imageAlt }
						onChange={ onChangeAlt }
					/>
					<RadioControl
						label="Select event type"
						selected={ __eventIsGeneralMeeting }
						onChange={ onEventTypeChange }
						options={ [
							{ label: 'Other', value: 0 },
							{ label: 'General Meeting', value: 1 },
						] }
					/>
					{ __eventIsGeneralMeeting ? (
						<BaseControl
							label="Upload a full flyer with agenda and previous meeting's minutes, as a pdf"
							id="agenda-upload"
						>
							<MediaUpload
								onSelect={ onSelectFile }
								allowedTypes="application/pdf"
								value={ agendaID }
								id="agenda-upload"
								render={ ( { open } ) => (
									<div style={ { width: '100%' } }>
										{ agendaID && (
											<embed
												src={ __agendaURL }
												type="application/pdf"
												width="100%"
												height="600px"
											/>
										) }
										<Button className="button button-large" onClick={ open }>
											{ ! agendaID ? 'Upload agenda' : 'Choose again' }
										</Button>
									</div>
								) }
							/>
						</BaseControl>
					) : null }
				</div>
			</section>
		);
	},
	save: ( {
		className,
		attributes: {
			mediaURL,
			imageAlt,
			date,
			time,
			eventDetails,
			eventIsGeneralMeeting,
			agendaURL,
		},
	} ) => {
		return (
			<article className={ className }>
				<img src={ mediaURL } alt={ imageAlt } />
				<p className="neuhack-event-date-time">
					<div className="neuhack-event-date">{ date }</div>
					<div className="neuhack-event-time">{ time }</div>
				</p>
				<p className="neuhack-event-details">{ eventDetails }</p>
				{ eventIsGeneralMeeting ? (
					<p className="neuhack-agenda-link">
						<a href={ agendaURL }>View Agenda</a>
					</p>
				) : null }
			</article>
		);
	},
} );
