// how-to-die dot js
//   very simple, just provide plain english translations of unix signals
//   there is 'death' on js, but this is not exactly what i was looking for.

// see signal(7), kill(1), kill(2), POSIX(3), et cetera

'use strict;'

var signal = function (sig, signum, action, comment) {
	return {
		signal:   sig,
		numeric:  signum,
		action:   action,
		comment:  comment || sig
	};
}

var signals = { // {{{
/* (Where three values are given, the first one is usually valid for alpha
    and  sparc,  the middle one for i386, ppc and sh, and the last one for
    mips.  A - denotes that a signal is absent on the corresponding architecture.)
*/
	SIGHUP: {
		numerics: [ 1, 1, 1 ],
		action: 'terminate',
		comment: 'Hangup detected on controlling terminal'
	},
	SIGINT: {
		numerics: [ 2, 2, 2 ],
		action: 'terminate',
		comment: 'Interrupt from keyboard'
	},
	SIGQUIT: {
		numerics: [ 3, 3, 3 ],
		action: 'dump core',
		comment: 'Quit from keyboard'
	},
	SIGILL: {
		numerics: [ 4, 4, 4 ],
		action: 'dump core',
		comment: 'Illegal Instruction'
	},
	SIGABRT: {
		numerics: [ 6, 6, 6 ],
		action: 'dump core',
		comment: 'Abort signal from abort(3)'
	},
	SIGIOT: {
		numerics: [ 6, 6, 6 ],
		action: 'dump core',
		comment: 'IOT trap. A synonym for SIGABRT',
		syn: true
	},
	SIGFPE: {
		numerics: [ 8, 8, 8 ],
		action: 'dump core',
		comment: 'Floating point exception'
	},
	SIGKILL: {
		numerics: [ 9, 9, 9 ],
		action: 'terminate',
		comment: 'Kill signal (cannot be caught)'
	},
	SIGSEGV: {
		numerics: [ 11, 11, 11 ],
		action: 'dump core',
		comment: 'Invalid memory reference'
	},
	SIGPIPE: {
		numerics: [ 13, 13, 13 ],
		action: 'terminate',
		comment: 'Broken pipe: write to pipe with no readers'
	},
	SIGALRM: {
		numerics: [ 14, 14, 14 ],
		action: 'terminate',
		comment: 'Timer signal from alarm(2)'
	},
	SIGSTKFLT: {
		numerics: [ 16, 16, 16 ],
		action: 'terminate',
		comment: 'Stack fault on coprocessor',
		syn: true
	},
	SIGTERM: {
		numerics: [ 15, 15, 15 ],
		action: 'terminate',
		comment: 'termination signal'
	},
	SIGUSR1: {
		numerics: [ 30, 10, 16 ], 
		action: 'terminate',
		comment: 'User-defined signal 1'
	},
	SIGUSR2: {
		numerics: [ 31, 12, 17 ],
		action: 'terminate',
		comment: 'User-defined signal 2',
	},
	SIGCHLD: {
		numerics: [ 20, 17, 18 ],
		action: 'ignore',
		comment: 'Child stopped or terminated'
	},
	SIGCONT: {
		numerics: [ 19, 18, 25 ],
		action: 'Continue',
		comment: 'Continue if stopped'
	},
	SIGSTOP: {
		numerics: [ 17, 19, 23 ],
		action: 'stop',
		comment: 'Stop process'
	},
	SIGTSTP: {
		numerics: [ 18, 20, 24 ],
		action: 'stop',
		comment: 'Stop typed at tty'
	},
	SIGTTIN: {
		numerics: [ 21, 21, 26 ],
		action: 'stop',
		comment: 'tty input for background process'
	},
	SIGTTOU: {
		numerics: [ 22, 22, 27 ],
		action: 'stop',
		comment: 'tty output for background process'
	},
	SIGBUS: {
		numerics: [ 10, 7, 10  ],
		action: 'dump core',
		comment: 'Bus error (bad memory access)'
	},
	SIGPROF: {
		numerics: [ 27, 27, 29 ],
		action: 'terminate',
		comment: 'Profiling timer expired'
	},
	SIGSYS: {
		numerics: [ 12, 12, 12 ],
		action: 'dump core',
		comment: 'Bad argument to routine (SVr4)'
	},
	SIGTRAP: {
		numerics: [ 5, 5, 5 ],
		action: 'dump core',
		comment: 'Trace/breakpoint trap'
	},
	SIGURG: {
		numerics: [ 16, 23, 21 ],
		action: 'ignore',
		comment: 'Urgent condition on socket (4.2BSD)'
	},
	SIGVTALRM: {
		numerics: [ 26, 26, 28 ],
		action: 'terminate',
		comment: 'Virtual alarm clock (4.2BSD)'
	},
	SIGXCPU: {
		numerics: [ 24, 24, 30 ],
		action: 'dump core',
		comment: 'CPU time limit exceeded (4.2BSD)'
	},
	SIGXFSZ: {
		numerics: [ 25, 25, 31 ],
		action: 'dump core',
		comment: 'File size limit exceeded (4.2BSD)'
	},
	SIGEMT: {
		numerics: [ 7, null, 7 ],
		action: 'terminate'
	},
	SIGIO: {
		numerics: [ 23, 29, 22 ],
		action: 'terminate',
		comment: 'I/O now possible (4.2BSD)'
	},
	SIGPOLL: {
		numerics: [ 23, 29, 22 ],
		action: 'terminate',
		comment: 'Pollable event (Sys V). Synonym of SIGIO',
		syn: true
	},
	SIGCLD: {
		numerics: [ null, null, 18 ],
		action: 'ignore',
		comment: 'A synonym for SIGCHLD'
	},
	SIGPWR: {
		numerics: [ 29, 30, 19 ],
		action: 'terminate',
		comment: 'Power failure (System V)'
	},
	SIGINFO: {
		numerics: [ 29, null, null ],
		action: 'terminate',
		comment: 'A synonym for SIGPWR',
		syn: true
	},
	SIGLOST: {
		numerics: [ null, null, null ],
		action: 'terminate',
		comment: 'File lock lost'
	},
	SIGWINCH: {
		numerics: [ 28, 28, 20 ],
		action: 'ignore',
		comment: 'Window resize signal (4.3BSD, Sun)'
	},
	SIGUNUSED: {
		numerics: [ null, 31, null ],
		action: 'terminate',
		comment: 'Unused signal (will be SIGSYS)'
	}
} // }}}

function modefrob () {
	var column;
	if (
		(module.exports.mode == 'i386') ||
		(module.exports.mode == 'ppc') ||
		(module.exports.mode == 'sh')
	) {
		column = 1
	}
	else if (
		(module.exports.mode == 'alpha') ||
		(module.exports.mode == 'sparc')
	) {
		column = 0
	}
	else if (
		// Wow, node on Irix. That's pretty gnarly.
		//
		(module.exports.mode == 'mips')
	) {
		column = 2
	}
	return column;
}

function get_signal (thing) { // {{{
	var dg = require( 'deep-grep' );
	var S  = signals;

	if ( (typeof thing) == 'number' ) {
		// they are asking to convert '15' to a signal
		var matching_signals = [ ];
		Object.keys( S ).forEach( function (signame) {
			if (S[signame].numerics[ modefrob() ] == thing) {
				var obj = dg.clone( S[signame] );
				obj.name = signame;
				matching_signals.push( obj );
			}
		} );
		if (! matching_signals.length) {
			// Looks like we found no matching signals.
			//
			return new Error( 'Couldn\'t find any signals for '.concat( thing ) );
		}
		// note, a few signals are synonyms, they're denoted in the structure,
		// but we're only returning the first example here. probably FIXME etc.
		//
		return new signal(
			matching_signals[0].name,
			matching_signals[0].numerics[ modefrob() ],
			matching_signals[0].action,
			matching_signals[0].comment
		);
	}
	else if ( (typeof thing) === 'string' ) {
		// they are asking to convert 'SIGTERM' or 'TERM' to a signal
		if (S.hasOwnProperty( thing )) {
			var sig = S[thing];
			return new signal(
				thing, sig.numerics[ modefrob() ], sig.action, sig.comment
			);
		}
		else if (S.hasOwnProperty( 'SIG'.concat( thing ) )) {
			var signame = 'SIG'.concat( thing );
			var sig = S[signame];
			return new signal(
				signame, sig.numerics[ modefrob() ], sig.action, sig.comment
			);
		}
		else {
			return new Error( 'Sorry, unsure what kind of signal '.concat( thing, 'is' ) );
		}
	}
} // }}}

module.exports = {
	signals:  signals,
	// If you dare:
	//   set mode to any of 'sun', 'sparc', 'ppc', 'i386', 'mips', 'sh', depending
	//   on the architecture you wish to die upon.
	
	mode: 'i386', // synonyms: ppc; also possible: 'sun', 'sparc', 'mips'

	// We get signal!
	get: get_signal,
};

// @janearc 🐙👾 // jane@cpan.org // vim:tw=80:ts=2:noet
