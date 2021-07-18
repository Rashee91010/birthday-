
var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
blockimageobject = "";

function new_image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        blockimageobject = Img;

        blockimageobject.scaleToWidth(600);
        blockimageobject.scaleToHeight(500);
        blockimageobject.set({
            top: 0,
            left: 0
        });
        canvas.add(blockimageobject);
    });

}

function playSound() {
    x.play();
}
