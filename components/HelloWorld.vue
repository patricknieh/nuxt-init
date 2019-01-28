<script>
  export default {
    data () {
      return { title: 'Hi,This is from JSX render!' }
    },
    render (h) {
      return h('div',[
        h('h1',{style: {color: 'red'}}, 'Hello World'),
        h('h6', this.title)
      ])
    }
  }
</script>
