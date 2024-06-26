const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")

dropDown.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden")
})

menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden")
})

let video = document.querySelectorAll("video")
video.forEach(video => {
    let playPromise = video.play()
    if(playPromise !== undefined) {
        playPromise.then(() => {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    video.muted = false
                    if(entry.intersectionRatio !== 1 && !video.paused){
                        video.pause()
                    } else if (entry.intersectionRatio > 0.5 && video.paused) {
                        video.play()
                    }
                })
            }, {threshold: 0.5})
            observer.observe(video)
        })
    }
})

var audio = document.getElementById("audio");

  audio.onmouseover = function() {
    audio.play();
  }