var assert = require( 'assert' )
	, chai   = require( 'chai' );

it( 'require/syntax check', function () {
	var htd = require( '../lib/htd' );
	assert( htd, 'returned object is truthy' );
	assert( (typeof htd) == 'object', 'returned object.' );
	assert( htd.hasOwnProperty( 'signals' ), 'signals present.' );
	assert( htd.hasOwnProperty( 'mode' ), 'mode setting present.' );
} );
