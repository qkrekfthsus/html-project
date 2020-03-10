function changeContent() {  /*Laptop.html의 버튼을 눌렀을 때 내용 변경 함수*/
        var mylaptop = document.getElementById("my");   /*id가 my인 곳의 내용들을 받아옴*/
        mylaptop.innerHTML = "I want to buy this laptop!";/*내용 변경*/
        var img = document.getElementById("image");     /*id가 image인 곳의 내용들을 받아옴*/
        var txt = "<img src='images/newlaptop.jpg'; width='40%'; height='auto';> <img src='images/newlaptop2.jpg'; width='40%'; height='auto';>";   /*변수 설정*/
        img.innerHTML = txt;    /*내용 변경*/
        var info = document.getElementById("info");     /*id가 info인 곳의 내용들을 받아옴*/
        info.innerHTML = "<li>ASUS Zenbook pro duo</li> <li>CPU : Intel i9-9980HK(2.4GHz Speed, 5.0GHz Maximum speed)</li> <li>GPU : NVIDIA GeForce RTX 2060</li> <li>Memory : DDR4 32GB RAM</li> <li>Support ScreenPad Plus</li>"; /*내용 변경*/
}