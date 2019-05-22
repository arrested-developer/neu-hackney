/**
 * BLOCK: neu-hackney-team-member
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import components
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { MediaUpload } = wp.editor;
const { Button, BaseControl, TextControl, SelectControl } = wp.components;

// Import helper functions
import makeValidator from '../utils/validator';

//  Import CSS.
import './style.scss';
import './editor.scss';

//  Fetch Team Member Positions
//  Happens aynchronously on script load, before the editor loads (I hope)
// const positions = [];
// const positionNames = [];
// wp.apiFetch( { path: '/wp/v2/position?per_page=99' } ).then( posts => {
// 	positions.push( { label: 'No Position', value: 0 } );
// 	posts
// 		.sort( ( a, b ) => a.id > b.id )
// 		.forEach( post => {
// 			positions.push( { label: post.name, value: post.id } );
// 			positionNames[ post.id ] = post.name;
// 		} );
// } );

const host = window.location.href.split( '/wp-admin' )[ 0 ];
const teamPlaceholder = `${ host }/wp-content/plugins/neu-hackney/assets/img/team-member.png`;

// ensure information notice is shown each time editor is opened
let warningShown = false;

const validator = makeValidator();
validator.use( () => {
	const { name, email } = validator.getAll();
	if ( ! name ) {
		return validator.fail( 'Please enter a name' );
	} else if ( ! email || validator.emailIsInvalid( email ) ) {
		return validator.fail(
			'Please enter a valid email address for this team member'
		);
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
		selectedPosition: {
			type: 'string',
			source: 'meta',
			meta: 'neuhack_team_member_position',
		},
		positionName: {
			type: 'string',
		},
	},
	edit: ( {
		className,
		setAttributes,
		attributes: { mediaID, mediaURL, email, selectedPosition },
	} ) => {
		const onSelectImage = image => {
			setAttributes( {
				mediaID: image.id,
				mediaURL: image.url,
				__mediaURL: image.url,
			} );
			// image is optional, no validation needed
		};
		const onChangeEmail = e => {
			setAttributes( {
				email: e,
				__email: e,
			} );
			validator.check( 'email', e );
		};
		// const onChangePosition = e => {
		// 	setAttributes( {
		// 		selectedPosition: e,
		// 		positionName: positionNames[ e ],
		// 	} );
		// };
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
		// show notice to assist with completing the fields correctly
		if ( ! warningShown ) {
			wp.data.dispatch( 'core/notices' ).createNotice(
				'info', // Can be one of: success, info, warning, error.
				'Make sure to select the team member\'s position(s) and the page(s) to show them on from the Document settings on the right hand side', // Text string to display.
				{
					isDismissible: true, // Whether the user can dismiss the notice.
					// Any actions the user can perform.
					actions: [],
				}
			);
			warningShown = true;
		}
		window.addEventListener( 'load', () => {
			const title = document.querySelector( '.editor-post-title__input' );
			// rename the title placeholder
			title.placeholder = 'Name';
			// set initial values for validator
			validator.set( 'name', title.value );
			validator.set( 'email', email );
			// listen for changes to the title and validate
			title.addEventListener( 'input', () =>
				validator.check( 'name', title.value )
			);
		} );
		return (
			<section className={ className }>
				<TextControl
					label="Email"
					placeholder="someone@neu.org.uk"
					value={ email }
					onChange={ onChangeEmail }
					id="emailInput"
				/>
				<BaseControl
					label="Add a photo for the team member (if no photo is selected, a placeholder will be used)"
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
								{ ! mediaID ? 'Select Photo' : <TeamPhoto src={ mediaURL } /> }
							</Button>
						) }
					/>
				</BaseControl>
				{ /* <SelectControl
					label={ __( 'Select a Position' ) }
					options={ positions }
					value={ selectedPosition }
					onChange={ onChangePosition }
				/> */ }
			</section>
		);
	},

	save: ( { className, attributes: { mediaURL, positionName, email } } ) => {
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
		return (
			<article className={ className }>
				<TeamPhoto
					src={ mediaURL ? mediaURL : teamPlaceholder }
					data-src={ mediaURL }
				/>
				<h4>{ positionName }</h4>
				<a href={ `mailto:${ email }` }>{ email }</a>
			</article>
		);
	},
} );
