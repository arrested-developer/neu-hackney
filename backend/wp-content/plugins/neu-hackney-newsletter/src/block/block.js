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
			selector: 'a',
			attribute: 'href',
		},
	},
	edit: ( {
		attributes: { newsletterID, newsletterURL, date },
		className,
		setAttributes,
	} ) => {
		const onSelectFile = file => {
			setAttributes( {
				newsletterID: file.id,
				newsletterURL: file.url,
			} );
		};
		return (
			<div className={ className }>
				<BaseControl
					label={
						newsletterID ?
							'Preview Newsletter' :
							'Upload NEU Hackney Newsletter in pdf format'
					}
					id="newsletter-upload"
				>
					<MediaUpload
						onSelect={ onSelectFile }
						allowedTypes="pdf"
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
									{ ! newsletterID ? 'Upload agenda' : 'Choose again' }
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
			<a className={ className } href={ newsletterURL }>
				View
			</a>
		);
	},
} );
