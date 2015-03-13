how to die
---

i noticed that there is a [`death`](https://www.npmjs.com/package/death) package
in npm. however it did not really do what i wanted. i just wanted a mapping
between the various signal names and their integer values. as it happens, this
is not as easy as it sounds, because signals differ between ATT and BSD, as
well as between e.g., SPARC and MIPS.

so while i don't personally *know* anybody writing javascript on IRIX, It's
rude to release software that is so hardware- or kernel-centric as to ignore
our brothers and sisters on different Unixes.

accordingly, i wrote this package. it converts between signal names and numbers
on HP, SPARC, MIPS, i386 (and by extension x64), and PowerPC/POWER. it also
gives you a non-binding description of what would happen (or *should* happen;
you can trap SIGSEGV and do nothing, if you like), and a description of what
the signal actually means.

note that this is pretty cryptic and some of these signals go waaaaaay way
back to when we had stone keyboards and we all used teletypes. it may not
make sense in the context of, say, a modern linux.

interface
---
```javascript
var htd = require( 'htd' );
var kill = htd.get( 9 );
var segv = htd.get( 'SIGSEGV' );
var term = htd.get( 'TERM' );
```

if you are one of those brave souls who is using a non-i386 platform,
you may set `htd.mode` to one of `ppc`, `sh`, `alpha`, `sparc`, or `mips`.
the return values from `htd.get()` will be appropriate to your platform/unix.
no guarantees are provided in terms of children on your lawn, however.

the resultant object will have the methods `numeric`, `action`, and `signal`.
these are not very cleverly named and do what you would expect.

if you would like ALL THE SIGNALS, `htd.signals` is the structure, exported.
be advised it contains all the numerics. look at the source to see what is
what.

license
---
well, this is tricky because it is cobbled together from header files from
ancient unixes and probably includes verbatim words from obscure HP or Berkeley
engineers. i am not certain it can be 'copyrighted' by anyone and is without
question a derivative work.

this having been said, it was written by an employee of the united states
government, and is not *subject* to copyright; it is hereby released into the
public domain.

for purposes of attribution (though you really shouldn't), the author is
jane arc, [@janearc](https://github.com/janearc) &mdash; jane@cpan.org.🐙👾
