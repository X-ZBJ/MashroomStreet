export default {
  // addCart(state,payload){
      // state.cartList.push(payload)
      // let cartInfo1 = null
      // for(let item in state.cartList){
      //   if(item.iid == payload.iid){
      //     cartInfo1 = item
      //   }
      // }
      // let oldCartInfo = state.cartList.find((item)=>{
      //   return item.iid == payload.iid
      // })
      // if(oldCartInfo){
      //   oldCartInfo.count++
      // }else{
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }
    // },
    addToCart(state,payload){
      payload.check = true
      payload.count = 1
      state.cartList.push(payload)
    },
    addCount(state,payload){
      payload.count++
    },
    changeCheck(state,payload){
      payload.check = !payload.check
    },
    clearCheck(state){
      state.cartList.forEach((item)=>item.check = false)
    },
    allCheck(state){
      state.cartList.forEach((item)=>item.check = true)
    }

}