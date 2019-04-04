/**
 * BLOCK: neu-hackney-newsletter
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

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

	edit: props => {
		// Creates a <p class='wp-block-cgb-block-neu-hackney-newsletter'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>neu-hackney-newsletter</code> is a new Gutenberg
					block
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

	save: () => {
		return null;
	},
} );
