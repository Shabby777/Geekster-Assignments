function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}

document.getElementById('orderButton').addEventListener('click', function(){
    const selecteditems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            selecteditems.push(checkbox.value);
        }
    });

    if(selecteditems.length === 0){
        alert("Please select atleast one item");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;

    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');

    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, getRandomTime())
    });

    promise.then(function(){
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

        switch(foodToShow){
            case 'Burger':
                foodImage.src= 'https://burgerking.com.my/upload/image/Product/67/Mushroom%20Veggie%20Ala%20Carte.png'
                break;
            case 'Fries':
                foodImage.src = 'https://burgerking.com.my/upload/image/Product/18/French%20Fries.png'
                break;
            case 'Drink':
                foodImage.src = 'https://burgerking.com.my/upload/image/Product/32/Ice%20Americano.png'
                break;
            default:
                foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }

        foodImage.style.display = 'block';
        orderButton.disabled = false;
    });
});