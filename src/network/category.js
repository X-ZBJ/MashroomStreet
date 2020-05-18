import {request} from './request'

export function getCategoryData(){
  return request({
    url:'data/category/category.json'
  })
}

export function getCategoryCon(key){
  return request({
    url:'data/category/subcategory/'+key+'.json'
  })
}
