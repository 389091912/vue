$(() =>{
    new Vue({
        el:'#app',
        data:{
            message:'Hello Vue.js!'
        }
    });
    let app2 = new Vue({
        el: '#app-2',
        data: {
            msg:
            '页面加载于' + new Date().toLocaleString()
        }
    });

    let app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
            // htmlStr: "<h1>标签字符串</h1>"
        }
    });


    let app5 = new Vue({
        el: '#app-5',
        data: {
            msg5: "测试消息",
            htmlStr:"<h3>html 字符串</h3>"
        }

    });

    let app7 = new Vue({
        el: '#app-7',
        data: {
            msg7: "12312313"
        }

    });
})






   /* var app6 = new Vue({
        el: '#app-6',
        data: {
            msg6: ' Hello Vue .js'
        },
        method: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('');

            }
        }

    });*/
