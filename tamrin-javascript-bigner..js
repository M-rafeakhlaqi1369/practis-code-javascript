 /*var userNumbers = []
 var userNumber = 0
 while(userNumber != -1){
	 userNumber = Number(prompt("لطفا شماره خود را وارد کنید:\nاگر شماره شما اعداد جمع شده بود اجرا کن:"))
		if(isNaN(userNumber)){
			alert("شما اعدادی که وارد کرده‌اید درست نمی باشد")
		}
		if(userNumber != -1){
			userNumbers.push(userNumber)
		}
		
 }
 
 console.log(userNumbers)*/
 ///////////////////////////////////////////////////////////////////////
 /*var userNumber = Number(prompt("Enter a Number"))
 var sum = 0
 while(userNumber /10 != 0){
	 sum = sum +(userNumber % 10)
	 userNumber = Math.floor(userNumber /10)
 }
 console.log("show th coding sum",sum)*/
 //////////////////////////////////////////////////////////////////////
 /*var userFirstNumber = Number(prompt("Entere the userFirstNumber:",1))
 var userSecondreNumber = Number(prompt("Etenre the userSecondreNumber",1))
 
 var power = 1
 
 for (i = 0 ; i < userSecondreNumber; i++){
	 
	 power = power * userFirstNumber
 }
 alert("power"+power)*/
 /////////////////////////////////////////////////////////////////////

 /*var userNumbers = []
 var userNumber = 0
 var sum = 0
 while(userNumber != -1){
	 userNumber = Number(prompt("enter the Number:",))
	 if(userNumber != -1){
	 userNumbers.push(userNumber)
	 }
 }
 console.log(userNumbers)
 for(i = 0 ; i < userNumbers.length ;i++){
	 sum +=userNumbers[i]
 }
 console.log("show userNumbers:",sum / userNumbers.length)*/
 //////////////////////////////////////////////////////////////////////
/* var varaible = ['rafe','shafe','horoon' ,'morteza' , 'mahdi']
 //console.log(varaible.length)
 console.log(varaible[2])*/
 /////////////////////////////////////////////////////////////////////
//  var scors = [12,13 ,14,15 , 15, 16]
//  //scors[6] =012
//  scors.push(243 , 56 , 74)
//  console.log(scors)
//  scors.pop()
//  console.log(scors)
/////////////////////////////////////////////////////////////////////
/* var scors =[23 ,24 ,25 ,26 ,27 ,28]
 console.log(scors)
 scors.shift()
 console.log(scors)
 scors.unshift(200 ,300 ,400)
 console.log(scors)*/
 ///////////////////////////////////////////////////////////////
/* var userName =[
 {id:'123465', name:'rafe' , familyname:'akhlaqi' , age:'23'},
	 {id:'43566', name:'shafe' , familyname:'akhlaqi', age:'43'},
 ]
 //console.log(userName)
 console.log(userName[0].familyname)*/
 ///////////////////////////////////////////////////////////////
 
/* var userNumber = [
 {id:12 , name:'rafe' ,familyname:'akhlqi', age:'23' , phone:'09386700647',Email:'bamyan1630650@gmail.com'},
 {id:156 , name:'haroon' ,familyname:'akhlqi', age:'17' , phone:'09386700647',Email:'haroon1630650@gmail.com'},
 {id:42 , name:'shafe' ,familyname:'akhlqi', age:'18' , phone:'09386700647',Email:'shafe1630650@gmail.com'},
 ]
 var userName = prompt("Enter name: ")
 var familyName = prompt("Enter familyName: ")
 var Age = prompt("Enter age: ") 
 var userPhone = prompt("Enter phon Number: ")
 var userEmail = prompt("Enter Email:")
 
 if(userName.length < 3 || userName.length > 9){
	 alert("شما مجاز به وارد کردن نام خود حداکثر ۳ کاراکتر و حد اقل ۹ کاراکتر می توانید.")
 }
 else if(familyName.length < 3 || familyName.length >15){
	  alert("شما مجاز به وارد کردن نام خانواده خود حداکثر ۳ کاراکتر و حد اقل ۱۵ کاراکتر می توانید.")
 }
 else if(isNaN(Age) || Age.length < 4){
	 alert("لطفا سن خود را به درستی وارد کنید:")
 }
	 

 var abjectUserNumber = {
	id:'231',
	name:userName,
	familyname:familyName,
	userage:Age,
	Phone:userPhone,
	Email:userEmail,
 }
 userNumber.push(abjectUserNumber)
 console.log(userNumber)*/

 //////////////////////////////////////////////////////////////////////////////////////////

/*var userNumber = ['123' ,'shafe' ,'horoon' ,]
var userName = prompt("Enter userName:")
var usfamilyName = prompt("Enter usfamilyName:")
var usAge = Number( prompt("Enter age:"))
if(isNaN(usAge)){
	console.log(" سنی که وارد کرده‌ایددرست نمی باشد")
}
else{
	var userNm ={
	id:'21',
	name:userName,
	familyName:usfamilyName,
	age:usAge,
}

userNumber.push(userNm)
 userNumber.forEach(function(rafeakhlqi){
	console.log(rafeakhlqi)
 }
)
}*/
/////////////////////////////////////////////////////////////
/*var userResult = prompt("Enter the Searching ")
var userNumber =[
	'rafe',
	'shafe',
	'haroon',
	'morteza',
	'mahdi',
	
]

var Result =userNumber.includes(userResult)
if(Result == true){
	console.log("به پنل خود خوش آمدید:")
}else{
	console.log("ابتدا باید ثبت نام خود را  انجام دهید")
}
//console.log(Result)*/
//////////////////////////////////////////
/*var userNumber =[
{id:12, name:'rafe' ,familyname:'akhlqi', age:23 , Eamil:'bamyan1630650@gmail.com'},
{id:13, name:'shafe' ,familyname:'akhlqi', age:23 , Eamil:'bamyan1630650@gmail.com'},
{id:14, name:'haroon' ,familyname:'akhlqi', age:23 , Eamil:'bamyan1630650@gmail.com'},
]

var userName = userNumber.some(function(user){
	console.log(user)
	return user.name == 'rafe'
})
console.log(userName)*/
///////////////////////////////////////////////////
/*var allProduct = [
{id:2 , name:'coat' , price:3200000},
{id:3 , name:'pantloon' , price:1000000},
{id:4 , name:'vascat' , price:800000},
{id:5 , name:'jacet' , price:2200000},
{id:6 , name:'capshan' , price:1800000},
{id:7 , name:'short' , price:200000},
{id:8 , name:'bliz' , price:750000},


]

var userBasket = [
{id:3 , name:'pantloon' , price:1000000},
{id:8 , name:'bliz' , price:750000},
]

var userProduct = prompt("Enter the Nameproduct :")
var requestProduct;

var isinShop = allProduct.some(function(product){
	if(product.name == userProduct){
		requstProduct = product
		return true
	}
	
})
	
if(isinShop == true){
	var newProduct ={
		id: 17,
		name:requstProduct.name ,
		price:requstProduct.price ,
	}
	userBasket.push(newProduct)
	console.log(userBasket)
}else{
	console.log("کالای شما موجود نست:")
}*/

////////////////////////////////////////////////////////////////////
/*var allProduct =[
	{id:13, name:"کت", price:1200000},
	{id:14, name:"شلوار", price:600000},
	{id:15, name:"پیراهن", price:800000},
	{id:16, name:"جلیقه", price:200000},
	{id:17, name:"مانتو", price:670000},
	{id:18, name:"کاپشن", price:1100000},
	{id:19, name:"سویشرت", price:900000},
]

var userBasket=[
	{id:13, name:"شلوار", price:600000},
	{id:13, name:"کاپشن", price:1100000},
]

var userProduct = prompt("Enter the Name of product:")
var requstproduct;

var isinshop = allProduct.forEach(function(product){
	if(product.name == userProduct){
		requstproduct = product
		return true;

	}
})

if(isinshop == true){
	var newProduct={
		id:20,
		name:requstproduct.name,
		price:requstproduct.price,
	}
	userBasket.push(newProduct)
	console.log(userBasket)
}
else{
	console.log("محصول شما در امبار  موجود نیست")
}*/

//////////////////////////////////////////////////////////////

/*var age =[12 ,14 ,16 ,18 ,19 ,22]

var allage = age.every(function(ages){
	console.log(ages)
	return ages >18})
console.log(allage)*/
//////////////////////////////////////////////////////////
/*var Name  =['rafe' ,'shafe', 'haroon','morteza' ,'mahdi',]

var allName = Name.every(function(names){
	console.log(names)
	return names.length > 5
})
console.log(allName)*/
/////////////////////////////////////////////////////////
/*var userName = prompt("Enter the name")
var userFamilyname = prompt("Etenr the familyname:")
var confrans = [
	{
		id:13,
		name:userName,
		Family:userFamilyname,
	}
]
var allUsername = userName.every,userFamilyname.every(function(names){
	return names.length >4
})
console.log(allUsername)*/
//////////////////////////////////////////////////////////

/*var qrupUser =[
	{id:12 , name:'rafe' , age:32},
	{id:14 , name:'shafe' , age:25},
	{id:16 , name:'haroon' , age:24},
	{id:18 , name:'morteza' , age:21},
	{id:20 , name:'mahdi' , age:19},
	{id:22 , name:'komil' , age:5},
	{id:24 , name:'sohel' , age:1},
	{id:26 , name:'monira' , age:26},
	{id:28 , name:'zarara' , age:28},
	{id:30 , name:'fatima' , age:16},
]

var allGroup = qrupUser.every(function(gruop){ 
	return gruop.age > 10
})

if(allGroup == true){
	console.log("شما وارد گروپ چت شده‌اید")
}
else{
	console.log("شرایظ سنی شما به این گروه مقدور نیست:")
}*/
//////////////////////////////////////////////////////////////
 /*var Number =[10 ,11 , 13 ,14 ,15 ,16 ,17 ,18]


 Number.splice(4 ,3)
 console.log(Number)*/

 ////////////////////////////////////////////////////////////

/* var index =['shafe' ,'rafe' ,'haroon' ,'morteza' ,'mahdi','komil']
u
 var resultIndex = index.findIndex(function(findex){
	 console.log(findex)
	 return findex = 'mahdi'
 })
 console.log(resultIndex)*///
 /////////////////////////////////////////////////////////////

/* var users =[
	 {id:1 ,name:"rafe" , age:22},
	 {id:1 ,name:"shafe" , age:22},
	 {id:1 ,name:"haroon" , age:22},
	 {id:1 ,name:"morteza" , age:22},
	 {id:1 ,name:"mahdi" , age:22},
	 {id:1 ,name:"komil" , age:22},

 ]

var userName = users.findIndex(function(user){
	console.log(user)
	return user.name == "mahdi"
	
})
console.log(userName)*/
/////////////////////////////////////////////////

/*var allProduct =[
	{id:1 ,name:"computer" , price :200000000},
	{id:2 ,name:"mobule" , price :30000000},
	{id:3 ,name:"labtub" , price :500000000},
	{id:4 ,name:"tublet" , price :24000000},
	{id:5 ,name:"hansfree" , price :5000000},
	{id:6 ,name:"rum" , price :6000000},
	{id:7 ,name:"cpu" , price :11100000},
	{id:8 ,name:"cas" , price :45000000},
]

var userBasket =[
	{id:6 ,name:"rum" , price :6000000},
	{id:2 ,name:"mobule" , price :30000000},
]

var userProduct = prompt("Enter the of product:")

	var requstProduct;

var isinshop = allProduct.some(function(user){
	if(user.name == userProduct){
		requstProduct = user
		return true
	}
})

if(isinshop ==  true){
	var newProduct ={
		id:10,
		name: requstProduct.name,
		price: requstProduct.price,
	}
	userBasket.push(newProduct)

	console.log("شما به درستی نام مورد نظرتان را وارد کرده‌‌اید",userBasket)
}
else(
	console.log("نام کاربر مورد نظر شما در لیست نیست")
)
console.log(isinshop)*/
/////////////////////////////////////////////////////////////




/*var allProduct =[
	{id:1 ,name:"computer" , price :200000000},
	{id:2 ,name:"mobule" , price :30000000},
	{id:3 ,name:"labtub" , price :500000000},
	{id:4 ,name:"tublet" , price :24000000},
	{id:5 ,name:"hansfree" , price :5000000},
	{id:6 ,name:"rum" , price :6000000},
	{id:7 ,name:"cpu" , price :11100000},
	{id:8 ,name:"cas" , price :45000000},
]

var userBasket =[
	{id:6 ,name:"rum" , price :6000000},
	{id:2 ,name:"mobule" , price :30000000},
]

var userProduct = prompt(" 1- add product \n 2- Remove product")

if(userProduct == "1"){
	var userProductname = prompt("Enter your name")
	var productData;

	var isinshop = allProduct.some(function(product){
		if(product.name == userProductname){
			productData = product
			return true
		}
	})

	if(isinshop == true){
		var allProduct ={
			id:3,
			name: productData.name,
			price: productData.price,
		}

		userBasket.push(allProduct)
		console.log(userBasket)
	}
}
else if(userProduct == "2"){
	var userProductname = prompt("Enter your product name:")

	var productIindex = userBasket.findIndex(function(product){
		return product.name == userProductname
	})
	userBasket.splice(productIindex,1)

	console.log(userBasket)
}*/
////////////////////////////////////////////////////
/*var allProduct =[
	{id:1 ,name:"کامپیوتر" , price :200000000},
	{id:2 ,name:"موبایل" , price :30000000},
	{id:3 ,name:"لبتاب" , price :500000000},
	{id:4 ,name:"تابلت" , price :24000000},
	{id:5 ,name:"گوشکی" , price :5000000},
	{id:6 ,name:"رم" , price :6000000},
	{id:7 ,name:"هارد" , price :11100000},
	{id:8 ,name:"مانیتو" , price :45000000},
]

var userBasket =[
	{id:5 ,name:"گوشکی" , price :5000000},
	{id:2 ,name:"موبایل" , price :30000000},
]

var userProduct = prompt("Entret 1 add product:\n 2 Remove product:")

if(userProduct == '1'){
	var userProductname = prompt("Enter add product:")
	var requstProduct;
	var userProductdate = allProduct.some(function(product){
		if(product.name == userProductname){
			requstProduct = product
			return true
		}
	})

		if(userProductdate == true){
			var newProduct ={
				id:3,
				name:requstProduct.name,
				price:requstProduct.price,
			}
		}
		
		userBasket.push(newProduct);
	console.log("Product:",userBasket);
	
}
else if(userProduct == '2'){
	var userProductname = prompt("Enter the Remove:")
	var userBaskets = userBasket.findIndex(function(users){
		return users.name == userProductname
	})
	userBasket.slice(users)
	console.log(userBasket)

}
else{
	alert("واٰژه‌ای که وارد کرده‌ای درست نمی باشد")
}*/
/////////////////////////////////////////////////////
/* var allproduct =[
	 {id:14 , name:"کت", price:1200000},
	 {id:16 , name:"شلوار", price:800000},
	 {id:17 , name:"کاپشن", price:1400000},
	 {id:18 , name:"جلیقه", price:600000},
	 {id:19 , name:"پیراهن", price:485000},
	 {id:20 , name:"جوراب", price:20000},
	 {id:22 , name:"کفش", price:400000},
	 {id:24 , name:"کمربند", price:90000},
	 {id:26 , name:"مانتو", price:700000},
	 {id:28 , name:"کت دامن", price:1400000},
	 {id:40 , name:"مجلسی", price:2000000},
	 {id:44 , name:"رویسری", price:65000},
 ]

 

 var userprice = prompt("enter add one :\n enter Remove two:")
 if(userprice == '1'){
	 var userBasket = [
	{id:14 , name:"کت", price:1200000},
	{id:18 , name:"جلیقه", price:600000},
	{id:44 , name:"رویسری", price:65000},
	{d:17 , name:"کاپشن", price:1400000},
	{id:27 , name:"کت دامن", price:1400000},
	{id:40 , name:"مجلسی", price:2000000},


 ]

 var filteridProduct = userBasket.filter(function(filterid){
	 return filterid.price < 1200000
 })
 var postcost = filteridProduct.length * 20000
 console.log("postcost:",filteridProduct,"\n",postcost)

 var sum = 0;

  userBasket.forEack(function (procduct) {
	 sum = sum + procduct.price
 })

 console.log(sum)


}

 else if(userprice == '2'){
	 alert("کاربر شما درست نمی باشد<")
 }*/

 /*var requstProduct;
 var isinshop = allproduct.some(function(user){
	 if(user.price == userprice){
		 requstProduct = user.
		 return true
	 }
 })

 if(isinshop == true){

 }*/


 ///////////////////////////////////////////////////

//  var userBasket = [
// 	{id:14 , name:"کت", price:1200000},
// 	{id:18 , name:"جلیقه", price:600000},
// 	{id:44 , name:"رویسری", price:65000},
// 	{d:17 , name:"کاپشن", price:1400000},
// 	{id:27 , name:"کت دامن", price:1400000},
// 	{id:40 , name:"مجلسی", price:2000000},


//  ]

//  var filteridProduct = userBasket.filter(function(filterid){
// 	 return filterid.price < 1200000
//  })
//  var postcost = 
//  console.log("filteridRroduct:" ,filteridProduct)

/////////////////////////////////////////////////////////////////
/*var userBasket = [
		{id:14 , name:"کت", price:1200000},
		{id:18 , name:"جلیقه", price:600000},
		{id:44 , name:"رویسری", price:65000},
		{d:17 , name:"کاپشن", price:1400000},
		{id:27 , name:"کت دامن", price:1400000},
		{id:40 , name:"مجلسی", price:2000000},
	
	
	 ]

var FilteridProduct = userBasket.filter(function(filtereds){
	return filtereds.price > 120000
})
var postcost = FilteridProduct.length * 1000
console.log(FilteridProduct)

console.log(postcost)

var sum = 0
userBasket.forEach(function(postcosts){
	sum = sum + postcosts.price
})
var totalPrice = sum + postcost
console.log(totalPrice)*/




/////////////////////////////////////////////////////


// var userNumber =[12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20]

// // var number = 12
// console.log(Array.isArray(userNumber))
// console.log(userNumber.indexOf(13))
// console.log(userNumber.lastIndexOf(16))
// console.log(userNumber.slice(5,7))
// console.log(userNumber.join(" /rafe/ "))
// console.log(userNumber.reverse())

// var userChar = "rafeakhlaqi/shafe/haroon"

// console.log(userChar.split("/"))



////////////////////////////////////////////////////////
/*var word = prompt("Enter the word:")
var characterArray = word.split("")
var reverseCharacters = characterArray.reverse()
var noreverscharacters = reverseCharacters.join("")
if(word == noreverscharacters){
	console.log("از هر  دو جهت کلمه خوانده می شود")
}
else{
	console.log("از هر دو جهت به یک شکل خوانده نمی شود:")
}

console.log(noreverscharacters)*/


//////////////////////////////
/*var word = pormpt("Enter the word:")

var characterArray = word.split("")

var reverseCharacters = characterArray.reverse()
var noreverscharacters = reverseCharacters.join("")

if(word == noreverscharacters){
	console.log("از هر دو جهت خوانده شود")
}*/

/////////////////////////////////////////////////////////////////
/*var todoArray = [
	{id:1 , title:"react-js" , isDoing:false},
	{id:2 , title:"html" , isDoing:false},
	{id:3 , title:"css" , isDoing:false},
	{id:4 , title:"not-js" , isDoing:false},
	{id:5 , title:"bootstrap-js" , isDoing:false},
]


var userMain = prompt("choose of on them:\n 1.Add Todo:\n 2.Remove Todo:\n 3.Do todo:")

if(userMain === "1"){
	// alert("Add")
	var newTodoName = prompt("Enter the todoname",'')
	var newTodoObject ={
		id:todoArray.length + 1,
		title:newTodoName,
		isDoing:false,
	}
	todoArray.push(newTodoObject)
	console.log(todoArray)
}
else if(userMain === "2"){
	// alert("Remove")
	var newTodoMain = prompt("Enter the Remove todo")
	var todoArrays = todoArray.findIndex(function(todo){
		return todo.title === newTodoMain
	})
	todoArray.splice(todoArrays ,1)
	console.log(todoArray)
}
else if(userMain === "3"){
	// alert("do")
	var editableTodoName = prompt("Enter the do todo:",'')

	todoArray.forEach(function(todo){
		if(todo.title === editableTodoName){
			todo.isdoing = true
		}
	})
	console.log(todoArray)

}
else{
	alert("گزینه وارد شده معتبر نمی باشد.")
}*/
/////////////////////////////////////////////////////////
var citis = {
	tehran:['قرچک','ورامین','اسلامشهر','پاکدشت'],
	qom:['نیروگاه','سلقجکان','امام خمینی','جمکران','شهرقایم'],
	asfahan:['زینبیه','آستارا','امام رضا','باجک','مفتح'],
	sheraz:['شاهجراغ','مصدق','صیاد','بهشتی','خیام']
}

var citiStart = prompt("enter the startciti")

var citiLine = citis[citiStart]

citiLine.forEach(function(citin) {
	console.log(citin)

});
//////////////////////////////////////////////
/*var allQuestions = [
	{id: 1, title:'2 + 2', answer: '4'},
	{id: 2, title:'2 * 4', answer: '8'},
	{id: 3, title:'7 ** 2', answer: '49'},
	{id: 4, title:'12 / 4', answer: '3'},
	{id: 5, title:'100 / 25', answer: '4'},
	{id: 6, title:'100 * 2', answer: '200'},
	{id: 7, title:'cpatal of Iran', answer: 'tehran'},
]*/

/////////////////////////////////////////////////////

// var minute  = +prompt("entre the minute:")

// var second = +prompt("enter the second:")

// var timer = setInterval(function() {

// 	if(second === 60){
// 		minute++
// 		second.length = 60
// 	}

// 	if(second === 60 && minute === 2){
// 		clearInterval(timer)
// 	}
// 	console.log("timer: " + minute + ' : ' + second)
// 	second++
// },1000)

 

 