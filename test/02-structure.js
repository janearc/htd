var assert = require( 'assert' )
	, chai   = require( 'chai' );

it( 'all signals', function () {
	var htd = require( '../lib/htd' );
	assert( htd.hasOwnProperty( 'signals' ), 'signals present.' );
	var signals = htd.signals;
	assert( signals, 'signals is truthy' );
	assert( typeof signals === 'object', 'signals object is objecty' );

	var kill = signals.SIGKILL;
	assert( kill, 'death is truthy' );
	assert( kill.numerics[0] === 9, 'kill is signal nine [0]' );
	assert( kill.numerics[1] === 9, 'kill is signal nine [1]' );
	assert( kill.numerics[2] === 9, 'kill is signal nine [2]' );
} );
