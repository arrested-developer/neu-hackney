/**
 * BLOCK: Site Settings
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload, RichText } = wp.editor;
const { Button, BaseControl, TextControl } = wp.components;

// Import helper functions
import makeValidator from '../utils/validator';

//  Import CSS.
import './style.scss';
import './editor.scss';

// create the validator function for this post
const validator = makeValidator();
validator.use( () => {
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
registerBlockType( 'neu-hackney/settings', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney Settings - CGB Block' ), // Block title.
	icon: 'admin-standard', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'NEU Hackney Settings — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	attributes: {
		nominationID: {
			type: 'number',
		},
		nominationURL: {
			type: 'string',
		},
		__nominationURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_settings_nomination_form',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { nominationID, nominationURL },
	} ) => {
		window.addEventListener( 'load', () => {
			// remove the title, which is set automatically from the publish date
			document.querySelector( '.editor-post-title__input' ).style.display =
				'none';
			//validator.set( 'newsletter', newsletterID );
		} );
		const onSelectNominationForm = file => {
			setAttributes( {
				nominationID: file.id,
				nominationURL: file.url,
				__nominationURL: file.url,
			} );
			//validator.check( 'image', image.id );
		};
		return (
			<section className={ className }>
				<h1>Site Settings</h1>
				<BaseControl
					label="Upload Election Nomination Form in pdf format"
					id="nomination-upload"
				>
					<MediaUpload
						onSelect={ onSelectNominationForm }
						allowedTypes="application/pdf"
						value={ nominationID }
						id="nomination-upload"
						render={ ( { open } ) => (
							<div style={ { width: '100%' } }>
								{ nominationID ? <div>{ nominationURL }</div> : null }
								<Button className="button button-large" onClick={ open }>
									{ ! nominationID ? 'Upload form' : 'Choose another file' }
								</Button>
							</div>
						) }
					/>
				</BaseControl>
				{ /* <TextControl
					label="Short Description"
					placeholder="A short headline description of the campaign"
					value={ headline }
					onChange={ onChangeHeadline }
				/> */ }
			</section>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>mercury</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>
					.
				</p>
			</div>
		);
	},
} );