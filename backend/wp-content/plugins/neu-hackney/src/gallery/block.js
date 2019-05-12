/**
 * BLOCK: neu-hackney-campaign
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.editor;
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
registerBlockType( 'neu-hackney/gallery', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney - Gallery Photo Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'neu-hackney-gallery — CGB Block' ),
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
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
		},
		__alt: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_image_alt',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, mediaURL, __alt },
	} ) => {
		const onSelectImage = image => {
			setAttributes( {
				mediaID: image.id,
				mediaURL: image.url,
				__mediaURL: image.url,
			} );
		};
		const onChangeAltText = text => {
			setAttributes( {
				alt: text,
				__alt: text,
			} );
		};
		return (
			<section className={ className }>
				<BaseControl label="Add a photo for the gallery" id="flyer-upload">
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
					placeholder="A short description of the image to be read out by screen readers"
					value={ __alt }
					onChange={ onChangeAltText }
				/>
			</section>
		);
	},

	save: ( { className, attributes: { mediaURL, alt } } ) => {
		return (
			<article className={ className }>
				<img src={ mediaURL } alt={ alt } />
			</article>
		);
	},
} );
