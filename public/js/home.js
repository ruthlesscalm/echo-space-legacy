const masks = Array.from(document.getElementsByClassName("mask-effect"));
const songLists = Array.from(document.getElementsByClassName("song-list"));
const leftBtns = Array.from(document.getElementsByClassName("btn-left"));
const rightBtns = Array.from(document.getElementsByClassName("btn-right"));


masks.forEach((mask, index) => {
    let songList = songLists[index];
    let leftBtn = leftBtns[index];
    let rightBtn = rightBtns[index];
    let maxScroll = songList.scrollWidth - songList.clientWidth;
    
    function buttonsVisibility() {
        let currentScroll = songList.scrollLeft;

        if(maxScroll <= 0) {
            leftBtn.style.display = "none";
            rightBtn.style.display = "none";
            return;
        }

        if (currentScroll < 10) {
            leftBtn.style.display = "none";
            rightBtn.style.display = "inline-block";
        }
        else if (currentScroll >= maxScroll - 10) {
            rightBtn.style.display = "none";
            leftBtn.style.display = "inline-block";
        }
        else {
            leftBtn.style.display = "inline-block";
            rightBtn.style.display = "inline-block";
        }
    }
    buttonsVisibility();
    window.addEventListener("resize", buttonsVisibility);
    songList.addEventListener("scroll", buttonsVisibility);

    function buttonClicks(direction) {
        if (direction === "left") {
            songList.scrollLeft -= 100;
        }
        else if (direction === "right") {
            songList.scrollLeft += 100;
        }
    }
    leftBtn.addEventListener("click", () => buttonClicks("left"));
    rightBtn.addEventListener("click", () => buttonClicks("right"));
});