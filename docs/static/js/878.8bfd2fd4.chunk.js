(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[878],{84968:function(r,n,e){"use strict";e.r(n),e.d(n,{getED25519Key:function(){return i}});var t=e(93433),f=e(48598),a=e.n(f),o=e(66303).Buffer,c=a().lowlevel;function i(r){var n;n="string"===typeof r?o.from(r,"hex"):r;var e=new Uint8Array(64),f=[c.gf(),c.gf(),c.gf(),c.gf()],a=new Uint8Array([].concat((0,t.Z)(new Uint8Array(n)),(0,t.Z)(new Uint8Array(32)))),i=new Uint8Array(32);c.crypto_hash(e,a,32),e[0]&=248,e[31]&=127,e[31]|=64,c.scalarbase(f,e),c.pack(i,f);for(var u=0;u<32;u+=1)a[u+32]=i[u];return{sk:o.from(a),pk:o.from(i)}}},78848:function(){}}]);
//# sourceMappingURL=878.8bfd2fd4.chunk.js.map