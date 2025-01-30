var prevScrollpos = window.pageYOffset;
        var hidePoint = 100;
        
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
        }