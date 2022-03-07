(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{468:function(t,a,s){"use strict";s.r(a);var e=s(56),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"队列持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列持久化"}},[t._v("#")]),t._v(" 队列持久化")]),t._v(" "),s("p",[t._v("保障当 RabbitMQ 服务停掉以后消 息生产者发送过来的消息不丢失。默认情况下 RabbitMQ 退出或由于某种原因崩溃时，它忽视队列和消息，除非告知它不要这样做。确保消息不会丢失需要做两件事："),s("strong",[t._v("我们需要将队列和消息都标 记为持久化。")])]),t._v(" "),s("h3",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("p",[t._v("声明队列方法的第二个参数，布尔类型，是否持久化")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//持久化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" durable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queueDeclare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("QUEUE_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" durable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[t._v("#")]),t._v(" 报错")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Caused by: com.rabbitmq.client.ShutdownSignalException: channel error; protocol method: #method<channel.close>(reply-code=406, reply-text=PRECONDITION_FAILED - inequivalent arg 'durable' for queue 'ack_queue' in vhost '/': received 'true' but current is 'false', class-id=50, method-id=10)\n")])])]),s("p",[t._v("原因：该队列已经存在了并且是不持久化的，此时又声明这个队列持久化，造成冲突")]),t._v(" "),s("p",[t._v("解决：将该队列删除，再重新声明的时候就不会报错了")]),t._v(" "),s("p",[t._v("启动成功后看到大写 D 标识，Durable标记")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yangtao8453/picgo/raw/master/img/image-20220304142637962.png",alt:"image-20220304142637962"}})]),t._v(" "),s("h2",{attrs:{id:"消息持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息持久化"}},[t._v("#")]),t._v(" 消息持久化")]),t._v(" "),s("p",[t._v("队列持久化以后消息不持久化，消费消息失败的时候，消息仍会丢失")]),t._v(" "),s("h3",{attrs:{id:"代码实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现-2"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("p",[t._v("生产者发布消息的时候，修改消息的属性为文本持久化")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置生产者发送的消息为持久化消息（保存在磁盘上，否则保存在内存中）")]),t._v("\nchannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("basicPublish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" QUEUE_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PERSISTENT_TEXT_PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardCharsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UTF_8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"安全性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[t._v("#")]),t._v(" 安全性")]),t._v(" "),s("p",[t._v("非绝对安全，即使开启了两种持久化，消息仍有可能丢失（刚准备保存到磁盘的时候，还没存储完时出错）")])])}),[],!1,null,null,null);a.default=n.exports}}]);