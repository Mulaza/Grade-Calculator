


class NoMobile {
    constructor(message) {
        this.message = message ? message : "Try The Desktop Version";

        this.render = this.createScreen();
    }



    createScreen(params) {
        let pageNode = document.createElement('div');
        let textNode = document.createElement('p');

        pageNode.style.display = "grid";
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

        textNode.innerHTML = this.message;
        textNode.style.color = "#5b5b5b";
        textNode.style.fontFamily = "arial";
        textNode.style.fontWeight = "bold";

        pageNode.append(textNode);
        document.body.append(pageNode);

        console.log('working');
    }


}

const obj = new NoMobile();