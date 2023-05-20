class CardNews extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow ({mode: 'open'})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute("class", "card");


        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card__left");
        

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');
        
        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('contet');


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card__right");

        const newImage = document.createElement('img');
        newImage.src = this.getAttribute('photo') || "/Angular/dio/Segunda-parte-ANGULAR/assets/download.png"

        cardRight.appendChild(newImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



        return componentRoot;
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        .card {
            width: 720px;
            box-shadow: -3px 2px 34px 15px rgba(0,0,0,1);
            -webkit-box-shadow: -3px 2px 34px 15px rgba(0,0,0,1);
            -moz-box-shadow: -3px 2px 34px 15px rgba(0,0,0,1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
           
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        
        
        
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
        
        .card__left > p {
            color: rgba(85, 84, 84, 0.582);
        }
        
        .card__left > span {
            font-weight: 400;
        }
        
        .card__left > span {
            font-weight: bold;
        }

        
        `

        return style
    }
}

customElements.define("card-news", CardNews);