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
import richTextToString from '../utils/richTextToString';

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
registerBlockType( 'neu-hackney/useful-resource', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney - Useful Resource Block' ), // Block title.
	icon: 'sos', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'neu-hackney-useful-resource — CGB Block' ),
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
			meta: 'neuhack_attachment_url',
		},
		resourceDetails: {
			type: 'array',
			source: 'children',
			selector: '.neu-hackney-resource-details',
		},
		__resourceDetails: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_details',
		},
		resourceURL: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		__resourceURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_resource-url',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, mediaURL, resourceDetails, resourceURL },
	} ) => {
		const onSelectFile = file => {
			setAttributes( {
				mediaID: file.id,
				mediaURL: file.url,
				__mediaURL: file.url,
			} );
		};
		const onChangeDetails = text => {
			setAttributes( {
				resourceDetails: text,
				__resourceDetails: text,
			} );
		};
		const onChangeResourceURL = text => {
			setAttributes( {
				resourceURL: text,
				__resourceURL: text,
			} );
		};
		return (
			<section className={ className }>
				<BaseControl
					label="Upload a resource (accepts images, PDFs, word documents, powerpoint, excel, zip files and mp3 audio)"
					id="flyer-upload"
				>
					<MediaUpload
						onSelect={ onSelectFile }
						allowedTypes="image/*,.pdf,application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.zip,application/zip,.mp3,audio/mpeg"
						value={ mediaID }
						id="media-upload"
						render={ ( { open } ) => (
							<Button className="button button-large" onClick={ open }>
								{ ! mediaID ?
									'Upload file' :
									'File Uploaded - click to choose again' }
							</Button>
						) }
					/>
				</BaseControl>
				<TextControl
					label="URL"
					placeholder="URL to link to an external site or file"
					value={ resourceURL }
					onChange={ onChangeResourceURL }
				/>
				<TextControl
					label="Description"
					placeholder="A short description of the file or resource"
					value={ resourceDetails }
					onChange={ onChangeDetails }
				/>
			</section>
		);
	},

	save: () => null,
} );
