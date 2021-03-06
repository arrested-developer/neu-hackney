/**
 * BLOCK: neu-hackney-newsletter
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.editor;
const { Button, BaseControl } = wp.components;

// Import helper functions
import makeValidator from '../utils/validator';

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

// ensure information notice is shown each time editor is opened
let noticeShown = false;

// create the validator function for this post
const validator = makeValidator();
validator.use( () => {
	console.log( 'validating' );
	const newsletter = validator.get( 'newsletter' );
	if ( ! newsletter ) {
		return validator.fail(
			'A newsletter is required, please upload a file in pdf format'
		);
	}
	return validator.pass();
} );

registerBlockType( 'neu-hackney/newsletter', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney - Newsletter Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'neu-hackney-newsletter — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		newsletterID: {
			type: 'number',
		},
		newsletterURL: {
			type: 'string',
			source: 'attribute',
			selector: 'embed',
			attribute: 'src',
		},
		__newsletterURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_attachment_url',
		},
	},
	edit: ( {
		attributes: { newsletterID, newsletterURL },
		className,
		setAttributes,
	} ) => {
		window.addEventListener( 'load', () => {
			// remove the title, which is set automatically from the publish date
			document.querySelector( '.editor-post-title__input' ).style.display =
				'none';
			validator.set( 'newsletter', newsletterID );
		} );
		const onSelectFile = file => {
			setAttributes( {
				newsletterID: file.id,
				newsletterURL: file.url,
				__newsletterURL: file.url,
			} );
			validator.check( 'newsletter', file.id );
		};

		// show notice to assist with completing the fields correctly
		if ( ! noticeShown ) {
			wp.data.dispatch( 'core/notices' ).createNotice(
				'info', // Can be one of: success, info, warning, error.
				'Newsletter will be published with the current month and year. To publish with a different date, change the publish settings from "Immediately" to your chosen date in the "Status & Visibility" options at the top right of the screen.', // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
					// Any actions the user can perform.
					actions: [],
				}
			);
			noticeShown = true;
		}
		return (
			<div className={ className }>
				<BaseControl
					label={
						newsletterID ? null : 'Upload NEU Hackney Newsletter in pdf format'
					}
					id="newsletter-upload"
				>
					<MediaUpload
						onSelect={ onSelectFile }
						allowedTypes="application/pdf"
						value={ newsletterID }
						id="newsletter-upload"
						render={ ( { open } ) => (
							<div style={ { width: '100%' } }>
								{ newsletterID && (
									<embed
										src={ newsletterURL }
										type="application/pdf"
										width="100%"
										height="600px"
									/>
								) }
								<Button className="button button-large" onClick={ open }>
									{ ! newsletterID ? 'Upload newsletter' : 'Choose another file' }
								</Button>
							</div>
						) }
					/>
				</BaseControl>
			</div>
		);
	},

	save: ( { className, attributes: { newsletterURL } } ) => {
		return (
			<div className={ className }>
				<embed
					src={ newsletterURL }
					type="application/pdf"
					width="100%"
					height="600px"
				/>
			</div>
		);
	},
} );
