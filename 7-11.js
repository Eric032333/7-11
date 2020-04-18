let sevenEleven = [
  {
    id : "C01",
    name : "柑橘紅茶",
    price : 40,
    company :"咁咁老爹",
    category : ["cold" , "tea"],
    promotion : "第2件6折"            
  },
  {
    id : "A02",
    name : "爆漿奶茶",
    price : 40,

    company :"咁咁老爹",
    category : ["cold" , "tea"],
    promotion : "買一送一"           
  },
  {
    id : "D03",
    name : "棉花糖",
    price : 50,
    company :"光泉",
    category : ["dessert" , "bread"],
    promotion : "第2件6折"           
  },
  {
    id : "P04",
    name : "爆漿饅頭",
    price : 30,
    company :"咁咁老爹",
    category : ["cold" , "tea"],
    promotion :  "買一送一"           
  }
]
            

                   
    
let shopCart = {
  'C01' : 2 ,
  'A02' : 4 ,
  'D03' : 3
}


//basic function
function findObject(id){
  for(let i = 0; i < sevenEleven.length; i++){
    let item = sevenEleven[i]
    if (item.id === id){
      return item
    }
  }
}

// 功能發想 

//original price
function noDiscount(price,  buyAmount){
  return price * buyAmount
}

//1. 第二件六折
function secondOff60(price,  buyAmount){
  if (buyAmount % 2 == 0){
    return price *  buyAmount * 0.8 
  }else if (buyAmount % 2 == 1){
    return price *  buyAmount * 0.8 + price   
  }
}

//2. 買一送一 
function oneByOne(price,  buyAmount){
  if( buyAmount % 2 == 0){
    return price * (buyAmount / 2) 
  }else if ( buyAmount % 2 == 1 ){ 
    return price * Math.floor( buyAmount / 2 ) + price 
  }
}



function comeBuy (buyList){

  var total = 0
  // var buyList = []
             //類別shopCart 的id
  for(key of Object.keys(buyList)) {

    let buyAmount = buyList[key]
    let obj = sevenEleven
    let foodId = key
    let foodName = obj.name
    let foodPrice = obj.price
    let foodPromotion = obj.promotion

    if (foodPromotion == "買一送一"){
      total += oneByOne(foodPrice , buyAmount) 
    }else if(foodPromotion == "第2件6折"){
      total += secondOff60(foodPrice , buyAmount)
    }else {
      total += noDiscount(foodPrice , buyamount)
    }

  }
}

comeBuy(shopCart);






// const seven11 = {
//   'CO1': {
//     name; 'xxx',
//     price: 50
//   }
// }

// seven11['C01'].price




// function selfDiscount(num){
// // let selfPrice = []
// for(let i = 0; i < sevenEleven.food.length; i++) {
//  let selfPromotion = sevenEleven.food[i].promotion
//  let selfPrice = sevenEleven.food[i].price
//  let selfName = sevenEleven.food[i].name

//  if( num % 2 == 0 && selfPromotion === "第2件5折"){
//    selfPrice += selfPrice * 0.5 * num
//    console.log(sevenEleven.food[i].name +  num + "瓶" + selfPrice + '元')
// }else if(num % 2 == 1 && selfPromotion === "第2件5折" ){
//     selfPrice += selfPrice * 0.5 * num
//     console.log(sevenEleven.food[i].name +  num + "瓶" + selfPrice + '元')
//    }
//  }
// }

// selfDiscount(3)

// function dollars(cartAmount){










