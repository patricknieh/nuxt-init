<template>
  <div class="home-page">
    <svg-icon icon-class="user"/>
    <jsx/>

    <el-form @submit.native.prevent="handleSubmit">
      <el-input v-model="inputValue" placeholder="what needs to be finished?"></el-input>
    </el-form>
    <ul class="todo-list">
      <li v-for="todo of todos" :key="todo.id">
        <el-checkbox v-model="todo.finished">{{todo.title}}</el-checkbox>
      </li>
    </ul>
    <div>{{left}} item(s) is unfinished!</div>
  </div>
</template>
<script>
  import jsx from '~/components/jsx'
  import io from "socket.io-client"
  import {utils} from "web-base"

  export default {
    components: {jsx},
    mounted(){
      let arr = ['paddy','patrick','somebody']
      console.log(utils.array.remove(arr,'somebody'))

      const log = console.log;
      const socket = io('http://localhost:7001', {

        // 实际使用中可以在这里传递参数
        query: {
          room: 'demo',
          userId: `client_${Math.random()}`,
        },

        transports: ['websocket']
      });

      socket.on('connect', () => {
        const id = socket.id;

        log('#connect,', id, socket);

        // 监听自身 id 以实现 p2p 通讯
        socket.on(id, msg => {
          log('#receive,', msg);
        });
      });

      // 接收在线用户信息
      socket.on('online', msg => {
        log('#online,', msg);
      });

      // 系统事件
      socket.on('disconnect', msg => {
        log('#disconnect', msg);
      });

      socket.on('disconnecting', () => {
        log('#disconnecting');
      });

      socket.on('error', () => {
        log('#error');
      });

      window.socket = socket
    },
    data() {
      return {
        inputValue: '',
        todos: [],
        socket: null
      }
    },
    computed: {
      left() {
        return this.todos.filter(todo => !todo.finished).length
      }
    },
    methods: {
      handleSubmit() {
        //socket
        window.socket.emit('exchange', {
          target: '1UyxVUodyUUFGnoCAAAA',  //TODO change target id
          payload: {
            msg : this.inputValue,
          },
        });

        this.todos.unshift({
          id: Math.random(),
          title: this.inputValue,
          finished: false
        })
        this.inputValue = ''


      }
    }
  };
</script>
