import Num from '~/utils/tools/number'
import Str from '~/utils/tools/string'
import Date from '~/utils/tools/date'

export function numberUnit(num){
  switch (true) {
    case num > 9999:
      return `${(num/10000).toFixed(2)} 万`
      break
    case num > 999:
      return `${(num/1000).toFixed(2)} 千`
      break
    case num > 99:
      return `${(num/100).toFixed(2)} 百`
      break
    default:
      return num
  }
}

export function formatSmallChinese(num){
  return Num.formatSmallChinese(num)
}

export function formatMoney(num){
  return Num.formatMoney(num)
}

export function formatBigMoney(num){
  return Num.formatBigMoney(num)
}

export function ellipsis(str){
  return Str.ellipsis(str, 100)
}

export function formatDate(date) {
  return Date.getFormatDate(date)
}
