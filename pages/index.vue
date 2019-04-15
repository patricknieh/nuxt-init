<template>
  <div class="home-page">
    <svg-icon icon-class="user"/>
    <jsx/>

    <el-form @submit.native.prevent="handleSubmit">
      <el-input v-model="inputValue" placeholder="what needs to be finished?"></el-input>
    </el-form>
    <ul class="todo-list">
      <li v-for="todo of todos" :key="todo.id">
        <el-checkbox v-model="todo.finished" @change="handleChange(todo)">{{todo.title}}</el-checkbox>
      </li>
    </ul>
    <div>{{left}} item(s) is unfinished!</div>
  </div>
</template>
<script>
  import jsx from '~/components/jsx'

  export default {
    components: {jsx},
    data() {
      return {
        inputValue: '',
        todos: [],
        done: 0
      }
    },
    computed: {
      left() {
        return this.todos.length - this.done
      }
    },
    methods: {
      handleSubmit() {
        this.todos.unshift({
          id: Math.random(),
          title: this.inputValue,
          finished: false
        })
        this.inputValue = ''
      },
      handleChange(todo) {
        if(todo.finished) {
          this.done ++
        }else {
          this.done --
        }
      }
    }
  };
</script>
