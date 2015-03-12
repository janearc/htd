// how-to-die dot js
//   very simple, just provide plain english translations of unix signals
//   there is 'death' on js, but this is not exactly what i was looking for.

// see signal(7), kill(1), kill(2), POSIX(3), et cetera

var signal = function (sig, values, action, comment) {
	var column = 1;
	if (
		(exports.mode === 'i386') ||
		(exports.mode === 'ppc') ||
		(exports.mode === 'sh')
	) {
		column = 1
	}
	else if (
		(exports.mode === 'alpha') ||
		(exports.mode === 'sparc')
	) {
		column = 0
	}
	else if (
		(exports.mode === 'mips')
	) {
		column = 2
	}

	return {
		signal:   sig,
		numeric:  values[ column ],
		action:   action,
		comment:  comment
	};
}

var signals = {
/* (Where three values are given, the first one is usually valid for alpha
    and  sparc,  the middle one for i386, ppc and sh, and the last one for
    mips.  A - denotes that a signal is absent on the corresponding architecture.)
*/
       SIGHUP         [ 1, 1, 1 ]         Term    Hangup detected on controlling terminal
       SIGINT         [ 2, 2, 2 ]         Term    Interrupt from keyboard
       SIGQUIT        [ 3, 3, 3 ]         Core    Quit from keyboard
       SIGILL         [ 4, 4, 4 ]         Core    Illegal Instruction
       SIGABRT        [ 6, 6, 6 ]         Core    Abort signal from abort(3)
       SIGIOT         [ 6, 6, 6 ]           Core    IOT trap. A synonym for SIGABRT /* syn: true */
       SIGFPE         [ 8, 8, 8 ]         Core    Floating point exception
       SIGKILL        [ 9, 9, 9 ]         Term    Kill signal
       SIGSEGV        [ 11, 11, 11 ]         Core    Invalid memory reference
       SIGPIPE        [ 13, 13, 13 ]         Term    Broken pipe: write to pipe with no readers
       SIGALRM        [ 14, 14, 14 ]         Term    Timer signal from alarm(2)
       SIGSTKFLT    [ 16, 16, 16 ]     Term    Stack fault on coprocessor (unused) /* syn: true */
       SIGTERM        [ 15, 15, 15 ]         Term    Termination signal
       SIGUSR1     [ 30,10,16 ]    Term    User-defined signal 1
       SIGUSR2     [ 31,12,17 ]   Term    User-defined signal 2
       SIGCHLD     [ 20,17,18 ]   Ign     Child stopped or terminated
       SIGCONT     [ 19,18,25 ]   Cont    Continue if stopped
       SIGSTOP     [ 17,19,23 ]   Stop    Stop process
       SIGTSTP     [ 18,20,24 ]    Stop    Stop typed at tty
       SIGTTIN     [ 21,21,26 ]   Stop    tty input for background process
       SIGTTOU     [ 22,22,27 ]   Stop    tty output for background process
       SIGBUS      [ 10,7,10  ]   Core    Bus error (bad memory access)
       SIGPROF      [ 27,27,29 ]    Term    Profiling timer expired
       SIGSYS       [ 12,12,12 ]   Core    Bad argument to routine (SVr4)
       SIGTRAP      [ 5, 5, 5 ]           Core    Trace/breakpoint trap
       SIGURG       [ 16,23,21 ]   Ign     Urgent condition on socket (4.2BSD)
       SIGVTALRM    [ 26,26,28 ]   Term    Virtual alarm clock (4.2BSD)
       SIGXCPU      [ 24,24,30 ]   Core    CPU time limit exceeded (4.2BSD)
       SIGXFSZ      [ 25,25,31 ]   Core    File size limit exceeded (4.2BSD)
       SIGEMT        [ 7,null,7 ]      Term
       SIGIO       [ 23,29,22 ]    Term    I/O now possible (4.2BSD)
       SIGPOLL     [ 23, 29, 22 ] Term    Pollable event (Sys V). Synonym of SIGIO /* syn: true */
       SIGCLD        [ null,null,18 ]    Ign     A synonym for SIGCHLD
       SIGPWR       [ 29,30,19 ]   Term    Power failure (System V)
       SIGINFO       [ 29,null,null ]           A synonym for SIGPWR
       SIGLOST        [ null,null,null ]     Term    File lock lost
       SIGWINCH       [ 28,28,20 ]    Ign     Window resize signal (4.3BSD, Sun)
       SIGUNUSED    [ null,31,null ]     Term    Unused signal (will be SIGSYS)
}

module.exports = {
	signals: signals,
	// If you dare:
	//   set mode to any of 'sun', 'sparc', 'ppc', 'i386', 'mips', 'sh', depending
	//   on the architecture you wish to die upon.
	
	mode: 'i386' // synonyms: ppc; also possible: 'sun', 'sparc', 'mips'
};

// @janearc 🐙👾 // jane@cpan.org // vim:tw=80:ts=2:noet
