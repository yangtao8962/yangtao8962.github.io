(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{432:function(t,s,a){"use strict";a.r(s);var r=a(56),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"配置镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像加速"}},[t._v("#")]),t._v(" 配置镜像加速")]),t._v(" "),a("h3",{attrs:{id:"运行流程图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行流程图"}},[t._v("#")]),t._v(" 运行流程图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220224002549067.png",alt:"image-20220224002549067"}})]),t._v(" "),a("h3",{attrs:{id:"阿里云加速服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云加速服务"}},[t._v("#")]),t._v(" 阿里云加速服务")]),t._v(" "),a("h5",{attrs:{id:"获取加速地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取加速地址"}},[t._v("#")]),t._v(" 获取加速地址")]),t._v(" "),a("p",[t._v("​\t访问阿里云登录自己账号查看docker镜像加速服务，地址：https://cr.console.aliyun.com/cn-shenzhen/instances/mirrors")]),t._v(" "),a("h5",{attrs:{id:"centos中配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos中配置"}},[t._v("#")]),t._v(" CentOS中配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/docker\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'EOF\'\n{\n  "registry-mirrors": ["https://fg5ffem1.mirror.aliyuncs.com"]\n}\nEOF')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),a("h5",{attrs:{id:"验证镜像加速是否生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证镜像加速是否生效"}},[t._v("#")]),t._v(" 验证镜像加速是否生效")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" info\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);