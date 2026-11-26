
for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        this.style.color="green";
        if (this.innerHTML === "حوقل") {
            var audio = new Audio('./sounds/لا-حول-ولا-قوة-الا-بالله.mp3');
            audio.play();
            setTimeout(function (){
                document.querySelector(".d").style.color="#DA0463";
            },150);
        }
        else if (this.innerHTML === "أستغفر الله") {
            var audio = new Audio('./sounds/استغفر-الله.mp3');
            audio.play();
            setTimeout(function (){
                document.querySelector(".a").style.color="#DA0463";
            },150);
        }
        else if (this.innerHTML === "سبحان الله") {
            var audio = new Audio('./sounds/سبحانك-اللهم-وبحمدك.mp3');
            audio.play();
            setTimeout(function (){
                document.querySelector(".w").style.color="#DA0463";
            },150);
        }
        else if (this.innerHTML === "صل على النبي") {
            var audio = new Audio('./sounds/اللهم-صل-على-محمد-وعلى-آل-محمد.mp3');
            audio.play();
            setTimeout(function (){
                document.querySelector(".s").style.color="#DA0463";
            },150);
        }
    });
}

document.addEventListener("keydown", function (event) {
     if (event.key === "d") {
            var audio = new Audio('./sounds/لا-حول-ولا-قوة-الا-بالله.mp3');
            audio.play();
            document.querySelector(".d").style.color="green";
            setTimeout(function (){
                document.querySelector(".d").style.color="#DA0463";
            },150);
        }
        else if (event.key === "a") {
            var audio = new Audio('./sounds/استغفر-الله.mp3');
            audio.play();
            document.querySelector(".a").style.color="green";
            setTimeout(function (){
                document.querySelector(".a").style.color="#DA0463";
            },150);
        }
        else if (event.key === "w") {
            var audio = new Audio('./sounds/سبحانك-اللهم-وبحمدك.mp3');
            audio.play();
            document.querySelector(".w").style.color="green";
            setTimeout(function (){
                document.querySelector(".w").style.color="#DA0463";
            },150);
        }
        else if (event.key === "s") {
            var audio = new Audio('./sounds/اللهم-صل-على-محمد-وعلى-آل-محمد.mp3');
            audio.play();
            document.querySelector(".s").style.color="green";
            setTimeout(function (){
                document.querySelector(".s").style.color="#DA0463";
            },150);
        }
})