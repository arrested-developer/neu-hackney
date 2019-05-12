// validator function includes a closure to prevent unhelpful display of error message
// on first page load of editor.

// function returned will lock and unlock post publishing, depending on the result
// of a validation function which must be passed in

export default () => {
	let firstLoad = true;
	const validator = validationCheck => {
		if ( ! firstLoad ) {
			wp.data.dispatch( 'core/notices' ).removeNotice( 'LOCK_NOTICE' );
			const check = validationCheck();
			if ( check.isValid ) {
				wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'my_lock_key' );
			} else {
				wp.data.dispatch( 'core/editor' ).lockPostSaving( 'my_lock_key' );
				wp.data.dispatch( 'core/notices' ).createErrorNotice( check.message, {
					id: 'LOCK_NOTICE',
					isDismissible: true,
				} );
			}
		} else {
			firstLoad = false;
		}
	};
	return validator;
};
