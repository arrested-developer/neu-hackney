export default () => {
	let editorHasLoadedOnce = false;
	let validatorFunction = () => null;
	const run = () => {
		if ( editorHasLoadedOnce ) {
			wp.data.dispatch( 'core/notices' ).removeNotice( 'LOCK_NOTICE' );
			const check = validatorFunction();
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
	const use = f => ( validatorFunction = f );
	const fail = message => ( {
		isValid: false,
		message,
	} );
	const pass = () => ( {
		isValid: true,
	} );
	const inputs = {};
	const get = key => inputs[ key ];
	const set = ( key, value ) => {
		inputs[ key ] = value;
	};
	const check = ( key, value ) => {
		set( key, value );
		run();
	};
	const getAll = () => inputs;
	const emailIsValid = email => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( email );
	};
	const emailIsInvalid = email => ! emailIsValid( email );
	return {
		run,
		use,
		fail,
		pass,
		emailIsValid,
		emailIsInvalid,
		get,
		set,
		check,
		getAll,
	};
};
