<template>
  <div class="xlsx-page">
    <div class="row"><div class="col-xs-12">
      <form class="form-inline">
        <div class="form-group">
          <label for="file">Spreadsheet</label>
          <input type="file" class="form-control" id="file" @change="handleChange" />
        </div>
      </form>
    </div></div>
    <div class="row"><div class="col-xs-12">
      <button :disabled="data.length ? false : true" class="btn btn-success" @click="handleExport">Export</button>
    </div></div>
    <div class="row"><div class="col-xs-12">
      <div class="table-responsive">
        <table border class="table table-striped">
          <thead><tr>
            <th v-for="c in cols" :key="c.key">{{c.name}}</th>
          </tr></thead>
          <tbody>
          <tr v-for="(r, key) in data" :key="key">
            <td v-for="c in cols" :key="c.key"> {{ r[c.key] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div></div>
  </div>
</template>

<script>
  import xlsxTool from '~/utils/tools/xlsx'

  export default {
    data() {
      return {
        data: ["SheetJS".split(""), "1234567".split("")],
        cols: [
          {name:"A", key:0},
          {name:"B", key:1},
          {name:"C", key:2},
          {name:"D", key:3},
          {name:"E", key:4},
          {name:"F", key:5},
          {name:"G", key:6},
        ]
      };
    },
    methods: {
      handleChange(e) {
        const files = e.target.files
        if(files && files[0]) {
          xlsxTool.read(files[0]).then(res => {
            console.log(res)
            this.cols = res.cols
            this.data = res.data
          })
        }
      },
      handleExport(){
        xlsxTool.write(this.data,'test.xlsx')
      }
    }
  };
</script>
