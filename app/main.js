Vue.component('task', {

    template: '<li v-on:click="removeTask(id)"><button type="button" v-on:click="removeTask(id)" class="btn btn-sm btn-outline-danger mr-2">X</button>{{ title }}</li>',

    props: ['title', 'id', 'removeTask']

});

var todo_example = new Vue({

    el: '#to-do',

    data: {

        newTaskText: '',

        tasks: [],

        nextTaskId: 0

      },

      methods: {

        addTask: function() {

            this.tasks.push({
                id: this.nextTaskId++,
                title: this.newTaskText
             });
            this.newTaskText = '';

        },

        removeTask: function(id) {

            var index = this.findTask(id);
            this.tasks.splice(index, 1);

        },

        findTask: function(id) {

            return this.tasks.findIndex(function(task) {
            return id === task.id;
         });

    }

    }

});