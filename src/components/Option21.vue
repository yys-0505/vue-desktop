<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-button @click="exportFn">export</el-button>
  </div>
</template>
<script>
import XLSX from 'xlsx'
import saveAs from 'file-saver'
export default {
  data () {
    return {
      tableData: [{
        'date': '2016-05-02',
        'name': '王小虎',
        'address': '上海市普陀区金沙江路 1518 弄'
      }, {
        'date': '2016-05-02',
        'name': '王小虎',
        'address': '上海市普陀区金沙江路 1518 弄'
      }],
      labelArr: ['日期', '姓名', '地址']
    }
  },
  methods: {
    exportFn () {
      const defaultCellStyle = {font: {name: 'Verdana', sz: 31, color: 'FF00FF88'}, fill: {fgColor: {rgb: 'FFFFAA00'}}}
      const wopts = {bookType: 'xlsx', bookSST: false, type: 'binary', defaultCellStyle: defaultCellStyle, showGridLines: false}
      const wb = {SheetNames: ['Sheet1'], Sheets: {}, Props: {}}
      let data = this.tableData
      // 1、XLSX.utils.json_to_sheet(data) 接收一个对象数组并返回一个基于对象关键字自动生成的“标题”的工作表，默认的列顺序由使用Object.keys的字段的第一次出现确定
      let sheetData = XLSX.utils.json_to_sheet(data)
      for (var i = 0, len = this.labelArr.length; i < len; i++) {
        sheetData[String.fromCharCode(65 + i) + '1'] = {t: 's', v: this.labelArr[i]}
      }
      // sheetData['!merges'] = [{// 合并第一行数据[B1,C1,D1,E1]
      //   s: {// s为开始
      //     c: 0, // 开始列
      //     r: 0// 开始取值范围
      //   },
      //   e: {// e结束
      //     c: this.labelArr.length - 1, // 结束列
      //     r: 0// 结束范围
      //   }
      // }]
      sheetData['!cols'] = [{wpx: 85}, {wpx: 65}, {wpx: 185}]
      // sheetData['A1'] = {
      //   t: 's',
      //   v: 'this is a title',
      //   s: {
      //     font: {
      //       name: '宋体',
      //       sz: 16,
      //       color: {rgb: '#FFFF0000'},
      //       bold: false,
      //       italic: false,
      //       underline: false
      //     },
      //     alignment: {
      //       horizontal: 'center',
      //       vertical: 'center'
      //     }
      //   }
      // }
      console.log('sheetData', sheetData)
      // 2、将数据放入对象workBook的Sheets中等待输出
      wb.Sheets['Sheet1'] = sheetData
      // 3、XLSX.write() 开始编写Excel表格
      // 4、s2ab() 将数据处理成需要输出的格式
      let tmpDown = new Blob([this.s2ab(XLSX.write(wb, wopts))], {type: 'application/octet-stream'})
      saveAs.saveAs(tmpDown, 'test.xlsx')
    },
    // 字符串转字符流
    // Uint8Array 8位无符号整数，长度1个字节
    // ArrayBuffer是一块内存，比如var buf = new ArrayBuffer(1024), 就等于开辟了一块1kb大小的内存，但是不能通过buf[0]=12,来进行赋值，如果想操作内存块中的数据，需要通过var init8 = new Int8Array(buf)然后通过int8[0] = 12来操作
    // 如果你从XHR、file API、canvas等读取到一大串字节流，采用ArrayBuffer比较好，会配合一些api来增强二进制的处理能力
    // ArrayBuffer作为内存区域，可以存放多种类型的数据，不同的数据有不同的存储方式，Uint8Array就是其中一种，8表示这种数据类型占据的字节数。这里使用8来转换是因为数据类型最小占1个字节，可以存储字母、数字、汉字、字符等
    // s.charCodeAt(i) & 0xFF：&0xff这个是考虑到计算机内的存储都是利用二进制的补码进行存储的。对于正数(00000001),原码来说，首位表示符号位，反码 补码都是本身。对于负数(10000001)，原码来说，反码是对原码除了符号位之外做取反运算，即(11111110),补码是对反码作+1运算即(11111111)，这样做其实就是想保持二进制的补码的一致性
    s2ab (s) {
      var buf = null
      if (typeof ArrayBuffer !== 'undefined') {
        buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
        return buf
      } else {
        buf = new Array(s.length)
        for (var j = 0; j !== s.length; ++j) buf[j] = s.charCodeAt(j) & 0xFF
        return buf
      }
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
</style>
