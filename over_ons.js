var prevScrollpos = window.pageYOffset;
        var hidePoint = 600;
        
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
        
            if (currentScrollPos > hidePoint) {
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("header").style.top = "0";
                    document.getElementById("top").style.top = "40px";
                } else {
                    document.getElementById("header").style.top = "-40px";
                    document.getElementById("top").style.top = "-100px";
                }
            }
        
            prevScrollpos = currentScrollPos;

            var video = document.querySelector('.front_image');
            var parallaxSpeed = 0.5;
            var offset = window.pageYOffset * parallaxSpeed;
            video.style.transform = 'translate3d(-50%, ' + offset + 'px, 0)';
        }