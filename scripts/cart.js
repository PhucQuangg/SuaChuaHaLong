const btn = document.querySelectorAll(".pro-cart button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        event.preventDefault();
        var btnItem = event.target
        var product = btnItem.closest('.pro-box-mid');
        var productImg = product.querySelector("img").src; 
        var productName = product.querySelector('.pro-title').textContent;
        var productPrice = product.querySelector('.price').textContent
        addCart(productPrice,productImg,productName)
    }})
})
function addCart(productPrice,productImg,productName){
    var cartItems=document.querySelectorAll("tbody tr")
    var productExists = false;
    for (var i = 0; i < cartItems.length; i++)
    {
        var productT = document.querySelectorAll('.name')
        if(productT[i].innerHTML == productName)
        {
            productExists=true;
            break;
        }
    }
    if (productExists) {
        displayNotification("Sản phẩm đã có trong giỏ hàng", "error");
    } else {
    var addtr = document.createElement("tr")
    var trcontent = '  <tr><td style=" display: flex;"><img src="'+productImg+'" alt=""> <span class="name">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><p></td><td><input style="width:40px; outline: none;" type="number" value="1" min="1" max="500"> </td><td style="cursor: pointer;"><span class="delete-cart">Xóa</span></td></tr>'
    addtr.innerHTML=trcontent
    var cartable = document.querySelector("tbody")
    cartable.append(addtr)
    carttotal()
    deleteCart()
    displayNotification("Sản phẩm đã được thêm vào giỏ hàng thành công!", "success");

    }
}
function displayNotification(message, type) {
    var notificationBanner = document.querySelector('.notification-banner');
    var icon = type === 'error' ? '❌' : '✅';
    notificationBanner.textContent = icon +' '+ message;
    notificationBanner.className = 'notification-banner ' + type; 
    notificationBanner.style.display = 'block';
    notificationBanner.style.backgroundColor = type === 'error' ? 'red' : '#4CAF50';
    setTimeout(function() {
        notificationBanner.style.display = 'none';
    }, 3000);
}

//----------total Price-------------//
function carttotal(){
    var cartItems=document.querySelectorAll("tbody tr")
    var total = 0
    for (var i = 0; i < cartItems.length; i++)
    {
        var inputValue = cartItems[i].querySelector("input").value
        var productPriceContent = cartItems[i].querySelector('.prices').innerHTML
        var productPrice = parseFloat(productPriceContent.replace(/[^0-9,]/g, '').replace(',', '.'));
        totalA = inputValue*productPrice
        total = total+ totalA
       
    }
    var carttotalA=document.querySelector('.price-total span')
    carttotalA.innerHTML=total.toLocaleString('de-DE')
    inputchange()
}
//----------Delete Cart--------------//
function deleteCart(){
    var cartItems=document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItems.length; i++)
    {
        var productT = document.querySelectorAll('.delete-cart')
             productT[i].addEventListener("click",function(event){
            var cartdelete = event.target
            var cartItemR = cartdelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })  
    }
}

//----------inputchange-----------//
function inputchange(){
    var cartItems=document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItems.length; i++)
    {
        var inputValue = cartItems[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        }) 
    }
}


//Thêm sản phẩm trong phần mô tả chi tiết//
const btn2 = document.querySelectorAll(".pro-cart2 button")
btn2.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        event.preventDefault();
        var btnItem2 = event.target
        var product2 = btnItem2.closest('.modal-content');
        var productImg2 = product2.querySelector("img").src; 
        var productName2 = product2.querySelector("H2").textContent;
        var productPrice2 = product2.querySelector('.price2 span').textContent;
        var quantity = product2.querySelector('input[type=number]').value;
        if (!quantity || quantity == 0) {
            displayNotification("Vui lòng nhập số lượng sản phẩm", "error");
        }
        else{
        addtoCart(productPrice2,productImg2,productName2,quantity)
        }
    }})
})
function addtoCart(productPrice2,productImg2,productName2,quantity){
   
    var cartItems=document.querySelectorAll("tbody tr")
    var productExists = false;
    for (var i = 0; i < cartItems.length; i++)
    {
        var productT = document.querySelectorAll('.name')
        if(productT[i].innerHTML == productName2)
        {
            productExists=true;
            displayNotification("Sản phẩm đã có trong giỏ hàng", "error");
            break;
        }
    }
    if (productExists!=1) {
    var addtr = document.createElement("tr")
    var trcontent = '  <tr><td style=" display: flex;"><img src="'+productImg2+'" alt=""> <span class="name">'+productName2+'</span></td><td><p><span class="prices">'+productPrice2+'</span><p></td><td><input style="width:40px; outline: none;" type="number" value="' + quantity + '" min="1" max="500"> </td><td style="cursor: pointer;"><span class="delete-cart">Xóa</span></td></tr>'
    addtr.innerHTML=trcontent
    var cartable = document.querySelector("tbody")
    cartable.append(addtr)
    carttotal()
    deleteCart()
    displayNotification("Sản phẩm đã được thêm vào giỏ hàng thành công!", "success");
    }
}


const cartbtn= document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".icons span")

cartshow.addEventListener("click",function(event)
{
    document.querySelector(".cart").style.right="0"
})
cartbtn.addEventListener("click",function(event)
{
    document.querySelector(".cart").style.right="-1000%"
})

document.querySelector('.cart button').addEventListener('click', function(event) {
    event.preventDefault();

    if (document.querySelector('tbody').childElementCount === 0) {
        alert('Giỏ hàng đang trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.');
    } else {
        alert('Đặt hàng thành công!');
    }
});



