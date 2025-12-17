const masks = Array.from(document.getElementsByClassName("mask-effect"));
const songLists = Array.from(document.getElementsByClassName("song-list"));
const leftBtns = Array.from(document.getElementsByClassName("btn-left"));
const rightBtns = Array.from(document.getElementsByClassName("btn-right"));


masks.forEach((mask, index) => {
    const songList = songLists[index];
    const leftBtn = leftBtns[index];
    const rightBtn = rightBtns[index];
    const maxScroll = songList.scrollWidth - songList.clientWidth;
    
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

    function scrollAmount() {
        let list = songList.getElementsByTagName("li")[0];
        if(!list) return 0;

        let width = list.offsetWidth;
        let style = window.getComputedStyle(songList);
        let gap = (style.columnGap || style.gap) || 0;
        let totalWidth = width + parseFloat(gap);
        let calc = (Math.floor(songList.clientWidth / totalWidth) * totalWidth);
        let cond = (Math.floor(songList.clientWidth / totalWidth) > 5 ? totalWidth * 2: totalWidth);
        return calc - cond;
    }

    let isScrolling = false;
    function smoothScroll(amount) {
        if (isScrolling) return;
        isScrolling = true;

        songList.scrollTo({
            left: songList.scrollLeft + amount,
            behavior: "smooth"
        })
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }

    leftBtn.addEventListener("click", () => {
        smoothScroll(-scrollAmount());
    });
    rightBtn.addEventListener("click", () => {
        smoothScroll(scrollAmount());
    });
});