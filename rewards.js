fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
}).then(json => {

    let max_rewards = 100;
    // we will receive rewards points 
    // assuming val is the value of reward
    const val = 10;

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

