
var data = {
    annualy: {
        basic: {
            price: "$199.99", 
            properties : {
                storage : "500GB Storage", 
                users : "2 Users Allowed", 
                sendUp : "Send up to 3 GB", 
            }
        }, 
        professional: {
            price: "$249.99",
            properties: {
                storage: "1 TB Storage", 
                users: "5 Users Allowed", 
                sendUp: "Send up to 10 GB",
            }
        }, 
        master: {
            price: "$399.99", 
            properties: {
                storage: "2 TB Storage", 
                users: "10 Users Allowed",
                sendUp: "Send up to 20 GB", 
            }
        }
    }, 
    monthly: {
        basic: {
            price: "$19.99", 
            properties : {
                storage : "500GB Storage", 
                users : "2 Users Allowed", 
                sendUp : "Send up to 3 GB", 
            }
        }, 
        professional: {
            price: "$24.99",
            properties: {
                storage: "1 TB Storage", 
                users: "5 Users Allowed", 
                sendUp: "Send up to 10 GB",
            }
        }, 
        master: {
            price: "$39.99", 
            properties: {
                storage: "2 TB Storage", 
                users: "10 Users Allowed",
                sendUp: "Send up to 20 GB", 
            }
        }
    }, 
}

//get elements
var checkbox = document.getElementById("checkbox-plans");
var priceBasic = document.getElementById("price-basic");
var priceProfessional = document.getElementById("price-professional");
var priceMaster = document.getElementById("price-master");

checkbox.addEventListener("change", function(){
    
    if(checkbox.checked){
        //Monthly
        priceBasic.innerHTML = data.monthly.basic.price;
        priceProfessional.innerHTML = data.monthly.professional.price;
        priceMaster.innerHTML = data.monthly.master.price;
    }else{
        //Annually
        priceBasic.innerHTML = data.annualy.basic.price;
        priceProfessional.innerHTML = data.annualy.professional.price;
        priceMaster.innerHTML = data.annualy.master.price;
    }

})
