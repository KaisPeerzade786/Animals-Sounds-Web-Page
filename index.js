for (var i = 0; i < document.querySelectorAll(".animal").length; i++) {
    document.querySelectorAll(".animal")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.textContent.trim();

        MakeSoundonclick(buttonInnerHtml);
    });
}
function MakeSoundonclick(buttonInnerHtml) {
    switch (buttonInnerHtml) {
        case 'Lion':
            var lion = new Audio("sounds/lion-sound.mp3");
            lion.play();
            break;
        case 'Tiger':
            var tiger = new Audio("sounds/tiger.mp3");
            tiger.play();
            break;
        case 'Leopard':
            var leopard = new Audio("sounds/leopard.mp3");
            leopard.play();
            break;
        case 'Elephant':
            var elephant = new Audio("sounds/elephant.mp3");
            elephant.play();
            break;
        case 'Bear':
            var bear = new Audio("sounds/bear.mp3");
            bear.play();
            break;
        case 'Eagle':
            var eagle = new Audio("sounds/eagle.mp3");
            eagle.play();
            break;
        case 'Sparrow':
            var sparrow = new Audio("sounds/sparrow.mp3");
            sparrow.play();
            break;
        case 'Parrot':
            var parrot = new Audio("sounds/parrot.mp3");
            parrot.play();
            break;
        case 'Hen':
            var hen = new Audio("sounds/hen.mp3");
            hen.play();
            break;
        case 'Crow':
            var crow = new Audio("sounds/crow.mp3");
            crow.play();
            break;

    }
}