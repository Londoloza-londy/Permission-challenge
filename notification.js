let button= queryselector(button);
button.addEventListerner('click',()=>{
    if(!window.Notification) return;
    
Notification
.requetPermission()
    .then(showNotification)

});

function showNotification(permission){
    if(permission!== 'granted') return;
    let Notification = new Notification('My title',{
        body: "Hi Londy how are you",
    })
}