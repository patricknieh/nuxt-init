import XLSX from 'xlsx'

const makeCols = function(refstr) {
  return Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}))
}

let xlsx = {
  write: function(data,filename) {
    /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet01");
    /* generate file and send to client */
    XLSX.writeFile(wb, filename);
  },
  read: function(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        let data = XLSX.utils.sheet_to_json(ws, {header:1});
        let cols = makeCols(ws['!ref']);
        resolve({data,cols})
      };
      reader.readAsBinaryString(file);
    })
  }
}

export default xlsx
