(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{422:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"yum安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum安装"}},[t._v("#")]),t._v(" yum安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\nyum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git.x86_64\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version\n")])])]),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220121234319970.png",alt:"image-20220121234319970"}})]),t._v(" "),s("p",[t._v("通过yum安装的git版本停留在1.8.3，要想安装最新版，还得通过压缩包安装")]),t._v(" "),s("h2",{attrs:{id:"编译安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[t._v("#")]),t._v(" 编译安装")]),t._v(" "),s("p",[t._v("下载地址：https://git-scm.com/download/linux")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220121234759823.png",alt:"image-20220121234759823"}})]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖环境")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y zlib-devel bzip2-devel openssl-devel ncurses-devel gcc perl-ExtUtils-MakeMaker package\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压缩至 /usr/local/git")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf git-2.34.1.tar.gz -C /usr/local/git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入想git的解压路径，编译生成makefile")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" git-2.34.1/\n./configure --prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("profix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/git\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置环境变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/profile\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加如下内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GIT_HOME")]),t._v("/bin\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生效")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" version\n")])])]),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220122001805219.png",alt:"image-20220122001805219"}})]),t._v(" "),s("p",[t._v("可看到安装的是最新版本的git了")]),t._v(" "),s("h2",{attrs:{id:"exe安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exe安装"}},[t._v("#")]),t._v(" exe安装")]),t._v(" "),s("p",[t._v("下载地址：https://git-scm.com/download/win")]),t._v(" "),s("p",[t._v("无脑下一步")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220122002516325.png",alt:"image-20220122002516325"}})]),t._v(" "),s("p",[t._v("安装时可选择编辑器，如vim、notepad++等")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220122002643950.png",alt:"image-20220122002643950"}})]),t._v(" "),s("p",[t._v("之后无脑下一步就行了")]),t._v(" "),s("p",[t._v("验证")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220122003950234.png",alt:"image-20220122003950234"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);