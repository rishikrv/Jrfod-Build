(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9b6a7690d37b2241b33c":function(e,t,n){"use strict";n.r(t);var o,a=n("8af190b70a6bc55c6f1b"),r=n.n(a),i=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),l=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("921c0b8c557fe6ba5da8")),d=n.n(f),s=n("9b4cf02f7f3c4453e043"),u=n.n(s),b=n("e95a63b25fb92ed15721"),p=n("ab4cb61bcb2dc161defb"),m=n("d7dd51e1bf6bfc2c9c3d"),v=n("6938d226fd372a75cbf9"),y=n("4dd2a92e69dcbe1bab10"),h=n("303e8262c8c2da075d53"),g=n.n(h),w=n("26682d5d4df1c4fdd619"),O=n.n(w),S=n("387190e83edf0e5eb8f6"),j=n("ab039aecd4a1d4fedc0e"),F=n("825c971f9bd9b0bf4ce7"),N=n("770268fe1099fb9426d2");function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,a){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&r)for(var f in r)void 0===t[f]&&(t[f]=r[f]);else t||(t=r||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=_(O.a,{}),A=function(e){function t(){var e,n,o,a,r,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return o=this,n=!(a=(e=L(t)).call.apply(e,[this].concat(f)))||"object"!==k(a)&&"function"!==typeof a?P(o):a,r=P(n),c={valueForm:[]},(i="state")in r?Object.defineProperty(r,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[i]=c,n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,r.a.Component),n=t,(o=[{key:"submitForm",value:function(e){var t=this,n=this.state.valueForm;setTimeout(function(){t.setState({valueForm:e}),console.log("You submitted:\n\n".concat(n)),t.props.handleLogin(t.state.valueForm.get("email"),t.state.valueForm.get("password"))},500)}},{key:"render",value:function(){var e=this,t=l.a.name+" - Login",n=l.a.desc,o=this.props.classes;return _("div",{className:o.rootFull},void 0,_(i.Helmet,{},void 0,_("title",{},void 0,t),_("meta",{name:"description",content:n}),_("meta",{property:"og:title",content:t}),_("meta",{property:"og:description",content:n}),_("meta",{property:"twitter:title",content:t}),_("meta",{property:"twitter:description",content:n})),_("div",{className:o.containerSide},void 0,_(u.a,{smDown:!0},void 0,_("div",{className:o.opening},void 0,_("div",{className:o.openingWrap},void 0,_("div",{className:o.openingHead},void 0,_(b.NavLink,{to:"/",className:o.brand},void 0,_("img",{src:g.a,alt:l.a.name}))),_(d.a,{variant:"h3",component:"h1",gutterBottom:!0},void 0,r.a.createElement(j.FormattedMessage,N.a.welcomeTitle),"\xa0",l.a.name),_(d.a,{variant:"h6",component:"p",className:o.subpening},void 0,r.a.createElement(j.FormattedMessage,N.a.welcomeSubtitle))),_("div",{className:o.openingFooter},void 0,_(b.NavLink,{to:"https://www.jefod.com",className:o.back},void 0,W,"\xa0back to site")))),_("div",{className:o.sideFormWrap},void 0,_(y.q,{onSubmit:function(t){return e.submitForm(t)}}))))}}])&&E(n.prototype,o),a&&E(n,a),t}();var C=Object(m.connect)(function(e){return{state:e.get("authReducer")}},function(e){return{handleLoginWithEmail:Object(p.bindActionCreators)(F.f,e)}})(function(e){var t=e.handleLoginWithEmail;return _(Object(v.withStyles)(S.a)(A),{handleLogin:t})});t.default=C}}]);