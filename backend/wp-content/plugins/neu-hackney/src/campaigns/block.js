/**
 * BLOCK: neu-hackney-newsletter
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload, RichText } = wp.editor;
const { Button, BaseControl, TextControl } = wp.components;

//  Import CSS.
import './style.scss';
import './editor.scss';

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
		campaignDetails: {
			type: 'array',
			source: 'children',
			selector: '.neu-hackney-campaign-details',
		},
		headline: {
			type: 'array',
			source: 'children',
			selector: '.neu-hackney-campaign-headline',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, mediaURL, campaignDetails, headline },
	} ) => {
		const onSelectImage = image => {
			setAttributes( {
				mediaID: image.id,
				mediaURL: image.url,
			} );
		};
		const onChangeDetails = text => {
			setAttributes( {
				campaignDetails: text,
			} );
		};
		const onChangeHeadline = text => {
			setAttributes( {
				headline: text,
			} );
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
								{ ! mediaID ? 'Upload image' : <img src={ mediaURL } alt="" /> }
							</Button>
						) }
					/>
				</BaseControl>
				<TextControl
					label="Short Description"
					placeholder="A short headline description of the campaign"
					value={ headline }
					onChange={ onChangeHeadline }
				/>
				<BaseControl label="Campaign Details" id="campaign-details">
					<RichText
						tagName="div"
						multiline="br"
						id="event-details"
						placeholder="Enter the key event details, e.g. location"
						value={ campaignDetails }
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

	save: ( {
		className,
		attributes: { mediaURL, campaignDetails, headline },
	} ) => {
		return (
			<article className={ className }>
				<img src={ mediaURL } alt="" />
				<h3 className="neu-hackney-campaign-headline">{ headline }</h3>
				<p className="neu-hackney-campaign-details">{ campaignDetails }</p>
			</article>
		);
	},
} );