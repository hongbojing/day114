var demo = new Vue({
    el: '#demo',
    data: {
        title: 'todos',
        todos: [
            {
                done: true,
                content: 'Learn JavaScript'
            },
            {
                done: false,
                content: 'Learn vue.js'
            },
            {
                done: true,
                content: 'ni da ye'
            },
            {
                done: false,
                content: 'hehe'
            }
        ]
    }
})