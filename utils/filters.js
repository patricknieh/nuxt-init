import Str from '~/utils/tools/string'
import Num from '~/utils/tools/number'

export function ellipsis3(str){
  return Str.ellipsis(str, 65)
}
export function numberUnit(num){
  return Num.numberUnit(num)
}
export function status(index){
  return ['','A','B','C'][index]
}
