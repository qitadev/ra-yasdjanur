(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,9],{266:function(t,e,r){"use strict";r.r(e);var n=r(18),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,r){"use strict";r.r(e);var n=r(18),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 rounded-lg bg-red-500 text-white align-middle flex items-center"},[r("IconsError",{staticClass:"h-8 w-8"}),t._v(" "),r("p",{staticClass:"ml-4"},[t._v("\n    Gagal Memuat Data. Coba muat ulang halaman.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconsError:r(266).default})},281:function(t,e,r){"use strict";r.r(e);var n=r(18),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},t._l(9,(function(i){return r("li",{key:i,staticClass:"relative pt-[56.25%] bg-gray-300 animate-pulse rounded-lg"})})),0)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(51),{data:function(){return{photos:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$getSheetData(1);case 2:r=e.sent,t.photos=r;case 4:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1}),o=r(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"max-w-5xl mx-auto px-5 py-8 lg:py-8"},[r("div",{staticClass:"flex items-center",attrs:{id:"breadcrumbs"}},[r("nuxt-link",{staticClass:"text-gray-400 hover:text-gray-900",attrs:{to:"/"}},[r("span",[t._v("Beranda")])]),t._v(" "),t._m(0),t._v(" "),r("nuxt-link",{attrs:{to:"#"}},[r("span",{staticClass:"inline-block border border-brand-primary rounded-full py-1 px-3 text-brand-primary"},[t._v("Galeri")])])],1),t._v(" "),r("article",{staticClass:"w-full mt-8"},[r("h1",{staticClass:"text-4xl font-bold"},[t._v("\n      Galeri\n    ")]),t._v(" "),r("hr",{staticClass:"w-20 border-2 border-brand-primary mt-4 mb-8"}),t._v(" "),r("p",{staticClass:"font-extralight"},[t._v("\n      Berikut kumpulan dokumentasi foto dari keseruan pembelajaran dan kegiatan Raudhatul Athfal Yasdjanur bersama guru, siswa-siswi dan wali murid.\n    ")]),t._v(" "),t.$fetchState.pending?r("SkeletonGallery",{staticClass:"mt-8"}):t.$fetchState.error?r("ErrorFetchData",{staticClass:"mt-8"}):r("ul",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8"},t._l(t.photos,(function(e){return r("li",{key:e.id,staticClass:"relative pt-[56.25%]"},[r("img",{staticClass:"absolute inset-0 w-full h-full object-cover rounded-lg",attrs:{src:e.photo,alt:e.title}}),t._v(" "),r("div",{staticClass:"absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"},[r("div",{staticClass:"absolute bottom-0 inset-x-0 p-4 text-white bg-gradient-to-b from-transparent to-brand-primary rounded-b-lg"},[r("h3",{staticClass:"font-bold"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("p",[t._v("\n              "+t._s(e.caption)+"\n            ")])])])])})),0)],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-4"},[r("span",{staticClass:"text-gray-400"},[t._v(" > ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonGallery:r(281).default,ErrorFetchData:r(267).default})}}]);