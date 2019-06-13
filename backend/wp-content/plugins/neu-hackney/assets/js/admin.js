const postData = ( url = '', data = {} ) => {
	// Default options are marked with *
	return fetch( url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		redirect: 'manual', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify( data ), // body data type must match "Content-Type" header
	} );
};

window.onload = () => {
	const stagingStatus = document.querySelector( '#neuhack-status-staging' );
	const productionStatus = document.querySelector( '#neuhack-status-production' );
	const stagingImage = stagingStatus.src;
	const productionImage = productionStatus.src;
	let imageInterval;
	const refreshImages = () => {
		stagingStatus.src = `${ stagingImage }?${ new Date().getTime() }`;
		productionStatus.src = `${ productionImage }?${ new Date().getTime() }`;
		clearInterval( imageInterval );
		imageInterval = setInterval( refreshImages, 10000 );
	};
	const stagingButton = document.querySelector( '#neuhack-build-staging' );
	stagingButton.addEventListener( 'click', () => {
		postData(
			'https://api.netlify.com/build_hooks/5d0223dc3838a973121dec15',
			{}
		).then( refreshImages );
	} );
	const publishButton = document.querySelector( '#neuhack-build-production' );
	publishButton.addEventListener( 'click', () => {
		postData(
			'https://api.netlify.com/build_hooks/5ce87dac478dddbdb747539b',
			{}
		).then( refreshImages );
	} );
};
