// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE={REVISION:"65"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};THREE.extend=function(a,b){if(Object.keys)for(var c=Object.keys(b),d=0,e=c.length;d<e;d++){var f=c[d];Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(b,f))}else for(f in c={}.hasOwnProperty,b)c.call(b,f)&&(a[f]=b[f]);return a};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),g=self.setTimeout(function(){b(c+f)},f);a=c+f;return g});void 0===self.cancelAnimationFrame&&void 0!==
self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){void 0!==a&&this.set(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},b=0.5>=c?c*(1+b):c+b-c*b,c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){var a=a||{h:0,s:0,l:0},b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var i=e-f,f=0.5>=h?i/(e+f):i/(2-e-f);switch(e){case b:g=(c-d)/i+(c<d?6:0);break;case c:g=(d-b)/i+2;break;case d:g=(b-c)/i+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,_euler:void 0,_updateEuler:function(){void 0!==this._euler&&this._euler.setFromQuaternion(this,void 0,!1)},get x(){return this._x},set x(a){this._x=a;this._updateEuler()},get y(){return this._y},set y(a){this._y=a;this._updateEuler()},get z(){return this._z},set z(a){this._z=a;this._updateEuler()},get w(){return this._w},set w(a){this._w=a;this._updateEuler()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;
this._updateEuler();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._w=a._w;this._updateEuler();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*
e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h+f*g*e,this._w=c*d*e+f*g*h);!1!==b&&this._updateEuler();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this._updateEuler();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],i=b[6],b=b[10],k=c+f+b;0<k?(c=0.5/Math.sqrt(k+1),this._w=0.25/c,this._x=(i-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(i-g)/c,this._x=0.25*c,
this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=0.25*c,this._z=(g+i)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+i)/c,this._z=0.25*c);this._updateEuler();return this},inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._updateEuler();return this},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);return this},multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=
a._w,g=b._x,h=b._y,i=b._z,k=b._w;this._x=c*k+f*g+d*i-e*h;this._y=d*k+f*h+e*g-c*i;this._z=e*k+f*i+c*h-d*g;this._w=f*k-c*g-d*h-e*i;this._updateEuler();return this},multiplyVector3:function(a){console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=
-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),i=Math.sqrt(1-g*g);if(0.001>Math.abs(i))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/i;h=Math.sin(b*h)/i;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this._updateEuler();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},
fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this._updateEuler();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=
a.y;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);
return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/
b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements,e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);
this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z,a=a.w,h=a*b+f*d-g*c,i=a*c+g*b-e*d,k=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+i*-g-k*-f;this.y=i*a+b*-f+k*-e-h*-g;this.z=k*a+b*-g+h*-f-i*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*
b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<
a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=
a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(){console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")},
setEulerFromQuaternion:function(){console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")},getPositionFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code.");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code.");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),
a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};
THREE.extend(THREE.Vector3.prototype,{applyEuler:function(){var a=new THREE.Quaternion;return function(b){!1===b instanceof THREE.Euler&&console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a=new THREE.Quaternion;return function(b,c){this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),projectOnVector:function(){var a=new THREE.Vector3;
return function(b){a.copy(b).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b).multiplyScalar(2);return this.subVectors(a,this)}}()});THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,
this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],i=a[9];c=a[2];b=a[6];var k=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+h+k-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;k=(k+1)/2;d=(d+g)/4;f=(f+c)/4;i=(i+b)/4;e>h&&e>k?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>k?0.01>h?
(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(h),b=d/c,d=i/c):0.01>k?(c=b=0.707106781,d=0):(d=Math.sqrt(k),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+k-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=
a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&
a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,_quaternion:void 0,_updateQuaternion:function(){void 0!==this._quaternion&&this._quaternion.setFromEuler(this,!1)},get x(){return this._x},set x(a){this._x=a;this._updateQuaternion()},get y(){return this._y},set y(a){this._y=a;this._updateQuaternion()},get z(){return this._z},set z(a){this._z=a;this._updateQuaternion()},get order(){return this._order},set order(a){this._order=a;this._updateQuaternion()},
set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._updateQuaternion();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._updateQuaternion();return this},setFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],i=d[5],k=d[9],l=d[2],n=d[6],d=d[10],b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g)),0.99999>Math.abs(g)?(this._x=Math.atan2(-k,d),this._z=
Math.atan2(-f,e)):(this._x=Math.atan2(n,i),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(k)),0.99999>Math.abs(k)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,i)):(this._y=Math.atan2(-l,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(n)),0.99999>Math.abs(n)?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-f,i)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(l)),0.99999>Math.abs(l)?(this._x=Math.atan2(n,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,i))):"YZX"===b?(this._z=
Math.asin(c(h)),0.99999>Math.abs(h)?(this._x=Math.atan2(-k,i),this._y=Math.atan2(-l,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this._x=Math.atan2(n,i),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-k,d),this._y=0)):console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: "+b);this._order=b;this._updateQuaternion();return this},setFromQuaternion:function(a,b,c){function d(a){return Math.min(Math.max(a,-1),1)}var e=a.x*a.x,f=
a.y*a.y,g=a.z*a.z,h=a.w*a.w,b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w))),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z))),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z))),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===
b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z))),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w)))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y)))):console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: "+
b);this._order=b;!1!==c&&this._updateQuaternion();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._updateQuaternion();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},clone:function(){return new THREE.Euler(this._x,
this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);
this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);
return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},addPoint:function(a){a.x<this.min.x?this.min.x=a.x:a.x>this.max.x&&(this.max.x=a.x);a.y<this.min.y?this.min.y=a.y:a.y>this.max.y&&(this.max.y=a.y);a.z<this.min.z?this.min.z=a.z:a.z>this.max.z&&(this.max.z=a.z)},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var b=1,c=a.length;b<c;b++)this.addPoint(a[b])}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=
new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(a,b,c,d,e,f,g,h,i){this.elements=new Float32Array(9);this.set(void 0!==a?a:1,b||0,c||0,d||0,void 0!==e?e:1,f||0,g||0,h||0,void 0!==i?i:1)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,i){var k=this.elements;k[0]=a;k[3]=b;k[6]=c;k[1]=d;k[4]=e;k[7]=f;k[2]=g;k[5]=h;k[8]=i;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],a=a[8];return b*f*a-b*g*i-c*e*a+c*g*h+d*e*i-d*f*h},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],
a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m){var q=this.elements=new Float32Array(16);q[0]=void 0!==a?a:1;q[4]=b||0;q[8]=c||0;q[12]=d||0;q[1]=e||0;q[5]=void 0!==f?f:1;q[9]=g||0;q[13]=h||0;q[2]=i||0;q[6]=k||0;q[10]=void 0!==l?l:1;q[14]=n||0;q[3]=p||0;q[7]=t||0;q[11]=r||0;q[15]=void 0!==m?m:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=i;q[6]=k;q[10]=l;q[14]=n;q[3]=p;q[7]=t;q[11]=r;q[15]=m;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements,b=b.elements,d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===
a instanceof THREE.Euler&&console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){var a=f*h,i=f*e,k=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=i+k*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=k+i*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,i=g*e,k=d*h,l=d*e,b[0]=a+l*c,b[4]=k*c-i,b[8]=
f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=i*c-k,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,i=g*e,k=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=k+i*c,b[1]=i+k*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,i=f*e,k=c*h,l=c*e,b[0]=g*h,b[4]=k*d-i,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=i*d-k,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,i=f*d,k=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=k*e+i,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=i*e+k,b[10]=a-l*e):"XZY"===a.order&&(a=f*g,i=f*d,k=c*g,l=c*d,b[0]=
g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=i*e-k,b[2]=k*e-i,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,a=c*g,k=c*h,c=
c*i,l=d*h,d=d*i,e=e*i,g=f*g,h=f*h,f=f*i;b[0]=1-(l+e);b[4]=k-f;b[8]=c+h;b[1]=k+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;
g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],k=c[1],l=c[5],n=c[9],p=c[13],t=c[2],r=c[6],m=c[10],q=c[14],u=c[3],s=c[7],v=c[11],c=c[15],
z=d[0],G=d[4],N=d[8],C=d[12],B=d[1],x=d[5],F=d[9],L=d[13],w=d[2],E=d[6],y=d[10],D=d[14],H=d[3],K=d[7],A=d[11],d=d[15];e[0]=f*z+g*B+h*w+i*H;e[4]=f*G+g*x+h*E+i*K;e[8]=f*N+g*F+h*y+i*A;e[12]=f*C+g*L+h*D+i*d;e[1]=k*z+l*B+n*w+p*H;e[5]=k*G+l*x+n*E+p*K;e[9]=k*N+l*F+n*y+p*A;e[13]=k*C+l*L+n*D+p*d;e[2]=t*z+r*B+m*w+q*H;e[6]=t*G+r*x+m*E+q*K;e[10]=t*N+r*F+m*y+q*A;e[14]=t*C+r*L+m*D+q*d;e[3]=u*z+s*B+v*w+c*H;e[7]=u*G+s*x+v*E+c*K;e[11]=u*N+s*F+v*y+c*A;e[15]=u*C+s*L+v*D+c*d;return this},multiplyToArray:function(a,b,
c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyProjection(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],k=a[2],l=a[6],n=a[10],p=a[14];return a[3]*(+e*h*l-d*i*l-e*g*n+c*i*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*i*n+e*f*n-d*f*p+d*i*k-e*h*k)+a[11]*(+b*i*l-b*g*p-e*f*l+c*f*p+e*g*k-c*i*k)+a[15]*(-d*g*k-b*h*l+b*g*n+d*f*l-c*f*
n+c*h*k)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;
a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;
b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],i=d[1],k=d[5],l=d[9],n=d[13],p=d[2],t=d[6],r=d[10],m=d[14],q=d[3],u=d[7],s=d[11],d=d[15];c[0]=l*m*u-n*r*u+n*t*s-k*m*s-l*t*d+k*r*d;c[4]=h*r*u-g*m*u-h*t*s+f*m*s+g*t*d-f*r*d;c[8]=g*n*u-h*l*u+h*k*s-f*n*s-g*k*d+f*l*d;c[12]=h*l*t-g*n*t-h*k*r+f*n*r+g*k*m-f*l*m;c[1]=n*r*q-l*m*q-n*p*s+i*m*s+l*p*d-i*r*d;c[5]=g*m*q-h*r*q+h*p*s-e*m*s-g*p*d+e*r*d;c[9]=h*l*q-g*n*q-h*i*s+e*n*s+g*i*d-
e*l*d;c[13]=g*n*p-h*l*p+h*i*r-e*n*r-g*i*m+e*l*m;c[2]=k*m*q-n*t*q+n*p*u-i*m*u-k*p*d+i*t*d;c[6]=h*t*q-f*m*q-h*p*u+e*m*u+f*p*d-e*t*d;c[10]=f*n*q-h*k*q+h*i*u-e*n*u-f*i*d+e*k*d;c[14]=h*k*p-f*n*p-h*i*t+e*n*t+f*i*m-e*k*m;c[3]=l*t*q-k*r*q-l*p*u+i*r*u+k*p*s-i*t*s;c[7]=f*r*q-g*t*q+g*p*u-e*r*u-f*p*s+e*t*s;c[11]=g*k*q-f*l*q-g*i*u+e*l*u+f*i*s-e*k*s;c[15]=f*l*p-g*k*p+g*i*t-e*l*t-f*i*r+e*k*r;c=e*c[0]+i*c[4]+p*c[8]+q*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(){console.warn("DEPRECATED: Matrix4's .translate() has been removed.")},rotateX:function(){console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")},rotateY:function(){console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")},rotateZ:function(){console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")},rotateByAxis:function(){console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,k=e*g;this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,k*g+c,k*h-d*f,0,i*h-d*g,k*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);var c=1/g,f=1/h,k=1/i;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=k;b.elements[9]*=k;b.elements[10]*=k;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=i;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(THREE.Math.degToRad(0.5*
a)),e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,i=c-d,k=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/i;g[9]=0;g[13]=-((c+d)/i);g[2]=0;g[6]=0;g[10]=-2/k;g[14]=-((f+e)/k);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e),a=-this.direction.dot(f),b=h.dot(this.direction),i=-h.dot(f),k=h.lengthSq(),l=Math.abs(1-a*a),n,p;0<=l?(h=a*i-b,n=a*b-i,p=g*l,0<=h?n>=-p?n<=p?(g=1/l,h*=g,n*=g,a=h*(h+a*n+2*b)+n*(a*h+n+2*i)+k):(n=g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k):(n=-g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k):n<=-p?(h=Math.max(0,-(-a*g+b)),n=0<h?-g:Math.min(Math.max(-g,-i),g),a=-h*h+n*(n+2*i)+k):n<=p?(h=0,n=Math.min(Math.max(-g,-i),g),a=n*(n+2*i)+k):(h=Math.max(0,-(a*g+b)),n=0<h?g:Math.min(Math.max(-g,
-i),g),a=-h*h+n*(n+2*i)+k)):(n=0<a?-g:g,h=Math.max(0,-(a*n+b)),a=-h*h+n*(n+2*i)+k);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(n).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=
a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,i){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<
f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,i)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},
clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],i=c[6],k=c[7],l=c[8],n=c[9],p=c[10],t=c[11],r=c[12],m=c[13],q=c[14],c=c[15];b[0].setComponents(f-a,k-g,t-l,c-r).normalize();b[1].setComponents(f+
a,k+g,t+l,c+r).normalize();b[2].setComponents(f+d,k+h,t+n,c+m).normalize();b[3].setComponents(f-d,k-h,t-n,c-m).normalize();b[4].setComponents(f-e,k-i,t-p,c-q).normalize();b[5].setComponents(f+e,k+i,t+p,c+q).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){for(var b=this.planes,
c=a.center,a=-a.radius,d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=
this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start),a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Math={PI2:2*Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()};THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,i,k,l,n,p;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;k=this.points[c[0]];l=this.points[c[1]];n=this.points[c[2]];p=this.points[c[3]];h=g*g;i=g*h;d.x=b(k.x,l.x,n.x,p.x,g,h,i);d.y=b(k.y,l.y,n.y,p.y,g,h,i);d.z=b(k.z,l.z,n.z,p.z,g,h,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],i=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),i+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=i,e=b);h[h.length]=i;return{chunks:h,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],i=new THREE.Vector3,k=this.getLength();h.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=k.chunks[b]-k.chunks[b-1];g=Math.ceil(a*c/k.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+c*(1/g)*(f-e),d=this.getPoint(d),
h.push(i.copy(d).clone());h.push(i.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);var d=a.dot(a),e=a.dot(b),f=a.dot(c),i=b.dot(b),g=b.dot(c),k=d*i-e*e,h=h||new THREE.Vector3;if(0==k)return h.set(-2,-1,-1);k=1/k;i=(i*f-e*g)*k;d=(d*g-e*f)*k;return h.set(1-i-d,d,i)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(){var a=[];return function(b){if(void 0!==this._listeners){var c=this._listeners[b.type];if(void 0!==c){b.target=this;for(var d=c.length,e=0;e<d;e++)a[e]=c[e];for(e=0;e<d;e++)a[e].call(this,
b)}}}}()};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray;new a.Plane;new a.Vector3;var d=new a.Vector3,e=new a.Matrix4,f=function(a,b){return a.distance-b.distance},g=new a.Vector3,h=new a.Vector3,i=new a.Vector3,k=function(f,l,t){if(f instanceof a.Sprite){d.setFromMatrixPosition(f.matrixWorld);var r=l.ray.distanceToPoint(d);if(r>f.scale.x)return t;t.push({distance:r,point:f.position,face:null,object:f})}else if(f instanceof
a.LOD)d.setFromMatrixPosition(f.matrixWorld),r=l.ray.origin.distanceTo(d),k(f.getObjectForDistance(r),l,t);else if(f instanceof a.Mesh){var m=f.geometry;null===m.boundingSphere&&m.computeBoundingSphere();b.copy(m.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===l.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(l.ray).applyMatrix4(e);if(null!==m.boundingBox&&!1===c.isIntersectionBox(m.boundingBox))return t;if(m instanceof a.BufferGeometry){var q=f.material;if(void 0===
q||!1===m.dynamic)return t;var u,s,v=l.precision;if(void 0!==m.attributes.index)for(var z=m.offsets,G=m.attributes.index.array,N=m.attributes.position.array,C=m.offsets.length,B=m.attributes.index.array.length/3,B=0;B<C;++B)for(var r=z[B].start,x=z[B].index,m=r,F=r+z[B].count;m<F;m+=3)r=x+G[m],u=x+G[m+1],s=x+G[m+2],g.set(N[3*r],N[3*r+1],N[3*r+2]),h.set(N[3*u],N[3*u+1],N[3*u+2]),i.set(N[3*s],N[3*s+1],N[3*s+2]),u=q.side===a.BackSide?c.intersectTriangle(i,h,g,!0):c.intersectTriangle(g,h,i,q.side!==a.DoubleSide),
null!==u&&(u.applyMatrix4(f.matrixWorld),r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,point:u,face:null,faceIndex:null,object:f}));else{N=m.attributes.position.array;B=m.attributes.position.array.length;for(m=0;m<B;m+=3)r=m,u=m+1,s=m+2,g.set(N[3*r],N[3*r+1],N[3*r+2]),h.set(N[3*u],N[3*u+1],N[3*u+2]),i.set(N[3*s],N[3*s+1],N[3*s+2]),u=q.side===a.BackSide?c.intersectTriangle(i,h,g,!0):c.intersectTriangle(g,h,i,q.side!==a.DoubleSide),null!==u&&(u.applyMatrix4(f.matrixWorld),
r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,point:u,face:null,faceIndex:null,object:f}))}}else if(m instanceof a.Geometry){G=f.material instanceof a.MeshFaceMaterial;N=!0===G?f.material.materials:null;v=l.precision;z=m.vertices;C=0;for(B=m.faces.length;C<B;C++)if(x=m.faces[C],q=!0===G?N[x.materialIndex]:f.material,void 0!==q){r=z[x.a];u=z[x.b];s=z[x.c];if(!0===q.morphTargets){var F=m.morphTargets,L=f.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);i.set(0,0,0);for(var w=
0,E=F.length;w<E;w++){var y=L[w];if(0!==y){var D=F[w].vertices;g.x+=(D[x.a].x-r.x)*y;g.y+=(D[x.a].y-r.y)*y;g.z+=(D[x.a].z-r.z)*y;h.x+=(D[x.b].x-u.x)*y;h.y+=(D[x.b].y-u.y)*y;h.z+=(D[x.b].z-u.z)*y;i.x+=(D[x.c].x-s.x)*y;i.y+=(D[x.c].y-s.y)*y;i.z+=(D[x.c].z-s.z)*y}}g.add(r);h.add(u);i.add(s);r=g;u=h;s=i}u=q.side===a.BackSide?c.intersectTriangle(s,u,r,!0):c.intersectTriangle(r,u,s,q.side!==a.DoubleSide);null!==u&&(u.applyMatrix4(f.matrixWorld),r=l.ray.origin.distanceTo(u),r<v||(r<l.near||r>l.far)||t.push({distance:r,
point:u,face:x,faceIndex:C,object:f}))}}}else if(f instanceof a.Line){v=l.linePrecision;q=v*v;m=f.geometry;null===m.boundingSphere&&m.computeBoundingSphere();b.copy(m.boundingSphere);b.applyMatrix4(f.matrixWorld);if(!1===l.ray.isIntersectionSphere(b))return t;e.getInverse(f.matrixWorld);c.copy(l.ray).applyMatrix4(e);if(m instanceof a.Geometry){z=m.vertices;v=z.length;u=new a.Vector3;s=new a.Vector3;B=f.type===a.LineStrip?1:2;for(m=0;m<v-1;m+=B)c.distanceSqToSegment(z[m],z[m+1],s,u)>q||(r=c.origin.distanceTo(s),
r<l.near||r>l.far||t.push({distance:r,point:u.clone().applyMatrix4(f.matrixWorld),face:null,faceIndex:null,object:f}))}}},l=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)k(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.linePrecision=1;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b)};a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&l(a,this,c);k(a,this,c);c.sort(f);return c};a.Raycaster.prototype.intersectObjects=function(a,
b){for(var c=[],d=0,e=a.length;d<e;d++)k(a[d],this,c),!0===b&&l(a[d],this,c);c.sort(f);return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this._rotation=new THREE.Euler;this._quaternion=new THREE.Quaternion;this.scale=new THREE.Vector3(1,1,1);this._rotation._quaternion=this.quaternion;this._quaternion._euler=this.rotation;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;
this.visible=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};
THREE.Object3D.prototype={constructor:THREE.Object3D,get rotation(){return this._rotation},set rotation(a){this._rotation=a;this._rotation._quaternion=this._quaternion;this._quaternion._euler=this._rotation;this._rotation._updateQuaternion()},get quaternion(){return this._quaternion},set quaternion(a){this._quaternion=a;this._quaternion._euler=this._rotation;this._rotation._quaternion=this._quaternion;this._quaternion._updateEuler()},get eulerOrder(){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
return this.rotation.order},set eulerOrder(a){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);
this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=
new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b);a.applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=
this.children.indexOf(a);if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,
b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.compose(this.position,
this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);
a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));
if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Projector=function(){function a(){if(i===l){var a=new THREE.RenderableVertex;k.push(a);l++;i++;return a}return k[i++]}function b(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function c(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var d,e,f=[],g=
0,h,i,k=[],l=0,n,p,t=[],r=0,m,q,u=[],s=0,v,z,G=[],N=0,C={objects:[],sprites:[],lights:[],elements:[]},B=new THREE.Vector3,x=new THREE.Vector3,F=new THREE.Vector3,L=new THREE.Vector3,w=new THREE.Vector4,E=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),y=new THREE.Box3,D=Array(3),H=new THREE.Matrix4,K=new THREE.Matrix4,A,da=new THREE.Matrix4,ha=new THREE.Matrix3,ua=new THREE.Matrix3,O=new THREE.Vector3,T=new THREE.Frustum,ea=new THREE.Vector4,I=new THREE.Vector4;this.projectVector=
function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);K.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(K)};var P=new THREE.Matrix4;this.unprojectVector=function(a,b){P.getInverse(b.projectionMatrix);K.multiplyMatrices(b.matrixWorld,P);return a.applyProjection(K)};this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var Q=function(a){if(e===
g){var b=new THREE.RenderableObject;f.push(b);g++;e++;d=b}else d=f[e++];d.id=a.id;d.object=a;null!==a.renderDepth?d.z=a.renderDepth:(L.setFromMatrixPosition(a.matrixWorld),L.applyProjection(K),d.z=L.z);return d},oa=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(A);c.copy(b).applyMatrix4(K);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},va=function(a){if(!1!==a.visible){a instanceof THREE.Light?C.lights.push(a):a instanceof
THREE.Mesh||a instanceof THREE.Line?(!1===a.frustumCulled||!0===T.intersectsObject(a))&&C.objects.push(Q(a)):a instanceof THREE.Sprite&&C.sprites.push(Q(a));for(var b=0,c=a.children.length;b<c;b++)va(a.children[b])}};this.projectScene=function(d,f,g,l){var P=!1,L,Q,ba,W,Ka,U,ca,wa,Ua;z=q=p=0;C.elements.length=0;!0===d.autoUpdate&&d.updateMatrixWorld();void 0===f.parent&&f.updateMatrixWorld();H.copy(f.matrixWorldInverse.getInverse(f.matrixWorld));K.multiplyMatrices(f.projectionMatrix,H);ua.getNormalMatrix(H);
T.setFromMatrix(K);e=0;C.objects.length=0;C.sprites.length=0;C.lights.length=0;va(d);!0===g&&C.objects.sort(b);for(var g=0,Oa=C.objects.length;g<Oa;g++)if(d=C.objects[g].object,A=d.matrixWorld,i=0,d instanceof THREE.Mesh){L=d.geometry;Q=L.vertices;ba=L.faces;Ka=L.faceVertexUvs;ha.getNormalMatrix(A);wa=d.material instanceof THREE.MeshFaceMaterial;Ua=!0===wa?d.material:null;for(var la=0,ia=Q.length;la<ia;la++)h=a(),h.position.copy(Q[la]),oa(h);la=0;for(ia=ba.length;la<ia;la++){Q=ba[la];var Fa=!0===
wa?Ua.materials[Q.materialIndex]:d.material;if(void 0!==Fa){var Ga=Fa.side;W=k[Q.a];U=k[Q.b];ca=k[Q.c];if(!0===Fa.morphTargets){var P=L.morphTargets,Ba=d.morphTargetInfluences,xa=W.position,Va=U.position,La=ca.position;B.set(0,0,0);x.set(0,0,0);F.set(0,0,0);for(var Ma=0,ya=P.length;Ma<ya;Ma++){var V=Ba[Ma];if(0!==V){var pa=P[Ma].vertices;B.x+=(pa[Q.a].x-xa.x)*V;B.y+=(pa[Q.a].y-xa.y)*V;B.z+=(pa[Q.a].z-xa.z)*V;x.x+=(pa[Q.b].x-Va.x)*V;x.y+=(pa[Q.b].y-Va.y)*V;x.z+=(pa[Q.b].z-Va.z)*V;F.x+=(pa[Q.c].x-La.x)*
V;F.y+=(pa[Q.c].y-La.y)*V;F.z+=(pa[Q.c].z-La.z)*V}}W.position.add(B);U.position.add(x);ca.position.add(F);oa(W);oa(U);oa(ca)}D[0]=W.positionScreen;D[1]=U.positionScreen;D[2]=ca.positionScreen;if(!0===W.visible||!0===U.visible||!0===ca.visible||E.isIntersectionBox(y.setFromPoints(D)))if(P=0>(ca.positionScreen.x-W.positionScreen.x)*(U.positionScreen.y-W.positionScreen.y)-(ca.positionScreen.y-W.positionScreen.y)*(U.positionScreen.x-W.positionScreen.x),Ga===THREE.DoubleSide||P===(Ga===THREE.FrontSide)){p===
r?(Ba=new THREE.RenderableFace3,t.push(Ba),r++,p++,n=Ba):n=t[p++];n.id=d.id;n.v1.copy(W);n.v2.copy(U);n.v3.copy(ca);n.normalModel.copy(Q.normal);!1===P&&(Ga===THREE.BackSide||Ga===THREE.DoubleSide)&&n.normalModel.negate();n.normalModel.applyMatrix3(ha).normalize();n.normalModelView.copy(n.normalModel).applyMatrix3(ua);n.centroidModel.copy(Q.centroid).applyMatrix4(A);W=Q.vertexNormals;U=0;for(ca=Math.min(W.length,3);U<ca;U++)Ba=n.vertexNormalsModel[U],Ba.copy(W[U]),!1===P&&(Ga===THREE.BackSide||Ga===
THREE.DoubleSide)&&Ba.negate(),Ba.applyMatrix3(ha).normalize(),n.vertexNormalsModelView[U].copy(Ba).applyMatrix3(ua);n.vertexNormalsLength=W.length;U=0;for(Ga=Math.min(Ka.length,3);U<Ga;U++)if(W=Ka[U][la],void 0!==W){ca=0;for(P=W.length;ca<P;ca++)n.uvs[U][ca]=W[ca]}n.color=Q.color;n.material=Fa;O.copy(n.centroidModel).applyProjection(K);n.z=O.z;C.elements.push(n)}}}}else if(d instanceof THREE.Line){da.multiplyMatrices(K,A);Q=d.geometry.vertices;W=a();W.positionScreen.copy(Q[0]).applyMatrix4(da);L=
d.type===THREE.LinePieces?2:1;la=1;for(ia=Q.length;la<ia;la++)W=a(),W.positionScreen.copy(Q[la]).applyMatrix4(da),0<(la+1)%L||(U=k[i-2],ea.copy(W.positionScreen),I.copy(U.positionScreen),!0===c(ea,I)&&(ea.multiplyScalar(1/ea.w),I.multiplyScalar(1/I.w),q===s?(ba=new THREE.RenderableLine,u.push(ba),s++,q++,m=ba):m=u[q++],m.id=d.id,m.v1.positionScreen.copy(ea),m.v2.positionScreen.copy(I),m.z=Math.max(ea.z,I.z),m.material=d.material,d.material.vertexColors===THREE.VertexColors&&(m.vertexColors[0].copy(d.geometry.colors[la]),
m.vertexColors[1].copy(d.geometry.colors[la-1])),C.elements.push(m)))}g=0;for(Oa=C.sprites.length;g<Oa;g++)d=C.sprites[g].object,A=d.matrixWorld,w.set(A.elements[12],A.elements[13],A.elements[14],1),w.applyMatrix4(K),L=1/w.w,w.z*=L,-1<=w.z&&1>=w.z&&(z===N?(ba=new THREE.RenderableSprite,G.push(ba),N++,z++,v=ba):v=G[z++],v.id=d.id,v.x=w.x*L,v.y=w.y*L,v.z=w.z,v.object=d,v.rotation=d.rotation,v.scale.x=d.scale.x*Math.abs(v.x-(w.x+f.projectionMatrix.elements[0])/(w.w+f.projectionMatrix.elements[12])),
v.scale.y=d.scale.y*Math.abs(v.y-(w.y+f.projectionMatrix.elements[5])/(w.w+f.projectionMatrix.elements[13])),v.material=d.material,C.elements.push(v));!0===l&&C.elements.sort(b);return C}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,g=e.vertexNormals.length;f<g;f++)e.vertexNormals[f].applyMatrix3(b).normalize();e.centroid.applyMatrix4(a)}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof
THREE.Sphere&&this.computeBoundingSphere()},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,0,0),c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.divideScalar(3)},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,
g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,i=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),i.subVectors(e,f),h.cross(i),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else{a=
0;for(b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal)}b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;
var g=this.morphNormals[a].vertexNormals,h,i;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,i={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(i)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],i=g.vertexNormals[c],h.copy(e.normal),i.a.copy(e.vertexNormals[0]),i.b.copy(e.vertexNormals[1]),i.c.copy(e.vertexNormals[2])}c=0;for(d=
this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m,q,u=[],s=[];c=new THREE.Vector3;var v=new THREE.Vector3,z=new THREE.Vector3,G=new THREE.Vector3,N=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)u[a]=new THREE.Vector3,s[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,q=e.b,e=e.c,g=this.vertices[d],h=this.vertices[q],
i=this.vertices[e],k=f[0],l=f[1],n=f[2],f=h.x-g.x,p=i.x-g.x,t=h.y-g.y,r=i.y-g.y,h=h.z-g.z,g=i.z-g.z,i=l.x-k.x,m=n.x-k.x,l=l.y-k.y,k=n.y-k.y,n=1/(i*k-m*l),c.set((k*f-l*p)*n,(k*t-l*r)*n,(k*h-l*g)*n),v.set((i*p-m*f)*n,(i*r-m*t)*n,(i*g-m*h)*n),u[d].add(c),u[q].add(c),u[e].add(c),s[d].add(v),s[q].add(v),s[e].add(v);v=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++){e=this.faces[a];for(c=0;c<Math.min(e.vertexNormals.length,3);c++)N.copy(e.vertexNormals[c]),d=e[v[c]],q=u[d],z.copy(q),z.sub(N.multiplyScalar(N.dot(q))).normalize(),
G.crossVectors(e.vertexNormals[c],q),d=G.dot(s[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(z.x,z.y,z.z,d)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++){e=this.faces[f];e.a=c[e.a];e.b=c[e.b];e.c=c[e.c];e=[e.a,e.b,e.c];for(d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}}for(f=a.length-1;0<=f;f--){e=
a[f];this.faces.splice(e,1);c=0;for(g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1)}f=this.vertices.length-b.length;this.vertices=b;return f},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},
dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.dynamic=!0;this.offsets=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c,d){this.attributes[a]={itemSize:d,array:new b(c*d)}},applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox,c,d,e;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var f=3,g=a.length;f<g;f+=3)c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z?b.min.z=e:e>b.max.z&&(b.max.z=e)}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){var a=
new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.addPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g)}}}(),computeVertexNormals:function(){if(this.attributes.position){var a,
b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0}var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,i,k,l,n,p=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,m=new THREE.Vector3,q=new THREE.Vector3;if(this.attributes.index){var u=this.attributes.index.array,s=this.offsets;c=0;for(d=
s.length;c<d;++c){b=s[c].start;g=s[c].count;var v=s[c].index;a=b;for(b+=g;a<b;a+=3)g=v+u[a],h=v+u[a+1],i=v+u[a+2],k=e[3*g],l=e[3*g+1],n=e[3*g+2],p.set(k,l,n),k=e[3*h],l=e[3*h+1],n=e[3*h+2],t.set(k,l,n),k=e[3*i],l=e[3*i+1],n=e[3*i+2],r.set(k,l,n),m.subVectors(r,t),q.subVectors(p,t),m.cross(q),f[3*g]+=m.x,f[3*g+1]+=m.y,f[3*g+2]+=m.z,f[3*h]+=m.x,f[3*h+1]+=m.y,f[3*h+2]+=m.z,f[3*i]+=m.x,f[3*i+1]+=m.y,f[3*i+2]+=m.z}}else{a=0;for(b=e.length;a<b;a+=9)k=e[a],l=e[a+1],n=e[a+2],p.set(k,l,n),k=e[a+3],l=e[a+4],
n=e[a+5],t.set(k,l,n),k=e[a+6],l=e[a+7],n=e[a+8],r.set(k,l,n),m.subVectors(r,t),q.subVectors(p,t),m.cross(q),f[a]=m.x,f[a+1]=m.y,f[a+2]=m.z,f[a+3]=m.x,f[a+4]=m.y,f[a+5]=m.z,f[a+6]=m.x,f[a+7]=m.y,f[a+8]=m.z}this.normalizeNormals();this.normalsNeedUpdate=!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){ha.x=d[3*a];ha.y=d[3*a+1];
ha.z=d[3*a+2];ua.copy(ha);T=h[a];A.copy(T);A.sub(ha.multiplyScalar(ha.dot(T))).normalize();da.crossVectors(ua,T);ea=da.dot(i[a]);O=0>ea?-1:1;g[4*a]=A.x;g[4*a+1]=A.y;g[4*a+2]=A.z;g[4*a+3]=O}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,
d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent={itemSize:4,array:new Float32Array(4*f)});for(var g=this.attributes.tangent.array,h=[],i=[],k=0;k<f;k++)h[k]=new THREE.Vector3,i[k]=new THREE.Vector3;var l,n,p,t,r,m,q,u,s,v,z,G,N,C,B,f=new THREE.Vector3,k=new THREE.Vector3,x,F,L,w,E,y,D,H=this.offsets;L=0;for(w=H.length;L<w;++L){F=H[L].start;E=H[L].count;var K=H[L].index;x=F;for(F+=E;x<F;x+=3)E=K+b[x],y=K+b[x+1],D=K+b[x+
2],l=c[3*E],n=c[3*E+1],p=c[3*E+2],t=c[3*y],r=c[3*y+1],m=c[3*y+2],q=c[3*D],u=c[3*D+1],s=c[3*D+2],v=e[2*E],z=e[2*E+1],G=e[2*y],N=e[2*y+1],C=e[2*D],B=e[2*D+1],t-=l,l=q-l,r-=n,n=u-n,m-=p,p=s-p,G-=v,v=C-v,N-=z,z=B-z,B=1/(G*z-v*N),f.set((z*t-N*l)*B,(z*r-N*n)*B,(z*m-N*p)*B),k.set((G*l-v*t)*B,(G*n-v*r)*B,(G*p-v*m)*B),h[E].add(f),h[y].add(f),h[D].add(f),i[E].add(k),i[y].add(k),i[D].add(k)}var A=new THREE.Vector3,da=new THREE.Vector3,ha=new THREE.Vector3,ua=new THREE.Vector3,O,T,ea;L=0;for(w=H.length;L<w;++L){F=
H[L].start;E=H[L].count;K=H[L].index;x=F;for(F+=E;x<F;x+=3)E=K+b[x],y=K+b[x+1],D=K+b[x+2],a(E),a(y),a(D)}this.tangentsNeedUpdate=this.hasTangents=!0}},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,numItems:d.numItems,array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);
break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();
THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==a}function d(a){a=
Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,h,i,k,q){var u=/\.dds$/i.test(f),s=b+"/"+f;if(u){var v=THREE.ImageUtils.loadCompressedTexture(s);a[e]=v}else v=document.createElement("canvas"),a[e]=new THREE.Texture(v);a[e].sourceFile=f;h&&(a[e].repeat.set(h[0],h[1]),1!==h[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==h[1]&&(a[e].wrapT=THREE.RepeatWrapping));i&&a[e].offset.set(i[0],i[1]);k&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==f[k[0]]&&(a[e].wrapS=
f[k[0]]),void 0!==f[k[1]]&&(a[e].wrapT=f[k[1]]));q&&(a[e].anisotropy=q);if(!u){var z=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);z.image.width=a;z.image.height=b;z.image.getContext("2d").drawImage(this,0,0,a,b)}else z.image=this;z.needsUpdate=!0};void 0!==g.crossOrigin&&(a.crossOrigin=g.crossOrigin);a.src=s}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var g=this,h="MeshLambertMaterial",i={color:15658734,opacity:1,map:null,
lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?h="MeshPhongMaterial":"basic"===k&&(h="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(h=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(h.uniforms),k.tNormal.value=i.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(k.tDiffuse.value=i.map,k.enableDiffuse.value=!0),i.specularMap&&(k.tSpecular.value=i.specularMap,k.enableSpecular.value=!0),i.lightMap&&(k.tAO.value=i.lightMap,k.enableAO.value=!0),k.diffuse.value.setHex(i.color),
k.specular.value.setHex(i.specular),k.ambient.value.setHex(i.ambient),k.shininess.value=i.shininess,void 0!==i.opacity&&(k.opacity.value=i.opacity),h=new THREE.ShaderMaterial({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:k,lights:!0,fog:!0}),i.transparent&&(h.transparent=!0)):h=new THREE[h](i);void 0!==a.DbgName&&(h.name=a.DbgName);return h}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=new XMLHttpRequest;void 0!==b&&f.addEventListener("load",function(c){b(c.target.responseText);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.open("GET",a,!0);f.send(null);e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=document.createElement("img");void 0!==b&&f.addEventListener("load",function(){e.manager.itemEnd(a);b(this)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.src=a;e.manager.itemStart(a);return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText),h=a.parse(h,d);c(h.geometry,h.materials)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===f.LOADING?e&&(0===g&&
(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1,e,f,g,h,i,k,l,n,p,t,r,m,q,u,s=a.faces;p=a.vertices;var v=a.normals,z=a.colors,G=0;if(void 0!==a.uvs){for(e=0;e<a.uvs.length;e++)a.uvs[e].length&&G++;for(e=0;e<G;e++)c.faceVertexUvs[e]=[]}h=0;for(i=p.length;h<i;)k=new THREE.Vector3,k.x=p[h++]*d,k.y=p[h++]*d,k.z=p[h++]*d,c.vertices.push(k);h=0;for(i=s.length;h<i;)if(p=s[h++],t=p&1,g=p&2,e=p&8,l=p&16,r=p&32,k=p&64,p&=128,t){t=new THREE.Face3;t.a=s[h];
t.b=s[h+1];t.c=s[h+3];m=new THREE.Face3;m.a=s[h+1];m.b=s[h+2];m.c=s[h+3];h+=4;g&&(g=s[h++],t.materialIndex=g,m.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<G;e++){q=a.uvs[e];c.faceVertexUvs[e][g]=[];c.faceVertexUvs[e][g+1]=[];for(f=0;4>f;f++)n=s[h++],u=q[2*n],n=q[2*n+1],u=new THREE.Vector2(u,n),2!==f&&c.faceVertexUvs[e][g].push(u),0!==f&&c.faceVertexUvs[e][g+1].push(u)}l&&(l=3*s[h++],t.normal.set(v[l++],v[l++],v[l]),m.normal.copy(t.normal));if(r)for(e=0;4>e;e++)l=3*s[h++],r=new THREE.Vector3(v[l++],
v[l++],v[l]),2!==e&&t.vertexNormals.push(r),0!==e&&m.vertexNormals.push(r);k&&(k=s[h++],k=z[k],t.color.setHex(k),m.color.setHex(k));if(p)for(e=0;4>e;e++)k=s[h++],k=z[k],2!==e&&t.vertexColors.push(new THREE.Color(k)),0!==e&&m.vertexColors.push(new THREE.Color(k));c.faces.push(t);c.faces.push(m)}else{t=new THREE.Face3;t.a=s[h++];t.b=s[h++];t.c=s[h++];g&&(g=s[h++],t.materialIndex=g);g=c.faces.length;if(e)for(e=0;e<G;e++){q=a.uvs[e];c.faceVertexUvs[e][g]=[];for(f=0;3>f;f++)n=s[h++],u=q[2*n],n=q[2*n+1],
u=new THREE.Vector2(u,n),c.faceVertexUvs[e][g].push(u)}l&&(l=3*s[h++],t.normal.set(v[l++],v[l++],v[l]));if(r)for(e=0;3>e;e++)l=3*s[h++],r=new THREE.Vector3(v[l++],v[l++],v[l]),t.vertexNormals.push(r);k&&(k=s[h++],t.color.setHex(z[k]));if(p)for(e=0;3>e;e++)k=s[h++],t.vertexColors.push(new THREE.Color(z[k]));c.faces.push(t)}if(a.skinWeights){h=0;for(i=a.skinWeights.length;h<i;h+=2)s=a.skinWeights[h],v=a.skinWeights[h+1],c.skinWeights.push(new THREE.Vector4(s,v,0,0))}if(a.skinIndices){h=0;for(i=a.skinIndices.length;h<
i;h+=2)s=a.skinIndices[h],v=a.skinIndices[h+1],c.skinIndices.push(new THREE.Vector4(s,v,0,0))}c.bones=a.bones;c.animation=a.animation;c.animations=a.animations;if(void 0!==a.morphTargets){h=0;for(i=a.morphTargets.length;h<i;h++){c.morphTargets[h]={};c.morphTargets[h].name=a.morphTargets[h].name;c.morphTargets[h].vertices=[];z=c.morphTargets[h].vertices;G=a.morphTargets[h].vertices;s=0;for(v=G.length;s<v;s+=3)p=new THREE.Vector3,p.x=G[s]*d,p.y=G[s+1]*d,p.z=G[s+2]*d,z.push(p)}}if(void 0!==a.morphColors){h=
0;for(i=a.morphColors.length;h<i;h++){c.morphColors[h]={};c.morphColors[h].name=a.morphColors[h].name;c.morphColors[h].colors=[];v=c.morphColors[h].colors;z=a.morphColors[h].colors;d=0;for(s=z.length;d<s;d+=3)G=new THREE.Color(16755200),G.setRGB(z[d],z[d+1],z[d+2]),v.push(G)}}c.computeCentroids();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d=a.offsets,a=a.boundingSphere,e;for(e in c){var f=c[e];b.attributes[e]={itemSize:f.itemSize,array:new self[f.type](f.array)}}void 0!==d&&(b.offsets=JSON.parse(JSON.stringify(d)));
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.GeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.GeometryLoader.prototype={constructor:THREE.GeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(){}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CubeGeometry":g=new THREE.CubeGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":g=
new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=d.parse(h.data);break;case "Geometry":g=
c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,
b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,
b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),
a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlers={};this.hierarchyHandlers={};this.addGeometryHandler("ascii",THREE.JSONLoader)};
THREE.SceneLoader.prototype={constructor:THREE.SceneLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(d){c.parse(JSON.parse(d),b,a)})},setCrossOrigin:function(a){this.crossOrigin=a},addGeometryHandler:function(a,b){this.geometryHandlers[a]={loaderClass:b}},addHierarchyHandler:function(a,b){this.hierarchyHandlers[a]={loaderClass:b}},parse:function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:p+"/"+a}function e(){f(C.scene,
x.objects)}function f(a,b){var c,e,g,i,k,l;for(l in b){var p=C.objects[l],q=b[l];if(void 0===p){if(q.type&&q.type in n.hierarchyHandlers){if(void 0===q.loading){c={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,userData:1,skin:1,morph:1,mirroredLoop:1,duration:1};var u={},v;for(v in q)v in c||(u[v]=q[v]);r=C.materials[q.material];q.loading=!0;c=n.hierarchyHandlers[q.type].loaderObject;c.options?c.load(d(q.url,x.urlBaseType),h(l,a,r,q)):c.load(d(q.url,x.urlBaseType),h(l,
a,r,q),u)}}else if(void 0!==q.geometry){if(t=C.geometries[q.geometry]){p=!1;r=C.materials[q.material];p=r instanceof THREE.ShaderMaterial;e=q.position;g=q.rotation;i=q.scale;c=q.matrix;k=q.quaternion;q.material||(r=new THREE.MeshFaceMaterial(C.face_materials[q.geometry]));r instanceof THREE.MeshFaceMaterial&&0===r.materials.length&&(r=new THREE.MeshFaceMaterial(C.face_materials[q.geometry]));if(r instanceof THREE.MeshFaceMaterial)for(u=0;u<r.materials.length;u++)p=p||r.materials[u]instanceof THREE.ShaderMaterial;
p&&t.computeTangents();q.skin?p=new THREE.SkinnedMesh(t,r):q.morph?(p=new THREE.MorphAnimMesh(t,r),void 0!==q.duration&&(p.duration=q.duration),void 0!==q.time&&(p.time=q.time),void 0!==q.mirroredLoop&&(p.mirroredLoop=q.mirroredLoop),r.morphNormals&&t.computeMorphNormals()):p=new THREE.Mesh(t,r);p.name=l;c?(p.matrixAutoUpdate=!1,p.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(g),
p.scale.fromArray(i));p.visible=q.visible;p.castShadow=q.castShadow;p.receiveShadow=q.receiveShadow;a.add(p);C.objects[l]=p}}else if("AmbientLight"===q.type||"PointLight"===q.type||"DirectionalLight"===q.type||"SpotLight"===q.type||"HemisphereLight"===q.type||"AreaLight"===q.type){u=q.color;c=q.intensity;e=q.distance;g=q.position;i=q.rotation;switch(q.type){case "AmbientLight":s=new THREE.AmbientLight(u);break;case "PointLight":s=new THREE.PointLight(u,c,e);s.position.fromArray(g);break;case "DirectionalLight":s=
new THREE.DirectionalLight(u,c);s.position.fromArray(q.direction);break;case "SpotLight":s=new THREE.SpotLight(u,c,e,1);s.angle=q.angle;s.position.fromArray(g);s.target.set(g[0],g[1]-e,g[2]);s.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "HemisphereLight":s=new THREE.DirectionalLight(u,c,e);s.target.set(g[0],g[1]-e,g[2]);s.target.applyEuler(new THREE.Euler(i[0],i[1],i[2],"XYZ"));break;case "AreaLight":s=new THREE.AreaLight(u,c),s.position.fromArray(g),s.width=q.size,s.height=
q.size_y}a.add(s);s.name=l;C.lights[l]=s;C.objects[l]=s}else"PerspectiveCamera"===q.type||"OrthographicCamera"===q.type?(e=q.position,g=q.rotation,k=q.quaternion,"PerspectiveCamera"===q.type?m=new THREE.PerspectiveCamera(q.fov,q.aspect,q.near,q.far):"OrthographicCamera"===q.type&&(m=new THREE.OrthographicCamera(q.left,q.right,q.top,q.bottom,q.near,q.far)),m.name=l,m.position.fromArray(e),void 0!==k?m.quaternion.fromArray(k):void 0!==g&&m.rotation.fromArray(g),a.add(m),C.cameras[l]=m,C.objects[l]=
m):(e=q.position,g=q.rotation,i=q.scale,k=q.quaternion,p=new THREE.Object3D,p.name=l,p.position.fromArray(e),k?p.quaternion.fromArray(k):p.rotation.fromArray(g),p.scale.fromArray(i),p.visible=void 0!==q.visible?q.visible:!1,a.add(p),C.objects[l]=p,C.empties[l]=p);if(p){if(void 0!==q.userData)for(var z in q.userData)p.userData[z]=q.userData[z];if(void 0!==q.groups)for(u=0;u<q.groups.length;u++)c=q.groups[u],void 0===C.groups[c]&&(C.groups[c]=[]),C.groups[c].push(l)}}void 0!==p&&void 0!==q.children&&
f(p,q.children)}}function g(a){return function(b,c){b.name=a;C.geometries[a]=b;C.face_materials[a]=c;e();v-=1;n.onLoadComplete();k()}}function h(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,g=d.rotation,h=d.quaternion,i=d.scale;f.position.fromArray(d.position);h?f.quaternion.fromArray(h):f.rotation.fromArray(g);f.scale.fromArray(i);c&&f.traverse(function(a){a.material=c});var l=void 0!==d.visible?d.visible:!0;f.traverse(function(a){a.visible=l});b.add(f);f.name=a;C.objects[a]=
f;e();v-=1;n.onLoadComplete();k()}}function i(a){return function(b,c){b.name=a;C.geometries[a]=b;C.face_materials[a]=c}}function k(){n.callbackProgress({totalModels:G,totalTextures:N,loadedModels:G-v,loadedTextures:N-z},C);n.onLoadProgress();if(0===v&&0===z){for(var a=0;a<B.length;a++){var c=B[a],d=C.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,C.scene.add(c.object.target));c.object.target.userData.targetInverse=c.object}b(C)}}function l(a,b){b(a);if(void 0!==a.children)for(var c in a.children)l(a.children[c],
b)}var n=this,p=THREE.Loader.prototype.extractUrlBase(c),t,r,m,q,u,s,v,z,G,N,C,B=[],x=a,F;for(F in this.geometryHandlers)a=this.geometryHandlers[F].loaderClass,this.geometryHandlers[F].loaderObject=new a;for(F in this.hierarchyHandlers)a=this.hierarchyHandlers[F].loaderClass,this.hierarchyHandlers[F].loaderObject=new a;z=v=0;C={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{},empties:{},groups:{}};if(x.transform&&(F=x.transform.position,
a=x.transform.rotation,c=x.transform.scale,F&&C.scene.position.fromArray(F),a&&C.scene.rotation.fromArray(a),c&&C.scene.scale.fromArray(c),F||a||c))C.scene.updateMatrix(),C.scene.updateMatrixWorld();F=function(a){return function(){z-=a;k();n.onLoadComplete()}};for(var L in x.fogs)a=x.fogs[L],"linear"===a.type?q=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(q=new THREE.FogExp2(0,a.density)),a=a.color,q.color.setRGB(a[0],a[1],a[2]),C.fogs[L]=q;for(var w in x.geometries)q=x.geometries[w],q.type in
this.geometryHandlers&&(v+=1,n.onLoadStart());for(var E in x.objects)l(x.objects[E],function(a){a.type&&a.type in n.hierarchyHandlers&&(v+=1,n.onLoadStart())});G=v;for(w in x.geometries)if(q=x.geometries[w],"cube"===q.type)t=new THREE.CubeGeometry(q.width,q.height,q.depth,q.widthSegments,q.heightSegments,q.depthSegments),t.name=w,C.geometries[w]=t;else if("plane"===q.type)t=new THREE.PlaneGeometry(q.width,q.height,q.widthSegments,q.heightSegments),t.name=w,C.geometries[w]=t;else if("sphere"===q.type)t=
new THREE.SphereGeometry(q.radius,q.widthSegments,q.heightSegments),t.name=w,C.geometries[w]=t;else if("cylinder"===q.type)t=new THREE.CylinderGeometry(q.topRad,q.botRad,q.height,q.radSegs,q.heightSegs),t.name=w,C.geometries[w]=t;else if("torus"===q.type)t=new THREE.TorusGeometry(q.radius,q.tube,q.segmentsR,q.segmentsT),t.name=w,C.geometries[w]=t;else if("icosahedron"===q.type)t=new THREE.IcosahedronGeometry(q.radius,q.subdivisions),t.name=w,C.geometries[w]=t;else if(q.type in this.geometryHandlers){E=
{};for(u in q)"type"!==u&&"url"!==u&&(E[u]=q[u]);this.geometryHandlers[q.type].loaderObject.load(d(q.url,x.urlBaseType),g(w),E)}else"embedded"===q.type&&(E=x.embeds[q.id],E.metadata=x.metadata,E&&(E=this.geometryHandlers.ascii.loaderObject.parse(E,""),i(w)(E.geometry,E.materials)));for(var y in x.textures)if(w=x.textures[y],w.url instanceof Array){z+=w.url.length;for(u=0;u<w.url.length;u++)n.onLoadStart()}else z+=1,n.onLoadStart();N=z;for(y in x.textures){w=x.textures[y];void 0!==w.mapping&&void 0!==
THREE[w.mapping]&&(w.mapping=new THREE[w.mapping]);if(w.url instanceof Array){E=w.url.length;q=[];for(u=0;u<E;u++)q[u]=d(w.url[u],x.urlBaseType);u=(u=/\.dds$/i.test(q[0]))?THREE.ImageUtils.loadCompressedTextureCube(q,w.mapping,F(E)):THREE.ImageUtils.loadTextureCube(q,w.mapping,F(E))}else u=/\.dds$/i.test(w.url),E=d(w.url,x.urlBaseType),q=F(1),u=u?THREE.ImageUtils.loadCompressedTexture(E,w.mapping,q):THREE.ImageUtils.loadTexture(E,w.mapping,q),void 0!==THREE[w.minFilter]&&(u.minFilter=THREE[w.minFilter]),
void 0!==THREE[w.magFilter]&&(u.magFilter=THREE[w.magFilter]),w.anisotropy&&(u.anisotropy=w.anisotropy),w.repeat&&(u.repeat.set(w.repeat[0],w.repeat[1]),1!==w.repeat[0]&&(u.wrapS=THREE.RepeatWrapping),1!==w.repeat[1]&&(u.wrapT=THREE.RepeatWrapping)),w.offset&&u.offset.set(w.offset[0],w.offset[1]),w.wrap&&(E={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==E[w.wrap[0]]&&(u.wrapS=E[w.wrap[0]]),void 0!==E[w.wrap[1]]&&(u.wrapT=E[w.wrap[1]]));C.textures[y]=u}var D,H;for(D in x.materials){y=
x.materials[D];for(H in y.parameters)"envMap"===H||"map"===H||"lightMap"===H||"bumpMap"===H?y.parameters[H]=C.textures[y.parameters[H]]:"shading"===H?y.parameters[H]="flat"===y.parameters[H]?THREE.FlatShading:THREE.SmoothShading:"side"===H?y.parameters[H]="double"==y.parameters[H]?THREE.DoubleSide:"back"==y.parameters[H]?THREE.BackSide:THREE.FrontSide:"blending"===H?y.parameters[H]=y.parameters[H]in THREE?THREE[y.parameters[H]]:THREE.NormalBlending:"combine"===H?y.parameters[H]=y.parameters[H]in THREE?
THREE[y.parameters[H]]:THREE.MultiplyOperation:"vertexColors"===H?"face"==y.parameters[H]?y.parameters[H]=THREE.FaceColors:y.parameters[H]&&(y.parameters[H]=THREE.VertexColors):"wrapRGB"===H&&(F=y.parameters[H],y.parameters[H]=new THREE.Vector3(F[0],F[1],F[2]));void 0!==y.parameters.opacity&&1>y.parameters.opacity&&(y.parameters.transparent=!0);y.parameters.normalMap?(F=THREE.ShaderLib.normalmap,w=THREE.UniformsUtils.clone(F.uniforms),u=y.parameters.color,E=y.parameters.specular,q=y.parameters.ambient,
L=y.parameters.shininess,w.tNormal.value=C.textures[y.parameters.normalMap],y.parameters.normalScale&&w.uNormalScale.value.set(y.parameters.normalScale[0],y.parameters.normalScale[1]),y.parameters.map&&(w.tDiffuse.value=y.parameters.map,w.enableDiffuse.value=!0),y.parameters.envMap&&(w.tCube.value=y.parameters.envMap,w.enableReflection.value=!0,w.reflectivity.value=y.parameters.reflectivity),y.parameters.lightMap&&(w.tAO.value=y.parameters.lightMap,w.enableAO.value=!0),y.parameters.specularMap&&(w.tSpecular.value=
C.textures[y.parameters.specularMap],w.enableSpecular.value=!0),y.parameters.displacementMap&&(w.tDisplacement.value=C.textures[y.parameters.displacementMap],w.enableDisplacement.value=!0,w.uDisplacementBias.value=y.parameters.displacementBias,w.uDisplacementScale.value=y.parameters.displacementScale),w.diffuse.value.setHex(u),w.specular.value.setHex(E),w.ambient.value.setHex(q),w.shininess.value=L,y.parameters.opacity&&(w.opacity.value=y.parameters.opacity),r=new THREE.ShaderMaterial({fragmentShader:F.fragmentShader,
vertexShader:F.vertexShader,uniforms:w,lights:!0,fog:!0})):r=new THREE[y.type](y.parameters);r.name=D;C.materials[D]=r}for(D in x.materials)if(y=x.materials[D],y.parameters.materials){H=[];for(u=0;u<y.parameters.materials.length;u++)H.push(C.materials[y.parameters.materials[u]]);C.materials[D].materials=H}e();C.cameras&&x.defaults.camera&&(C.currentCamera=C.cameras[x.defaults.camera]);C.fogs&&x.defaults.fog&&(C.scene.fog=C.fogs[x.defaults.fog]);n.callbackSync(C);k()}};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b){var c=new THREE.ImageLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)})},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.ParticleSystemMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleSystemMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleSystemMaterial.prototype.clone=function(){var a=new THREE.ParticleSystemMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=THREE.ParticleSystemMaterial;THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName="position";this.setValues(a)};
THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;THREE.Texture=function(a,b,c,d,e,f,g,h,i){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,k,l){THREE.Texture.call(this,null,f,g,h,i,k,d,e,l);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,k,l){THREE.Texture.call(this,null,f,g,h,i,k,d,e,l);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.ParticleSystemMaterial({color:16777215*Math.random()});this.frustumCulled=this.sortParticles=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiplyMatrices(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(){var a=new THREE.Matrix4;return function(b){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var b=0,c=this.children.length;b<c;b++){var d=this.children[b];d instanceof THREE.Bone?d.update(this.identityMatrix,!1):d.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=
[];b=0;for(c=this.bones.length;b<c;b++)d=new THREE.Matrix4,d.getInverse(this.bones[b].skinMatrix),this.boneInverses.push(d)}b=0;for(c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b].skinMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);this.normalizeSkinWeights()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();THREE.LOD.prototype.clone=function(){};THREE.Sprite=function(a){THREE.Object3D.call(this);this.material=void 0!==a?a:new THREE.SpriteMaterial};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a,b,c){for(var d=0,e=N.length;d<e;d++){var f=N[d];wa.copy(f.color);if(f instanceof THREE.DirectionalLight){var g=Na.setFromMatrixPosition(f.matrixWorld).normalize(),h=b.dot(g);0>=h||(h*=f.intensity,c.add(wa.multiplyScalar(h)))}else f instanceof THREE.PointLight&&(g=Na.setFromMatrixPosition(f.matrixWorld),h=b.dot(Na.subVectors(g,a).normalize()),0>=h||(h*=0==f.distance?1:1-Math.min(a.distanceTo(g)/f.distance,1),0!=h&&(h*=f.intensity,c.add(wa.multiplyScalar(h)))))}}
function c(a,b,c,d){p(b);t(c);r(d);m(a.getStyle());E.stroke();pa.expandByScalar(2*b)}function d(a){q(a.getStyle());E.fill()}function e(a){f(a.target)}function f(a){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);Ua[a.id]=E.createPattern(e,!0===b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}
function g(a,b,c,d,g,h,j,i,k,l,n,p,m){if(!(m instanceof THREE.DataTexture)){!1===m.hasEventListener("update",e)&&(void 0!==m.image&&0<m.image.width&&f(m),m.addEventListener("update",e));var t=Ua[m.id];if(void 0!==t){q(t);var t=m.offset.x/m.repeat.x,r=m.offset.y/m.repeat.y,s=m.image.width*m.repeat.x,m=m.image.height*m.repeat.y,j=(j+t)*s,i=(i+r)*m,c=c-a,d=d-b,g=g-a,h=h-b,k=(k+t)*s-j,l=(l+r)*m-i,n=(n+t)*s-j,p=(p+r)*m-i,m=k*p-n*l;0!==m&&(t=1/m,m=(p*c-l*g)*t,l=(p*d-l*h)*t,c=(k*g-n*c)*t,d=(k*h-n*d)*t,a=
a-m*j-c*i,b=b-l*j-d*i,E.save(),E.transform(m,l,c,d,a,b),E.fill(),E.restore())}else q("rgba(0,0,0,1)"),E.fill()}}function h(a,b,c,d,e,f,g,h,j,i,k,l,n){var m,p;m=n.width-1;p=n.height-1;g*=m;h*=p;c-=a;d-=b;e-=a;f-=b;j=j*m-g;i=i*p-h;k=k*m-g;l=l*p-h;p=1/(j*l-k*i);m=(l*c-i*e)*p;i=(l*d-i*f)*p;c=(j*e-k*c)*p;d=(j*f-k*d)*p;a=a-m*g-c*h;b=b-i*g-d*h;E.save();E.transform(m,i,c,d,a,b);E.clip();E.drawImage(n,0,0);E.restore()}function i(a,b,c,d){qa[0]=255*a.r|0;qa[1]=255*a.g|0;qa[2]=255*a.b|0;qa[4]=255*b.r|0;qa[5]=
255*b.g|0;qa[6]=255*b.b|0;qa[8]=255*c.r|0;qa[9]=255*c.g|0;qa[10]=255*c.b|0;qa[12]=255*d.r|0;qa[13]=255*d.g|0;qa[14]=255*d.b|0;Pa.putImageData(Wa,0,0);hb.drawImage(j,0,0);return ta}function k(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function l(a){H!==a&&(H=E.globalAlpha=a)}function n(a){K!==a&&(a===THREE.NormalBlending?E.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?E.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&
(E.globalCompositeOperation="darker"),K=a)}function p(a){ha!==a&&(ha=E.lineWidth=a)}function t(a){ua!==a&&(ua=E.lineCap=a)}function r(a){O!==a&&(O=E.lineJoin=a)}function m(a){A!==a&&(A=E.strokeStyle=a)}function q(a){da!==a&&(da=E.fillStyle=a)}function u(a,b){if(T!==a||ea!==b)E.setLineDash([a,b]),T=a,ea=b}console.log("THREE.CanvasRenderer",THREE.REVISION);var s=THREE.Math.smoothstep,a=a||{},v=this,z,G,N,C=new THREE.Projector,B=void 0!==a.canvas?a.canvas:document.createElement("canvas"),x=B.width,F=
B.height,L=Math.floor(x/2),w=Math.floor(F/2),E=B.getContext("2d"),y=new THREE.Color(0),D=0,H=1,K=0,A=null,da=null,ha=null,ua=null,O=null,T=null,ea=0,I,P,Q,oa;new THREE.RenderableVertex;new THREE.RenderableVertex;var va,Ea,za,Ha,Ta,Ja,sa=new THREE.Color,Aa=new THREE.Color,ba=new THREE.Color,W=new THREE.Color,Ka=new THREE.Color,U=new THREE.Color,ca=new THREE.Color,wa=new THREE.Color,Ua={},Oa,la,ia,Fa,Ga,Ba,xa,Va,La,Ma,ya=new THREE.Box2,V=new THREE.Box2,pa=new THREE.Box2,ja=new THREE.Color,fa=new THREE.Color,
Za=new THREE.Color,Na=new THREE.Vector3,j,Pa,Wa,qa,ta,hb,db=16;j=document.createElement("canvas");j.width=j.height=2;Pa=j.getContext("2d");Pa.fillStyle="rgba(0,0,0,1)";Pa.fillRect(0,0,2,2);Wa=Pa.getImageData(0,0,2,2);qa=Wa.data;ta=document.createElement("canvas");ta.width=ta.height=db;hb=ta.getContext("2d");hb.translate(-db/2,-db/2);hb.scale(db,db);db--;void 0===E.setLineDash&&(E.setLineDash=void 0!==E.mozDash?function(a){E.mozDash=null!==a[0]?a:null}:function(){});this.domElement=B;this.devicePixelRatio=
void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=function(a,b,c){x=a*this.devicePixelRatio;F=b*this.devicePixelRatio;L=Math.floor(x/2);w=Math.floor(F/2);B.width=x;B.height=F;1!==this.devicePixelRatio&&!1!==c&&(B.style.width=a+"px",B.style.height=b+"px");ya.set(new THREE.Vector2(-L,
-w),new THREE.Vector2(L,w));V.set(new THREE.Vector2(-L,-w),new THREE.Vector2(L,w));H=1;K=0;O=ua=ha=da=A=null};this.setClearColor=function(a,b){y.set(a);D=void 0!==b?b:1;V.set(new THREE.Vector2(-L,-w),new THREE.Vector2(L,w))};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){E.setTransform(1,0,0,-1,L,w);!1===V.empty()&&(V.intersect(ya),
V.expandByScalar(2),1>D&&E.clearRect(V.min.x|0,V.min.y|0,V.max.x-V.min.x|0,V.max.y-V.min.y|0),0<D&&(n(THREE.NormalBlending),l(1),q("rgba("+Math.floor(255*y.r)+","+Math.floor(255*y.g)+","+Math.floor(255*y.b)+","+D+")"),E.fillRect(V.min.x|0,V.min.y|0,V.max.x-V.min.x|0,V.max.y-V.min.y|0)),V.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,j){if(!1===j instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();E.setTransform(1,0,0,-1,L,w);v.info.render.vertices=0;v.info.render.faces=0;z=C.projectScene(a,j,this.sortObjects,this.sortElements);G=z.elements;N=z.lights;I=j;ja.setRGB(0,0,0);fa.setRGB(0,0,0);Za.setRGB(0,0,0);for(var x=0,H=N.length;x<H;x++){var B=N[x],F=B.color;B instanceof THREE.AmbientLight?ja.add(F):B instanceof THREE.DirectionalLight?fa.add(F):B instanceof THREE.PointLight&&Za.add(F)}x=0;for(H=G.length;x<H;x++){var y=G[x],D=y.material;if(!(void 0===D||
!1===D.visible)){pa.makeEmpty();if(y instanceof THREE.RenderableSprite){P=y;P.x*=L;P.y*=w;B=P;F=D;l(F.opacity);n(F.blending);var A=y.scale.x*L,y=y.scale.y*w,D=0.5*Math.sqrt(A*A+y*y);pa.min.set(B.x-D,B.y-D);pa.max.set(B.x+D,B.y+D);if(!1===ya.isIntersectionBox(pa))pa.makeEmpty();else if(F instanceof THREE.SpriteMaterial||F instanceof THREE.ParticleSystemMaterial){var O=F.map;if(null!==O){!1===O.hasEventListener("update",e)&&(void 0!==O.image&&0<O.image.width&&f(O),O.addEventListener("update",e));D=
Ua[O.id];void 0!==D?q(D):q("rgba( 0, 0, 0, 1 )");var K=O.image,D=K.width*O.offset.x,T=K.height*O.offset.y,da=K.width*O.repeat.x,O=K.height*O.repeat.y,K=A/da,ha=y/O;E.save();E.translate(B.x,B.y);0!==F.rotation&&E.rotate(F.rotation);E.translate(-A/2,-y/2);E.scale(K,ha);E.translate(-D,-T);E.fillRect(D,T,da,O)}else q(F.color.getStyle()),E.save(),E.translate(B.x,B.y),0!==F.rotation&&E.rotate(F.rotation),E.scale(A,-y),E.fillRect(-0.5,-0.5,1,1);E.restore()}else F instanceof THREE.SpriteCanvasMaterial&&(m(F.color.getStyle()),
q(F.color.getStyle()),E.save(),E.translate(B.x,B.y),0!==F.rotation&&E.rotate(F.rotation),E.scale(A,y),F.program(E),E.restore())}else if(y instanceof THREE.RenderableLine){if(P=y.v1,Q=y.v2,P.positionScreen.x*=L,P.positionScreen.y*=w,Q.positionScreen.x*=L,Q.positionScreen.y*=w,pa.setFromPoints([P.positionScreen,Q.positionScreen]),!0===ya.isIntersectionBox(pa))if(B=P,F=Q,A=y,y=D,l(y.opacity),n(y.blending),E.beginPath(),E.moveTo(B.positionScreen.x,B.positionScreen.y),E.lineTo(F.positionScreen.x,F.positionScreen.y),
y instanceof THREE.LineBasicMaterial){p(y.linewidth);t(y.linecap);r(y.linejoin);if(y.vertexColors!==THREE.VertexColors)m(y.color.getStyle());else if(D=A.vertexColors[0].getStyle(),A=A.vertexColors[1].getStyle(),D===A)m(D);else{try{var ea=E.createLinearGradient(B.positionScreen.x,B.positionScreen.y,F.positionScreen.x,F.positionScreen.y);ea.addColorStop(0,D);ea.addColorStop(1,A)}catch(qa){ea=D}m(ea)}E.stroke();pa.expandByScalar(2*y.linewidth)}else y instanceof THREE.LineDashedMaterial&&(p(y.linewidth),
t(y.linecap),r(y.linejoin),m(y.color.getStyle()),u(y.dashSize,y.gapSize),E.stroke(),pa.expandByScalar(2*y.linewidth),u(null,null))}else if(y instanceof THREE.RenderableFace3){P=y.v1;Q=y.v2;oa=y.v3;if(-1>P.positionScreen.z||1<P.positionScreen.z)continue;if(-1>Q.positionScreen.z||1<Q.positionScreen.z)continue;if(-1>oa.positionScreen.z||1<oa.positionScreen.z)continue;P.positionScreen.x*=L;P.positionScreen.y*=w;Q.positionScreen.x*=L;Q.positionScreen.y*=w;oa.positionScreen.x*=L;oa.positionScreen.y*=w;
0<D.overdraw&&(k(P.positionScreen,Q.positionScreen,D.overdraw),k(Q.positionScreen,oa.positionScreen,D.overdraw),k(oa.positionScreen,P.positionScreen,D.overdraw));pa.setFromPoints([P.positionScreen,Q.positionScreen,oa.positionScreen]);if(!0===ya.isIntersectionBox(pa)){B=P;F=Q;A=oa;v.info.render.vertices+=3;v.info.render.faces++;l(D.opacity);n(D.blending);va=B.positionScreen.x;Ea=B.positionScreen.y;za=F.positionScreen.x;Ha=F.positionScreen.y;Ta=A.positionScreen.x;Ja=A.positionScreen.y;var T=va,da=Ea,
O=za,K=Ha,ha=Ta,ua=Ja;E.beginPath();E.moveTo(T,da);E.lineTo(O,K);E.lineTo(ha,ua);E.closePath();(D instanceof THREE.MeshLambertMaterial||D instanceof THREE.MeshPhongMaterial)&&null===D.map?(U.copy(D.color),ca.copy(D.emissive),D.vertexColors===THREE.FaceColors&&U.multiply(y.color),!1===D.wireframe&&D.shading===THREE.SmoothShading&&3===y.vertexNormalsLength?(Aa.copy(ja),ba.copy(ja),W.copy(ja),b(y.v1.positionWorld,y.vertexNormalsModel[0],Aa),b(y.v2.positionWorld,y.vertexNormalsModel[1],ba),b(y.v3.positionWorld,
y.vertexNormalsModel[2],W),Aa.multiply(U).add(ca),ba.multiply(U).add(ca),W.multiply(U).add(ca),Ka.addColors(ba,W).multiplyScalar(0.5),ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)):(sa.copy(ja),b(y.centroidModel,y.normalModel,sa),sa.multiply(U).add(ca),!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa))):D instanceof THREE.MeshBasicMaterial||D instanceof THREE.MeshLambertMaterial||D instanceof THREE.MeshPhongMaterial?null!==D.map?D.map.mapping instanceof
THREE.UVMapping&&(Fa=y.uvs[0],g(va,Ea,za,Ha,Ta,Ja,Fa[0].x,Fa[0].y,Fa[1].x,Fa[1].y,Fa[2].x,Fa[2].y,D.map)):null!==D.envMap?D.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(Na.copy(y.vertexNormalsModelView[0]),Ga=0.5*Na.x+0.5,Ba=0.5*Na.y+0.5,Na.copy(y.vertexNormalsModelView[1]),xa=0.5*Na.x+0.5,Va=0.5*Na.y+0.5,Na.copy(y.vertexNormalsModelView[2]),La=0.5*Na.x+0.5,Ma=0.5*Na.y+0.5,g(va,Ea,za,Ha,Ta,Ja,Ga,Ba,xa,Va,La,Ma,D.envMap)):(sa.copy(D.color),D.vertexColors===THREE.FaceColors&&sa.multiply(y.color),
!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa)):D instanceof THREE.MeshDepthMaterial?(Oa=I.near,la=I.far,Aa.r=Aa.g=Aa.b=1-s(B.positionScreen.z*B.positionScreen.w,Oa,la),ba.r=ba.g=ba.b=1-s(F.positionScreen.z*F.positionScreen.w,Oa,la),W.r=W.g=W.b=1-s(A.positionScreen.z*A.positionScreen.w,Oa,la),Ka.addColors(ba,W).multiplyScalar(0.5),ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)):D instanceof THREE.MeshNormalMaterial&&(B=void 0,D.shading===THREE.FlatShading?
(B=y.normalModelView,sa.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),!0===D.wireframe?c(sa,D.wireframeLinewidth,D.wireframeLinecap,D.wireframeLinejoin):d(sa)):D.shading===THREE.SmoothShading&&(B=y.vertexNormalsModelView[0],Aa.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=y.vertexNormalsModelView[1],ba.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=y.vertexNormalsModelView[2],W.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),Ka.addColors(ba,W).multiplyScalar(0.5),
ia=i(Aa,ba,W,Ka),h(va,Ea,za,Ha,Ta,Ja,0,0,1,0,0,1,ia)))}}V.union(pa)}}E.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nuniform int boneTextureWidth;\nuniform int boneTextureHeight;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, float( boneTextureWidth ) );\nfloat y = floor( j / float( boneTextureWidth ) );\nfloat dx = 1.0 / float( boneTextureWidth );\nfloat dy = 1.0 / float( boneTextureHeight );\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.skinbase_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",
value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,
THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",
value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",
value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},
opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), opacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"},
depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=j.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,i=1*g.length,k=3*g.length,g=d(b,a),l=f(g),m=e(g),n=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);m&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));n&&(a.__colorArray=new Float32Array(3*h));l&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));a.__faceArray=new Uint16Array(3*i);a.__lineArray=new Uint16Array(2*k);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(l=a.numMorphTargets;c<l;c++)a.__morphTargetsArrays.push(new Float32Array(3*h))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(l=a.numMorphNormals;c<l;c++)a.__morphNormalsArrays.push(new Float32Array(3*h))}a.__webglFaceCount=3*i;a.__webglLineCount=2*k;if(g.attributes){void 0===a.__webglCustomAttributesList&&
(a.__webglCustomAttributesList=[]);for(var p in g.attributes){var i=g.attributes[p],k={},q;for(q in i)k[q]=i[q];if(!k.__webglInitialized||k.createUniqueBuffers)k.__webglInitialized=!0,c=1,"v2"===k.type?c=2:"v3"===k.type?c=3:"v4"===k.type?c=4:"c"===k.type&&(c=3),k.size=c,k.array=new Float32Array(h*c),k.buffer=j.createBuffer(),k.buffer.belongsToAttribute=p,i.needsUpdate=!0,k.__original=i;a.__webglCustomAttributesList.push(k)}}a.__inittedArrays=!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?
a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){Ma[a]||(j.enableVertexAttribArray(a),Ma[a]=!0)}function h(){for(var a in Ma)Ma[a]&&(j.disableVertexAttribArray(a),Ma[a]=
!1)}function i(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function k(a,b){return b[0]-a[0]}function l(a,b,c){if(a.length)for(var d=0,e=a.length;d<e;d++)Ha=oa=null,Ea=za=Aa=sa=wa=ca=ba=-1,Za=!0,a[d].render(b,c,Va,La),Ha=oa=null,Ea=za=Aa=sa=wa=ca=ba=-1,Za=!0}function n(a,b,c,d,e,f,g,h){var j,i,k,l;b?(i=a.length-1,l=b=-1):(i=0,b=a.length,l=1);for(var m=i;m!==b;m+=l)if(j=a[m],j.render){i=j.object;k=j.buffer;if(h)j=h;else{j=j[c];if(!j)continue;g&&I.setBlending(j.blending,j.blendEquation,j.blendSrc,j.blendDst);
I.setDepthTest(j.depthTest);I.setDepthWrite(j.depthWrite);x(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits)}I.setMaterialFaces(j);k instanceof THREE.BufferGeometry?I.renderBufferDirect(d,e,f,j,k,i):I.renderBuffer(d,e,f,j,k,i)}}function p(a,b,c,d,e,f,g){for(var h,j,i=0,k=a.length;i<k;i++)if(h=a[i],j=h.object,j.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&I.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);I.setDepthTest(h.depthTest);I.setDepthWrite(h.depthWrite);x(h.polygonOffset,
h.polygonOffsetFactor,h.polygonOffsetUnits)}I.renderImmediateObject(c,d,e,h,j)}}function t(a,d){var e,f,g,h;if(void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,void 0!==a.geometry&&void 0===a.geometry.__webglInit&&(a.geometry.__webglInit=!0,a.geometry.addEventListener("dispose",Lb)),f=a.geometry,void 0!==f))if(f instanceof THREE.BufferGeometry){var i,k;for(i in f.attributes)k="index"===i?j.ELEMENT_ARRAY_BUFFER:j.ARRAY_BUFFER,h=f.attributes[i],
void 0===h.numItems&&(h.numItems=h.array.length),h.buffer=j.createBuffer(),j.bindBuffer(k,h.buffer),j.bufferData(k,h.array,j.STATIC_DRAW)}else if(a instanceof THREE.Mesh){g=a.material;if(void 0===f.geometryGroups){i=f;var l,m,n;k={};var p=i.morphTargets.length,q=i.morphNormals.length,t=g instanceof THREE.MeshFaceMaterial;i.geometryGroups={};g=0;for(l=i.faces.length;g<l;g++)m=i.faces[g],m=t?m.materialIndex:0,void 0===k[m]&&(k[m]={hash:m,counter:0}),n=k[m].hash+"_"+k[m].counter,void 0===i.geometryGroups[n]&&
(i.geometryGroups[n]={faces3:[],materialIndex:m,vertices:0,numMorphTargets:p,numMorphNormals:q}),65535<i.geometryGroups[n].vertices+3&&(k[m].counter+=1,n=k[m].hash+"_"+k[m].counter,void 0===i.geometryGroups[n]&&(i.geometryGroups[n]={faces3:[],materialIndex:m,vertices:0,numMorphTargets:p,numMorphNormals:q})),i.geometryGroups[n].faces3.push(g),i.geometryGroups[n].vertices+=3;i.geometryGroupsList=[];for(h in i.geometryGroups)i.geometryGroups[h].id=Ta++,i.geometryGroupsList.push(i.geometryGroups[h])}for(e in f.geometryGroups)if(h=
f.geometryGroups[e],!h.__webglVertexBuffer){i=h;i.__webglVertexBuffer=j.createBuffer();i.__webglNormalBuffer=j.createBuffer();i.__webglTangentBuffer=j.createBuffer();i.__webglColorBuffer=j.createBuffer();i.__webglUVBuffer=j.createBuffer();i.__webglUV2Buffer=j.createBuffer();i.__webglSkinIndicesBuffer=j.createBuffer();i.__webglSkinWeightsBuffer=j.createBuffer();i.__webglFaceBuffer=j.createBuffer();i.__webglLineBuffer=j.createBuffer();p=k=void 0;if(i.numMorphTargets){i.__webglMorphTargetsBuffers=[];
k=0;for(p=i.numMorphTargets;k<p;k++)i.__webglMorphTargetsBuffers.push(j.createBuffer())}if(i.numMorphNormals){i.__webglMorphNormalsBuffers=[];k=0;for(p=i.numMorphNormals;k<p;k++)i.__webglMorphNormalsBuffers.push(j.createBuffer())}I.info.memory.geometries++;c(h,a);f.verticesNeedUpdate=!0;f.morphTargetsNeedUpdate=!0;f.elementsNeedUpdate=!0;f.uvsNeedUpdate=!0;f.normalsNeedUpdate=!0;f.tangentsNeedUpdate=!0;f.colorsNeedUpdate=!0}}else a instanceof THREE.Line?f.__webglVertexBuffer||(h=f,h.__webglVertexBuffer=
j.createBuffer(),h.__webglColorBuffer=j.createBuffer(),h.__webglLineDistanceBuffer=j.createBuffer(),I.info.memory.geometries++,h=f,i=h.vertices.length,h.__vertexArray=new Float32Array(3*i),h.__colorArray=new Float32Array(3*i),h.__lineDistanceArray=new Float32Array(1*i),h.__webglLineCount=i,b(h,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.lineDistancesNeedUpdate=!0):a instanceof THREE.ParticleSystem&&!f.__webglVertexBuffer&&(h=f,h.__webglVertexBuffer=j.createBuffer(),h.__webglColorBuffer=j.createBuffer(),
I.info.memory.geometries++,h=f,i=h.vertices.length,h.__vertexArray=new Float32Array(3*i),h.__colorArray=new Float32Array(3*i),h.__sortArray=[],h.__webglParticleCount=i,b(h,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0);if(void 0===a.__webglActive){if(a instanceof THREE.Mesh)if(f=a.geometry,f instanceof THREE.BufferGeometry)r(d.__webglObjects,f,a);else{if(f instanceof THREE.Geometry)for(e in f.geometryGroups)h=f.geometryGroups[e],r(d.__webglObjects,h,a)}else a instanceof THREE.Line||a instanceof
THREE.ParticleSystem?(f=a.geometry,r(d.__webglObjects,f,a)):a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback?d.__webglObjectsImmediate.push({id:null,object:a,opaque:null,transparent:null,z:0}):a instanceof THREE.Sprite?d.__webglSprites.push(a):a instanceof THREE.LensFlare&&d.__webglFlares.push(a);a.__webglActive=!0}}function r(a,b,c){a.push({id:null,buffer:b,object:c,opaque:null,transparent:null,z:0})}function m(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;
return!1}function q(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function u(a,b){a instanceof THREE.Mesh||a instanceof THREE.ParticleSystem||a instanceof THREE.Line?s(b.__webglObjects,a):a instanceof THREE.Sprite?v(b.__webglSprites,a):a instanceof THREE.LensFlare?v(b.__webglFlares,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&s(b.__webglObjectsImmediate,a);delete a.__webglActive}function s(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}
function v(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function z(a,b,c,d,e){Ja=0;d.needsUpdate&&(d.program&&Eb(d),I.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(I.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==oa&&(j.useProgram(g),oa=g,f=!0);d.id!==Ea&&(Ea=d.id,f=!0);if(f||a!==Ha)j.uniformMatrix4fv(h.projectionMatrix,!1,a.projectionMatrix.elements),a!==Ha&&(Ha=a);if(d.skinning)if(tb&&
e.useVertexTexture){if(null!==h.boneTexture){var k=G();j.uniform1i(h.boneTexture,k);I.setTexture(e.boneTexture,k)}null!==h.boneTextureWidth&&j.uniform1i(h.boneTextureWidth,e.boneTextureWidth);null!==h.boneTextureHeight&&j.uniform1i(h.boneTextureHeight,e.boneTextureHeight)}else null!==h.boneGlobalMatrices&&j.uniformMatrix4fv(h.boneGlobalMatrices,!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&
(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Za){for(var l,m=k=0,n=0,p,q,t,r=Na,s=r.directional.colors,u=r.directional.positions,v=r.point.colors,z=r.point.positions,y=r.point.distances,x=r.spot.colors,B=r.spot.positions,F=r.spot.distances,E=r.spot.directions,L=r.spot.anglesCos,A=r.spot.exponents,O=r.hemi.skyColors,Q=r.hemi.groundColors,K=r.hemi.positions,P=0,W=0,T=0,va=0,sa=0,Y=0,Z=0,X=0,U=l=0,c=t=U=0,f=b.length;c<f;c++)l=
b[c],l.onlyShadow||(p=l.color,q=l.intensity,t=l.distance,l instanceof THREE.AmbientLight?l.visible&&(I.gammaInput?(k+=p.r*p.r,m+=p.g*p.g,n+=p.b*p.b):(k+=p.r,m+=p.g,n+=p.b)):l instanceof THREE.DirectionalLight?(sa+=1,l.visible&&(fa.setFromMatrixPosition(l.matrixWorld),ja.setFromMatrixPosition(l.target.matrixWorld),fa.sub(ja),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(l=3*P,u[l]=fa.x,u[l+1]=fa.y,u[l+2]=fa.z,I.gammaInput?N(s,l,p,q*q):C(s,l,p,q),P+=1))):l instanceof THREE.PointLight?(Y+=1,l.visible&&
(U=3*W,I.gammaInput?N(v,U,p,q*q):C(v,U,p,q),ja.setFromMatrixPosition(l.matrixWorld),z[U]=ja.x,z[U+1]=ja.y,z[U+2]=ja.z,y[W]=t,W+=1)):l instanceof THREE.SpotLight?(Z+=1,l.visible&&(U=3*T,I.gammaInput?N(x,U,p,q*q):C(x,U,p,q),ja.setFromMatrixPosition(l.matrixWorld),B[U]=ja.x,B[U+1]=ja.y,B[U+2]=ja.z,F[T]=t,fa.copy(ja),ja.setFromMatrixPosition(l.target.matrixWorld),fa.sub(ja),fa.normalize(),E[U]=fa.x,E[U+1]=fa.y,E[U+2]=fa.z,L[T]=Math.cos(l.angle),A[T]=l.exponent,T+=1)):l instanceof THREE.HemisphereLight&&
(X+=1,l.visible&&(fa.setFromMatrixPosition(l.matrixWorld),fa.normalize(),0===fa.x&&0===fa.y&&0===fa.z||(t=3*va,K[t]=fa.x,K[t+1]=fa.y,K[t+2]=fa.z,p=l.color,l=l.groundColor,I.gammaInput?(q*=q,N(O,t,p,q),N(Q,t,l,q)):(C(O,t,p,q),C(Q,t,l,q)),va+=1))));c=3*P;for(f=Math.max(s.length,3*sa);c<f;c++)s[c]=0;c=3*W;for(f=Math.max(v.length,3*Y);c<f;c++)v[c]=0;c=3*T;for(f=Math.max(x.length,3*Z);c<f;c++)x[c]=0;c=3*va;for(f=Math.max(O.length,3*X);c<f;c++)O[c]=0;c=3*va;for(f=Math.max(Q.length,3*X);c<f;c++)Q[c]=0;r.directional.length=
P;r.point.length=W;r.spot.length=T;r.hemi.length=va;r.ambient[0]=k;r.ambient[1]=m;r.ambient[2]=n;Za=!1}c=Na;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;
i.spotLightDirection.value=c.spot.directions;i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;I.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=
d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var V;d.map?V=d.map:d.specularMap?V=d.specularMap:d.normalMap?V=d.normalMap:d.bumpMap&&(V=d.bumpMap);void 0!==V&&(c=V.offset,V=V.repeat,i.offsetRepeat.value.set(c.x,c.y,V.x,V.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?
1:-1;i.reflectivity.value=d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleSystemMaterial?
(i.psColor.value=d.color,i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=H.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,I.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?
(I.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=V=0;for(f=b.length;c<f;c++)if(k=b[c],k.castShadow&&(k instanceof
THREE.SpotLight||k instanceof THREE.DirectionalLight&&!k.shadowCascade))i.shadowMap.value[V]=k.shadowMap,i.shadowMapSize.value[V]=k.shadowMapSize,i.shadowMatrix.value[V]=k.shadowMatrix,i.shadowDarkness.value[V]=k.shadowDarkness,i.shadowBias.value[V]=k.shadowBias,V++}b=d.uniformsList;i=0;for(V=b.length;i<V;i++)if(f=g.uniforms[b[i][1]])if(c=b[i][0],m=c.type,k=c.value,"i"===m)j.uniform1i(f,k);else if("f"===m)j.uniform1f(f,k);else if("v2"===m)j.uniform2f(f,k.x,k.y);else if("v3"===m)j.uniform3f(f,k.x,
k.y,k.z);else if("v4"===m)j.uniform4f(f,k.x,k.y,k.z,k.w);else if("c"===m)j.uniform3f(f,k.r,k.g,k.b);else if("iv1"===m)j.uniform1iv(f,k);else if("iv"===m)j.uniform3iv(f,k);else if("fv1"===m)j.uniform1fv(f,k);else if("fv"===m)j.uniform3fv(f,k);else if("v2v"===m){void 0===c._array&&(c._array=new Float32Array(2*k.length));m=0;for(n=k.length;m<n;m++)r=2*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y;j.uniform2fv(f,c._array)}else if("v3v"===m){void 0===c._array&&(c._array=new Float32Array(3*k.length));m=0;for(n=
k.length;m<n;m++)r=3*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y,c._array[r+2]=k[m].z;j.uniform3fv(f,c._array)}else if("v4v"===m){void 0===c._array&&(c._array=new Float32Array(4*k.length));m=0;for(n=k.length;m<n;m++)r=4*m,c._array[r]=k[m].x,c._array[r+1]=k[m].y,c._array[r+2]=k[m].z,c._array[r+3]=k[m].w;j.uniform4fv(f,c._array)}else if("m4"===m)void 0===c._array&&(c._array=new Float32Array(16)),k.flattenToArray(c._array),j.uniformMatrix4fv(f,!1,c._array);else if("m4v"===m){void 0===c._array&&(c._array=
new Float32Array(16*k.length));m=0;for(n=k.length;m<n;m++)k[m].flattenToArrayOffset(c._array,16*m);j.uniformMatrix4fv(f,!1,c._array)}else if("t"===m){if(r=k,k=G(),j.uniform1i(f,k),r)if(r.image instanceof Array&&6===r.image.length){if(c=r,f=k,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.addEventListener("dispose",Bb),c.image.__webglTextureCube=j.createTexture(),I.info.memory.textures++);j.activeTexture(j.TEXTURE0+f);j.bindTexture(j.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);
j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;k=[];for(m=0;6>m;m++)I.autoScaleCubemaps&&!f?(n=k,r=m,s=c.image[m],v=Yb,s.width<=v&&s.height<=v||(z=Math.max(s.width,s.height),u=Math.floor(s.width*v/z),v=Math.floor(s.height*v/z),z=document.createElement("canvas"),z.width=u,z.height=v,z.getContext("2d").drawImage(s,0,0,s.width,s.height,0,0,u,v),s=z),n[r]=s):k[m]=c.image[m];m=k[0];n=0===(m.width&m.width-1)&&0===(m.height&m.height-1);r=D(c.format);s=D(c.type);w(j.TEXTURE_CUBE_MAP,
c,n);for(m=0;6>m;m++)if(f){v=k[m].mipmaps;z=0;for(y=v.length;z<y;z++)u=v[z],c.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,z,r,u.width,u.height,0,u.data):j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,z,r,u.width,u.height,0,r,s,u.data)}else j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+m,0,r,r,s,k[m]);c.generateMipmaps&&n&&j.generateMipmap(j.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else j.activeTexture(j.TEXTURE0+f),j.bindTexture(j.TEXTURE_CUBE_MAP,
c.image.__webglTextureCube)}else r instanceof THREE.WebGLRenderTargetCube?(c=r,j.activeTexture(j.TEXTURE0+k),j.bindTexture(j.TEXTURE_CUBE_MAP,c.__webglTexture)):I.setTexture(r,k)}else if("tv"===m){void 0===c._array&&(c._array=[]);m=0;for(n=c.value.length;m<n;m++)c._array[m]=G();j.uniform1iv(f,c._array);m=0;for(n=c.value.length;m<n;m++)r=c.value[m],k=c._array[m],r&&I.setTexture(r,k)}else console.warn("THREE.WebGLRenderer: Unknown uniform type: "+m);if((d instanceof THREE.ShaderMaterial||d instanceof
THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)ja.setFromMatrixPosition(a.matrixWorld),j.uniform3f(h.cameraPosition,ja.x,ja.y,ja.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&j.uniformMatrix4fv(h.viewMatrix,!1,a.matrixWorldInverse.elements)}j.uniformMatrix4fv(h.modelViewMatrix,!1,e._modelViewMatrix.elements);h.normalMatrix&&j.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);
null!==h.modelMatrix&&j.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function G(){var a=Ja;a>=Ab&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Ab);Ja+=1;return a}function N(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function C(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function B(a){a!==ia&&(j.lineWidth(a),ia=a)}function x(a,b,c){Ua!==a&&(a?j.enable(j.POLYGON_OFFSET_FILL):j.disable(j.POLYGON_OFFSET_FILL),Ua=a);
if(a&&(Oa!==b||la!==c))j.polygonOffset(b,c),Oa=b,la=c}function F(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function L(a,b){var c;"fragment"===a?c=j.createShader(j.FRAGMENT_SHADER):"vertex"===a&&(c=j.createShader(j.VERTEX_SHADER));j.shaderSource(c,b);j.compileShader(c);return!j.getShaderParameter(c,j.COMPILE_STATUS)?(console.error(j.getShaderInfoLog(c)),console.error(F(b)),null):c}function w(a,b,c){c?(j.texParameteri(a,j.TEXTURE_WRAP_S,D(b.wrapS)),j.texParameteri(a,
j.TEXTURE_WRAP_T,D(b.wrapT)),j.texParameteri(a,j.TEXTURE_MAG_FILTER,D(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,D(b.minFilter))):(j.texParameteri(a,j.TEXTURE_WRAP_S,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_WRAP_T,j.CLAMP_TO_EDGE),j.texParameteri(a,j.TEXTURE_MAG_FILTER,y(b.magFilter)),j.texParameteri(a,j.TEXTURE_MIN_FILTER,y(b.minFilter)));if(qa&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))j.texParameterf(a,qa.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Jb)),b.__oldAnisotropy=
b.anisotropy}function E(a,b){j.bindRenderbuffer(j.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_COMPONENT16,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_STENCIL,b.width,b.height),j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a)):j.renderbufferStorage(j.RENDERBUFFER,j.RGBA4,b.width,b.height)}
function y(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?j.NEAREST:j.LINEAR}function D(a){if(a===THREE.RepeatWrapping)return j.REPEAT;if(a===THREE.ClampToEdgeWrapping)return j.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return j.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return j.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return j.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return j.NEAREST_MIPMAP_LINEAR;if(a===
THREE.LinearFilter)return j.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return j.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return j.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return j.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return j.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return j.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return j.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return j.BYTE;if(a===THREE.ShortType)return j.SHORT;if(a===
THREE.UnsignedShortType)return j.UNSIGNED_SHORT;if(a===THREE.IntType)return j.INT;if(a===THREE.UnsignedIntType)return j.UNSIGNED_INT;if(a===THREE.FloatType)return j.FLOAT;if(a===THREE.AlphaFormat)return j.ALPHA;if(a===THREE.RGBFormat)return j.RGB;if(a===THREE.RGBAFormat)return j.RGBA;if(a===THREE.LuminanceFormat)return j.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return j.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return j.FUNC_ADD;if(a===THREE.SubtractEquation)return j.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return j.FUNC_REVERSE_SUBTRACT;
if(a===THREE.ZeroFactor)return j.ZERO;if(a===THREE.OneFactor)return j.ONE;if(a===THREE.SrcColorFactor)return j.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return j.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return j.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return j.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return j.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return j.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return j.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return j.ONE_MINUS_DST_COLOR;
if(a===THREE.SrcAlphaSaturateFactor)return j.SRC_ALPHA_SATURATE;if(void 0!==ta){if(a===THREE.RGB_S3TC_DXT1_Format)return ta.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return ta.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return ta.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return ta.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}/*console.log("THREE.WebGLRenderer",THREE.REVISION);*/var a=a||{},H=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
K=void 0!==a.precision?a.precision:"highp",A=void 0!==a.alpha?a.alpha:!1,da=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ha=void 0!==a.antialias?a.antialias:!1,ua=void 0!==a.stencil?a.stencil:!0,O=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,T=new THREE.Color(0),ea=0;this.domElement=H;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=
this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var I=this,
P=[],Q=0,oa=null,va=null,Ea=-1,za=null,Ha=null,Ta=0,Ja=0,sa=-1,Aa=-1,ba=-1,W=-1,Ka=-1,U=-1,ca=-1,wa=-1,Ua=null,Oa=null,la=null,ia=null,Fa=0,Ga=0,Ba=H.width,xa=H.height,Va=0,La=0,Ma={},ya=new THREE.Frustum,V=new THREE.Matrix4,pa=new THREE.Matrix4,ja=new THREE.Vector3,fa=new THREE.Vector3,Za=!0,Na={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},
hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},j,Pa,Wa,qa,ta;try{var hb={alpha:A,premultipliedAlpha:da,antialias:ha,stencil:ua,preserveDrawingBuffer:O};j=H.getContext("webgl",hb)||H.getContext("experimental-webgl",hb);if(null===j)throw"Error creating WebGL context.";}catch(db){console.error(db)}Pa=j.getExtension("OES_texture_float");j.getExtension("OES_texture_float_linear");Wa=j.getExtension("OES_standard_derivatives");qa=j.getExtension("EXT_texture_filter_anisotropic")||j.getExtension("MOZ_EXT_texture_filter_anisotropic")||
j.getExtension("WEBKIT_EXT_texture_filter_anisotropic");ta=j.getExtension("WEBGL_compressed_texture_s3tc")||j.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||j.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");Pa||console.log("THREE.WebGLRenderer: Float textures not supported.");Wa||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");qa||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");ta||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
void 0===j.getShaderPrecisionFormat&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});j.clearColor(0,0,0,1);j.clearDepth(1);j.clearStencil(0);j.enable(j.DEPTH_TEST);j.depthFunc(j.LEQUAL);j.frontFace(j.CCW);j.cullFace(j.BACK);j.enable(j.CULL_FACE);j.enable(j.BLEND);j.blendEquation(j.FUNC_ADD);j.blendFunc(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA);j.viewport(Fa,Ga,Ba,xa);j.clearColor(T.r,T.g,T.b,ea);this.context=j;var Ab=j.getParameter(j.MAX_TEXTURE_IMAGE_UNITS),Xb=j.getParameter(j.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
j.getParameter(j.MAX_TEXTURE_SIZE);var Yb=j.getParameter(j.MAX_CUBE_MAP_TEXTURE_SIZE),Jb=qa?j.getParameter(qa.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,xb=0<Xb,tb=xb&&Pa;ta&&j.getParameter(j.COMPRESSED_TEXTURE_FORMATS);var Zb=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_FLOAT),$b=j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_FLOAT);var ac=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_FLOAT),pc=j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,
j.MEDIUM_FLOAT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.LOW_FLOAT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.VERTEX_SHADER,j.LOW_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.HIGH_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.MEDIUM_INT);j.getShaderPrecisionFormat(j.FRAGMENT_SHADER,j.LOW_INT);var qc=0<Zb.precision&&0<ac.precision,Kb=0<$b.precision&&0<pc.precision;"highp"===K&&!qc&&
(Kb?(K="mediump",console.warn("WebGLRenderer: highp not supported, using mediump")):(K="lowp",console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));"mediump"===K&&!Kb&&(K="lowp",console.warn("WebGLRenderer: mediump not supported, using lowp"));this.getContext=function(){return j};this.supportsVertexTextures=function(){return xb};this.supportsFloatTextures=function(){return Pa};this.supportsStandardDerivatives=function(){return Wa};this.supportsCompressedTextureS3TC=function(){return ta};
this.getMaxAnisotropy=function(){return Jb};this.getPrecision=function(){return K};this.setSize=function(a,b,c){H.width=a*this.devicePixelRatio;H.height=b*this.devicePixelRatio;1!==this.devicePixelRatio&&!1!==c&&(H.style.width=a+"px",H.style.height=b+"px");this.setViewport(0,0,H.width,H.height)};this.setViewport=function(a,b,c,d){Fa=void 0!==a?a:0;Ga=void 0!==b?b:0;Ba=void 0!==c?c:H.width;xa=void 0!==d?d:H.height;j.viewport(Fa,Ga,Ba,xa)};this.setScissor=function(a,b,c,d){j.scissor(a,b,c,d)};this.enableScissorTest=
function(a){a?j.enable(j.SCISSOR_TEST):j.disable(j.SCISSOR_TEST)};this.setClearColor=function(a,b){T.set(a);ea=void 0!==b?b:1;j.clearColor(T.r,T.g,T.b,ea)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return T};this.getClearAlpha=function(){return ea};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=j.COLOR_BUFFER_BIT;if(void 0===b||b)d|=j.DEPTH_BUFFER_BIT;
if(void 0===c||c)d|=j.STENCIL_BUFFER_BIT;j.clear(d)};this.clearColor=function(){j.clear(j.COLOR_BUFFER_BIT)};this.clearDepth=function(){j.clear(j.DEPTH_BUFFER_BIT)};this.clearStencil=function(){j.clear(j.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){oa=null;Ea=za=
wa=ca=ba=-1;Za=!0;Aa=sa=-1;this.shadowMapPlugin.update(a,b)};var Lb=function(a){a=a.target;a.removeEventListener("dispose",Lb);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){var b=a.attributes,c;for(c in b)void 0!==b[c].buffer&&j.deleteBuffer(b[c].buffer);I.info.memory.geometries--}else if(void 0!==a.geometryGroups)for(b in a.geometryGroups){c=a.geometryGroups[b];if(void 0!==c.numMorphTargets)for(var d=0,e=c.numMorphTargets;d<e;d++)j.deleteBuffer(c.__webglMorphTargetsBuffers[d]);if(void 0!==
c.numMorphNormals){d=0;for(e=c.numMorphNormals;d<e;d++)j.deleteBuffer(c.__webglMorphNormalsBuffers[d])}Db(c)}else Db(a)},Bb=function(a){a=a.target;a.removeEventListener("dispose",Bb);a.image&&a.image.__webglTextureCube?j.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,j.deleteTexture(a.__webglTexture));I.info.memory.textures--},Mb=function(a){a=a.target;a.removeEventListener("dispose",Mb);if(a&&a.__webglTexture)if(j.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=
0;6>b;b++)j.deleteFramebuffer(a.__webglFramebuffer[b]),j.deleteRenderbuffer(a.__webglRenderbuffer[b]);else j.deleteFramebuffer(a.__webglFramebuffer),j.deleteRenderbuffer(a.__webglRenderbuffer);I.info.memory.textures--},Cb=function(a){a=a.target;a.removeEventListener("dispose",Cb);Eb(a)},Db=function(a){void 0!==a.__webglVertexBuffer&&j.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&j.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&j.deleteBuffer(a.__webglTangentBuffer);
void 0!==a.__webglColorBuffer&&j.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&j.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&j.deleteBuffer(a.__webglUV2Buffer);void 0!==a.__webglSkinIndicesBuffer&&j.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&j.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&j.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&j.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&
j.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)j.deleteBuffer(a.__webglCustomAttributesList[b].buffer);I.info.memory.geometries--},Eb=function(a){var b=a.program;if(void 0!==b){a.program=void 0;var c,d,e=!1,a=0;for(c=P.length;a<c;a++)if(d=P[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=P.length;a<c;a++)d=P[a],d.program!==b&&e.push(d);P=e;j.deleteProgram(b);I.info.memory.programs--}}};
this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=j.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=j.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=j.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=j.createBuffer());a.hasPositions&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,a.positionArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.position),
j.vertexAttribPointer(b.attributes.position,3,j.FLOAT,!1,0,0));if(a.hasNormals){j.bindBuffer(j.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,k,l,m,n,p,q=3*a.count;for(p=0;p<q;p+=9)n=a.normalArray,d=n[p],e=n[p+1],f=n[p+2],g=n[p+3],i=n[p+4],l=n[p+5],h=n[p+6],k=n[p+7],m=n[p+8],d=(d+g+h)/3,e=(e+i+k)/3,f=(f+l+m)/3,n[p]=d,n[p+1]=e,n[p+2]=f,n[p+3]=d,n[p+4]=e,n[p+5]=f,n[p+6]=d,n[p+7]=e,n[p+8]=f}j.bufferData(j.ARRAY_BUFFER,a.normalArray,j.DYNAMIC_DRAW);j.enableVertexAttribArray(b.attributes.normal);
j.vertexAttribPointer(b.attributes.normal,3,j.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglUvBuffer),j.bufferData(j.ARRAY_BUFFER,a.uvArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.uv),j.vertexAttribPointer(b.attributes.uv,2,j.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(j.bindBuffer(j.ARRAY_BUFFER,a.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,a.colorArray,j.DYNAMIC_DRAW),j.enableVertexAttribArray(b.attributes.color),j.vertexAttribPointer(b.attributes.color,
3,j.FLOAT,!1,0,0));j.drawArrays(j.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var i,k,l,m;i=z(a,b,c,d,f);b=i.attributes;a=e.attributes;c=!1;i=16777215*e.id+2*i.id+(d.wireframe?1:0);i!==za&&(za=i,c=!0);c&&h();if(f instanceof THREE.Mesh)if(f=a.index){e=e.offsets;1<e.length&&(c=!0);for(var n=0,p=e.length;n<p;n++){var q=e[n].index;if(c){for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,
m,j.FLOAT,!1,0,4*q*m)):d.defaultAttributeValues&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,f.buffer)}j.drawElements(j.TRIANGLES,e[n].count,j.UNSIGNED_SHORT,2*e[n].start);I.info.render.calls++;I.info.render.vertices+=e[n].count;I.info.render.faces+=e[n].count/3}}else{if(c)for(k in b)"index"!==k&&(l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,
j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k]))));d=e.attributes.position;j.drawArrays(j.TRIANGLES,0,d.numItems/3);I.info.render.calls++;I.info.render.vertices+=d.numItems/3;I.info.render.faces+=d.numItems/3/3}else if(f instanceof
THREE.ParticleSystem){if(c)for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));d=a.position;j.drawArrays(j.POINTS,0,d.numItems/3);I.info.render.calls++;I.info.render.points+=d.numItems/
3}else if(f instanceof THREE.Line){if(c)for(k in b)l=b[k],i=a[k],0<=l&&(i?(m=i.itemSize,j.bindBuffer(j.ARRAY_BUFFER,i.buffer),g(l),j.vertexAttribPointer(l,m,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&d.defaultAttributeValues[k]&&(2===d.defaultAttributeValues[k].length?j.vertexAttrib2fv(l,d.defaultAttributeValues[k]):3===d.defaultAttributeValues[k].length&&j.vertexAttrib3fv(l,d.defaultAttributeValues[k])));k=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES;B(d.linewidth);d=a.position;j.drawArrays(k,0,
d.numItems/3);I.info.render.calls++;I.info.render.points+=d.numItems}}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var i,l,c=z(a,b,c,d,f),a=c.attributes,b=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==za&&(za=c,b=!0);b&&h();if(!d.morphTargets&&0<=a.position)b&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),g(a.position),j.vertexAttribPointer(a.position,3,j.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(j.bindBuffer(j.ARRAY_BUFFER,
e.__webglMorphTargetsBuffers[f.morphTargetBase]),g(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0)):0<=c.position&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglVertexBuffer),g(c.position),j.vertexAttribPointer(c.position,3,j.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var m=0;l=f.morphTargetForcedOrder;for(i=f.morphTargetInfluences;m<d.numSupportedMorphTargets&&m<l.length;)0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[l[m]]),g(c["morphTarget"+m]),
j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[l[m]]),g(c["morphNormal"+m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[l[m]],m++}else{l=[];i=f.morphTargetInfluences;var n,p=i.length;for(n=0;n<p;n++)m=i[n],0<m&&l.push([m,n]);l.length>d.numSupportedMorphTargets?(l.sort(k),l.length=d.numSupportedMorphTargets):l.length>d.numSupportedMorphNormals?
l.sort(k):0===l.length&&l.push([0,0]);for(m=0;m<d.numSupportedMorphTargets;)l[m]?(n=l[m][1],0<=c["morphTarget"+m]&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[n]),g(c["morphTarget"+m]),j.vertexAttribPointer(c["morphTarget"+m],3,j.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[n]),g(c["morphNormal"+m]),j.vertexAttribPointer(c["morphNormal"+m],3,j.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=i[n]):f.__webglMorphTargetInfluences[m]=
0,m++}null!==d.program.uniforms.morphTargetInfluences&&j.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(b){if(e.__webglCustomAttributesList){i=0;for(l=e.__webglCustomAttributesList.length;i<l;i++)c=e.__webglCustomAttributesList[i],0<=a[c.buffer.belongsToAttribute]&&(j.bindBuffer(j.ARRAY_BUFFER,c.buffer),g(a[c.buffer.belongsToAttribute]),j.vertexAttribPointer(a[c.buffer.belongsToAttribute],c.size,j.FLOAT,!1,0,0))}0<=a.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?
(j.bindBuffer(j.ARRAY_BUFFER,e.__webglColorBuffer),g(a.color),j.vertexAttribPointer(a.color,3,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib3fv(a.color,d.defaultAttributeValues.color));0<=a.normal&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglNormalBuffer),g(a.normal),j.vertexAttribPointer(a.normal,3,j.FLOAT,!1,0,0));0<=a.tangent&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglTangentBuffer),g(a.tangent),j.vertexAttribPointer(a.tangent,4,j.FLOAT,!1,0,0));0<=a.uv&&(f.geometry.faceVertexUvs[0]?(j.bindBuffer(j.ARRAY_BUFFER,
e.__webglUVBuffer),g(a.uv),j.vertexAttribPointer(a.uv,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv,d.defaultAttributeValues.uv));0<=a.uv2&&(f.geometry.faceVertexUvs[1]?(j.bindBuffer(j.ARRAY_BUFFER,e.__webglUV2Buffer),g(a.uv2),j.vertexAttribPointer(a.uv2,2,j.FLOAT,!1,0,0)):d.defaultAttributeValues&&j.vertexAttrib2fv(a.uv2,d.defaultAttributeValues.uv2));d.skinning&&(0<=a.skinIndex&&0<=a.skinWeight)&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),g(a.skinIndex),j.vertexAttribPointer(a.skinIndex,
4,j.FLOAT,!1,0,0),j.bindBuffer(j.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),g(a.skinWeight),j.vertexAttribPointer(a.skinWeight,4,j.FLOAT,!1,0,0));0<=a.lineDistance&&(j.bindBuffer(j.ARRAY_BUFFER,e.__webglLineDistanceBuffer),g(a.lineDistance),j.vertexAttribPointer(a.lineDistance,1,j.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(B(d.wireframeLinewidth),b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),j.drawElements(j.LINES,e.__webglLineCount,j.UNSIGNED_SHORT,0)):(b&&j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,
e.__webglFaceBuffer),j.drawElements(j.TRIANGLES,e.__webglFaceCount,j.UNSIGNED_SHORT,0)),I.info.render.calls++,I.info.render.vertices+=e.__webglFaceCount,I.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?j.LINE_STRIP:j.LINES,B(d.linewidth),j.drawArrays(f,0,e.__webglLineCount),I.info.render.calls++):f instanceof THREE.ParticleSystem&&(j.drawArrays(j.POINTS,0,e.__webglParticleCount),I.info.render.calls++,I.info.render.points+=e.__webglParticleCount)}};this.render=
function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e,f,g,h,k=a.__lights,m=a.fog;Ea=-1;Za=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);V.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ya.setFromMatrix(V);this.autoUpdateObjects&&this.initWebGLObjects(a);l(this.renderPluginsPre,a,b);I.info.render.calls=0;I.info.render.vertices=
0;I.info.render.faces=0;I.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);h=a.__webglObjects;d=0;for(e=h.length;d<e;d++)if(f=h[d],g=f.object,f.id=d,f.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof THREE.ParticleSystem)||!g.frustumCulled||ya.intersectsObject(g))){var q=g;q._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,q.matrixWorld);q._normalMatrix.getNormalMatrix(q._modelViewMatrix);
var q=f,r=q.buffer,t=void 0,s=t=void 0,s=q.object.material;if(s instanceof THREE.MeshFaceMaterial)t=r.materialIndex,t=s.materials[t],t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);else if(t=s)t.transparent?(q.transparent=t,q.opaque=null):(q.opaque=t,q.transparent=null);f.render=!0;!0===this.sortObjects&&(null!==g.renderDepth?f.z=g.renderDepth:(ja.setFromMatrixPosition(g.matrixWorld),ja.applyProjection(V),f.z=ja.z))}this.sortObjects&&h.sort(i);h=a.__webglObjectsImmediate;
d=0;for(e=h.length;d<e;d++)f=h[d],g=f.object,g.visible&&(g._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,g.matrixWorld),g._normalMatrix.getNormalMatrix(g._modelViewMatrix),g=f.object.material,g.transparent?(f.transparent=g,f.opaque=null):(f.opaque=g,f.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),x(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),
n(a.__webglObjects,!1,"",b,k,m,!0,d),p(a.__webglObjectsImmediate,"",b,k,m,!1,d)):(d=null,this.setBlending(THREE.NoBlending),n(a.__webglObjects,!0,"opaque",b,k,m,!1,d),p(a.__webglObjectsImmediate,"opaque",b,k,m,!1,d),n(a.__webglObjects,!1,"transparent",b,k,m,!0,d),p(a.__webglObjectsImmediate,"transparent",b,k,m,!0,d));l(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(j.bindTexture(j.TEXTURE_CUBE_MAP,
c.__webglTexture),j.generateMipmap(j.TEXTURE_CUBE_MAP),j.bindTexture(j.TEXTURE_CUBE_MAP,null)):(j.bindTexture(j.TEXTURE_2D,c.__webglTexture),j.generateMipmap(j.TEXTURE_2D),j.bindTexture(j.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=z(a,b,c,d,e);za=-1;I.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,j,ya):e.render(function(a){I.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||
(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;)t(a.__objectsAdded[0],a),a.__objectsAdded.splice(0,1);for(;a.__objectsRemoved.length;)u(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1);for(var b=0,g=a.__webglObjects.length;b<g;b++){var h=a.__webglObjects[b].object;void 0===h.__webglInit&&(void 0!==h.__webglActive&&u(h,a),t(h,a));var i=h,l=i.geometry,n=void 0,p=void 0,r=void 0;if(l instanceof THREE.BufferGeometry){var s=
j.DYNAMIC_DRAW,v=!l.dynamic,z=l.attributes,y=void 0,x=void 0;for(y in z)x=z[y],x.needsUpdate&&("index"===y?(j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,x.buffer),j.bufferData(j.ELEMENT_ARRAY_BUFFER,x.array,s)):(j.bindBuffer(j.ARRAY_BUFFER,x.buffer),j.bufferData(j.ARRAY_BUFFER,x.array,s)),x.needsUpdate=!1),v&&!x.dynamic&&(x.array=null)}else if(i instanceof THREE.Mesh){for(var B=0,C=l.geometryGroupsList.length;B<C;B++)if(n=l.geometryGroupsList[B],r=d(i,n),l.buffersNeedUpdate&&c(n,i),p=r.attributes&&m(r),l.verticesNeedUpdate||
l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||p){var w=n,D=i,F=j.DYNAMIC_DRAW,E=!l.dynamic,G=r;if(w.__inittedArrays){var H=e(G),L=G.vertexColors?G.vertexColors:!1,N=f(G),O=H===THREE.SmoothShading,A=void 0,I=void 0,Q=void 0,K=void 0,P=void 0,U=void 0,T=void 0,W=void 0,oa=void 0,va=void 0,sa=void 0,Y=void 0,Z=void 0,X=void 0,Ea=void 0,Ta=void 0,ba=void 0,da=void 0,ca=void 0,za=void 0,Ja=void 0,ea=void 0,fa=void 0,ha=void 0,
Ha=void 0,la=void 0,Aa=void 0,qa=void 0,ua=void 0,Ia=void 0,Fa=void 0,Ba=void 0,Ka=void 0,Ga=void 0,ia=void 0,Na=void 0,ta=void 0,wa=void 0,Ma=void 0,Oa=void 0,xa=0,ya=0,Pa=0,Ua=0,Va=0,ib=0,Ya=0,La=0,eb=0,ra=0,Ca=0,M=0,Xa=void 0,jb=w.__vertexArray,Za=w.__uvArray,db=w.__uv2Array,Wa=w.__normalArray,$a=w.__tangentArray,kb=w.__colorArray,ab=w.__skinIndexArray,bb=w.__skinWeightArray,hb=w.__morphTargetsArrays,xb=w.__morphNormalsArrays,tb=w.__webglCustomAttributesList,J=void 0,Nb=w.__faceArray,ub=w.__lineArray,
Qa=D.geometry,Bb=Qa.elementsNeedUpdate,Ab=Qa.uvsNeedUpdate,Jb=Qa.normalsNeedUpdate,Kb=Qa.tangentsNeedUpdate,Lb=Qa.colorsNeedUpdate,Mb=Qa.morphTargetsNeedUpdate,bc=Qa.vertices,aa=w.faces3,lb=Qa.faces,Cb=Qa.faceVertexUvs[0],Db=Qa.faceVertexUvs[1],cc=Qa.skinIndices,Ob=Qa.skinWeights,Pb=Qa.morphTargets,Eb=Qa.morphNormals;if(Qa.verticesNeedUpdate){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=bc[K.a],Z=bc[K.b],X=bc[K.c],jb[ya]=Y.x,jb[ya+1]=Y.y,jb[ya+2]=Y.z,jb[ya+3]=Z.x,jb[ya+4]=Z.y,jb[ya+5]=Z.z,jb[ya+6]=X.x,
jb[ya+7]=X.y,jb[ya+8]=X.z,ya+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglVertexBuffer);j.bufferData(j.ARRAY_BUFFER,jb,F)}if(Mb){ia=0;for(Na=Pb.length;ia<Na;ia++){A=Ca=0;for(I=aa.length;A<I;A++)Ma=aa[A],K=lb[Ma],Y=Pb[ia].vertices[K.a],Z=Pb[ia].vertices[K.b],X=Pb[ia].vertices[K.c],ta=hb[ia],ta[Ca]=Y.x,ta[Ca+1]=Y.y,ta[Ca+2]=Y.z,ta[Ca+3]=Z.x,ta[Ca+4]=Z.y,ta[Ca+5]=Z.z,ta[Ca+6]=X.x,ta[Ca+7]=X.y,ta[Ca+8]=X.z,G.morphNormals&&(O?(Oa=Eb[ia].vertexNormals[Ma],da=Oa.a,ca=Oa.b,za=Oa.c):za=ca=da=Eb[ia].faceNormals[Ma],
wa=xb[ia],wa[Ca]=da.x,wa[Ca+1]=da.y,wa[Ca+2]=da.z,wa[Ca+3]=ca.x,wa[Ca+4]=ca.y,wa[Ca+5]=ca.z,wa[Ca+6]=za.x,wa[Ca+7]=za.y,wa[Ca+8]=za.z),Ca+=9;j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphTargetsBuffers[ia]);j.bufferData(j.ARRAY_BUFFER,hb[ia],F);G.morphNormals&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglMorphNormalsBuffers[ia]),j.bufferData(j.ARRAY_BUFFER,xb[ia],F))}}if(Ob.length){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],ha=Ob[K.a],Ha=Ob[K.b],la=Ob[K.c],bb[ra]=ha.x,bb[ra+1]=ha.y,bb[ra+2]=ha.z,bb[ra+3]=ha.w,
bb[ra+4]=Ha.x,bb[ra+5]=Ha.y,bb[ra+6]=Ha.z,bb[ra+7]=Ha.w,bb[ra+8]=la.x,bb[ra+9]=la.y,bb[ra+10]=la.z,bb[ra+11]=la.w,Aa=cc[K.a],qa=cc[K.b],ua=cc[K.c],ab[ra]=Aa.x,ab[ra+1]=Aa.y,ab[ra+2]=Aa.z,ab[ra+3]=Aa.w,ab[ra+4]=qa.x,ab[ra+5]=qa.y,ab[ra+6]=qa.z,ab[ra+7]=qa.w,ab[ra+8]=ua.x,ab[ra+9]=ua.y,ab[ra+10]=ua.z,ab[ra+11]=ua.w,ra+=12;0<ra&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinIndicesBuffer),j.bufferData(j.ARRAY_BUFFER,ab,F),j.bindBuffer(j.ARRAY_BUFFER,w.__webglSkinWeightsBuffer),j.bufferData(j.ARRAY_BUFFER,
bb,F))}if(Lb&&L){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],T=K.vertexColors,W=K.color,3===T.length&&L===THREE.VertexColors?(Ja=T[0],ea=T[1],fa=T[2]):fa=ea=Ja=W,kb[eb]=Ja.r,kb[eb+1]=Ja.g,kb[eb+2]=Ja.b,kb[eb+3]=ea.r,kb[eb+4]=ea.g,kb[eb+5]=ea.b,kb[eb+6]=fa.r,kb[eb+7]=fa.g,kb[eb+8]=fa.b,eb+=9;0<eb&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,kb,F))}if(Kb&&Qa.hasTangents){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],oa=K.vertexTangents,Ea=oa[0],Ta=oa[1],ba=oa[2],$a[Ya]=Ea.x,
$a[Ya+1]=Ea.y,$a[Ya+2]=Ea.z,$a[Ya+3]=Ea.w,$a[Ya+4]=Ta.x,$a[Ya+5]=Ta.y,$a[Ya+6]=Ta.z,$a[Ya+7]=Ta.w,$a[Ya+8]=ba.x,$a[Ya+9]=ba.y,$a[Ya+10]=ba.z,$a[Ya+11]=ba.w,Ya+=12;j.bindBuffer(j.ARRAY_BUFFER,w.__webglTangentBuffer);j.bufferData(j.ARRAY_BUFFER,$a,F)}if(Jb&&H){A=0;for(I=aa.length;A<I;A++)if(K=lb[aa[A]],P=K.vertexNormals,U=K.normal,3===P.length&&O)for(Ia=0;3>Ia;Ia++)Ba=P[Ia],Wa[ib]=Ba.x,Wa[ib+1]=Ba.y,Wa[ib+2]=Ba.z,ib+=3;else for(Ia=0;3>Ia;Ia++)Wa[ib]=U.x,Wa[ib+1]=U.y,Wa[ib+2]=U.z,ib+=3;j.bindBuffer(j.ARRAY_BUFFER,
w.__webglNormalBuffer);j.bufferData(j.ARRAY_BUFFER,Wa,F)}if(Ab&&Cb&&N){A=0;for(I=aa.length;A<I;A++)if(Q=aa[A],va=Cb[Q],void 0!==va)for(Ia=0;3>Ia;Ia++)Ka=va[Ia],Za[Pa]=Ka.x,Za[Pa+1]=Ka.y,Pa+=2;0<Pa&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUVBuffer),j.bufferData(j.ARRAY_BUFFER,Za,F))}if(Ab&&Db&&N){A=0;for(I=aa.length;A<I;A++)if(Q=aa[A],sa=Db[Q],void 0!==sa)for(Ia=0;3>Ia;Ia++)Ga=sa[Ia],db[Ua]=Ga.x,db[Ua+1]=Ga.y,Ua+=2;0<Ua&&(j.bindBuffer(j.ARRAY_BUFFER,w.__webglUV2Buffer),j.bufferData(j.ARRAY_BUFFER,db,
F))}if(Bb){A=0;for(I=aa.length;A<I;A++)Nb[Va]=xa,Nb[Va+1]=xa+1,Nb[Va+2]=xa+2,Va+=3,ub[La]=xa,ub[La+1]=xa+1,ub[La+2]=xa,ub[La+3]=xa+2,ub[La+4]=xa+1,ub[La+5]=xa+2,La+=6,xa+=3;j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglFaceBuffer);j.bufferData(j.ELEMENT_ARRAY_BUFFER,Nb,F);j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,w.__webglLineBuffer);j.bufferData(j.ELEMENT_ARRAY_BUFFER,ub,F)}if(tb){Ia=0;for(Fa=tb.length;Ia<Fa;Ia++)if(J=tb[Ia],J.__original.needsUpdate){M=0;if(1===J.size)if(void 0===J.boundTo||"vertices"===
J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],J.array[M]=J.value[K.a],J.array[M+1]=J.value[K.b],J.array[M+2]=J.value[K.c],M+=3}else{if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],J.array[M]=Xa,J.array[M+1]=Xa,J.array[M+2]=Xa,M+=3}}else if(2===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Z.x,J.array[M+3]=Z.y,J.array[M+4]=X.x,J.array[M+
5]=X.y,M+=6}else{if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Z.x,J.array[M+3]=Z.y,J.array[M+4]=X.x,J.array[M+5]=X.y,M+=6}}else if(3===J.size){var na;na="c"===J.type?["r","g","b"]:["x","y","z"];if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=
Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}else if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}else if("faceVertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],Y=Xa[0],Z=Xa[1],X=Xa[2],J.array[M]=
Y[na[0]],J.array[M+1]=Y[na[1]],J.array[M+2]=Y[na[2]],J.array[M+3]=Z[na[0]],J.array[M+4]=Z[na[1]],J.array[M+5]=Z[na[2]],J.array[M+6]=X[na[0]],J.array[M+7]=X[na[1]],J.array[M+8]=X[na[2]],M+=9}}else if(4===J.size)if(void 0===J.boundTo||"vertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)K=lb[aa[A]],Y=J.value[K.a],Z=J.value[K.b],X=J.value[K.c],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+
9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}else if("faces"===J.boundTo){A=0;for(I=aa.length;A<I;A++)X=Z=Y=Xa=J.value[aa[A]],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}else if("faceVertices"===J.boundTo){A=0;for(I=aa.length;A<I;A++)Xa=J.value[aa[A]],Y=Xa[0],Z=Xa[1],X=Xa[2],J.array[M]=Y.x,J.array[M+1]=Y.y,J.array[M+2]=Y.z,J.array[M+
3]=Y.w,J.array[M+4]=Z.x,J.array[M+5]=Z.y,J.array[M+6]=Z.z,J.array[M+7]=Z.w,J.array[M+8]=X.x,J.array[M+9]=X.y,J.array[M+10]=X.z,J.array[M+11]=X.w,M+=12}j.bindBuffer(j.ARRAY_BUFFER,J.buffer);j.bufferData(j.ARRAY_BUFFER,J.array,F)}}E&&(delete w.__inittedArrays,delete w.__colorArray,delete w.__normalArray,delete w.__tangentArray,delete w.__uvArray,delete w.__uv2Array,delete w.__faceArray,delete w.__vertexArray,delete w.__lineArray,delete w.__skinIndexArray,delete w.__skinWeightArray)}}l.verticesNeedUpdate=
!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;r.attributes&&q(r)}else if(i instanceof THREE.Line){r=d(i,l);p=r.attributes&&m(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||p){var cb=l,Qb=j.DYNAMIC_DRAW,Fb=void 0,Gb=void 0,Hb=void 0,Rb=void 0,ma=void 0,Sb=void 0,hc=cb.vertices,ic=cb.colors,jc=cb.lineDistances,Xb=hc.length,Yb=ic.length,Zb=jc.length,Tb=cb.__vertexArray,
Ub=cb.__colorArray,kc=cb.__lineDistanceArray,$b=cb.colorsNeedUpdate,ac=cb.lineDistancesNeedUpdate,dc=cb.__webglCustomAttributesList,Vb=void 0,lc=void 0,Da=void 0,yb=void 0,Ra=void 0,ka=void 0;if(cb.verticesNeedUpdate){for(Fb=0;Fb<Xb;Fb++)Rb=hc[Fb],ma=3*Fb,Tb[ma]=Rb.x,Tb[ma+1]=Rb.y,Tb[ma+2]=Rb.z;j.bindBuffer(j.ARRAY_BUFFER,cb.__webglVertexBuffer);j.bufferData(j.ARRAY_BUFFER,Tb,Qb)}if($b){for(Gb=0;Gb<Yb;Gb++)Sb=ic[Gb],ma=3*Gb,Ub[ma]=Sb.r,Ub[ma+1]=Sb.g,Ub[ma+2]=Sb.b;j.bindBuffer(j.ARRAY_BUFFER,cb.__webglColorBuffer);
j.bufferData(j.ARRAY_BUFFER,Ub,Qb)}if(ac){for(Hb=0;Hb<Zb;Hb++)kc[Hb]=jc[Hb];j.bindBuffer(j.ARRAY_BUFFER,cb.__webglLineDistanceBuffer);j.bufferData(j.ARRAY_BUFFER,kc,Qb)}if(dc){Vb=0;for(lc=dc.length;Vb<lc;Vb++)if(ka=dc[Vb],ka.needsUpdate&&(void 0===ka.boundTo||"vertices"===ka.boundTo)){ma=0;yb=ka.value.length;if(1===ka.size)for(Da=0;Da<yb;Da++)ka.array[Da]=ka.value[Da];else if(2===ka.size)for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ma+=2;else if(3===ka.size)if("c"===ka.type)for(Da=
0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.r,ka.array[ma+1]=Ra.g,ka.array[ma+2]=Ra.b,ma+=3;else for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ka.array[ma+2]=Ra.z,ma+=3;else if(4===ka.size)for(Da=0;Da<yb;Da++)Ra=ka.value[Da],ka.array[ma]=Ra.x,ka.array[ma+1]=Ra.y,ka.array[ma+2]=Ra.z,ka.array[ma+3]=Ra.w,ma+=4;j.bindBuffer(j.ARRAY_BUFFER,ka.buffer);j.bufferData(j.ARRAY_BUFFER,ka.array,Qb)}}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;r.attributes&&
q(r)}else if(i instanceof THREE.ParticleSystem){r=d(i,l);p=r.attributes&&m(r);if(l.verticesNeedUpdate||l.colorsNeedUpdate||i.sortParticles||p){var mb=l,ec=j.DYNAMIC_DRAW,Ib=i,Sa=void 0,nb=void 0,ob=void 0,S=void 0,pb=void 0,sb=void 0,Wb=mb.vertices,fc=Wb.length,gc=mb.colors,mc=gc.length,vb=mb.__vertexArray,wb=mb.__colorArray,qb=mb.__sortArray,nc=mb.verticesNeedUpdate,oc=mb.colorsNeedUpdate,rb=mb.__webglCustomAttributesList,fb=void 0,zb=void 0,$=void 0,gb=void 0,ga=void 0,R=void 0;if(Ib.sortParticles){pa.copy(V);
pa.multiply(Ib.matrixWorld);for(Sa=0;Sa<fc;Sa++)ob=Wb[Sa],ja.copy(ob),ja.applyProjection(pa),qb[Sa]=[ja.z,Sa];qb.sort(k);for(Sa=0;Sa<fc;Sa++)ob=Wb[qb[Sa][1]],S=3*Sa,vb[S]=ob.x,vb[S+1]=ob.y,vb[S+2]=ob.z;for(nb=0;nb<mc;nb++)S=3*nb,sb=gc[qb[nb][1]],wb[S]=sb.r,wb[S+1]=sb.g,wb[S+2]=sb.b;if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],void 0===R.boundTo||"vertices"===R.boundTo)if(S=0,gb=R.value.length,1===R.size)for($=0;$<gb;$++)pb=qb[$][1],R.array[$]=R.value[pb];else if(2===R.size)for($=0;$<gb;$++)pb=
qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,S+=2;else if(3===R.size)if("c"===R.type)for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.r,R.array[S+1]=ga.g,R.array[S+2]=ga.b,S+=3;else for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,S+=3;else if(4===R.size)for($=0;$<gb;$++)pb=qb[$][1],ga=R.value[pb],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,R.array[S+3]=ga.w,S+=4}}else{if(nc)for(Sa=0;Sa<fc;Sa++)ob=Wb[Sa],S=3*Sa,vb[S]=ob.x,
vb[S+1]=ob.y,vb[S+2]=ob.z;if(oc)for(nb=0;nb<mc;nb++)sb=gc[nb],S=3*nb,wb[S]=sb.r,wb[S+1]=sb.g,wb[S+2]=sb.b;if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],R.needsUpdate&&(void 0===R.boundTo||"vertices"===R.boundTo))if(gb=R.value.length,S=0,1===R.size)for($=0;$<gb;$++)R.array[$]=R.value[$];else if(2===R.size)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,S+=2;else if(3===R.size)if("c"===R.type)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.r,R.array[S+1]=ga.g,R.array[S+2]=ga.b,S+=
3;else for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,S+=3;else if(4===R.size)for($=0;$<gb;$++)ga=R.value[$],R.array[S]=ga.x,R.array[S+1]=ga.y,R.array[S+2]=ga.z,R.array[S+3]=ga.w,S+=4}}if(nc||Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,mb.__webglVertexBuffer),j.bufferData(j.ARRAY_BUFFER,vb,ec);if(oc||Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,mb.__webglColorBuffer),j.bufferData(j.ARRAY_BUFFER,wb,ec);if(rb){fb=0;for(zb=rb.length;fb<zb;fb++)if(R=rb[fb],R.needsUpdate||
Ib.sortParticles)j.bindBuffer(j.ARRAY_BUFFER,R.buffer),j.bufferData(j.ARRAY_BUFFER,R.array,ec)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;r.attributes&&q(r)}}};this.initMaterial=function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",Cb);var i,k,l,m,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof
THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?n="dashed":a instanceof THREE.ParticleSystemMaterial&&(n="particle_basic");if(n){var p=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(p.uniforms);a.vertexShader=p.vertexShader;a.fragmentShader=p.fragmentShader}var q=e=0,r=0,t=p=0;for(f=b.length;t<f;t++)g=b[t],g.onlyShadow||(g instanceof THREE.DirectionalLight&&e++,g instanceof THREE.PointLight&&q++,g instanceof THREE.SpotLight&&r++,g instanceof THREE.HemisphereLight&&
p++);f=q;g=r;h=p;r=p=0;for(q=b.length;r<q;r++)t=b[r],t.castShadow&&(t instanceof THREE.SpotLight&&p++,t instanceof THREE.DirectionalLight&&!t.shadowCascade&&p++);m=p;tb&&d&&d.useVertexTexture?l=1024:(b=j.getParameter(j.MAX_VERTEX_UNIFORM_VECTORS),b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);a:{var r=
a.fragmentShader,q=a.vertexShader,p=a.uniforms,b=a.attributes,t=a.defines,c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:l,useVertexTexture:tb&&d&&d.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,
maxDirLights:e,maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},d=a.index0AttributeName,s,u,v;e=[];n?e.push(n):(e.push(r),e.push(q));for(u in t)e.push(u),e.push(t[u]);for(s in c)e.push(s),
e.push(c[s]);n=e.join();s=0;for(u=P.length;s<u;s++)if(e=P[s],e.code===n){e.usedTimes++;k=e.program;break a}s="SHADOWMAP_TYPE_BASIC";c.shadowMapType===THREE.PCFShadowMap?s="SHADOWMAP_TYPE_PCF":c.shadowMapType===THREE.PCFSoftShadowMap&&(s="SHADOWMAP_TYPE_PCF_SOFT");u=[];for(v in t)e=t[v],!1!==e&&(e="#define "+v+" "+e,u.push(e));e=u.join("\n");v=j.createProgram();u=["precision "+K+" float;","precision "+K+" int;",e,xb?"#define VERTEX_TEXTURES":"",I.gammaInput?"#define GAMMA_INPUT":"",I.gammaOutput?"#define GAMMA_OUTPUT":
"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?
"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",c.sizeAttenuation?
"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
s=["precision "+K+" float;","precision "+K+" int;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",e,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",I.gammaInput?"#define GAMMA_INPUT":"",I.gammaOutput?"#define GAMMA_OUTPUT":"",c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&
c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":
"",c.shadowMapEnabled?"#define "+s:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=L("vertex",u+q);s=L("fragment",s+r);j.attachShader(v,u);j.attachShader(v,s);d&&j.bindAttribLocation(v,0,d);j.linkProgram(v);j.getProgramParameter(v,j.LINK_STATUS)||(console.error("Could not initialise shader\nVALIDATE_STATUS: "+j.getProgramParameter(v,j.VALIDATE_STATUS)+", gl error ["+j.getError()+
"]"),console.error("Program Info Log: "+j.getProgramInfoLog(v)));j.deleteShader(s);j.deleteShader(u);v.uniforms={};v.attributes={};var w;s="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?(s.push("boneTexture"),s.push("boneTextureWidth"),s.push("boneTextureHeight")):s.push("boneGlobalMatrices");for(w in p)s.push(w);w=s;s=0;for(u=w.length;s<u;s++)p=w[s],v.uniforms[p]=j.getUniformLocation(v,p);s="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
for(w=0;w<c.maxMorphTargets;w++)s.push("morphTarget"+w);for(w=0;w<c.maxMorphNormals;w++)s.push("morphNormal"+w);for(k in b)s.push(k);k=s;w=0;for(b=k.length;w<b;w++)s=k[w],v.attributes[s]=j.getAttribLocation(v,s);v.id=Q++;P.push({program:v,code:n,usedTimes:1});I.info.memory.programs=P.length;k=v}a.program=k;w=a.program.attributes;if(a.morphTargets){a.numSupportedMorphTargets=0;b="morphTarget";for(k=0;k<this.maxMorphTargets;k++)v=b+k,0<=w[v]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=
0;b="morphNormal";for(k=0;k<this.maxMorphNormals;k++)v=b+k,0<=w[v]&&a.numSupportedMorphNormals++}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?j.disable(j.CULL_FACE):(b===THREE.FrontFaceDirectionCW?j.frontFace(j.CW):j.frontFace(j.CCW),a===THREE.CullFaceBack?j.cullFace(j.BACK):a===THREE.CullFaceFront?j.cullFace(j.FRONT):j.cullFace(j.FRONT_AND_BACK),j.enable(j.CULL_FACE))};this.setMaterialFaces=function(a){var b=
a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;sa!==b&&(b?j.disable(j.CULL_FACE):j.enable(j.CULL_FACE),sa=b);Aa!==a&&(a?j.frontFace(j.CW):j.frontFace(j.CCW),Aa=a)};this.setDepthTest=function(a){ca!==a&&(a?j.enable(j.DEPTH_TEST):j.disable(j.DEPTH_TEST),ca=a)};this.setDepthWrite=function(a){wa!==a&&(j.depthMask(a),wa=a)};this.setBlending=function(a,b,c,d){a!==ba&&(a===THREE.NoBlending?j.disable(j.BLEND):a===THREE.AdditiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.SRC_ALPHA,
j.ONE)):a===THREE.SubtractiveBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(j.enable(j.BLEND),j.blendEquation(j.FUNC_ADD),j.blendFunc(j.ZERO,j.SRC_COLOR)):a===THREE.CustomBlending?j.enable(j.BLEND):(j.enable(j.BLEND),j.blendEquationSeparate(j.FUNC_ADD,j.FUNC_ADD),j.blendFuncSeparate(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA,j.ONE,j.ONE_MINUS_SRC_ALPHA)),ba=a);if(a===THREE.CustomBlending){if(b!==W&&(j.blendEquation(D(b)),W=b),
c!==Ka||d!==U)j.blendFunc(D(c),D(d)),Ka=c,U=d}else U=Ka=W=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Bb),a.__webglTexture=j.createTexture(),I.info.memory.textures++);j.activeTexture(j.TEXTURE0+b);j.bindTexture(j.TEXTURE_2D,a.__webglTexture);j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,a.flipY);j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);j.pixelStorei(j.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=0===(c.width&
c.width-1)&&0===(c.height&c.height-1),e=D(a.format),f=D(a.type);w(j.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture){h=0;for(i=g.length;h<i;h++)c=g[h],a.format!==THREE.RGBAFormat?j.compressedTexImage2D(j.TEXTURE_2D,h,e,c.width,c.height,
0,c.data):j.texImage2D(j.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data)}else if(0<g.length&&d){h=0;for(i=g.length;h<i;h++)c=g[h],j.texImage2D(j.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else j.texImage2D(j.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&j.generateMipmap(j.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else j.activeTexture(j.TEXTURE0+b),j.bindTexture(j.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===
a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",Mb);a.__webglTexture=j.createTexture();I.info.memory.textures++;var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=D(a.format),e=D(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];j.bindTexture(j.TEXTURE_CUBE_MAP,a.__webglTexture);w(j.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=j.createFramebuffer();a.__webglRenderbuffer[f]=j.createRenderbuffer();
j.texImage2D(j.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=j.TEXTURE_CUBE_MAP_POSITIVE_X+f;j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer[f]);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,h,g.__webglTexture,0);E(a.__webglRenderbuffer[f],a)}c&&j.generateMipmap(j.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=j.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:j.createRenderbuffer(),j.bindTexture(j.TEXTURE_2D,a.__webglTexture),
w(j.TEXTURE_2D,a,c),j.texImage2D(j.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=j.TEXTURE_2D,j.bindFramebuffer(j.FRAMEBUFFER,a.__webglFramebuffer),j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&j.framebufferRenderbuffer(j.FRAMEBUFFER,j.DEPTH_STENCIL_ATTACHMENT,j.RENDERBUFFER,a.__webglRenderbuffer):
E(a.__webglRenderbuffer,a),c&&j.generateMipmap(j.TEXTURE_2D);b?j.bindTexture(j.TEXTURE_CUBE_MAP,null):j.bindTexture(j.TEXTURE_2D,null);j.bindRenderbuffer(j.RENDERBUFFER,null);j.bindFramebuffer(j.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Ba,a=xa,d=Fa,e=Ga);b!==va&&(j.bindFramebuffer(j.FRAMEBUFFER,b),j.viewport(d,e,c,a),va=b);Va=c;La=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;a.shareDepthFrom=this.shareDepthFrom;
return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace3=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.normalModelView=new THREE.Vector3;this.vertexNormalsLength=0;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsModelView=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.material=this.color=null;this.uvs=[[]];this.z=
0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};THREE.GeometryUtils={merge:function(a,b,c){var d,e,f=a.vertices.length,g=b instanceof THREE.Mesh?b.geometry:b,h=a.vertices,i=g.vertices,k=a.faces,l=g.faces,a=a.faceVertexUvs[0],g=g.faceVertexUvs[0];void 0===c&&(c=0);b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,e=(new THREE.Matrix3).getNormalMatrix(d));for(var b=0,n=i.length;b<n;b++){var p=i[b].clone();d&&p.applyMatrix4(d);h.push(p)}b=0;for(n=l.length;b<n;b++){var p=l[b],t,r,m=p.vertexNormals,q=p.vertexColors;t=new THREE.Face3(p.a+
f,p.b+f,p.c+f);t.normal.copy(p.normal);e&&t.normal.applyMatrix3(e).normalize();h=0;for(i=m.length;h<i;h++)r=m[h].clone(),e&&r.applyMatrix3(e).normalize(),t.vertexNormals.push(r);t.color.copy(p.color);h=0;for(i=q.length;h<i;h++)r=q[h],t.vertexColors.push(r.clone());t.materialIndex=p.materialIndex+c;t.centroid.copy(p.centroid);d&&t.centroid.applyMatrix4(d);k.push(t)}b=0;for(n=g.length;b<n;b++){c=g[b];d=[];h=0;for(i=c.length;h<i;h++)d.push(new THREE.Vector2(c[h].x,c[h].y));a.push(d)}},randomPointInTriangle:function(){var a=
new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3,f=THREE.Math.random16(),g=THREE.Math.random16();1<f+g&&(f=1-f,g=1-g);var h=1-f-g;e.copy(b);e.multiplyScalar(f);a.copy(c);a.multiplyScalar(g);e.add(a);a.copy(d);a.multiplyScalar(h);e.add(a);return e}}(),randomPointInFace:function(a,b){return THREE.GeometryUtils.randomPointInTriangle(b.vertices[a.a],b.vertices[a.b],b.vertices[a.c])},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-
c)/2);return k[e]>a?b(c,e-1):k[e]<a?b(e+1,d):e}return b(0,k.length-1)}var d,e,f=a.faces,g=a.vertices,h=f.length,i=0,k=[],l,n,p;for(e=0;e<h;e++)d=f[e],l=g[d.a],n=g[d.b],p=g[d.c],d._area=THREE.GeometryUtils.triangleArea(l,n,p),i+=d._area,k[e]=i;d=[];for(e=0;e<b;e++)g=THREE.Math.random16()*i,g=c(g),d[e]=THREE.GeometryUtils.randomPointInFace(f[g],a,!0);return d},triangleArea:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){a.subVectors(d,c);b.subVectors(e,c);a.cross(b);return 0.5*
a.length()}}(),center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.addVectors(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},triangulateQuads:function(a){var b,c,d,e,f=[],g=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faces.length;b<c;b++){f.push(a.faces[b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)g[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceVertexUvs=g;a.computeCentroids();
a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()}};THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c){var d=new THREE.ImageLoader;d.crossOrigin=this.crossOrigin;var e=new THREE.Texture(void 0,b),b=d.load(a,function(){e.needsUpdate=!0;c&&c(e)});e.image=b;e.sourceFile=a;return e},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=a.height;
e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,g=a.length;b<g;++b){var h=new Image;e[b]=h;h.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};h.onerror=d;h.crossOrigin=this.crossOrigin;h.src=a[b]}return f},loadCompressedTextureCube:function(a,b,c,d){var e=
[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var g=0,h=a.length;g<h;++g){var i={};e[g]=i;var k=new XMLHttpRequest;k.onload=b(k,i);k.onerror=d;i=a[g];k.open("GET",i,!0);k.responseType=
"arraybuffer";k.send(null)}else k=new XMLHttpRequest,k.onload=function(){var a=THREE.ImageUtils.parseDDS(k.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var g=0;g<a.mipmapCount;g++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+g]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},k.onerror=d,k.open("GET",a,!0),k.responseType="arraybuffer",k.send(null);return f},loadDDSTexture:function(a,
b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;var g=new XMLHttpRequest;g.onload=function(){var a=THREE.ImageUtils.parseDDS(g.response,!0);if(a.isCubemap)for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var l=0;l<a.mipmapCount;l++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+l]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,
f.mipmaps=a.mipmaps;f.format=a.format;f.needsUpdate=!0;c&&c(f)};g.onerror=d;g.open("GET",a,!0);g.responseType="arraybuffer";g.send(null);return f},parseDDS:function(a,b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),g=c("DXT5"),h=new Int32Array(a,0,31);if(542327876!==h[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!h[20]&
4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),d;var i=h[21],k=!1;switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case g:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:if(32==h[22]&&h[23]&16711680&&h[24]&65280&&h[25]&255&&h[26]&4278190080)k=!0,e=64,d.format=THREE.RGBAFormat;else return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&
255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;h[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,h[7]));d.isCubemap=h[28]&512?!0:!1;d.width=h[4];d.height=h[3];for(var h=h[1]+4,f=d.width,g=d.height,i=d.isCubemap?6:1,l=0;l<i;l++){for(var n=0;n<d.mipmapCount;n++){if(k){var p;p=f;for(var t=g,r=4*p*t,m=new Uint8Array(a,h,r),r=new Uint8Array(r),q=0,u=0,s=0;s<t;s++)for(var v=0;v<p;v++){var z=m[u];u++;var G=m[u];u++;var N=m[u];u++;var C=m[u];u++;r[q]=N;q++;r[q]=G;q++;r[q]=z;q++;r[q]=C;q++}p=r;t=p.length}else t=
Math.max(4,f)/4*Math.max(4,g)/4*e,p=new Uint8Array(a,h,t);d.mipmaps.push({data:p,width:f,height:g});h+=t;f=Math.max(0.5*f,1);g=Math.max(0.5*g,1)}f=d.width;g=d.height}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,i=g.createImageData(d,e),k=i.data,l=0;l<
d;l++)for(var n=0;n<e;n++){var p=0>n-1?0:n-1,t=n+1>e-1?e-1:n+1,r=0>l-1?0:l-1,m=l+1>d-1?d-1:l+1,q=[],u=[0,0,h[4*(n*d+l)]/255*b];q.push([-1,0,h[4*(n*d+r)]/255*b]);q.push([-1,-1,h[4*(p*d+r)]/255*b]);q.push([0,-1,h[4*(p*d+l)]/255*b]);q.push([1,-1,h[4*(p*d+m)]/255*b]);q.push([1,0,h[4*(n*d+m)]/255*b]);q.push([1,1,h[4*(t*d+m)]/255*b]);q.push([0,1,h[4*(t*d+l)]/255*b]);q.push([-1,1,h[4*(t*d+r)]/255*b]);p=[];r=q.length;for(t=0;t<r;t++){var m=q[t],s=q[(t+1)%r],m=[m[0]-u[0],m[1]-u[1],m[2]-u[2]],s=[s[0]-u[0],
s[1]-u[1],s[2]-u[2]];p.push(c([m[1]*s[2]-m[2]*s[1],m[2]*s[0]-m[0]*s[2],m[0]*s[1]-m[1]*s[0]]))}q=[0,0,0];for(t=0;t<p.length;t++)q[0]+=p[t][0],q[1]+=p[t][1],q[2]+=p[t][2];q[0]/=p.length;q[1]/=p.length;q[2]/=p.length;u=4*(n*d+l);k[u]=255*((q[0]+1)/2)|0;k[u+1]=255*((q[1]+1)/2)|0;k[u+2]=255*q[2]|0;k[u+3]=255}g.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g),c=Math.floor(255*c.b),h=0;h<d;h++)e[3*h]=f,e[3*h+
1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,g=[],a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,i,k,l,n,p,t,r,m,q,u=b.glyphs[a]||b.glyphs["?"];if(u){if(u.o){b=u._cachedOutline||(u._cachedOutline=u.o.split(" "));k=b.length;for(a=0;a<k;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;l=b[a++]*c;e.moveTo(i,l);break;case "l":i=b[a++]*c+d;l=b[a++]*c;e.lineTo(i,l);break;case "q":i=b[a++]*
c+d;l=b[a++]*c;t=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(t,r,i,l);if(g=f[f.length-1]){n=g.x;p=g.y;g=1;for(h=this.divisions;g<=h;g++){var s=g/h;THREE.Shape.Utils.b2(s,n,t,i);THREE.Shape.Utils.b2(s,p,r,l)}}break;case "b":if(i=b[a++]*c+d,l=b[a++]*c,t=b[a++]*c+d,r=b[a++]*-c,m=b[a++]*c+d,q=b[a++]*-c,e.bezierCurveTo(i,l,t,r,m,q),g=f[f.length-1]){n=g.x;p=g.y;g=1;for(h=this.divisions;g<=h;g++)s=g/h,THREE.Shape.Utils.b3(s,n,t,m,i),THREE.Shape.Utils.b3(s,p,r,q,l)}}}return{offset:u.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],i,k,l;if(0<b(a))for(k=0;k<e;k++)g[k]=k;else for(k=0;k<e;k++)g[k]=e-1-k;var n=2*e;for(k=e-1;2<e;){if(0>=n--){console.log("Warning, unable to triangulate polygon!");break}i=k;e<=i&&(i=0);k=i+1;e<=k&&(k=0);l=k+1;e<=l&&(l=0);var p;a:{var t=p=void 0,r=void 0,m=void 0,q=void 0,u=void 0,s=void 0,v=void 0,z=
void 0,t=a[g[i]].x,r=a[g[i]].y,m=a[g[k]].x,q=a[g[k]].y,u=a[g[l]].x,s=a[g[l]].y;if(1E-10>(m-t)*(s-r)-(q-r)*(u-t))p=!1;else{var G=void 0,N=void 0,C=void 0,B=void 0,x=void 0,F=void 0,L=void 0,w=void 0,E=void 0,y=void 0,E=w=L=z=v=void 0,G=u-m,N=s-q,C=t-u,B=r-s,x=m-t,F=q-r;for(p=0;p<e;p++)if(!(p===i||p===k||p===l))if(v=a[g[p]].x,z=a[g[p]].y,L=v-t,w=z-r,E=v-m,y=z-q,v-=u,z-=s,E=G*y-N*E,L=x*w-F*L,w=C*z-B*v,-1E-10<=E&&-1E-10<=w&&-1E-10<=L){p=!1;break a}p=!0}}if(p){f.push([a[g[i]],a[g[k]],a[g[l]]]);h.push([g[i],
g[k],g[l]]);i=k;for(l=k+1;l<e;i++,l++)g[i]=g[l];e--;n=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,i;g<=h;)if(d=Math.floor(g+(h-g)/2),i=c[d]-f,0>i)g=d+1;else if(0<i)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,i,k,l,n=a[0]instanceof THREE.Vector3;l=n?new THREE.Vector3:new THREE.Vector2;i=0;for(k=a.length;i<k;i++)h=a[i],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),n&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),l.add(h);a={minX:e,minY:f,maxX:b,maxY:c,centroid:l.divideScalar(k)};n&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,i;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,i=g/c.maxX,i=b.getUtoTmapping(i,g),g=b.getPoint(i),i=b.getTangent(i),i.set(-i.y,i.x).multiplyScalar(h),f.x=g.x+i.x,f.y=g.y+i.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(i);i=i.getPoint(1);h.push(i.x);h.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,g,h,i,k,l,n,p,t,r,m;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];i=f[3];n=f[0];p=f[1];0<c.length?(g=c[c.length-1],t=g.x,
r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)m=f/a,g=THREE.Shape.Utils.b2(m,t,n,h),m=THREE.Shape.Utils.b2(m,r,p,i),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];i=f[5];n=f[0];p=f[1];k=f[2];l=f[3];0<c.length?(g=c[c.length-1],t=g.x,r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)m=f/a,g=THREE.Shape.Utils.b3(m,t,n,k,h),m=THREE.Shape.Utils.b3(m,r,p,l,i),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;m=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;m=m.concat(f[0]);m=new THREE.SplineCurve(m);for(f=1;f<=g;f++)c.push(m.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];i=f[1];p=f[2];k=f[3];g=f[4];n=!!f[5];t=g-k;r=2*a;for(f=1;f<=r;f++)m=f/r,n||(m=1-m),m=k+m*t,g=h+p*Math.cos(m),m=i+p*Math.sin(m),c.push(new THREE.Vector2(g,m));break;case THREE.PathActions.ELLIPSE:h=f[0];i=f[1];p=f[2];l=f[3];k=f[4];g=f[5];n=!!f[6];t=g-k;r=2*a;for(f=1;f<=r;f++)m=f/r,n||
(m=1-m),m=k+m*t,g=h+p*Math.cos(m),m=i+l*Math.sin(m),c.push(new THREE.Vector2(g,m))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=this.actions.length;b<c;b++)d=this.actions[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);if(0==f.length)return[];var h;e=[];if(1==f.length)return d=f[0],h=new THREE.Shape,h.actions=d.actions,h.curves=d.curves,e.push(h),e;b=!THREE.Shape.Utils.isClockWise(f[0].getPoints());if(a?!b:b){h=new THREE.Shape;b=0;for(c=
f.length;b<c;b++)d=f[b],g=THREE.Shape.Utils.isClockWise(d.getPoints()),(g=a?!g:g)?(h.actions=d.actions,h.curves=d.curves,e.push(h),h=new THREE.Shape):h.holes.push(d)}else{h=void 0;b=0;for(c=f.length;b<c;b++)d=f[b],g=THREE.Shape.Utils.isClockWise(d.getPoints()),(g=a?!g:g)?(h&&e.push(h),h=new THREE.Shape,h.actions=d.actions,h.curves=d.curves):h.holes.push(d);e.push(h)}return e};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,g,h,i,k,l,n,p,t,r=[];for(i=0;i<b.length;i++){k=b[i];Array.prototype.push.apply(d,k);f=Number.POSITIVE_INFINITY;for(e=0;e<k.length;e++){p=k[e];t=[];for(n=0;n<c.length;n++)l=c[n],l=p.distanceToSquared(l),t.push(l),l<f&&(f=l,g=e,h=n)}e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:k.length-1;var m=[k[g],c[h],c[e]];n=THREE.FontUtils.Triangulate.area(m);var q=[k[g],k[f],c[h]];p=THREE.FontUtils.Triangulate.area(q);t=h;l=g;h+=1;g+=-1;0>
h&&(h+=c.length);h%=c.length;0>g&&(g+=k.length);g%=k.length;e=0<=h-1?h-1:c.length-1;f=0<=g-1?g-1:k.length-1;m=[k[g],c[h],c[e]];m=THREE.FontUtils.Triangulate.area(m);q=[k[g],k[f],c[h]];q=THREE.FontUtils.Triangulate.area(q);n+p>m+q&&(h=t,g=l,0>h&&(h+=c.length),h%=c.length,0>g&&(g+=k.length),g%=k.length,e=0<=h-1?h-1:c.length-1,f=0<=g-1?g-1:k.length-1);n=c.slice(0,h);p=c.slice(h);t=k.slice(g);l=k.slice(0,g);f=[k[g],k[f],c[h]];r.push([k[g],c[h],c[e]]);r.push(f);c=n.concat(t).concat(l).concat(p)}return{shape:c,
isolatedPts:r,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,g,h,i,k={};f=0;for(g=d.length;f<g;f++)i=d[f].x+":"+d[f].y,void 0!==k[i]&&console.log("Duplicate point",i),k[i]=f;f=0;for(g=c.length;f<g;f++){h=c[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=k[i],void 0!==i&&(h[d]=i)}f=0;for(g=e.length;f<g;f++){h=e[f];for(d=0;3>d;d++)i=h[d].x+":"+h[d].y,i=k[i],void 0!==i&&(h[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var h=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){h={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var k=a.hierarchy[c].keys[d].morphTargets[i];h[k]=-1}a.hierarchy[c].usedMorphTargets=h;
for(d=0;d<a.hierarchy[c].keys.length;d++){var l={};for(k in h){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===k){l[k]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(l[k]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=l}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;
f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,g,h,i,k,l;for(l=this.currentTime+=a*this.timeScale;this.currentTime>this.data.length;)this.currentTime-=this.data.length;k=this.currentTime%=this.data.length;parseInt(Math.min(k*this.data.fps,this.data.length*this.data.fps),10);for(var n=0,p=this.hierarchy.length;n<p;n++){a=this.hierarchy[n];i=a.animationCache;for(var t=0;3>t;t++){c=b[t];g=i.prevKey[c];h=i.nextKey[c];if(h.time<=l){if(k<=l)if(this.loop){g=
this.data.hierarchy[n].keys[0];for(h=this.getNextKeyWith(c,n,1);null!==h&&h.time<k&&h.index>g.index;)g=h,h=this.getNextKeyWith(c,n,h.index+1)}else{this.stop();return}else{do g=h,h=this.getNextKeyWith(c,n,h.index+1);while(null!==h&&h.time<k&&h.index>g.index)}i.prevKey[c]=g;i.nextKey[c]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(k-g.time)/(h.time-g.time);e=g[c];f=h[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+n),d=0>d?0:1;if("pos"===c)if(c=
a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",n,g.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",n,h.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],
this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),this.target.set(d[0],d[1],d[2]),this.target.sub(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,g,h,i,k;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];h=a[c[1]];i=a[c[2]];k=a[c[3]];c=e*e;g=e*c;d[0]=this.interpolate(f[0],h[0],i[0],k[0],e,c,g);d[1]=this.interpolate(f[1],h[1],i[1],k[1],e,c,g);d[2]=this.interpolate(f[2],h[2],i[2],k[2],e,c,g);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)e=this.hierarchy[c],f=this.data.hierarchy[c],void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix),e=this.data.hierarchy[c].keys,
e.length&&(f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,g,h,i;h=this.currentTime+=a*this.timeScale;g=this.currentTime%=this.data.length;g<this.startTimeMs&&(g=this.currentTime=this.startTimeMs+g);e=parseInt(Math.min(g*this.data.fps,this.data.length*this.data.fps),10);if((i=g<h)&&!this.loop){for(var a=0,k=this.hierarchy.length;a<k;a++){var l=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=l.length-1;e=this.hierarchy[a];if(l.length){for(l=
0;l<f.length;l++)g=f[l],(h=this.getPrevKeyWith(g,a,d))&&h.apply(g);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(g<this.startTime)){a=0;for(k=this.hierarchy.length;a<k;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var l=b.keys,n=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(l.length){this.JITCompile&&n&&(d instanceof
THREE.Bone?d.skinMatrix=n.originalMatrix:d.matrix=n.originalMatrix);b=n.prevKey;c=n.nextKey;if(b&&c){if(c.time<=h){if(i&&this.loop){b=l[0];for(c=l[1];c.time<g;)b=c,c=l[b.index+1]}else if(!i)for(var p=l.length-1;c.time<g&&c.index!==p;)b=c,c=l[b.index+1];n.prevKey=b;n.nextKey=c}c.time>=g?b.interpolate(c,g):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,p=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=p;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,g){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,g);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.radius=a=a||50;this.segments=b=void 0!==b?Math.max(3,b):8;this.thetaStart=c=void 0!==c?c:0;this.thetaLength=d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,i=c+e/b*d;h.x=a*Math.cos(i);h.y=a*Math.sin(i);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,
e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,m){var q,u=h.widthSegments,s=h.heightSegments,v=e/2,z=f/2,G=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)q="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)q="y",s=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)q="x",u=h.depthSegments;var N=u+1,C=s+1,B=e/u,x=f/s,F=new THREE.Vector3;F[q]=0<g?1:-1;for(e=0;e<C;e++)for(f=0;f<N;f++){var L=new THREE.Vector3;L[a]=(f*B-v)*c;L[b]=(e*x-z)*d;L[q]=g;h.vertices.push(L)}for(e=
0;e<s;e++)for(f=0;f<u;f++)z=f+N*e,a=f+N*(e+1),b=f+1+N*(e+1),c=f+1+N*e,d=new THREE.Vector2(f/u,1-e/s),g=new THREE.Vector2(f/u,1-(e+1)/s),q=new THREE.Vector2((f+1)/u,1-(e+1)/s),v=new THREE.Vector2((f+1)/u,1-e/s),z=new THREE.Face3(z+G,a+G,c+G),z.normal.copy(F),z.vertexNormals.push(F.clone(),F.clone(),F.clone()),z.materialIndex=m,h.faces.push(z),h.faceVertexUvs[0].push([d,g,v]),z=new THREE.Face3(a+G,b+G,c+G),z.normal.copy(F),z.vertexNormals.push(F.clone(),F.clone(),F.clone()),z.materialIndex=m,h.faces.push(z),
h.faceVertexUvs[0].push([g.clone(),q,v.clone()])}THREE.Geometry.call(this);var h=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;a=this.width/2;b=this.height/2;c=this.depth/2;g("z","y",-1,-1,this.depth,this.height,a,0);g("z","y",1,-1,this.depth,this.height,-a,1);g("x","z",1,1,this.width,this.depth,b,2);g("x","z",1,-1,this.width,this.depth,-b,3);g("x","y",1,-1,this.width,this.height,c,4);g("x","y",-1,-1,this.width,this.height,-c,
5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.radiusTop=a=void 0!==a?a:20;this.radiusBottom=b=void 0!==b?b:20;this.height=c=void 0!==c?c:100;this.radialSegments=d=d||8;this.heightSegments=e=e||1;this.openEnded=f=void 0!==f?f:!1;var g=c/2,h,i,k=[],l=[];for(i=0;i<=e;i++){var n=[],p=[],t=i/e,r=t*(b-a)+a;for(h=0;h<=d;h++){var m=h/d,q=new THREE.Vector3;q.x=r*Math.sin(2*m*Math.PI);q.y=-t*c+g;q.z=r*Math.cos(2*m*Math.PI);this.vertices.push(q);n.push(this.vertices.length-1);p.push(new THREE.Vector2(m,
1-t))}k.push(n);l.push(p)}c=(b-a)/c;for(h=0;h<d;h++){0!==a?(n=this.vertices[k[0][h]].clone(),p=this.vertices[k[0][h+1]].clone()):(n=this.vertices[k[1][h]].clone(),p=this.vertices[k[1][h+1]].clone());n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();p.setY(Math.sqrt(p.x*p.x+p.z*p.z)*c).normalize();for(i=0;i<e;i++){var t=k[i][h],r=k[i+1][h],m=k[i+1][h+1],q=k[i][h+1],u=n.clone(),s=n.clone(),v=p.clone(),z=p.clone(),G=l[i][h].clone(),N=l[i+1][h].clone(),C=l[i+1][h+1].clone(),B=l[i][h+1].clone();this.faces.push(new THREE.Face3(t,
r,q,[u,s,z]));this.faceVertexUvs[0].push([G,N,B]);this.faces.push(new THREE.Face3(r,m,q,[s.clone(),v,z.clone()]));this.faceVertexUvs[0].push([N.clone(),C,B.clone()])}}if(!1===f&&0<a){this.vertices.push(new THREE.Vector3(0,g,0));for(h=0;h<d;h++)t=k[0][h],r=k[0][h+1],m=this.vertices.length-1,u=new THREE.Vector3(0,1,0),s=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),G=l[0][h].clone(),N=l[0][h+1].clone(),C=new THREE.Vector2(N.x,0),this.faces.push(new THREE.Face3(t,r,m,[u,s,v])),this.faceVertexUvs[0].push([G,
N,C])}if(!1===f&&0<b){this.vertices.push(new THREE.Vector3(0,-g,0));for(h=0;h<d;h++)t=k[i][h+1],r=k[i][h],m=this.vertices.length-1,u=new THREE.Vector3(0,-1,0),s=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),G=l[i][h+1].clone(),N=l[i][h].clone(),C=new THREE.Vector2(N.x,1),this.faces.push(new THREE.Face3(t,r,m,[u,s,v])),this.faceVertexUvs[0].push([G,N,C])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).add(f);i.copy(a).add(g);if(h.equals(i))return g.clone();
h.copy(b).add(f);i.copy(c).add(g);f=d.dot(g);g=i.sub(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).add(h).sub(a).clone()}function e(c,d){var e,f;for(O=c.length;0<=--O;){e=O;f=O-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*l,
g=0;g<h;g++){var i=da*g,k=da*(g+1),m=d+e+i,i=d+f+i,n=d+f+k,k=d+e+k,p=c,q=g,r=h,u=e,z=f,m=m+w,i=i+w,n=n+w,k=k+w;L.faces.push(new THREE.Face3(m,i,k,null,null,s));L.faces.push(new THREE.Face3(i,n,k,null,null,s));m=v.generateSideWallUV(L,a,p,b,m,i,n,k,q,r,u,z);L.faceVertexUvs[0].push([m[0],m[1],m[3]]);L.faceVertexUvs[0].push([m[1],m[2],m[3]])}}}function f(a,b,c){L.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=w;d+=w;e+=w;L.faces.push(new THREE.Face3(c,d,e,null,null,u));c=f?v.generateBottomUV(L,
a,b,c,d,e):v.generateTopUV(L,a,b,c,d,e);L.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,i=void 0!==b.bevelThickness?b.bevelThickness:6,k=void 0!==b.bevelSize?b.bevelSize:i-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,n=void 0!==b.bevelEnabled?b.bevelEnabled:!0,p=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,r=b.extrudePath,m,q=!1,u=b.material,s=b.extrudeMaterial,v=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,z,G,N,C;r&&(m=
r.getSpacedPoints(t),q=!0,n=!1,z=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,t,!1),G=new THREE.Vector3,N=new THREE.Vector3,C=new THREE.Vector3);n||(k=i=l=0);var B,x,F,L=this,w=this.vertices.length,p=a.extractPoints(p),E=p.shape,p=p.holes;if(r=!THREE.Shape.Utils.isClockWise(E)){E=E.reverse();x=0;for(F=p.length;x<F;x++)B=p[x],THREE.Shape.Utils.isClockWise(B)&&(p[x]=B.reverse());r=!1}var y=THREE.Shape.Utils.triangulateShape(E,p),r=E;x=0;for(F=p.length;x<F;x++)B=p[x],E=E.concat(B);
var D,H,K,A,da=E.length,ha=y.length,ua=[],O=0,T=r.length;D=T-1;for(H=O+1;O<T;O++,D++,H++)D===T&&(D=0),H===T&&(H=0),ua[O]=d(r[O],r[D],r[H]);var ea=[],I,P=ua.concat();x=0;for(F=p.length;x<F;x++){B=p[x];I=[];O=0;T=B.length;D=T-1;for(H=O+1;O<T;O++,D++,H++)D===T&&(D=0),H===T&&(H=0),I[O]=d(B[O],B[D],B[H]);ea.push(I);P=P.concat(I)}for(D=0;D<l;D++){B=D/l;K=i*(1-B);H=k*Math.sin(B*Math.PI/2);O=0;for(T=r.length;O<T;O++)A=c(r[O],ua[O],H),f(A.x,A.y,-K);x=0;for(F=p.length;x<F;x++){B=p[x];I=ea[x];O=0;for(T=B.length;O<
T;O++)A=c(B[O],I[O],H),f(A.x,A.y,-K)}}H=k;for(O=0;O<da;O++)A=n?c(E[O],P[O],H):E[O],q?(N.copy(z.normals[0]).multiplyScalar(A.x),G.copy(z.binormals[0]).multiplyScalar(A.y),C.copy(m[0]).add(N).add(G),f(C.x,C.y,C.z)):f(A.x,A.y,0);for(B=1;B<=t;B++)for(O=0;O<da;O++)A=n?c(E[O],P[O],H):E[O],q?(N.copy(z.normals[B]).multiplyScalar(A.x),G.copy(z.binormals[B]).multiplyScalar(A.y),C.copy(m[B]).add(N).add(G),f(C.x,C.y,C.z)):f(A.x,A.y,h/t*B);for(D=l-1;0<=D;D--){B=D/l;K=i*(1-B);H=k*Math.sin(B*Math.PI/2);O=0;for(T=
r.length;O<T;O++)A=c(r[O],ua[O],H),f(A.x,A.y,h+K);x=0;for(F=p.length;x<F;x++){B=p[x];I=ea[x];O=0;for(T=B.length;O<T;O++)A=c(B[O],I[O],H),q?f(A.x,A.y+m[t-1].y,m[t-1].x+K):f(A.x,A.y,h+K)}}if(n){i=0*da;for(O=0;O<ha;O++)h=y[O],g(h[2]+i,h[1]+i,h[0]+i,!0);i=da*(t+2*l);for(O=0;O<ha;O++)h=y[O],g(h[0]+i,h[1]+i,h[2]+i,!1)}else{for(O=0;O<ha;O++)h=y[O],g(h[2],h[1],h[0],!0);for(O=0;O<ha;O++)h=y[O],g(h[0]+da*t,h[1]+da*t,h[2]+da*t,!1)}h=0;e(r,h);h+=r.length;x=0;for(F=p.length;x<F;x++)B=p[x],e(B,h),h+=B.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,k=a.vertices[g].x,
l=a.vertices[g].y,g=a.vertices[g].z,n=a.vertices[h].x,p=a.vertices[h].y,a=a.vertices[h].z;return 0.01>Math.abs(c-i)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(k,1-g),new THREE.Vector2(n,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(i,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(p,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var i=e.shape,k=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=k.length;e<f;e++)g=k[e],THREE.Shape.Utils.isClockWise(g)&&(k[e]=g.reverse())}var l=THREE.Shape.Utils.triangulateShape(i,k);e=0;for(f=k.length;e<f;e++)g=k[e],
i=i.concat(g);k=i.length;f=l.length;for(e=0;e<k;e++)g=i[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)k=l[e],i=k[0]+h,g=k[1]+h,k=k[2]+h,this.faces.push(new THREE.Face3(i,g,k,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,g,k))};THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);for(var b=b||12,c=c||0,d=d||2*Math.PI,e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var i=c+g*f*d,k=Math.cos(i),l=Math.sin(i),i=0,n=a.length;i<n;i++){var p=a[i],t=new THREE.Vector3;t.x=k*p.x-l*p.y;t.y=l*p.x+k*p.y;t.z=p.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++){i=0;for(n=a.length-1;i<n;i++){var b=l=i+c*g,d=l+c,k=l+1+c,l=l+1,p=g*f,t=i*e,r=p+f,m=t+e;this.faces.push(new THREE.Face3(b,d,l));this.faceVertexUvs[0].push([new THREE.Vector2(p,
t),new THREE.Vector2(r,t),new THREE.Vector2(p,m)]);this.faces.push(new THREE.Face3(d,k,l));this.faceVertexUvs[0].push([new THREE.Vector2(r,t),new THREE.Vector2(r,m),new THREE.Vector2(p,m)])}}this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var e=a/2,f=b/2,c=this.widthSegments,d=this.heightSegments,g=c+1,h=d+1,i=this.width/c,k=this.height/d,l=new THREE.Vector3(0,0,1),a=0;a<h;a++)for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*i-e,-(a*k-f),0));for(a=0;a<d;a++)for(b=0;b<c;b++){var n=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,i=new THREE.Vector2(b/c,1-a/d),k=new THREE.Vector2(b/c,1-(a+1)/
d),p=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+1)/c,1-a/d),n=new THREE.Face3(n,e,h);n.normal.copy(l);n.vertexNormals.push(l.clone(),l.clone(),l.clone());this.faces.push(n);this.faceVertexUvs[0].push([i,k,t]);n=new THREE.Face3(e,f,h);n.normal.copy(l);n.vertexNormals.push(l.clone(),l.clone(),l.clone());this.faces.push(n);this.faceVertexUvs[0].push([k.clone(),p,t.clone()])}this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);for(var a=a||0,b=b||50,e=void 0!==e?e:0,f=void 0!==f?f:2*Math.PI,c=void 0!==c?Math.max(3,c):8,d=void 0!==d?Math.max(3,d):8,g,h=[],i=a,k=(b-a)/d,a=0;a<=d;a++){for(g=0;g<=c;g++){var l=new THREE.Vector3,n=e+g/c*f;l.x=i*Math.cos(n);l.y=i*Math.sin(n);this.vertices.push(l);h.push(new THREE.Vector2((l.x/b+1)/2,(l.y/b+1)/2))}i+=k}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++){e=a*c;for(g=0;g<=c;g++)n=g+e,f=n+a,k=n+c+a,l=n+c+1+a,this.faces.push(new THREE.Face3(f,
k,l,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[k].clone(),h[l].clone()]),f=n+a,k=n+c+1+a,l=n+1+a,this.faces.push(new THREE.Face3(f,k,l,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[k].clone(),h[l].clone()])}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,i)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.radius=a=a||50;this.widthSegments=b=Math.max(3,Math.floor(b)||8);this.heightSegments=c=Math.max(2,Math.floor(c)||6);this.phiStart=d=void 0!==d?d:0;this.phiLength=e=void 0!==e?e:2*Math.PI;this.thetaStart=f=void 0!==f?f:0;this.thetaLength=g=void 0!==g?g:Math.PI;var h,i,k=[],l=[];for(i=0;i<=c;i++){var n=[],p=[];for(h=0;h<=b;h++){var t=h/b,r=i/c,m=new THREE.Vector3;m.x=-a*Math.cos(d+t*e)*Math.sin(f+r*g);m.y=a*Math.cos(f+r*g);
m.z=a*Math.sin(d+t*e)*Math.sin(f+r*g);this.vertices.push(m);n.push(this.vertices.length-1);p.push(new THREE.Vector2(t,1-r))}k.push(n);l.push(p)}for(i=0;i<this.heightSegments;i++)for(h=0;h<this.widthSegments;h++){var b=k[i][h+1],c=k[i][h],d=k[i+1][h],e=k[i+1][h+1],f=this.vertices[b].clone().normalize(),g=this.vertices[c].clone().normalize(),n=this.vertices[d].clone().normalize(),p=this.vertices[e].clone().normalize(),t=l[i][h+1].clone(),r=l[i][h].clone(),m=l[i+1][h].clone(),q=l[i+1][h+1].clone();Math.abs(this.vertices[b].y)===
this.radius?(t.x=(t.x+r.x)/2,this.faces.push(new THREE.Face3(b,d,e,[f,n,p])),this.faceVertexUvs[0].push([t,m,q])):Math.abs(this.vertices[d].y)===this.radius?(m.x=(m.x+q.x)/2,this.faces.push(new THREE.Face3(b,c,d,[f,g,n])),this.faceVertexUvs[0].push([t,r,m])):(this.faces.push(new THREE.Face3(b,c,e,[f,g,p])),this.faceVertexUvs[0].push([t,r,q]),this.faces.push(new THREE.Face3(c,d,e,[g.clone(),n,p.clone()])),this.faceVertexUvs[0].push([r.clone(),m,q.clone()]))}this.computeCentroids();this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){var b=b||{},c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,g=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var h=new THREE.Vector3;h.x=(this.radius+this.tube*Math.cos(g))*Math.cos(f);h.y=(this.radius+this.tube*
Math.cos(g))*Math.sin(f);h.z=this.tube*Math.sin(g);this.vertices.push(h);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(h.clone().sub(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,g=(this.tubularSegments+1)*(c-1)+d,h=(this.tubularSegments+1)*c+d,i=new THREE.Face3(e,f,h,[b[e].clone(),b[f].clone(),b[h].clone()]);this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),
a[f].clone(),a[h].clone()]);i=new THREE.Face3(f,g,h,[b[f].clone(),b[g].clone(),b[h].clone()]);this.faces.push(i);this.faceVertexUvs[0].push([a[f].clone(),a[g].clone(),a[h].clone()])}this.computeCentroids();this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a),a=b/c*a,b=Math.cos(a),f=0.5*(d*(2+b))*f,g=0.5*d*(2+b)*g,d=0.5*e*d*Math.sin(a);return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=g||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);b=2*(a/this.radialSegments)*this.p*Math.PI;f=h(b,this.q,this.p,this.radius,this.heightScale);b=h(b+0.01,this.q,this.p,this.radius,this.heightScale);c.subVectors(b,f);d.addVectors(b,f);e.crossVectors(c,d);d.crossVectors(e,c);e.normalize();d.normalize();for(b=0;b<this.tubularSegments;++b){var i=2*(b/this.tubularSegments)*Math.PI,g=-this.tube*Math.cos(i),i=this.tube*Math.sin(i),k=new THREE.Vector3;k.x=f.x+g*d.x+i*e.x;k.y=f.y+g*d.y+i*e.y;k.z=f.z+g*d.z+i*e.z;this.grid[a][b]=
this.vertices.push(k)-1}}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],g=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments),i=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),k=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),l=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);
this.faces.push(new THREE.Face3(c,d,f));this.faceVertexUvs[0].push([g,i,l]);this.faces.push(new THREE.Face3(d,e,f));this.faceVertexUvs[0].push([i.clone(),k,l.clone()])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radialSegments=d||8;this.closed=e||!1;this.grid=[];var f,g,d=this.segments+1,h,i,k,e=new THREE.Vector3,l,n,b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);l=b.normals;n=b.binormals;this.tangents=b.tangents;this.normals=l;this.binormals=n;for(b=0;b<d;b++){this.grid[b]=[];c=b/(d-1);k=a.getPointAt(c);f=l[b];g=n[b];for(c=0;c<this.radialSegments;c++)h=2*(c/this.radialSegments)*
Math.PI,i=-this.radius*Math.cos(h),h=this.radius*Math.sin(h),e.copy(k),e.x+=i*f.x+h*g.x,e.y+=i*f.y+h*g.y,e.z+=i*f.z+h*g.z,this.grid[b][c]=this.vertices.push(new THREE.Vector3(e.x,e.y,e.z))-1}for(b=0;b<this.segments;b++)for(c=0;c<this.radialSegments;c++)e=this.closed?(b+1)%this.segments:b+1,l=(c+1)%this.radialSegments,a=this.grid[b][c],d=this.grid[e][c],e=this.grid[e][l],l=this.grid[b][l],n=new THREE.Vector2(b/this.segments,c/this.radialSegments),f=new THREE.Vector2((b+1)/this.segments,c/this.radialSegments),
g=new THREE.Vector2((b+1)/this.segments,(c+1)/this.radialSegments),i=new THREE.Vector2(b/this.segments,(c+1)/this.radialSegments),this.faces.push(new THREE.Face3(a,d,l)),this.faceVertexUvs[0].push([n,f,i]),this.faces.push(new THREE.Face3(d,e,l)),this.faceVertexUvs[0].push([f.clone(),g,i.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,k,l,n;this.tangents=e;this.normals=f;this.binormals=g;for(k=0;k<b;k++)l=k/(b-1),e[k]=a.getTangentAt(l),e[k].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;k=Math.abs(e[0].x);l=Math.abs(e[0].y);n=Math.abs(e[0].z);k<=a&&(a=k,d.set(1,0,0));l<=a&&(a=l,d.set(0,1,0));n<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(k=1;k<b;k++)f[k]=f[k-1].clone(),g[k]=g[k-1].clone(),h.crossVectors(e[k-1],e[k]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[k-1].dot(e[k]),-1,1)),f[k].applyMatrix4(i.makeRotationAxis(h,d))),g[k].crossVectors(e[k],f[k]);if(c){d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1));d/=b-1;0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d);for(k=1;k<b;k++)f[k].applyMatrix4(i.makeRotationAxis(e[k],d*k)),g[k].crossVectors(e[k],
f[k])}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=h.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.add(a).add(b).add(c).divideScalar(3);h.faces.push(d);d=Math.atan2(d.centroid.z,-d.centroid.x);h.faceVertexUvs[0].push([g(a.uv,a,d),g(b.uv,b,d),
g(c.uv,c,d)])}function g(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,a.y));return a.clone()}THREE.Geometry.call(this);for(var c=c||1,d=d||0,h=this,i=0,k=a.length;i<k;i++)e(new THREE.Vector3(a[i][0],a[i][1],a[i][2]));for(var l=this.vertices,a=[],i=0,k=b.length;i<k;i++){var n=l[b[i][0]],p=l[b[i][1]],t=l[b[i][2]];a[i]=new THREE.Face3(n.index,p.index,t.index,[n.clone(),p.clone(),t.clone()])}i=0;for(k=a.length;i<k;i++){p=a[i];l=d;b=Math.pow(2,
l);Math.pow(4,l);for(var l=e(h.vertices[p.a]),n=e(h.vertices[p.b]),r=e(h.vertices[p.c]),p=[],t=0;t<=b;t++){p[t]=[];for(var m=e(l.clone().lerp(r,t/b)),q=e(n.clone().lerp(r,t/b)),u=b-t,s=0;s<=u;s++)p[t][s]=0==s&&t==b?m:e(m.clone().lerp(q,s/u))}for(t=0;t<b;t++)for(s=0;s<2*(b-t)-1;s++)l=Math.floor(s/2),0==s%2?f(p[t][l+1],p[t+1][l],p[t][l]):f(p[t][l+1],p[t+1][l+1],p[t+1][l])}i=0;for(k=this.faceVertexUvs[0].length;i<k;i++)d=this.faceVertexUvs[0][i],a=d[0].x,b=d[1].x,l=d[2].x,n=Math.max(a,Math.max(b,l)),
p=Math.min(a,Math.min(b,l)),0.9<n&&0.1>p&&(0.2>a&&(d[0].x+=1),0.2>b&&(d[1].x+=1),0.2>l&&(d[2].x+=1));i=0;for(k=this.vertices.length;i<k;i++)this.vertices[i].multiplyScalar(c);this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){this.radius=a;this.detail=b;var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,i,k,l=b+1;for(g=0;g<=c;g++){k=g/c;for(h=0;h<=b;h++)i=h/b,i=a(i,k),d.push(i)}var n,p,t,r;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*l+h,d=g*l+h+1,k=(g+1)*l+h+1,i=(g+1)*l+h,n=new THREE.Vector2(h/b,g/c),p=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,i)),f.push([n,p,r]),e.push(new THREE.Face3(d,k,i)),
f.push([p.clone(),t,r.clone()]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){var a=a||1,b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a,0,0),new THREE.Vector3,new THREE.Vector3(0,a,0),new THREE.Vector3,new THREE.Vector3(0,0,a));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d,e,f){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=0.2*c);void 0===f&&(f=0.2*e);this.position=b;b=new THREE.Geometry;b.vertices.push(new THREE.Vector3(0,0,0));b.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(b,new THREE.LineBasicMaterial({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));this.cone=
new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.BoxHelper=function(a){var b=[new THREE.Vector3(1,1,1),new THREE.Vector3(-1,1,1),new THREE.Vector3(-1,-1,1),new THREE.Vector3(1,-1,1),new THREE.Vector3(1,1,-1),new THREE.Vector3(-1,1,-1),new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,-1,-1)];this.vertices=b;var c=new THREE.Geometry;c.vertices.push(b[0],b[1],b[1],b[2],b[2],b[3],b[3],b[0],b[4],b[5],b[5],b[6],b[6],b[7],b[7],b[4],b[0],b[4],b[1],b[5],b[2],b[6],b[3],b[7]);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.vertices;d[0].set(b.x,b.y,b.z);d[1].set(c.x,b.y,b.z);d[2].set(c.x,c.y,b.z);d[3].set(b.x,c.y,b.z);d[4].set(b.x,b.y,c.z);d[5].set(c.x,b.y,c.z);d[6].set(c.x,c.y,c.z);d[7].set(b.x,c.y,c.z);this.geometry.computeBoundingSphere();this.geometry.verticesNeedUpdate=!0;this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.CubeGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,i){a.set(g,h,i);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d){g=0;for(h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",
0.7,1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;var b=b||1,c=new THREE.PlaneGeometry(b,b),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Mesh(c,d);this.add(this.lightPlane);c=new THREE.Geometry;c.vertices.push(new THREE.Vector3);c.vertices.push(new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});
d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,i=a.geometry.clone();i.mergeVertices();i.computeFaceNormals();for(var k=i.vertices,i=i.faces,l=0,n=0,p=i.length;n<p;n++)for(var t=i[n],r=0;3>r;r++){d[0]=t[g[r]];d[1]=t[g[(r+1)%3]];d.sort(f);var m=d.toString();void 0===e[m]?(e[m]={vert1:d[0],vert2:d[1],face1:n,face2:void 0},l++):e[m].face2=n}h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;
f=0;for(m in e)if(g=e[m],void 0===g.face2||0.9999>i[g.face1].normal.dot(i[g.face2].normal))l=k[g.vert1],d[f++]=l.x,d[f++]=l.y,d[f++]=l.z,l=k[g.vert2],d[f++]=l.x,d[f++]=l.y,d[f++]=l.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var a=void 0!==c?c:16776960,d=void 0!==d?d:1,b=new THREE.Geometry,c=0,e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var b=this.geometry.vertices,c=this.object.geometry.faces,d=this.object.matrixWorld,e=0,f=c.length;e<f;e++){var g=c[e];a.copy(g.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);var h=2*e;b[h].copy(g.centroid).applyMatrix4(d);b[h+1].addVectors(b[h],a)}this.geometry.verticesNeedUpdate=
!0;return this}}();THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var b=void 0!==c?c:16711680,d=void 0!==d?d:1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,g=0,h=0,i=e.length;h<i;h++)for(var k=e[h],l=0,n=k.vertexNormals.length;l<n;l++){var p=k.vertexNormals[l];c[g].copy(d[k[b[l]]]).applyMatrix4(f);a.copy(p).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
a.add(c[g]);g+=1;c[g].copy(a);g+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;for(var b=void 0!==c?c:255,d=void 0!==d?d:1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,g=0,h=0,i=e.length;h<i;h++)for(var k=e[h],l=0,n=k.vertexTangents.length;l<n;l++){var p=k.vertexTangents[l];c[g].copy(d[k[b[l]]]).applyMatrix4(f);a.copy(p).transformDirection(f).multiplyScalar(this.size);a.add(c[g]);g+=1;c[g].copy(a);
g+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var i=a.geometry.vertices,k=a.geometry.faces,l=0,n=new Uint32Array(6*k.length),p=0,t=k.length;p<t;p++)for(var r=k[p],m=0;3>m;m++){d[0]=r[g[m]];d[1]=r[g[(m+1)%3]];d.sort(f);var q=d.toString();void 0===e[q]&&(n[2*l]=d[0],n[2*l+1]=d[1],e[q]=!0,l++)}h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;
p=0;for(t=l;p<t;p++)for(m=0;2>m;m++)l=i[n[2*p+m]],g=6*p+3*m,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z}else if(a.geometry instanceof THREE.BufferGeometry&&void 0!==a.geometry.attributes.index){for(var i=a.geometry.attributes.position.array,t=a.geometry.attributes.index.array,k=a.geometry.offsets,l=0,n=new Uint32Array(2*t.length),r=0,u=k.length;r<u;++r)for(var m=k[r].start,q=k[r].count,g=k[r].index,p=m,s=m+q;p<s;p+=3)for(m=0;3>m;m++)d[0]=g+t[p+m],d[1]=g+t[p+(m+1)%3],d.sort(f),q=d.toString(),void 0===e[q]&&(n[2*
l]=d[0],n[2*l+1]=d[1],e[q]=!0,l++);h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;p=0;for(t=l;p<t;p++)for(m=0;2>m;m++)g=6*p+3*m,l=3*n[2*p+m],d[g+0]=i[l],d[g+1]=i[l+1],d[g+2]=i[l+2]}else if(a.geometry instanceof THREE.BufferGeometry){i=a.geometry.attributes.position.array;l=i.length/3;n=l/3;h.addAttribute("position",Float32Array,2*l,3);d=h.attributes.position.array;p=0;for(t=n;p<t;p++)for(m=0;3>m;m++)g=18*p+6*m,n=9*p+3*m,d[g+0]=i[n],d[g+1]=i[n+1],d[g+2]=i[n+2],l=9*p+3*
((m+1)%3),d[g+3]=i[l],d[g+4]=i[l+1],d[g+5]=i[l+2]}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var i=h[1];d[i]||(d[i]={start:Infinity,end:-Infinity});h=d[i];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=i)}}for(i in d)h=d[i],this.createAnimation(i,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};THREE.LensFlarePlugin=function(){function a(a,c){var d=b.createProgram(),e=b.createShader(b.FRAGMENT_SHADER),f=b.createShader(b.VERTEX_SHADER),g="precision "+c+" float;\n";b.shaderSource(e,g+a.fragmentShader);b.shaderSource(f,g+a.vertexShader);b.compileShader(e);b.compileShader(f);b.attachShader(d,e);b.attachShader(d,f);b.linkProgram(d);return d}var b,c,d,e,f,g,h,i,k,l,n,p,t;this.init=function(r){b=r.context;c=r;d=r.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);r=0;e[r++]=-1;e[r++]=-1;
e[r++]=0;e[r++]=0;e[r++]=1;e[r++]=-1;e[r++]=1;e[r++]=0;e[r++]=1;e[r++]=1;e[r++]=1;e[r++]=1;e[r++]=-1;e[r++]=1;e[r++]=0;e[r++]=1;r=0;f[r++]=0;f[r++]=1;f[r++]=2;f[r++]=0;f[r++]=2;f[r++]=3;g=b.createBuffer();h=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,g);b.bufferData(b.ARRAY_BUFFER,e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);i=b.createTexture();k=b.createTexture();b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,
0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,k);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(l=!1,n=a(THREE.ShaderFlares.lensFlare,d)):(l=!0,n=a(THREE.ShaderFlares.lensFlareVertexTexture,d));p={};t={};p.vertex=b.getAttribLocation(n,"position");p.uv=b.getAttribLocation(n,"uv");t.renderType=b.getUniformLocation(n,"renderType");t.map=b.getUniformLocation(n,"map");t.occlusionMap=b.getUniformLocation(n,"occlusionMap");t.opacity=
b.getUniformLocation(n,"opacity");t.color=b.getUniformLocation(n,"color");t.scale=b.getUniformLocation(n,"scale");t.rotation=b.getUniformLocation(n,"rotation");t.screenPosition=b.getUniformLocation(n,"screenPosition")};this.render=function(a,d,e,f){var a=a.__webglFlares,s=a.length;if(s){var v=new THREE.Vector3,z=f/e,G=0.5*e,N=0.5*f,C=16/f,B=new THREE.Vector2(C*z,C),x=new THREE.Vector3(1,1,0),F=new THREE.Vector2(1,1),L=t,C=p;b.useProgram(n);b.enableVertexAttribArray(p.vertex);b.enableVertexAttribArray(p.uv);
b.uniform1i(L.occlusionMap,0);b.uniform1i(L.map,1);b.bindBuffer(b.ARRAY_BUFFER,g);b.vertexAttribPointer(C.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(C.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,h);b.disable(b.CULL_FACE);b.depthMask(!1);var w,E,y,D,H;for(w=0;w<s;w++)if(C=16/f,B.set(C*z,C),D=a[w],v.set(D.matrixWorld.elements[12],D.matrixWorld.elements[13],D.matrixWorld.elements[14]),v.applyMatrix4(d.matrixWorldInverse),v.applyProjection(d.projectionMatrix),x.copy(v),F.x=x.x*G+G,
F.y=x.y*N+N,l||0<F.x&&F.x<e&&0<F.y&&F.y<f){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,F.x-8,F.y-8,16,16,0);b.uniform1i(L.renderType,0);b.uniform2f(L.scale,B.x,B.y);b.uniform3f(L.screenPosition,x.x,x.y,x.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,k);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,F.x-8,F.y-8,16,16,0);b.uniform1i(L.renderType,1);b.disable(b.DEPTH_TEST);
b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);D.positionScreen.copy(x);D.customUpdateCallback?D.customUpdateCallback(D):D.updateLensFlares();b.uniform1i(L.renderType,2);b.enable(b.BLEND);E=0;for(y=D.lensFlares.length;E<y;E++)H=D.lensFlares[E],0.001<H.opacity&&0.001<H.scale&&(x.x=H.x,x.y=H.y,x.z=H.z,C=H.size*H.scale/f,B.x=C*z,B.y=C,b.uniform3f(L.screenPosition,x.x,x.y,x.z),b.uniform2f(L.scale,B.x,B.y),b.uniform1f(L.rotation,H.rotation),b.uniform1f(L.opacity,
H.opacity),b.uniform3f(L.color,H.color.r,H.color.g,H.color.b),c.setBlending(H.blending,H.blendEquation,H.blendSrc,H.blendDst),c.setTexture(H.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4,i=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(n,p){var t,r,m,q,u,s,v,z,G,N=[];q=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);t=0;for(r=n.__lights.length;t<r;t++)if(m=n.__lights[t],m.castShadow)if(m instanceof THREE.DirectionalLight&&m.shadowCascade)for(u=0;u<m.shadowCascadeCount;u++){var C;if(m.shadowCascadeArray[u])C=m.shadowCascadeArray[u];else{G=m;v=u;C=new THREE.DirectionalLight;C.isVirtual=!0;C.onlyShadow=!0;C.castShadow=!0;C.shadowCameraNear=G.shadowCameraNear;C.shadowCameraFar=G.shadowCameraFar;C.shadowCameraLeft=G.shadowCameraLeft;C.shadowCameraRight=G.shadowCameraRight;
C.shadowCameraBottom=G.shadowCameraBottom;C.shadowCameraTop=G.shadowCameraTop;C.shadowCameraVisible=G.shadowCameraVisible;C.shadowDarkness=G.shadowDarkness;C.shadowBias=G.shadowCascadeBias[v];C.shadowMapWidth=G.shadowCascadeWidth[v];C.shadowMapHeight=G.shadowCascadeHeight[v];C.pointsWorld=[];C.pointsFrustum=[];z=C.pointsWorld;s=C.pointsFrustum;for(var B=0;8>B;B++)z[B]=new THREE.Vector3,s[B]=new THREE.Vector3;z=G.shadowCascadeNearZ[v];G=G.shadowCascadeFarZ[v];s[0].set(-1,-1,z);s[1].set(1,-1,z);s[2].set(-1,
1,z);s[3].set(1,1,z);s[4].set(-1,-1,G);s[5].set(1,-1,G);s[6].set(-1,1,G);s[7].set(1,1,G);C.originalCamera=p;s=new THREE.Gyroscope;s.position=m.shadowCascadeOffset;s.add(C);s.add(C.target);p.add(s);m.shadowCascadeArray[u]=C;console.log("Created virtualLight",C)}v=m;z=u;G=v.shadowCascadeArray[z];G.position.copy(v.position);G.target.position.copy(v.target.position);G.lookAt(G.target);G.shadowCameraVisible=v.shadowCameraVisible;G.shadowDarkness=v.shadowDarkness;G.shadowBias=v.shadowCascadeBias[z];s=v.shadowCascadeNearZ[z];
v=v.shadowCascadeFarZ[z];G=G.pointsFrustum;G[0].z=s;G[1].z=s;G[2].z=s;G[3].z=s;G[4].z=v;G[5].z=v;G[6].z=v;G[7].z=v;N[q]=C;q++}else N[q]=m,q++;t=0;for(r=N.length;t<r;t++){m=N[t];m.shadowMap||(u=THREE.LinearFilter,b.shadowMapType===THREE.PCFSoftShadowMap&&(u=THREE.NearestFilter),m.shadowMap=new THREE.WebGLRenderTarget(m.shadowMapWidth,m.shadowMapHeight,{minFilter:u,magFilter:u,format:THREE.RGBAFormat}),m.shadowMapSize=new THREE.Vector2(m.shadowMapWidth,m.shadowMapHeight),m.shadowMatrix=new THREE.Matrix4);
if(!m.shadowCamera){if(m instanceof THREE.SpotLight)m.shadowCamera=new THREE.PerspectiveCamera(m.shadowCameraFov,m.shadowMapWidth/m.shadowMapHeight,m.shadowCameraNear,m.shadowCameraFar);else if(m instanceof THREE.DirectionalLight)m.shadowCamera=new THREE.OrthographicCamera(m.shadowCameraLeft,m.shadowCameraRight,m.shadowCameraTop,m.shadowCameraBottom,m.shadowCameraNear,m.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}n.add(m.shadowCamera);!0===n.autoUpdate&&n.updateMatrixWorld()}m.shadowCameraVisible&&
!m.cameraHelper&&(m.cameraHelper=new THREE.CameraHelper(m.shadowCamera),m.shadowCamera.add(m.cameraHelper));if(m.isVirtual&&C.originalCamera==p){u=p;q=m.shadowCamera;s=m.pointsFrustum;G=m.pointsWorld;i.set(Infinity,Infinity,Infinity);k.set(-Infinity,-Infinity,-Infinity);for(v=0;8>v;v++)z=G[v],z.copy(s[v]),THREE.ShadowMapPlugin.__projector.unprojectVector(z,u),z.applyMatrix4(q.matrixWorldInverse),z.x<i.x&&(i.x=z.x),z.x>k.x&&(k.x=z.x),z.y<i.y&&(i.y=z.y),z.y>k.y&&(k.y=z.y),z.z<i.z&&(i.z=z.z),z.z>k.z&&
(k.z=z.z);q.left=i.x;q.right=k.x;q.top=k.y;q.bottom=i.y;q.updateProjectionMatrix()}q=m.shadowMap;s=m.shadowMatrix;u=m.shadowCamera;u.position.setFromMatrixPosition(m.matrixWorld);l.setFromMatrixPosition(m.target.matrixWorld);u.lookAt(l);u.updateMatrixWorld();u.matrixWorldInverse.getInverse(u.matrixWorld);m.cameraHelper&&(m.cameraHelper.visible=m.shadowCameraVisible);m.shadowCameraVisible&&m.cameraHelper.update();s.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);s.multiply(u.projectionMatrix);s.multiply(u.matrixWorldInverse);
h.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(q);b.clear();G=n.__webglObjects;m=0;for(q=G.length;m<q;m++)if(v=G[m],s=v.object,v.render=!1,s.visible&&s.castShadow&&(!(s instanceof THREE.Mesh||s instanceof THREE.ParticleSystem)||!s.frustumCulled||g.intersectsObject(s)))s._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,s.matrixWorld),v.render=!0;m=0;for(q=G.length;m<q;m++)v=G[m],v.render&&(s=v.object,v=v.buffer,B=s.material instanceof THREE.MeshFaceMaterial?
s.material.materials[0]:s.material,z=0<s.geometry.morphTargets.length&&B.morphTargets,B=s instanceof THREE.SkinnedMesh&&B.skinning,z=s.customDepthMaterial?s.customDepthMaterial:B?z?f:e:z?d:c,v instanceof THREE.BufferGeometry?b.renderBufferDirect(u,n.__lights,null,z,v,s):b.renderBuffer(u,n.__lights,null,z,v,s));G=n.__webglObjectsImmediate;m=0;for(q=G.length;m<q;m++)v=G[m],s=v.object,s.visible&&s.castShadow&&(s._modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,s.matrixWorld),b.renderImmediateObject(u,
n.__lights,null,c,s))}t=b.getClearColor();r=b.getClearAlpha();a.clearColor(t.r,t.g,t.b,r);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,i,k,l,n,p,t,r,m,q;function u(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var s,v,z,G,N,C,B,x;this.init=function(u){s=u.context;v=u;G=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);N=new Uint16Array([0,1,2,0,2,3]);C=s.createBuffer();B=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,C);s.bufferData(s.ARRAY_BUFFER,G,s.STATIC_DRAW);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,B);s.bufferData(s.ELEMENT_ARRAY_BUFFER,N,s.STATIC_DRAW);var u=s.createProgram(),
L=s.createShader(s.VERTEX_SHADER),w=s.createShader(s.FRAGMENT_SHADER);s.shaderSource(L,["precision "+v.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
s.shaderSource(w,["precision "+v.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
s.compileShader(L);s.compileShader(w);s.attachShader(u,L);s.attachShader(u,w);s.linkProgram(u);x=u;m=s.getAttribLocation(x,"position");q=s.getAttribLocation(x,"uv");a=s.getUniformLocation(x,"uvOffset");b=s.getUniformLocation(x,"uvScale");c=s.getUniformLocation(x,"rotation");d=s.getUniformLocation(x,"scale");e=s.getUniformLocation(x,"color");f=s.getUniformLocation(x,"map");g=s.getUniformLocation(x,"opacity");h=s.getUniformLocation(x,"modelViewMatrix");i=s.getUniformLocation(x,"projectionMatrix");k=
s.getUniformLocation(x,"fogType");l=s.getUniformLocation(x,"fogDensity");n=s.getUniformLocation(x,"fogNear");p=s.getUniformLocation(x,"fogFar");t=s.getUniformLocation(x,"fogColor");r=s.getUniformLocation(x,"alphaTest");u=document.createElement("canvas");u.width=8;u.height=8;L=u.getContext("2d");L.fillStyle="#ffffff";L.fillRect(0,0,u.width,u.height);z=new THREE.Texture(u);z.needsUpdate=!0};this.render=function(F,G){var w=F.__webglSprites,E=w.length;if(E){s.useProgram(x);s.enableVertexAttribArray(m);
s.enableVertexAttribArray(q);s.disable(s.CULL_FACE);s.enable(s.BLEND);s.bindBuffer(s.ARRAY_BUFFER,C);s.vertexAttribPointer(m,2,s.FLOAT,!1,16,0);s.vertexAttribPointer(q,2,s.FLOAT,!1,16,8);s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,B);s.uniformMatrix4fv(i,!1,G.projectionMatrix.elements);s.activeTexture(s.TEXTURE0);s.uniform1i(f,0);var y=0,D=0,H=F.fog;H?(s.uniform3f(t,H.color.r,H.color.g,H.color.b),H instanceof THREE.Fog?(s.uniform1f(n,H.near),s.uniform1f(p,H.far),s.uniform1i(k,1),D=y=1):H instanceof THREE.FogExp2&&
(s.uniform1f(l,H.density),s.uniform1i(k,2),D=y=2)):(s.uniform1i(k,0),D=y=0);for(var K,A,N=[],H=0;H<E;H++)K=w[H],!1!==K.visible&&(K._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,K.matrixWorld),K.z=-K._modelViewMatrix.elements[14]);w.sort(u);for(H=0;H<E;H++)K=w[H],!1!==K.visible&&(A=K.material,s.uniform1f(r,A.alphaTest),s.uniformMatrix4fv(h,!1,K._modelViewMatrix.elements),N[0]=K.scale.x,N[1]=K.scale.y,K=F.fog&&A.fog?D:0,y!==K&&(s.uniform1i(k,K),y=K),null!==A.map?(s.uniform2f(a,A.map.offset.x,
A.map.offset.y),s.uniform2f(b,A.map.repeat.x,A.map.repeat.y)):(s.uniform2f(a,0,0),s.uniform2f(b,1,1)),s.uniform1f(g,A.opacity),s.uniform3f(e,A.color.r,A.color.g,A.color.b),s.uniform1f(c,A.rotation),s.uniform2fv(d,N),v.setBlending(A.blending,A.blendEquation,A.blendSrc,A.blendDst),v.setDepthTest(A.depthTest),v.setDepthWrite(A.depthWrite),A.map&&A.map.image&&A.map.image.width?v.setTexture(A.map,0):v.setTexture(z,0),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0));s.enable(s.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,g=new THREE.Frustum,h=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,k){var l,n,p,t,r,m;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);!0===i.autoUpdate&&i.updateMatrixWorld();k.matrixWorldInverse.getInverse(k.matrixWorld);h.multiplyMatrices(k.projectionMatrix,
k.matrixWorldInverse);g.setFromMatrix(h);b.setRenderTarget(this.renderTarget);b.clear();m=i.__webglObjects;l=0;for(n=m.length;l<n;l++)if(p=m[l],r=p.object,p.render=!1,r.visible&&(!(r instanceof THREE.Mesh||r instanceof THREE.ParticleSystem)||!r.frustumCulled||g.intersectsObject(r)))r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,r.matrixWorld),p.render=!0;var q;l=0;for(n=m.length;l<n;l++)if(p=m[l],p.render&&(r=p.object,p=p.buffer,!(r instanceof THREE.ParticleSystem)||r.customDepthMaterial))(q=
r.material instanceof THREE.MeshFaceMaterial?r.material.materials[0]:r.material)&&b.setMaterialFaces(r.material),t=0<r.geometry.morphTargets.length&&q.morphTargets,q=r instanceof THREE.SkinnedMesh&&q.skinning,t=r.customDepthMaterial?r.customDepthMaterial:q?t?f:e:t?d:c,p instanceof THREE.BufferGeometry?b.renderBufferDirect(k,i.__lights,null,t,p,r):b.renderBuffer(k,i.__lights,null,t,p,r);m=i.__webglObjectsImmediate;l=0;for(n=m.length;l<n;l++)p=m[l],r=p.object,r.visible&&(r._modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,
r.matrixWorld),b.renderImmediateObject(k,i.__lights,null,c,r));l=b.getClearColor();n=b.getClearAlpha();a.clearColor(l.r,l.g,l.b,n);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};



//    __  __ _______ _      _                     _           
//   |  \/  |__   __| |    | |                   | |          
//   | \  / |  | |  | |    | |     ___   __ _  __| | ___ _ __ 
//   | |\/| |  | |  | |    | |    / _ \ / _` |/ _` |/ _ \ '__|
//   | |  | |  | |  | |____| |___| (_) | (_| | (_| |  __/ |   
//   |_|  |_|  |_|  |______|______\___/ \__,_|\__,_|\___|_|   



/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

THREE.MTLLoader = function( baseUrl, options, crossOrigin ) {

    this.baseUrl = baseUrl;
    this.options = options;
    this.crossOrigin = crossOrigin;

};

THREE.MTLLoader.prototype = {

    constructor: THREE.MTLLoader,

    /**
     * Loads a MTL file
     *
     * Loading progress is indicated by the following events:
     *   "load" event (successful loading): type = 'load', content = THREE.MTLLoader.MaterialCreator
     *   "error" event (error loading): type = 'load', message
     *   "progress" event (progress loading): type = 'progress', loaded, total
     *
     * @param url - location of MTL file
     */
    load: function( url ) {

        var scope = this;
        var xhr = new XMLHttpRequest();

        function onloaded( event ) {

            if ( event.target.status === 200 || event.target.status === 0 ) {

                var materialCreator = scope.parse( event.target.responseText );

                // Notify caller, that I'm done

                scope.dispatchEvent( { type: 'load', content: materialCreator } );

            } else {

                scope.dispatchEvent( { type: 'error', message: 'Couldn\'t load URL [' + url + ']',
                    response: event.target.responseText } );

            }

        }

        xhr.addEventListener( 'load', onloaded, false );

        xhr.addEventListener( 'progress', function ( event ) {

            scope.dispatchEvent( { type: 'progress', loaded: event.loaded, total: event.total } );

        }, false );

        xhr.addEventListener( 'error', function () {

            scope.dispatchEvent( { type: 'error', message: 'Couldn\'t load URL [' + url + ']' } );

        }, false );

        xhr.open( 'GET', url, true );
        xhr.send( null );
    },

    /**
     * Parses loaded MTL file
     * @param text - Content of MTL file
     * @return {THREE.MTLLoader.MaterialCreator}
     */
    parse: function( text ) {

        var lines = text.split( "\n" );
        var info = {};
        var delimiter_pattern = /\s+/;
        var materialsInfo = {};

            for ( var i = 0; i < lines.length; i ++ ) {

            var line = lines[ i ];
            line = line.trim();

            if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

                // Blank line or comment ignore
                continue;

            }

            var pos = line.indexOf( ' ' );

            var key = ( pos >= 0 ) ? line.substring( 0, pos) : line;
            key = key.toLowerCase();

            var value = ( pos >= 0 ) ? line.substring( pos + 1 ) : "";
            value = value.trim();

            if ( key === "newmtl" ) {

                // New material

                info = { name: value };
                materialsInfo[ value ] = info;

            } else if ( info ) {

                if ( key === "ka" || key === "kd" || key === "ks" ) {

                    var ss = value.split( delimiter_pattern, 3 );
                    info[ key ] = [ parseFloat( ss[0] ), parseFloat( ss[1] ), parseFloat( ss[2] ) ];

                } else {

                    info[ key ] = value;

                }

            }

        }

        var materialCreator = new THREE.MTLLoader.MaterialCreator( this.baseUrl, this.options );
        materialCreator.setMaterials( materialsInfo );
        return materialCreator;

    }

};

/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 *                  invertTransparency: If transparency need to be inverted (inversion is needed if d = 0 is fully opaque)
 *                                      Default: false (d = 1 is fully opaque)
 * @constructor
 */

THREE.MTLLoader.MaterialCreator = function( baseUrl, options ) {

    this.baseUrl = baseUrl;
    this.options = options;
    this.materialsInfo = {};
    this.materials = {};
    this.materialsArray = [];
    this.nameLookup = {};

    this.side = ( this.options && this.options.side )? this.options.side: THREE.FrontSide;
    this.wrap = ( this.options && this.options.wrap )? this.options.wrap: THREE.RepeatWrapping;

};

THREE.MTLLoader.MaterialCreator.prototype = {

    constructor: THREE.MTLLoader.MaterialCreator,

    setMaterials: function( materialsInfo ) {

        this.materialsInfo = this.convert( materialsInfo );
        this.materials = {};
        this.materialsArray = [];
        this.nameLookup = {};

    },

    convert: function( materialsInfo ) {

        if ( !this.options ) return materialsInfo;

        var converted = {};

        for ( var mn in materialsInfo ) {

            // Convert materials info into normalized form based on options

            var mat = materialsInfo[ mn ];

            var covmat = {};

            converted[ mn ] = covmat;

            for ( var prop in mat ) {

                var save = true;
                var value = mat[ prop ];
                var lprop = prop.toLowerCase();

                switch ( lprop ) {

                    case 'kd':
                    case 'ka':
                    case 'ks':

                        // Diffuse color (color under white light) using RGB values

                        if ( this.options && this.options.normalizeRGB ) {

                            value = [ value[ 0 ] / 255, value[ 1 ] / 255, value[ 2 ] / 255 ];

                        }

                        if ( this.options && this.options.ignoreZeroRGBs ) {

                            if ( value[ 0 ] === 0 && value[ 1 ] === 0 && value[ 1 ] === 0 ) {

                                // ignore

                                save = false;

                            }
                        }

                        break;

                    case 'd':

                        // According to MTL format (http://paulbourke.net/dataformats/mtl/):
                        //   d is dissolve for current material
                        //   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)

                        if ( this.options && this.options.invertTransparency ) {

                            value = 1 - value;

                        }

                        break;

                    default:

                        break;
                }

                if ( save ) {

                    covmat[ lprop ] = value;

                }

            }

        }

        return converted;

    },

    preload: function () {

        for ( var mn in this.materialsInfo ) {

            this.create( mn );

        }

    },

    getIndex: function( materialName ) {

        return this.nameLookup[ materialName ];

    },

    getAsArray: function() {

        var index = 0;

        for ( var mn in this.materialsInfo ) {

            this.materialsArray[ index ] = this.create( mn );
            this.nameLookup[ mn ] = index;
            index ++;

        }

        return this.materialsArray;

    },

    create: function ( materialName ) {

        if ( this.materials[ materialName ] === undefined ) {

            this.createMaterial_( materialName );

        }

        return this.materials[ materialName ];

    },

    createMaterial_: function ( materialName ) {

        // Create material

        var mat = this.materialsInfo[ materialName ];
        var params = {

            name: materialName,
            side: this.side

        };

        for ( var prop in mat ) {

            var value = mat[ prop ];

            switch ( prop.toLowerCase() ) {

                // Ns is material specular exponent

                case 'kd':

                    // Diffuse color (color under white light) using RGB values

                    params[ 'diffuse' ] = new THREE.Color().setRGB( value[0], value[1], value[2] );

                    break;

                case 'ka':

                    // Ambient color (color under shadow) using RGB values

                    params[ 'ambient' ] = new THREE.Color().setRGB( value[0], value[1], value[2] );

                    break;

                case 'ks':

                    // Specular color (color when light is reflected from shiny surface) using RGB values
                    params[ 'specular' ] = new THREE.Color().setRGB( value[0], value[1], value[2] );

                    break;

                case 'map_kd':

                    // Diffuse texture map

                    params[ 'map' ] = this.loadTexture( this.baseUrl + value );
                    params[ 'map' ].wrapS = this.wrap;
                    params[ 'map' ].wrapT = this.wrap;

                    break;

                case 'ns':

                    // The specular exponent (defines the focus of the specular highlight)
                    // A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

                    params['shininess'] = value;

                    break;

                case 'd':

                    // According to MTL format (http://paulbourke.net/dataformats/mtl/):
                    //   d is dissolve for current material
                    //   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)

                    if ( value < 1 ) {

                        params['transparent'] = true;
                        params['opacity'] = value;

                    }

                    break;

                default:
                    break;

            }

        }

        if ( params[ 'diffuse' ] ) {

            if ( !params[ 'ambient' ]) params[ 'ambient' ] = params[ 'diffuse' ];
            params[ 'color' ] = params[ 'diffuse' ];

        }

        this.materials[ materialName ] = new THREE.MeshPhongMaterial( params );
        return this.materials[ materialName ];

    },


    loadTexture: function ( url, mapping, onLoad, onError ) {

        var isCompressed = /\.dds$/i.test( url );

        if ( isCompressed ) {

            var texture = THREE.ImageUtils.loadCompressedTexture( url, mapping, onLoad, onError );

        } else {

            var image = new Image();
            var texture = new THREE.Texture( image, mapping );

            var loader = new THREE.ImageLoader();
            loader.crossOrigin = this.crossOrigin;
            loader.load( url, function ( image ) {

                texture.image = THREE.MTLLoader.ensurePowerOfTwo_( image );
                texture.needsUpdate = true;

                if ( onLoad ) onLoad( texture );

            } );

        }

        return texture;

    }

};

THREE.MTLLoader.ensurePowerOfTwo_ = function ( image ) {

    if ( ! THREE.MTLLoader.isPowerOfTwo_( image.width ) || ! THREE.MTLLoader.isPowerOfTwo_( image.height ) ) {

        var canvas = document.createElement( "canvas" );
        canvas.width = THREE.MTLLoader.nextHighestPowerOfTwo_( image.width );
        canvas.height = THREE.MTLLoader.nextHighestPowerOfTwo_( image.height );

        var ctx = canvas.getContext("2d");
        ctx.drawImage( image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height );
        return canvas;

    }

    return image;

};

THREE.MTLLoader.isPowerOfTwo_ = function ( x ) {

    return ( x & ( x - 1 ) ) === 0;

};

THREE.MTLLoader.nextHighestPowerOfTwo_ = function( x ) {

    --x;

    for ( var i = 1; i < 32; i <<= 1 ) {

        x = x | x >> i;

    }

    return x + 1;

};

THREE.EventDispatcher.prototype.apply( THREE.MTLLoader.prototype );



//     ____  ____       _ __  __ _______ _      _                     _           
//    / __ \|  _ \     | |  \/  |__   __| |    | |                   | |          
//   | |  | | |_) |    | | \  / |  | |  | |    | |     ___   __ _  __| | ___ _ __ 
//   | |  | |  _ < _   | | |\/| |  | |  | |    | |    / _ \ / _` |/ _` |/ _ \ '__|
//   | |__| | |_) | |__| | |  | |  | |  | |____| |___| (_) | (_| | (_| |  __/ |   
//    \____/|____/ \____/|_|  |_|  |_|  |______|______\___/ \__,_|\__,_|\___|_|   



/**
 * Loads a Wavefront .obj file with materials
 *
 * @author mrdoob / http://mrdoob.com/
 * @author angelxuanchang
 */

THREE.OBJMTLLoader = function () {};

THREE.OBJMTLLoader.prototype = {

    constructor: THREE.OBJMTLLoader,

    /**
     * Load a Wavefront OBJ file with materials (MTL file)
     *
     * Loading progress is indicated by the following events:
     *   "load" event (successful loading): type = 'load', content = THREE.Object3D
     *   "error" event (error loading): type = 'load', message
     *   "progress" event (progress loading): type = 'progress', loaded, total
     *
     * If the MTL file cannot be loaded, then a MeshLambertMaterial is used as a default
     * @param url - Location of OBJ file to load
     * @param mtlfileurl - MTL file to load (optional, if not specified, attempts to use MTL specified in OBJ file)
     * @param options - Options on how to interpret the material (see THREE.MTLLoader.MaterialCreator )
     */

    load: function ( url, mtlfileurl, options ) {

        var scope = this;
        var xhr = new XMLHttpRequest();

        var mtlDone;           // Is the MTL done (true if no MTL, error loading MTL, or MTL actually loaded)
        var obj3d;             // Loaded model (from obj file)
        var materialsCreator;  // Material creator is created when MTL file is loaded

        // Loader for MTL

        var mtlLoader = new THREE.MTLLoader( url.substr( 0, url.lastIndexOf( "/" ) + 1 ), options );
        mtlLoader.addEventListener( 'load', waitReady );
        mtlLoader.addEventListener( 'error', waitReady );

        // Try to load mtlfile

        if ( mtlfileurl ) {

            mtlLoader.load( mtlfileurl );
            mtlDone = false;

        } else {

            mtlDone = true;

        }

        function waitReady( event ) {

            if ( event.type === 'load' ) {

                if ( event.content instanceof THREE.MTLLoader.MaterialCreator ) {

                    // MTL file is loaded

                    mtlDone = true;
                    materialsCreator = event.content;
                    materialsCreator.preload();

                } else {

                    // OBJ file is loaded

                    if ( event.target.status === 200 || event.target.status === 0 ) {

                        var objContent = event.target.responseText;

                        if ( mtlfileurl ) {

                            // Parse with passed in MTL file

                            obj3d = scope.parse( objContent );

                        } else {

                            // No passed in MTL file, look for mtlfile in obj file

                            obj3d = scope.parse( objContent, function( mtlfile ) {

                                mtlDone = false;
                                mtlLoader.load( mtlLoader.baseUrl + mtlfile );

                            } );

                        }

                    } else {

                        // Error loading OBJ file....

                        scope.dispatchEvent( {
                            type: 'error',
                            message: 'Couldn\'t load URL [' + url + ']',
                            response: event.target.responseText } );

                    }

                }

            } else if ( event.type === 'error' ) {

                // MTL failed to load -- oh well, we will just not have material ...

                mtlDone = true;

            }

            if ( mtlDone && obj3d ) {

                // MTL file is loaded and OBJ file is loaded
                // Apply materials to model

                if ( materialsCreator ) {

                    obj3d.traverse( function( object ) {

                        if ( object instanceof THREE.Mesh ) {

                            if ( object.material.name ) {

                                var material = materialsCreator.create( object.material.name );
                                if ( material ) {

                                    object.material = material;

                                }

                            }

                        }

                    } );

                }

                // Notify listeners

                scope.dispatchEvent( { type: 'load', content: obj3d } );
            }

        }

        xhr.addEventListener( 'load', waitReady, false );

        xhr.addEventListener( 'progress', function ( event ) {

            scope.dispatchEvent( { type: 'progress', loaded: event.loaded, total: event.total } );

        }, false );

        xhr.addEventListener( 'error', function () {

            scope.dispatchEvent( { type: 'error', message: 'Couldn\'t load URL [' + url + ']' } );

        }, false );

        xhr.open( 'GET', url, true );
        xhr.send( null );

    },

    /**
     * Parses loaded .obj file
     * @param data - content of .obj file
     * @param mtllibCallback - callback to handle mtllib declaration (optional)
     * @return {THREE.Object3D} - Object3D (with default material)
     */

    parse: function ( data, mtllibCallback ) {

        // fixes

        data = data.replace( /\ \\\r\n/g, '' ); // rhino adds ' \\r\n' some times.

        var replacement = '/f$1$2$4\n/f$2$3$4'; // quads to tris
        data = data.replace( /f( +\d+)( +\d+)( +\d+)( +\d+)/g, replacement );
        data = data.replace( /f( +\d+\/\d+)( +\d+\/\d+)( +\d+\/\d+)( +\d+\/\d+)/g, replacement );
        data = data.replace( /f( +\d+\/\d+\/\d+)( +\d+\/\d+\/\d+)( +\d+\/\d+\/\d+)( +\d+\/\d+\/\d+)/g, replacement );
        data = data.replace( /f( +\d+\/\/\d+)( +\d+\/\/\d+)( +\d+\/\/\d+)( +\d+\/\/\d+)/g, replacement );

        //

        function vector( x, y, z ) {

            return new THREE.Vector3( x, y, z );

        }

        function uv( u, v ) {

            return new THREE.Vector2( u, v );

        }

        function face3( a, b, c, normals ) {

            return new THREE.Face3( a, b, c, normals );

        }

        function meshN( meshName, materialName ) {

            if ( geometry.vertices.length > 0 ) {

                geometry.mergeVertices();
                geometry.computeCentroids();
                geometry.computeFaceNormals();
                geometry.computeBoundingSphere();

                object.add( mesh );

                geometry = new THREE.Geometry();
                mesh = new THREE.Mesh( geometry, material );

                verticesCount = 0;

            }

            if ( meshName !== undefined ) mesh.name = meshName;
            if ( materialName !== undefined ) {

                material = new THREE.MeshLambertMaterial();
                material.name = materialName;

                mesh.material = material;

            }

        }

        var group = new THREE.Object3D();
        var object = group;

        var geometry = new THREE.Geometry();
        var material = new THREE.MeshLambertMaterial();
        var mesh = new THREE.Mesh( geometry, material );

        var vertices = [];
        var verticesCount = 0;
        var normals = [];
        var uvs = [];

        // v float float float

        var vertex_pattern = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

        // vn float float float

        var normal_pattern = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

        // vt float float

        var uv_pattern = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/

        // f vertex vertex vertex

        var face_pattern1 = /f( +\d+)( +\d+)( +\d+)/

        // f vertex/uv vertex/uv vertex/uv

        var face_pattern2 = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))/;

        // f vertex/uv/normal vertex/uv/normal vertex/uv/normal

        var face_pattern3 = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))/;

        // f vertex//normal vertex//normal vertex//normal

        var face_pattern4 = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))/;

        //

        var lines = data.split( "\n" );

        for ( var i = 0; i < lines.length; i ++ ) {

            var line = lines[ i ];
            line = line.trim();

            var result;

            if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

                continue;

            } else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

                // ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                vertices.push( vector(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] ),
                    parseFloat( result[ 3 ] )
                ) );

            } else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

                normals.push( vector(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] ),
                    parseFloat( result[ 3 ] )
                ) );

            } else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

                // ["vt 0.1 0.2", "0.1", "0.2"]

                uvs.push( uv(
                    parseFloat( result[ 1 ] ),
                    parseFloat( result[ 2 ] )
                ) );

            } else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

                // ["f 1 2 3", "1", "2", "3"]

                geometry.vertices.push(
                    vertices[ parseInt( result[ 1 ] ) - 1 ],
                    vertices[ parseInt( result[ 2 ] ) - 1 ],
                    vertices[ parseInt( result[ 3 ] ) - 1 ]
                );

                geometry.faces.push( face3(
                    verticesCount ++,
                    verticesCount ++,
                    verticesCount ++
                ) );

            } else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

                // ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3"]

                geometry.vertices.push(
                    vertices[ parseInt( result[ 2 ] ) - 1 ],
                    vertices[ parseInt( result[ 5 ] ) - 1 ],
                    vertices[ parseInt( result[ 8 ] ) - 1 ]
                );

                geometry.faces.push( face3(
                    verticesCount ++,
                    verticesCount ++,
                    verticesCount ++
                ) );

                geometry.faceVertexUvs[ 0 ].push( [
                    uvs[ parseInt( result[ 3 ] ) - 1 ],
                    uvs[ parseInt( result[ 6 ] ) - 1 ],
                    uvs[ parseInt( result[ 9 ] ) - 1 ]
                ] );

            } else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

                // ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3"]

                geometry.vertices.push(
                    vertices[ parseInt( result[ 2 ] ) - 1 ],
                    vertices[ parseInt( result[ 6 ] ) - 1 ],
                    vertices[ parseInt( result[ 10 ] ) - 1 ]
                );

                geometry.faces.push( face3(
                    verticesCount ++,
                    verticesCount ++,
                    verticesCount ++,
                    [
                        normals[ parseInt( result[ 4 ] ) - 1 ],
                        normals[ parseInt( result[ 8 ] ) - 1 ],
                        normals[ parseInt( result[ 12 ] ) - 1 ]
                    ]
                ) );

                geometry.faceVertexUvs[ 0 ].push( [
                    uvs[ parseInt( result[ 3 ] ) - 1 ],
                    uvs[ parseInt( result[ 7 ] ) - 1 ],
                    uvs[ parseInt( result[ 11 ] ) - 1 ]
                ] );

            } else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

                // ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3"]

                geometry.vertices.push(
                    vertices[ parseInt( result[ 2 ] ) - 1 ],
                    vertices[ parseInt( result[ 5 ] ) - 1 ],
                    vertices[ parseInt( result[ 8 ] ) - 1 ]
                );

                geometry.faces.push( face3(
                    verticesCount ++,
                    verticesCount ++,
                    verticesCount ++,
                    [
                        normals[ parseInt( result[ 3 ] ) - 1 ],
                        normals[ parseInt( result[ 6 ] ) - 1 ],
                        normals[ parseInt( result[ 9 ] ) - 1 ]
                    ]
                ) );

            } else if ( /^o /.test( line ) ) {

                // object

                object = new THREE.Object3D();
                object.name = line.substring( 2 ).trim();
                group.add( object );

            } else if ( /^g /.test( line ) ) {

                // group

                meshN( line.substring( 2 ).trim(), undefined );

            } else if ( /^usemtl /.test( line ) ) {

                // material

                meshN( undefined, line.substring( 7 ).trim() );

            } else if ( /^mtllib /.test( line ) ) {

                // mtl file

                if ( mtllibCallback ) {

                    var mtlfile = line.substring( 7 );
                    mtlfile = mtlfile.trim();
                    mtllibCallback( mtlfile );

                }

            } else if ( /^s /.test( line ) ) {

                // Smooth shading

            } else {

                console.log( "THREE.OBJMTLLoader: Unhandled line " + line );

            }

        }

        //Add last object
        meshN(undefined, undefined);

        return group;

    }

};

THREE.EventDispatcher.prototype.apply( THREE.OBJMTLLoader.prototype );



//     ____       _     _ _    _____            _             _     
//    / __ \     | |   (_) |  / ____|          | |           | |    
//   | |  | |_ __| |__  _| |_| |     ___  _ __ | |_ _ __ ___ | |___ 
//   | |  | | '__| '_ \| | __| |    / _ \| '_ \| __| '__/ _ \| / __|
//   | |__| | |  | |_) | | |_| |___| (_) | | | | |_| | | (_) | \__ \
//    \____/|_|  |_.__/|_|\__|\_____\___/|_| |_|\__|_|  \___/|_|___/



/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//      controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement ) {

    this.object = object;
    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // API

    // "target" sets the location of focus, where the control orbits around
    // and where it pans with respect to.
    this.target = new THREE.Vector3();
    // center is old, deprecated; use "target" instead
    this.center = this.target;

    // This option actually enables dollying in and out; left as "zoom" for
    // backwards compatibility
    this.noZoom = false;
    this.noScrollZoom = false;
    this.zoomSpeed = 1.0;
    // Limits to how far you can dolly in and out
    this.minDistance = 100;
    this.maxDistance = 250;
    
    this.rotateSpeed = .3;

    // Set to true to automatically rotate around the target
    this.autoRotate = true;
    this.autoRotateSpeed = .5;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // The four arrow keys
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
    // Speed for keyboard rotation
    this.keyboardRotateSpeed = 6.0;

    ////////////
    // internals

    var scope = this;

    var EPS = 0.000001;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;

    var lastPosition = new THREE.Vector3();

    var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, KEYBOARD_ROTATE_X : 5, KEYBOARD_ROTATE_Y : 6 };
    var state = STATE.NONE;

    // events

    var changeEvent = { type: 'change' };


    this.rotateLeft = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        thetaDelta -= angle;

    };

    this.rotateUp = function ( angle ) {

        if ( angle === undefined ) {

            angle = getAutoRotationAngle();

        }

        phiDelta -= angle;

    };

    this.dollyIn = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        scale /= dollyScale;

    };

    this.dollyOut = function ( dollyScale ) {

        if ( dollyScale === undefined ) {

            dollyScale = getZoomScale();

        }

        scale *= dollyScale;

    };

    this.update = function () {

        var position = this.object.position;
        var offset = position.clone().sub( this.target );

        // angle from z-axis around y-axis

        var theta = Math.atan2( offset.x, offset.z );

        // angle from y-axis

        var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

        if ( this.autoRotate && state == STATE.NONE) {
            this.rotateLeft( getAutoRotationAngle() );
        }

        if ( state == STATE.KEYBOARD_ROTATE_X ) {
            this.rotateLeft( getKeyboardRotationAngle() );
        }

        if ( state == STATE.KEYBOARD_ROTATE_Y ) {
            this.rotateUp( getKeyboardRotationAngle() );
        }

        theta += thetaDelta;
        phi += phiDelta;

        // restrict phi to be between desired limits
        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

        // restrict phi to be betwee EPS and PI-EPS
        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

        var radius = offset.length() * scale;

        // restrict radius to be between desired limits
        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
        offset.y = radius * Math.cos( phi );
        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

        position.copy( this.target ).add( offset );

        this.object.lookAt( this.target );

        thetaDelta /= 1.3;
        phiDelta /= 1.3;
        scale = 1;

        if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

            this.dispatchEvent( changeEvent );

            lastPosition.copy( this.object.position );

        }

    };


    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getKeyboardRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.keyboardRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow( 0.95, scope.zoomSpeed );

    }

    function onMouseDown( event ) {
        event.preventDefault();

        if ( event.button === 0 ) {

            state = STATE.ROTATE;

            rotateStart.set( event.clientX, event.clientY );

        } else if ( event.button === 1 ) {
            if ( scope.noZoom === true ) { return; }

            state = STATE.DOLLY;

            dollyStart.set( event.clientX, event.clientY );

        } else if ( event.button === 2 ) {
            return;
        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
        scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

    }

    function onMouseMove( event ) {

        event.preventDefault();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        if ( state === STATE.ROTATE ) {

            rotateEnd.set( event.clientX, event.clientY );
            rotateDelta.subVectors( rotateEnd, rotateStart );

            // rotating across whole screen goes 360 degrees around
            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
            // rotating up and down along whole screen attempts to go 360, but limited to 180
            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

            rotateStart.copy( rotateEnd );

        } else if ( state === STATE.DOLLY ) {

            if ( scope.noZoom === true ) return;

            dollyEnd.set( event.clientX, event.clientY );
            dollyDelta.subVectors( dollyEnd, dollyStart );

            if ( dollyDelta.y > 0 ) {

                scope.dollyIn();

            } else {

                scope.dollyOut();

            }

            dollyStart.copy( dollyEnd );

        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.update();

    }

    function onMouseUp() {

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
        scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        if ( scope.noZoom === true || scope.noScrollZoom === true ) return;

        var delta = 0;

        if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

            delta = event.wheelDelta;

        } else if ( event.detail ) { // Firefox

            delta = - event.detail;

        }

        if ( delta > 0 ) {

            scope.dollyOut();

        } else {

            scope.dollyIn();

        }

    }

    function onKeyDown( event ) {
        var needUpdate = false;

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
        
        switch ( event.keyCode ) {
            case scope.keys.UP:
                state = STATE.KEYBOARD_ROTATE_Y;
                scope.keyboardRotateSpeed = -6.0;
                needUpdate = true;
                break;

            case scope.keys.DOWN:
                state = STATE.KEYBOARD_ROTATE_Y;
                scope.keyboardRotateSpeed = 6.0;
                needUpdate = true;
                break;

            case scope.keys.LEFT:
                state = STATE.KEYBOARD_ROTATE_X;
                scope.keyboardRotateSpeed = -6.0;
                needUpdate = true;
                break;

            case scope.keys.RIGHT:
                state = STATE.KEYBOARD_ROTATE_X;
                scope.keyboardRotateSpeed = 6.0;
                needUpdate = true;
                break;
        }

        // Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
        if ( needUpdate ) {

            scope.update();

        }

    }

    function onKeyUp( event ) {
        state = STATE.NONE;
    }

    function touchstart( event ) {

        switch ( event.touches.length ) {

            case 1: // one-fingered touch: rotate

                state = STATE.TOUCH_ROTATE;

                rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                break;

            case 2: // two-fingered touch: dolly
                if ( scope.noZoom === true ) { return; }

                state = STATE.TOUCH_DOLLY;

                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                var distance = Math.sqrt( dx * dx + dy * dy );
                dollyStart.set( 0, distance );
                break;

            case 10:
                alert('Get your dirty mittens off the screen!!');
                break;

            default:
                state = STATE.NONE;

        }
    }

    function touchmove( event ) {

        event.preventDefault();
        event.stopPropagation();

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        switch ( event.touches.length ) {

            case 1: // one-fingered touch: rotate
                if ( state !== STATE.TOUCH_ROTATE ) { return; }

                rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                rotateDelta.subVectors( rotateEnd, rotateStart );

                // rotating across whole screen goes 360 degrees around
                scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
                // rotating up and down along whole screen attempts to go 360, but limited to 180
                scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

                rotateStart.copy( rotateEnd );
                break;

            case 2: // two-fingered touch: dolly
                if ( scope.noZoom === true ) { return; }
                if ( state !== STATE.TOUCH_DOLLY ) { return; }

                var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                var distance = Math.sqrt( dx * dx + dy * dy );

                dollyEnd.set( 0, distance );
                dollyDelta.subVectors( dollyEnd, dollyStart );

                if ( dollyDelta.y > 0 ) {

                    scope.dollyOut();

                } else {

                    scope.dollyIn();

                }

                dollyStart.copy( dollyEnd );
                break;

            default:
                state = STATE.NONE;

        }

    }

    function touchend() {
        state = STATE.NONE;
    }

    this.domElement.addEventListener( 'mousedown', onMouseDown, false );
    this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

    // TODO: Fix lack of focus
    document.addEventListener( 'keydown', onKeyDown, false );
    document.addEventListener( 'keyup', onKeyUp, false );

    this.domElement.addEventListener( 'touchstart', touchstart, false );
    this.domElement.addEventListener( 'touchend', touchend, false );
    this.domElement.addEventListener( 'touchmove', touchmove, false );

    this.removeAllEventListeners = function () {
        this.domElement.removeEventListener( 'mousedown', onMouseDown );
        this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
        this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel ); // firefox

        // TODO: Fix lack of focus
        document.removeEventListener( 'keydown', onKeyDown );
        document.removeEventListener( 'keyup', onKeyUp );

        this.domElement.removeEventListener( 'touchstart', touchstart );
        this.domElement.removeEventListener( 'touchend', touchend );
        this.domElement.removeEventListener( 'touchmove', touchmove );
    }

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );



//     _____ _             _    ____  _            
//    / ____| |           | |  |  _ \| |           
//   | (___ | |_ __ _  ___| | _| |_) | |_   _ _ __ 
//    \___ \| __/ _` |/ __| |/ /  _ <| | | | | '__|
//    ____) | || (_| | (__|   <| |_) | | |_| | |   
//   |_____/ \__\__,_|\___|_|\_\____/|_|\__,_|_|   



/*
StackBlur - a fast almost Gaussian Blur For Canvas

Version:    0.5
Author:     Mario Klingemann
Contact:    mario@quasimondo.com
Website:    http://www.quasimondo.com/StackBlurForCanvas
Twitter:    @quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

var mul_table = [
        512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
        454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
        482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
        437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
        497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
        320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
        446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
        329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
        505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
        399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
        324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
        268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
        451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
        385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
        332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
        289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];
        
   
var shg_table = [
         9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 
        17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 
        19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 
        23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

function stackBlurImage( img, canvas, radius )
{
            
    var w = img.naturalWidth;
    var h = img.naturalHeight;
      
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w;
    canvas.height = h;
    
    var context = canvas.getContext("2d");
    context.clearRect( 0, 0, w, h );
    context.drawImage( img, 0, 0 );

    if ( isNaN(radius) || radius < 1 ) return;
    
    stackBlurCanvasRGB( canvas, 0, 0, w, h, radius );
}

function stackBlurCanvasRGB( canvas, top_x, top_y, width, height, radius )
{
    if ( isNaN(radius) || radius < 1 ) return;
    radius |= 0;

    var context = canvas.getContext("2d");
    var imageData;
    
    try {
      try {
        imageData = context.getImageData( top_x, top_y, width, height );
      } catch(e) {
      
        // NOTE: this part is supposedly only needed if you want to work with local files
        // so it might be okay to remove the whole try/catch block and just use
        // imageData = context.getImageData( top_x, top_y, width, height );
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
            imageData = context.getImageData( top_x, top_y, width, height );
        } catch(e) {
            alert("Cannot access local image");
            throw new Error("unable to access local image data: " + e);
            return;
        }
      }
    } catch(e) {
      alert("Cannot access image");
      throw new Error("unable to access image data: " + e);
    }
            
    var pixels = imageData.data;
            
    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
    r_out_sum, g_out_sum, b_out_sum,
    r_in_sum, g_in_sum, b_in_sum,
    pr, pg, pb, rbs;
            
    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;
    
    var stackStart = new BlurStack();
    var stack = stackStart;
    for ( i = 1; i < div; i++ )
    {
        stack = stack.next = new BlurStack();
        if ( i == radiusPlus1 ) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;
    
    yw = yi = 0;
    
    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];
    
    for ( y = 0; y < height; y++ )
    {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
        
        r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
        
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        
        stack = stackStart;
        
        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }
        
        for( i = 1; i < radiusPlus1; i++ )
        {
            p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
            r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
            
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            
            stack = stack.next;
        }
        
        
        stackIn = stackStart;
        stackOut = stackEnd;
        for ( x = 0; x < width; x++ )
        {
            pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
            pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;
            
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            
            p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;
            
            r_in_sum += ( stackIn.r = pixels[p]);
            g_in_sum += ( stackIn.g = pixels[p+1]);
            b_in_sum += ( stackIn.b = pixels[p+2]);
            
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            
            stackIn = stackIn.next;
            
            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );
            
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            
            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }

    
    for ( x = 0; x < width; x++ )
    {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
        
        yi = x << 2;
        r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
        
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        
        stack = stackStart;
        
        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }
        
        yp = width;
        
        for( i = 1; i <= radius; i++ )
        {
            yi = ( yp + x ) << 2;
            
            r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
            
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            
            stack = stack.next;
        
            if( i < heightMinus1 )
            {
                yp += width;
            }
        }
        
        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for ( y = 0; y < height; y++ )
        {
            p = yi << 2;
            pixels[p]   = (r_sum * mul_sum) >> shg_sum;
            pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p+2] = (b_sum * mul_sum) >> shg_sum;
            
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            
            p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;
            
            r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
            g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
            b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
            
            stackIn = stackIn.next;
            
            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );
            
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            
            stackOut = stackOut.next;
            
            yi += width;
        }
    }
    
    context.putImageData( imageData, top_x, top_y );
    
}

function BlurStack()
{
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}