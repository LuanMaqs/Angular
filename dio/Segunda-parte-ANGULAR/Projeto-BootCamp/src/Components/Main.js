class CardNews extends HTMLElement {
    constructor() {
        super();


        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "site");

        const title = document.createElement('div')
        title.setAttribute("class", "titulo")


        const newImage = document.createElement('img')
        newImage.src = this.getAttribute('photo') || '/Angular/dio/Segunda-parte-ANGULAR/Projeto-BootCamp/assets/logo do projeto pessoal DIO.webp'



        const titulo = document.createElement("h1")
        titulo.textContent = this.getAttribute('titulo')
        
        const linkTitle = document.createElement('button');
        linkTitle.textContent = this.getAttribute('linkTitle');
        linkTitle.href = this.getAttribute('link-url');



        const subBar = document.createElement('p')
        subBar.textContent= this.getAttribute('subBar')
       

        const newsContent = document.createElement('a')
        newsContent.textContent = this.getAttribute('contet')
        newsContent.href = this.getAttribute('urls')

        const newsContent1 = document.createElement('a')
        newsContent1.textContent = this.getAttribute('contet1')
        newsContent1.href = this.getAttribute('urls1')

        const newsContent2 = document.createElement('a')
        newsContent2.textContent = this.getAttribute('contet2')
        newsContent2.href = this.getAttribute('urls2')

        const newsContent3 = document.createElement('a')
        newsContent3.textContent = this.getAttribute('contet3')
        newsContent3.href = this.getAttribute('urls3')

        const newsContent4 = document.createElement('a')
        newsContent4.textContent = this.getAttribute('contet4')
        newsContent4.href = this.getAttribute('urls4')

        const newsContent5 = document.createElement('a')
        newsContent5.textContent = this.getAttribute('contet5')
        newsContent5.href = this.getAttribute('urls')

        const newsContent6 = document.createElement('a')
        newsContent6.textContent = this.getAttribute('contet6')
        newsContent6.href = this.getAttribute('urls6')


        const newsContent7 = document.createElement('a')
        newsContent7.textContent = this.getAttribute('contet7')
        newsContent7.href = this.getAttribute('urls7')


        title.appendChild(newImage)
        title.appendChild(titulo)
        title.appendChild(linkTitle);
        title.appendChild(subBar);
        title.appendChild(newsContent);
        title.appendChild(newsContent2);
        title.appendChild(newsContent3);
        title.appendChild(newsContent4);
        title.appendChild(newsContent5);
        title.appendChild(newsContent6);
        title.appendChild(newsContent7);




        componentRoot.appendChild(title)

        return componentRoot;
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
        a {
            padding-top: 10px;
            font-style: normal;
            text-decoration: none;
            color: black;
            font-weight: bold;
            padding: 10px;
            box-shadow: 2px 2px 2px 2px grey;
            margin: 50px;
            background-color: gray;
        
        }

        .subBar { 
            color: black;
        }

        p {
            font-weight: bold;
            padding: 15px;
        }

        img {
            width: 80px;
            padding: 10px;
        }


        h1{
            text-align: left;
            margin-left: 40px
            
        }

        button {
            margin-left: 50px;
            padding: 10px;
            background-color: gray;
        
        }

        `
        

        return style    
    }
}


customElements.define("card-news", CardNews);