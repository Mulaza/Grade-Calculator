


class NoMobile {
    constructor(message, imgPath) {
        this.message = message ? message : "Try The Desktop Version";
        this.imgPath = imgPath ? imgPath : '';

        this.render = this.checkMobile() ? this.createScreen() : undefined;
    }


    checkMobile() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }



    createScreen(params) {
        let pageNode = document.createElement('div');
        let imgNode = document.createElement('img');;
        let textNode = document.createElement('p');


        pageNode.style.display = "flex";
        pageNode.style.flexDirection = "column"
        pageNode.style.justifyContent = "center";
        pageNode.style.alignItems = "center"
        pageNode.style.position = "absolute";
        pageNode.style.height = "100vh";
        pageNode.style.width = "100%";
        pageNode.style.margin = "0px";
        pageNode.style.top = "0";
        pageNode.style.left = "0";
        pageNode.style.zIndex = "2";
        pageNode.style.backgroundColor = "#fafafa";

        imgNode.src = this.imgPath;
        imgNode.style.width = "110px";

        textNode.innerHTML = this.message;
        textNode.style.color = "#5b5b5b";
        textNode.style.fontFamily = "arial";
        textNode.style.fontWeight = "bold";

        pageNode.append(imgNode);
        pageNode.append(textNode);
        document.body.append(pageNode);

        console.log('working');
    }


}

