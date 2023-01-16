fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
}).then(json => {

      /*
    Json is array of data like this-> 
     {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    }
    */

    let max_rewards = 100;

    // we will receive rewards points 
    // assuming id value is the reward
    // since json is an array we are getting 7th value from array and it's id property as reward
    const val = json[7].id;


    let ul = document.getElementsByTagName('ul');
    // Adding views dynamically
    for(var i = 1 ; i<=max_rewards;i++){
        var custom_li = document.createElement("li")
        var custom_a = document.createElement("a")
        custom_a.appendChild(document.createTextNode(i))
        custom_li.appendChild(custom_a)
        ul[0].appendChild(custom_li)
    }
  
    // element is clicked programmatically and is visible
    // all the previous reward points are styled
    let li = document.getElementsByTagName('ul')[0].getElementsByTagName('li');     
    for (var i = 0; i < val; i++) {
        li[i].getElementsByTagName('a')[0].style.color = "yellow"
    }

    // current reward status should be visible
    if(val+3 >= max_rewards){
        // if we are targeting value that doesn't exists
        li[val].scrollIntoView();
    }else{
        li[val+3].scrollIntoView();
    }

})

