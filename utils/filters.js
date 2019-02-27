import S from '~/utils/tools/string'
import D from '~/utils/tools/date'
import N from '~/utils/tools/number'

export function ellipsis3(str){
  return S.ellipsis(str, 65)
}
export function formatDate(str){
  return D.formatTime(str,'{y}-{m}-{d} {h}:{i}:{s}')
}
export function numberUnit(num){
  return N.numberUnit(num)
}
export function formatState(val){
  switch (Number(val)) {
    case 1:
      return '未审核'
      break
    case 2:
      return '已通过'
      break
    case 3:
      return '已退回'
      break
    case 4:
      return '不合格'
      break
    case 5:
      return '审核中...'
      break
    default:
      return ''
  }
}
