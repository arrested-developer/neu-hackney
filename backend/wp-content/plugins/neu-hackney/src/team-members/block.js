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
registerBlockType( 'neu-hackney/team-member', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'NEU Hackney - Team Member Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'neu-hackney-team-member — CGB Block' ),
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
			selector: '.neu-hackney-team-member-photo',
			attribute: 'data-src',
		},
		__mediaURL: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_image_url',
		},
		email: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		__email: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_team_member_email',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, mediaURL, name, email },
	} ) => {
		// change placeholder text for the title
		window.addEventListener( 'load', () => {
			document.querySelector( '.editor-post-title__input' ).placeholder = 'Name';
		} );
		const onSelectImage = image => {
			setAttributes( {
				mediaID: image.id,
				mediaURL: image.url,
				__mediaURL: image.url,
			} );
		};
		const onChangeEmail = e => {
			setAttributes( {
				email: e,
				__email: e,
			} );
		};
		const TeamPhoto = ( { src } ) => {
			return (
				<div
					className="neu-hackney-team-member-photo"
					style={ {
						backgroundImage: `url(${ src })`,
					} }
				/>
			);
		};
		return (
			<section className={ className }>
				<TextControl
					label="Email"
					placeholder="someone@neu.org.uk"
					value={ email }
					onChange={ onChangeEmail }
				/>
				<BaseControl label="Add a photo for the team member" id="flyer-upload">
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
								{ ! mediaID ? 'Upload image' : <TeamPhoto src={ mediaURL } /> }
							</Button>
						) }
					/>
				</BaseControl>
			</section>
		);
	},

	save: ( { className, attributes: { mediaURL, name, email } } ) => {
		const TeamPhoto = ( { src } ) => {
			return (
				<div
					className="neu-hackney-team-member-photo"
					data-src={ src }
					style={ {
						backgroundImage: `url(${ src })`,
					} }
				/>
			);
		};
		const host = window.location.href.split( '/wp-admin' )[ 0 ];
		return (
			<article className={ className }>
				<TeamPhoto
					src={
						mediaURL ?
							mediaURL :
							`${ host }/wp-content/plugins/neu-hackney/assets/img/team-member.png`
					}
					data-src={ mediaURL }
				/>
				<a href={ `mailto:${ email }` }>{ email }</a>
			</article>
		);
	},
} );
