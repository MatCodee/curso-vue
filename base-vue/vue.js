const app = Vue.createApp({
    template: `
        <div v-for="({task},index) in taksList">
            <p> {{index+1}} <input type="checkbox"> {{task}}</p>
        </div>
        <input type='text' v-model="task_message" v-on:keypress.enter="add_task_tolist">
        <button @click="add_task_tolist" >Add</button>
    `,
    data() {
        return {
            task_message: '',
            taksList:[
                { id: 1,task: "Este es mi nueva tarea", completed: false}
            ]
        }
    },
    methods: {
        add_task_tolist() {
            const new_task = {
                id: this.taksList.length + 1,
                task: this.task_message,
                completed: false,
            }
            this.taksList.push(new_task);
            this.task_message = '';
        },
    }
});

app.mount('#App');