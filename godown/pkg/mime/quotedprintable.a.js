����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �YX��mime/quotedprintablequotedprintablebufiobytesfmtio�>version 4

 quotedprintable 	 NewReader  Readerio  Read"p n &err r     br  	bufio buf"  rd<    w  &  lastByte  lastRuneSize |S Buffered@b     Discard@|S  discarded &   Peek@|S  " &   
@|S "  &   ReadByte@|S  " &   ReadBytes@|S "	delim " &   ReadLine@|S  "line  isPrefix &   ReadRune@|S  |S size &   ReadSlice@|S "0 "4 &   ReadString@|S "0   &   	Reset@|S <    UnreadByte@|S  &   UnreadRune@|S  &   WriteTo@|S  Writer  	Write"  &  
 &   fill@|S     readErr@|S  &   	reset@|S " <    writeBuf@|S B 
 &    rerr &  4 "  
>  "    &    	 NewWriter B   H 
 Binary    B  i   4 �"  cr    	CloseD   &   JD  "    &    checkLastByte D   &   encode D  "|S  &   	flush D   &   insertCRLF D   &   %insertSoftLineBreak D   &   	write D  "  &   >D!AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E�
E=$pkg.Reader=$newType(0,$kindStruct,"quotedprintable.Reader",true,"mime/quotedprintable",true,function(br_,rerr_,line_){this.$val=this;if(arguments.length===0){this.br=Q.nil;this.rerr=$ifaceNil;this.line=P.nil;return;}this.br=br_;this.rerr=rerr_;this.line=line_;});TT.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)}];��E.init("mime/quotedprintable",[{prop:"br",name:"br",anonymous:false,exported:false,typ:Q,tag:""},{prop:"rerr",name:"rerr",anonymous:false,exported:false,typ:$error,tag:""},{prop:"line",name:"line",anonymous:false,exported:false,typ:P,tag:""}]);Readermime/quotedprintable.Pmime/quotedprintable.Qmime/quotedprintable.Readermime/quotedprintable.T M�EM=$pkg.Writer=$newType(0,$kindStruct,"quotedprintable.Writer",true,"mime/quotedprintable",true,function(Binary_,w_,i_,line_,cr_){this.$val=this;if(arguments.length===0){this.Binary=false;this.w=$ifaceNil;this.i=0;this.line=S.zero();this.cr=false;return;}this.Binary=Binary_;this.w=w_;this.i=i_;this.line=line_;this.cr=cr_;});��U.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"write",name:"write",pkg:"mime/quotedprintable",typ:$funcType([P],[$error],false)},{prop:"encode",name:"encode",pkg:"mime/quotedprintable",typ:$funcType([$Uint8],[$error],false)},{prop:"checkLastByte",name:"checkLastByte",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"insertSoftLineBreak",name:"insertSoftLineBreak",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"insertCRLF",name:"insertCRLF",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)},{prop:"flush",name:"flush",pkg:"mime/quotedprintable",typ:$funcType([],[$error],false)}];��M.init("mime/quotedprintable",[{prop:"Binary",name:"Binary",anonymous:false,exported:true,typ:$Bool,tag:""},{prop:"w",name:"w",anonymous:false,exported:false,typ:D.Writer,tag:""},{prop:"i",name:"i",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"line",name:"line",anonymous:false,exported:false,typ:S,tag:""},{prop:"cr",name:"cr",anonymous:false,exported:false,typ:$Bool,tag:""}]);Writer	io.Writermime/quotedprintable.Pmime/quotedprintable.Smime/quotedprintable.Umime/quotedprintable.Writer PP=$sliceType($Uint8);P QQ=$ptrType(A.Reader);Qbufio.Reader RR=$sliceType($emptyInterface);R SS=$arrayType($Uint8,78);S TT=$ptrType(E);Tmime/quotedprintable.Reader UU=$ptrType(M);Umime/quotedprintable.Writer Jcrlf Klf L
softSuffix '    J=(new P($stringToBytes("\r\n")));crlfmime/quotedprintable.Pmime/quotedprintable.crlf %    K=(new P($stringToBytes("\n")));lfmime/quotedprintable.Pmime/quotedprintable.lf $    L=(new P($stringToBytes("=")));
softSuffixmime/quotedprintable.Pmime/quotedprintable.softSuffix mime/quotedprintable.NewReaderFbF=function(a){var a;  Preturn new E.ptr(A.NewReader(a),$ifaceNil,P.nil);    };$pkg.NewReader=F;	NewReaderbufio.NewReaderbufio.Readermime/quotedprintable.NewReadermime/quotedprintable.Pmime/quotedprintable.Qmime/quotedprintable.Reader mime/quotedprintable.fromHexG��G=function(a){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(a>=48&&a<=57){  �$s=-1;return[a-48<<24>>>24,$ifaceNil];    }else if(a>=65&&a<=70){  �$s=-1;return[(a-65<<24>>>24)+10<<24>>>24,$ifaceNil];    }else if(a>=97&&a<=102){  V$s=-1;return[(a-97<<24>>>24)+10<<24>>>24,$ifaceNil];    }  sb=C.Errorf("quotedprintable: invalid hex byte 0x%02x",new R([new $Uint8(a)]));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return[0,b];    }return;}if($f===undefined){$f={$blk:G};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};fromHex
fmt.Errorfmime/quotedprintable.Rmime/quotedprintable.fromHex  mime/quotedprintable.readHexByteH�H=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;    if(a.$length<2){    d=0;e=D.ErrUnexpectedEOF;b=d;c=e;$s=-1;return[b,c];    }  $f=0;g=0;h=f;i=g;  4k=G((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]));$s=1;case 1:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;h=j[0];c=j[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    l=0;m=c;b=l;c=m;$s=-1;return[b,c];    }  qo=G((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]));$s=2;case 2:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;i=n[0];c=n[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    p=0;q=c;b=p;c=q;$s=-1;return[b,c];    }    r=((h<<4<<24>>>24)|i)>>>0;s=$ifaceNil;b=r;c=s;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:H};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;};readHexByteio.ErrUnexpectedEOFmime/quotedprintable.fromHex mime/quotedprintable.readHexByte *mime/quotedprintable.isQPDiscardWhitespaceI��I=function(a){var a,b;    b=a;    if((b===(10))||(b===(13))||(b===(32))||(b===(9))){  return true;    }  *return false;    };isQPDiscardWhitespace*mime/quotedprintable.isQPDiscardWhitespace #(*mime/quotedprintable.Reader).Read�
E.ptr.prototype.Read=function(a){var a,aa,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  (case 1:if(!(a.$length>0)){$s=2;continue;}  ;if(d.line.$length===0){$s=3;continue;}$s=4;continue;    case 3:    if(!($interfaceIsEqual(d.rerr,$ifaceNil))){    e=b;f=d.rerr;b=e;c=f;$s=-1;return[b,c];    }  �h=d.br.ReadSlice(10);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;d.line=g[0];d.rerr=g[1];  �i=B.HasSuffix(d.line,K);  	
j=B.HasSuffix(d.line,J);  	4k=d.line;  	Kl=B.TrimRightFunc(k,I);$s=6;case 6:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}d.line=l;  	�if(B.HasSuffix(d.line,L)){$s=7;continue;}if(i){$s=8;continue;}$s=9;continue;    case 7:  	�m=$subslice(k,d.line.$length);  	�d.line=$subslice(d.line,0,(d.line.$length-1>>0));  
if(!B.HasPrefix(m,K)&&!B.HasPrefix(m,J)&&!((m.$length===0)&&d.line.$length>0&&$interfaceIsEqual(d.rerr,D.EOF))){$s=10;continue;}$s=11;continue;    case 10:  
�n=C.Errorf("quotedprintable: invalid bytes after =: %q",new R([m]));$s=12;case 12:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}d.rerr=n;    case 11:    $s=9;continue;    case 8:    if(j){  ,d.line=$append(d.line,13,10);    }else{  bd.line=$append(d.line,10);    }    case 9:  �$s=1;continue;    case 4:  �p=(o=d.line,(0>=o.$length?($throwRuntimeError("index out of range"),undefined):o.$array[o.$offset+0]));  �if((p===61)){$s=14;continue;}if((p===9)||(p===13)||(p===10)){$s=15;continue;}if(p<32||p>126){$s=16;continue;}$s=17;continue;    case 14:  �r=H($subslice(d.line,1));$s=18;case 18:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;p=q[0];c=q[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    if(d.line.$length>=2&&!(((s=d.line,(1>=s.$length?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+1]))===13))&&!(((t=d.line,(1>=t.$length?($throwRuntimeError("index out of range"),undefined):t.$array[t.$offset+1]))===10))){  lp=61;  y$s=13;continue;    }    u=b;v=c;b=u;c=v;$s=-1;return[b,c];    }  �d.line=$subslice(d.line,2);    $s=17;continue;    case 15:  $s=13;continue;    $s=17;continue;    case 16:    w=b;y=C.Errorf("quotedprintable: invalid unescaped byte 0x%02x in body",new R([new $Uint8(p)]));$s=19;case 19:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}x=y;b=w;c=x;$s=-1;return[b,c];    case 17:    case 13:  �(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=p);  �a=$subslice(a,1);  �d.line=$subslice(d.line,1);  �b=b+(1)>>0;    $s=1;continue;case 2:    z=b;aa=$ifaceNil;b=z;c=aa;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Read};}$f.a=a;$f.aa=aa;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Read=function(a){return this.$val.Read(a);};Readerbytes.HasPrefixbytes.HasSuffixbytes.TrimRightFunc
fmt.Errorfio.EOFmime/quotedprintable.Rmime/quotedprintable.Readermime/quotedprintable.crlf*mime/quotedprintable.isQPDiscardWhitespacemime/quotedprintable.lf mime/quotedprintable.readHexBytemime/quotedprintable.softSuffix mime/quotedprintable.NewWriterN\N=function(a){var a;  return new M.ptr(false,a,0,S.zero(),false);    };$pkg.NewWriter=N;	NewWritermime/quotedprintable.NewWritermime/quotedprintable.Smime/quotedprintable.Writer $(*mime/quotedprintable.Writer).Write�[M.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  6e=a;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);    if(h>=33&&h<=126&&!((h===61))){  �f++;$s=1;continue;    }else if(O(h)||!d.Binary&&((h===10)||(h===13))){  �f++;$s=1;continue;    }    case 3:  if(g>b){$s=4;continue;}$s=5;continue;    case 4:  i=d.write($subslice(a,b,g));$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;    if(!($interfaceIsEqual(j,$ifaceNil))){    k=b;l=j;b=k;c=l;$s=-1;return[b,c];    }  Vb=g;    case 5:  fm=d.encode(h);$s=7;case 7:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;    if(!($interfaceIsEqual(n,$ifaceNil))){    o=b;p=n;b=o;c=p;$s=-1;return[b,c];    }  �b=b+(1)>>0;    f++;$s=1;continue;case 2:    if(b===a.$length){    q=b;r=$ifaceNil;b=q;c=r;$s=-1;return[b,c];    }  �s=d.write($subslice(a,b));$s=8;case 8:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}t=s;    if(!($interfaceIsEqual(t,$ifaceNil))){    u=b;v=t;b=u;c=v;$s=-1;return[b,c];    }    w=a.$length;x=$ifaceNil;b=w;c=x;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Write=function(a){return this.$val.Write(a);};Writermime/quotedprintable.Writermime/quotedprintable.encode~!mime/quotedprintable.isWhitespacemime/quotedprintable.write~ $(*mime/quotedprintable.Writer).Close��M.ptr.prototype.Close=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=a.checkLastByte();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;    if(!($interfaceIsEqual(c,$ifaceNil))){  �$s=-1;return c;    }  d=a.flush();$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Close};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Close=function(){return this.$val.Close();};Writermime/quotedprintable.Writer#mime/quotedprintable.checkLastByte~mime/quotedprintable.flush~ $(*mime/quotedprintable.Writer).write��M.ptr.prototype.write=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �if((e===10)||(e===13)){$s=3;continue;}$s=4;continue;    case 3:  
if(b.cr&&(e===10)){$s=5;continue;}$s=6;continue;    case 5:  %b.cr=false;  6d++;$s=1;continue;    case 6:    if(e===13){  [b.cr=true;    }  sf=b.checkLastByte();$s=7;case 7:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;    if(!($interfaceIsEqual(g,$ifaceNil))){  �$s=-1;return g;    }  �h=b.insertCRLF();$s=8;case 8:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;    if(!($interfaceIsEqual(i,$ifaceNil))){  �$s=-1;return i;    }  �d++;$s=1;continue;    case 4:  �if(b.i===75){$s=9;continue;}$s=10;continue;    case 9:  j=b.insertSoftLineBreak();$s=11;case 11:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=j;    if(!($interfaceIsEqual(k,$ifaceNil))){  O$s=-1;return k;    }    case 10:  f(l=b.line,m=b.i,((m<0||m>=l.length)?($throwRuntimeError("index out of range"),undefined):l[m]=e));  xb.i=b.i+(1)>>0;  �b.cr=false;    d++;$s=1;continue;case 2:  �$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.write=function(a){return this.$val.write(a);};Writerwrite~mime/quotedprintable.Writer#mime/quotedprintable.checkLastByte~ mime/quotedprintable.insertCRLF~)mime/quotedprintable.insertSoftLineBreak~ %(*mime/quotedprintable.Writer).encode��M.ptr.prototype.encode=function(a){var a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  �if((75-b.i>>0)<3){$s=1;continue;}$s=2;continue;    case 1:  �c=b.insertSoftLineBreak();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;    if(!($interfaceIsEqual(d,$ifaceNil))){  $s=-1;return d;    }    case 2:  ,(e=b.line,f=b.i,((f<0||f>=e.length)?($throwRuntimeError("index out of range"),undefined):e[f]=61));  ?(g=b.line,h=b.i+1>>0,((h<0||h>=g.length)?($throwRuntimeError("index out of range"),undefined):g[h]="0123456789ABCDEF".charCodeAt((a>>>4<<24>>>24))));  _(i=b.line,j=b.i+2>>0,((j<0||j>=i.length)?($throwRuntimeError("index out of range"),undefined):i[j]="0123456789ABCDEF".charCodeAt(((a&15)>>>0))));  �b.i=b.i+(3)>>0;  �$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.encode};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.encode=function(a){return this.$val.encode(a);};Writerencode~mime/quotedprintable.Writer)mime/quotedprintable.insertSoftLineBreak~ ,(*mime/quotedprintable.Writer).checkLastByte��M.ptr.prototype.checkLastByte=function(){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;    if(a.i===0){  D$s=-1;return $ifaceNil;    }  Td=(b=a.line,c=a.i-1>>0,((c<0||c>=b.length)?($throwRuntimeError("index out of range"),undefined):b[c]));  hif(O(d)){$s=1;continue;}$s=2;continue;    case 1:  a.i=a.i-(1)>>0;  �e=a.encode(d);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return f;    }    case 2:  �$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.checkLastByte};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.checkLastByte=function(){return this.$val.checkLastByte();};WritercheckLastByte~mime/quotedprintable.Writermime/quotedprintable.encode~!mime/quotedprintable.isWhitespace 2(*mime/quotedprintable.Writer).insertSoftLineBreak��M.ptr.prototype.insertSoftLineBreak=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;   (b=a.line,c=a.i,((c<0||c>=b.length)?($throwRuntimeError("index out of range"),undefined):b[c]=61));  a.i=a.i+(1)>>0;  d=a.insertCRLF();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.insertSoftLineBreak};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.insertSoftLineBreak=function(){return this.$val.insertSoftLineBreak();};WriterinsertSoftLineBreak~mime/quotedprintable.Writer mime/quotedprintable.insertCRLF~ )(*mime/quotedprintable.Writer).insertCRLF�M.ptr.prototype.insertCRLF=function(){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  [(b=a.line,c=a.i,((c<0||c>=b.length)?($throwRuntimeError("index out of range"),undefined):b[c]=13));  o(d=a.line,e=a.i+1>>0,((e<0||e>=d.length)?($throwRuntimeError("index out of range"),undefined):d[e]=10));  �a.i=a.i+(2)>>0;  �f=a.flush();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return f;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.insertCRLF};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.insertCRLF=function(){return this.$val.insertCRLF();};WriterinsertCRLF~mime/quotedprintable.Writermime/quotedprintable.flush~ $(*mime/quotedprintable.Writer).flush��M.ptr.prototype.flush=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �c=a.w.Write($subslice(new P(a.line),0,a.i));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  �$s=-1;return d;    }  a.i=0;  $s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.flush};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.flush=function(){return this.$val.flush();};Writerflush~mime/quotedprintable.Pmime/quotedprintable.Writer !mime/quotedprintable.isWhitespaceO8O=function(a){var a;  Dreturn(a===32)||(a===9);    };isWhitespace!mime/quotedprintable.isWhitespace ��{"Base":6756,"Files":[{"Name":"/usr/local/Cellar/go/1.9.2/libexec/src/mime/quotedprintable/reader.go","Base":1,"Size":3527,"Lines":[0,55,109,159,160,240,253,277,278,287,296,305,312,318,320,321,362,383,403,435,484,486,487,552,590,607,633,636,638,639,676,686,714,736,764,791,823,851,878,881,950,952,953,1002,1019,1051,1054,1071,1113,1129,1132,1174,1190,1193,1217,1219,1220,1262,1274,1303,1317,1320,1334,1336,1337,1343,1372,1399,1425,1427,1428,1504,1557,1587,1660,1735,1784,1860,1936,1976,2041,2086,2104,2128,2150,2171,2176,2217,2218,2270,2310,2352,2375,2441,2485,2530,2566,2653,2726,2812,2818,2839,2854,2895,2908,2943,2949,2954,2966,2970,2987,2988,2999,3016,3052,3071,3139,3174,3187,3198,3204,3222,3227,3287,3331,3340,3367,3452,3456,3467,3479,3501,3507,3510,3525],"Infos":null},{"Name":"/usr/local/Cellar/go/1.9.2/libexec/src/mime/quotedprintable/writer.go","Base":3529,"Size":3226,"Lines":[0,55,109,159,160,184,185,197,198,220,221,294,315,393,424,437,438,454,464,479,490,492,493,545,583,605,607,608,680,757,822,876,899,910,948,989,1001,1066,1078,1082,1083,1096,1139,1157,1162,1171,1175,1176,1214,1231,1235,1241,1244,1245,1263,1279,1282,1283,1323,1339,1342,1343,1363,1365,1366,1440,1499,1532,1575,1588,1591,1592,1610,1612,1613,1689,1730,1753,1783,1854,1880,1897,1910,1915,1916,1934,1950,1955,1956,2001,2016,2021,2063,2078,2083,2095,2099,2100,2127,2178,2193,2198,2202,2203,2221,2229,2244,2247,2248,2260,2262,2263,2303,2330,2380,2394,2398,2401,2402,2421,2453,2487,2497,2498,2510,2512,2513,2549,2550,2625,2666,2681,2694,2697,2698,2718,2740,2748,2786,2800,2804,2807,2808,2820,2822,2823,2870,2889,2896,2897,2920,2922,2923,2961,2981,3003,3013,3014,3032,3034,3035,3068,3120,3133,3136,3137,3146,3158,3160,3161,3194,3224],"Infos":null}]}
 