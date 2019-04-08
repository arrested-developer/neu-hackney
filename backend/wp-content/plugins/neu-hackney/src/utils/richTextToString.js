// a fairly crude hack, will work with multiline <br> RichText inputs

const richTextToString = arr =>
	arr.filter( el => typeof el === 'string' ).join( '<br>' );

export default richTextToString;
