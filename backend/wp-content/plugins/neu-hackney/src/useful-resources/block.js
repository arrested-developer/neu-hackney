/**
 * BLOCK: neu-hackney-useful-resource
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.editor;
const { Button, BaseControl, TextControl, RadioControl } = wp.components;

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
		resourceDetails: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		__resourceDetails: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_details',
		},
		resourceID: {
			type: 'number',
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
			meta: 'neuhack_resource_url',
		},
		resourceIsExternal: {
			type: 'number',
		},
		__resourceIsExternal: {
			type: 'number',
			source: 'meta',
			meta: 'neuhack_resource_is_external',
		},
		warningShown: {
			type: 'boolean',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: {
			__resourceIsExternal,
			resourceDetails,
			resourceID,
			resourceURL,
			warningShown,
		},
	} ) => {
		const onSelectFile = file => {
			setAttributes( {
				resourceID: file.id,
				resourceURL: file.url,
				__resourceURL: file.url,
			} );
		};
		const onChangeResourceURL = text => {
			setAttributes( {
				resourceURL: text,
				__resourceURL: text,
			} );
		};
		const onResourceTypeChange = value => {
			const n = Number( value );
			setAttributes( {
				resourceIsExternal: n,
				__resourceIsExternal: n,
			} );
		};
		const onChangeDetails = text => {
			setAttributes( {
				resourceDetails: text,
				__resourceDetails: text,
			} );
		};
		if ( ! warningShown ) {
			wp.data.dispatch( 'core/notices' ).createNotice(
				'info', // Can be one of: success, info, warning, error.
				'Don\'t forget to use Settings -> Document -> Categories to select which groups of members this resource is relevant to.', // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
					// Any actions the user can perform.
					actions: [],
				}
			);
			setAttributes( {
				warningShown: true,
			} );
		}
		return (
			<section className={ className }>
				<RadioControl
					label="Select resource type"
					selected={ __resourceIsExternal }
					onChange={ onResourceTypeChange }
					options={ [
						{ label: 'File Upload', value: 0 },
						{ label: 'External link URL', value: 1 },
					] }
				/>
				{ __resourceIsExternal ? (
					<TextControl
						label="URL (including https:// or http://)"
						placeholder="https://anotherwebsite.com"
						value={ resourceURL }
						onChange={ onChangeResourceURL }
					/>
				) : (
					<BaseControl
						label="Upload a resource (accepts images, PDFs, word documents, powerpoint, excel, zip files and mp3 audio)"
						id="flyer-upload"
					>
						<MediaUpload
							onSelect={ onSelectFile }
							allowedTypes="image/*,.pdf,application/pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.zip,application/zip,.mp3,audio/mpeg"
							value={ resourceID }
							id="media-upload"
							render={ ( { open } ) => (
								<Button className="button button-large" onClick={ open }>
									{ ! resourceID ?
										'Upload file' :
										'File Uploaded - click to choose again' }
								</Button>
							) }
						/>
					</BaseControl>
				) }
				<TextControl
					label="Description"
					placeholder="A short description of the file or resource"
					value={ resourceDetails }
					onChange={ onChangeDetails }
				/>
			</section>
		);
	},

	save: ( { className, attributes: { resourceURL, resourceDetails } } ) => {
		return (
			<li className={ className }>
				<a href={ resourceURL }>{ resourceDetails }</a>
			</li>
		);
	},
} );