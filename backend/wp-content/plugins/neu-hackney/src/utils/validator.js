// validator function includes a closure to prevent unhelpful display of error message
// on first page load of editor.

// function returned will lock and unlock post publishing, depending on the result
// of a validation function which must be passed in

export default () => {
	let editorHasLoadedOnce = false;
	const run = validatePost => {
		if ( editorHasLoadedOnce ) {
			wp.data.dispatch( 'core/notices' ).removeNotice( 'LOCK_NOTICE' );
			const check = validatePost();
			if ( check.isValid ) {
				wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'my_lock_key' );
			} else {
				wp.data.dispatch( 'core/editor' ).lockPostSaving( 'my_lock_key' );
				wp.data.dispatch( 'core/notices' ).createInfoNotice( check.message, {
					id: 'LOCK_NOTICE',
					isDismissible: true,
				} );
			}
		} else {
			editorHasLoadedOnce = true;
		}
	};
	const fail = message => ( {
		isValid: false,
		message,
	} );
	const pass = () => ( {
		isValid: true,
	} );
	const inputs = {};
	const getInput = key => inputs[ key ];
	const setInput = ( key, value ) => ( inputs[ key ] = value );
	const getAllInputs = () => inputs;
	const emailIsValid = email => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
	};
	const emailIsInvalid = email => ! emailIsValid( email );
	return {
		run,
		fail,
		pass,
		emailIsValid,
		emailIsInvalid,
		getInput,
		setInput,
		getAllInputs,
	};
};
