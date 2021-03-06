/**
 * BLOCK: neu-hackney-campaign
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload, RichText } = wp.editor;
const { Button, BaseControl, TextControl } = wp.components;
//import richTextToString from '../utils/richTextToString';

// Import CSS.
import './style.scss';
import './editor.scss';

// Input validation
import makeValidator from '../utils/validator';
const validator = makeValidator();
validator.use( () => {
	const { image, headline, details, title } = validator.getAll();
	if ( ! title ) {
		return validator.fail( 'Please enter a title' );
	} else if ( ! image ) {
		return validator.fail( 'Please upload an image' );
	} else if ( ! headline ) {
		return validator.fail( 'Please enter a short description' );
	} else if ( ! details ) {
		return validator.fail( 'Please enter the campaign details' );
	}
	return validator.pass();
} );

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'neu-hackney/campaign', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney - Campaign Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'neu-hackney-campaign — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
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
		campaignDetails: {
			type: 'array',
			source: 'children',
			selector: '.wp-block-neu-hackney-campaign',
		},
		__campaignDetails: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_details',
		},
		headline: {
			type: 'array',
			source: 'children',
			selector: '.neu-hackney-campaign-headline',
		},
		__headline: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_headline',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, __mediaURL, __campaignDetails, __headline },
	} ) => {
		window.addEventListener( 'load', () => {
			// set initial values for validation when editing an existing post
			validator.set( 'image', mediaID );
			validator.set( 'headline', __headline );
			validator.set( 'details', __campaignDetails );
			// set initial value for title, and validate on change
			const title = document.querySelector( '.editor-post-title__input' );
			validator.set( 'title', title.value );
			title.addEventListener( 'input', () => {
				validator.check( 'title', title.value );
			} );
		} );
		const onSelectImage = image => {
			setAttributes( {
				mediaID: image.id,
				mediaURL: image.url,
				__mediaURL: image.url,
			} );
			validator.check( 'image', image.id );
		};
		const onChangeDetails = text => {
			setAttributes( {
				campaignDetails: text,
				__campaignDetails: text,
			} );
			validator.check( 'details', text );
		};
		const onChangeHeadline = text => {
			setAttributes( {
				headline: text,
				__headline: text,
			} );
			validator.check( 'headline', text );
		};
		return (
			<section className={ className }>
				<BaseControl label="Add a photo for the campaign" id="flyer-upload">
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
								{ ! mediaID ? 'Upload image' : <img src={ __mediaURL } alt="" /> }
							</Button>
						) }
					/>
				</BaseControl>
				<TextControl
					label="Short Description"
					placeholder="A short headline description of the campaign"
					value={ __headline }
					onChange={ onChangeHeadline }
				/>
				<BaseControl label="Campaign Details" id="campaign-details">
					<RichText
						tagName="div"
						multiline="br"
						id="event-details"
						placeholder="Enter the key event details, e.g. location"
						value={ __campaignDetails }
						onChange={ onChangeDetails }
						style={ {
							marginTop: '1rem',
							marginBottom: '1rem',
						} }
					/>
				</BaseControl>
			</section>
		);
	},

	save: ( { attributes: { campaignDetails } } ) => {
		return <p>{ campaignDetails }</p>;
	},
} );
