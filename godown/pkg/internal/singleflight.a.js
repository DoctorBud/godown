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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �&���internal/singleflightsingleflightsync�version 4

 singleflight  	Group  mu  	Mutexsync
 	state  sema  Lock>m     Unlock>         call 
 wg  WaitGroup counter  ch   state1"    AddB 	delta    DoneB     WaitB     B      val     err &  dups   	chans  Result  Val    Err&  Shared       Do<g   key      & fn    v  &,   shared    DoChan<<   >      & @  D   Forget<<   >     doCall <<  @c   >      & @    DAA=$packages["sync"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B�rB=$pkg.call=$newType(0,$kindStruct,"singleflight.call",true,"internal/singleflight",false,function(wg_,val_,err_,dups_,chans_){this.$val=this;if(arguments.length===0){this.wg=new A.WaitGroup.ptr(0,$chanNil,F.zero(),0);this.val=$ifaceNil;this.err=$ifaceNil;this.dups=0;this.chans=H.nil;return;}this.wg=wg_;this.val=val_;this.err=err_;this.dups=dups_;this.chans=chans_;});��B.init("internal/singleflight",[{prop:"wg",name:"wg",anonymous:false,exported:false,typ:A.WaitGroup,tag:""},{prop:"val",name:"val",anonymous:false,exported:false,typ:$emptyInterface,tag:""},{prop:"err",name:"err",anonymous:false,exported:false,typ:$error,tag:""},{prop:"dups",name:"dups",anonymous:false,exported:false,typ:$Int,tag:""},{prop:"chans",name:"chans",anonymous:false,exported:false,typ:H,tag:""}]);callinternal/singleflight.Finternal/singleflight.Hinternal/singleflight.callsync.WaitGroup C��C=$pkg.Group=$newType(0,$kindStruct,"singleflight.Group",true,"internal/singleflight",true,function(mu_,m_){this.$val=this;if(arguments.length===0){this.mu=new A.Mutex.ptr(0,0);this.m=false;return;}this.mu=mu_;this.m=m_;});�ZK.methods=[{prop:"Do",name:"Do",pkg:"",typ:$funcType([$String,I],[$emptyInterface,$error,$Bool],false)},{prop:"DoChan",name:"DoChan",pkg:"",typ:$funcType([$String,I],[J],false)},{prop:"doCall",name:"doCall",pkg:"internal/singleflight",typ:$funcType([E,$String,I],[],false)},{prop:"Forget",name:"Forget",pkg:"",typ:$funcType([$String],[],false)}];��C.init("internal/singleflight",[{prop:"mu",name:"mu",anonymous:false,exported:false,typ:A.Mutex,tag:""},{prop:"m",name:"m",anonymous:false,exported:false,typ:L,tag:""}]);Groupinternal/singleflight.Einternal/singleflight.Groupinternal/singleflight.Iinternal/singleflight.Jinternal/singleflight.Kinternal/singleflight.Linternal/singleflight.Result
sync.Mutex D�D=$pkg.Result=$newType(0,$kindStruct,"singleflight.Result",true,"internal/singleflight",true,function(Val_,Err_,Shared_){this.$val=this;if(arguments.length===0){this.Val=$ifaceNil;this.Err=$ifaceNil;this.Shared=false;return;}this.Val=Val_;this.Err=Err_;this.Shared=Shared_;});��D.init("",[{prop:"Val",name:"Val",anonymous:false,exported:true,typ:$emptyInterface,tag:""},{prop:"Err",name:"Err",anonymous:false,exported:true,typ:$error,tag:""},{prop:"Shared",name:"Shared",anonymous:false,exported:true,typ:$Bool,tag:""}]);Resultinternal/singleflight.Result EE=$ptrType(B);Einternal/singleflight.call FF=$arrayType($Uint8,12);F GG=$chanType(D,true,false);Ginternal/singleflight.Result HH=$sliceType(G);Hinternal/singleflight.G I/I=$funcType([],[$emptyInterface,$error],false);I JJ=$chanType(D,false,true);Jinternal/singleflight.Result KK=$ptrType(C);Kinternal/singleflight.Group LL=$mapType($String,E);Linternal/singleflight.E !(*internal/singleflight.Group).Do��C.ptr.prototype.Do=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=$ifaceNil;d=$ifaceNil;e=false;f=this;  $r=f.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(f.m===false){  'f.m={};    }  Kg=(h=f.m[$String.keyFor(a)],h!==undefined?[h.v,true]:[E.nil,false]);i=g[0];j=g[1];  Hif(j){$s=2;continue;}$s=3;continue;    case 2:  ei.dups=i.dups+(1)>>0;  p$r=f.mu.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$r=i.wg.Wait();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    k=i.val;l=i.err;m=true;c=k;d=l;e=m;$s=-1;return[c,d,e];    case 3:  �n=new B.ptr(new A.WaitGroup.ptr(0,$chanNil,F.zero(),0),$ifaceNil,$ifaceNil,0,H.nil);  �n.wg.Add(1);  �o=a;(f.m||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(o)]={k:o,v:n};  �$r=f.mu.Unlock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$r=f.doCall(n,a,b);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    p=n.val;q=n.err;r=n.dups>0;c=p;d=q;e=r;$s=-1;return[c,d,e];    }return;}if($f===undefined){$f={$blk:C.ptr.prototype.Do};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};C.prototype.Do=function(a,b){return this.$val.Do(a,b);};Group	internal/singleflight.Einternal/singleflight.Finternal/singleflight.Ginternal/singleflight.Groupinternal/singleflight.Hinternal/singleflight.Resultinternal/singleflight.callinternal/singleflight.doCall~sync.WaitGroup %(*internal/singleflight.Group).DoChan�XC.ptr.prototype.DoChan=function(a,b){var a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  �d=new $Chan(D,1);  �$r=c.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(c.m===false){  c.m={};    }  4e=(f=c.m[$String.keyFor(a)],f!==undefined?[f.v,true]:[E.nil,false]);g=e[0];h=e[1];  1if(h){$s=2;continue;}$s=3;continue;    case 2:  Ng.dups=g.dups+(1)>>0;  Yg.chans=$append(g.chans,d);  y$r=c.mu.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$s=-1;return d;    case 3:  �i=new B.ptr(new A.WaitGroup.ptr(0,$chanNil,F.zero(),0),$ifaceNil,$ifaceNil,0,new H([d]));  �i.wg.Add(1);  �j=a;(c.m||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(j)]={k:j,v:i};  �$r=c.mu.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �$go($methodVal(c,"doCall"),[i,a,b]);  	$s=-1;return d;    }return;}if($f===undefined){$f={$blk:C.ptr.prototype.DoChan};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};C.prototype.DoChan=function(a,b){return this.$val.DoChan(a,b);};Groupinternal/singleflight.Einternal/singleflight.Finternal/singleflight.Groupinternal/singleflight.Hinternal/singleflight.Resultinternal/singleflight.callinternal/singleflight.doCall~sync.WaitGroup %(*internal/singleflight.Group).doCall��C.ptr.prototype.doCall=function(a,b,c){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;  	�f=c();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;a.val=e[0];a.err=e[1];  	�a.wg.Done();  	�$r=d.mu.Lock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  	�delete d.m[$String.keyFor(b)];  	�g=a.chans;h=0;case 3:if(!(h<g.$length)){$s=4;continue;}i=((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]);    $r=$send(i,$clone(new D.ptr(a.val,a.err,a.dups>0),D));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    h++;$s=3;continue;case 4:  
$r=d.mu.Unlock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:C.ptr.prototype.doCall};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};C.prototype.doCall=function(a,b,c){return this.$val.doCall(a,b,c);};GroupdoCall~internal/singleflight.Groupinternal/singleflight.Result %(*internal/singleflight.Group).Forget�mC.ptr.prototype.Forget=function(a){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  
�$r=b.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  delete b.m[$String.keyFor(a)];  $r=b.mu.Unlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:C.ptr.prototype.Forget};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};C.prototype.Forget=function(a){return this.$val.Forget(a);};Groupinternal/singleflight.Group ��{"Base":2859,"Files":[{"Name":"/usr/local/Cellar/go/1.9.2/libexec/src/internal/singleflight/singleflight.go","Base":1,"Size":2857,"Lines":[0,55,109,159,160,231,245,266,267,281,282,340,359,378,379,442,493,510,521,522,582,644,689,700,723,725,726,787,854,874,909,952,954,955,1012,1029,1050,1070,1084,1097,1099,1100,1169,1235,1304,1359,1437,1542,1555,1572,1603,1606,1634,1645,1661,1675,1703,1706,1722,1735,1749,1764,1765,1787,1820,1822,1823,1888,1920,2003,2031,2044,2061,2092,2095,2123,2134,2166,2182,2194,2197,2237,2250,2264,2279,2280,2305,2306,2317,2319,2320,2365,2443,2464,2477,2478,2491,2509,2539,2580,2583,2598,2600,2601,2671,2740,2772,2809,2822,2840,2855],"Infos":null}]}
 