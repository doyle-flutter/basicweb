const DB = [
    {
        tag: 'HTML',
        desTitle: '<></> 꺽쇠 괄호를 통해 열고 닫음',
        desSub: [
            '사용할 수 있는 태그가 지정되어있음',
            '태그를 열면 닫아야하며, 닫지 않는 태그도 존재함'
        ],
        code: '<tagName></tagName>',
        css: {
            
        }
    },
    {
        tag: 'div',
        desTitle: 'div 태그는 주로 영역을 나눌 때 사용하며, 영역 안에 내용(텍스트, 이미지, 영상 등)을 담아서 사용할 수 있음',
        desSub: [
            '기본 다지인은 없으며',
            '부모 태그의 가로길이 100% 차지하는 특징(이후 배울 Block)'
        ],
        code: '<div></div>',
        css: {
            'border' : '1px solid blue',
            'height' : '100px',
            'width' : '90%',
            'margin' : '0 auto'
        }
    },
];

class DataModel{
    constructor({tag, desTitle, desSub, code, css}){
        this.tag = tag;
        this.desTitle = desTitle;
        this.desSub = desSub;
        this.code = code;
        this.css = css;
    }
}

const dbFetch = ({dbData}) => dbData.map((e) => new DataModel(e));
const sideBarToggle = () => {
    const sideBar = document.getElementById('sideBar');
    if(sideBar.style.display == 'none'){
        sideBar.style.display = 'block';
        return;
    }
    sideBar.style.display = 'none';
    return;
}

const menuSetUp = ({menu, data}) => data.forEach( e => {
            let listItems = document.createElement('li');
            listItems.id = 'menuItems';
            let listItemTxt = document.createElement('p');
            let listItemTxtLink = document.createElement('a');
            listItemTxtLink.href = `#${e.tag}`;
            listItemTxtLink.innerText = e.tag;
            listItemTxtLink.addEventListener('click', sideBarToggle)
            listItemTxt.appendChild(listItemTxtLink);
            listItems.appendChild(listItemTxt);
            menu.appendChild(listItems);
        });

    const contentSetUp = ({targetTag, data}) => {
        // div #data['tag']
        let contentBox = document.createElement('div');
        contentBox.id = data.tag;
        contentBox.classList.add('contentBox');
        contentBox.style.boxShadow =  "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)";
        contentBox.style.margin = '20px 0';
        
        // - div #contentTitle .content> h2 data['tag']
        let contentTitle = document.createElement('div');
        contentTitle.id = 'contentTitle';
        contentTitle.classList.add('content');

        let contentTitleH2 = document.createElement('h2');
        contentTitleH2.innerText = data.tag;
        contentTitle.appendChild(contentTitleH2);
        
        // - div #contentExam > innerHTML = data['code'];
        let contentExam = document.createElement('div');
        contentExam.id = 'contentExam';
        contentExam.classList.add('contentExam');
        contentExam.innerHTML = data.code;
        for (const key in data.css) {
            contentExam.childNodes[0].style[key] = data.css[key];
        }

        // - div #contentDes 
        let contentDes = document.createElement('div');
        contentDes.classList.add('contentDes');
        // --- p > data['desTitle']
        let desTitle = document.createElement('p');
        desTitle.innerText = data.desTitle;
        contentDes.appendChild(desTitle);
        // --- ul > li > p > data['desSub'][i]
        let desSubList = document.createElement('ul');
        for(let i = 0; i < data.desSub.length; i++){
            let desSubListItems = document.createElement('li');
            let desSubListItemsTxt = document.createElement('p');
            desSubListItemsTxt.innerText = data.desSub[i];
            desSubListItems.appendChild(desSubListItemsTxt);
            desSubList.appendChild(desSubListItems);
        }
        contentDes.appendChild(desSubList);
        
        // - div #contentCode > code > data['code']
        let contentCode = document.createElement('div');
        contentCode.classList.add('contentCode');   
        let contentCodeTag = document.createElement('code');
        contentCodeTag.innerText = data.code;
        contentCode.appendChild(contentCodeTag);
        
        // *
        contentBox.appendChild(contentTitle);
        contentBox.appendChild(contentExam);
        contentBox.appendChild(contentDes);
        contentBox.appendChild(contentCode);
        targetTag.appendChild(contentBox);
        return;
    }

const showMe = () => new Promise((res,rej) => {
        try {
            res(dbFetch({dbData:DB}));
        } catch (error) {
            rej(new Error('ERR !'));
        }   
    })
    .then((e) => {
        let menu = document.getElementById('menu');
        menuSetUp({menu, data: e});
        return e;
    })
    .then((v) => {
        // div id="contentWrapper" 
        const contentWrapper = document.getElementById('contentWrapper');
        contentWrapper.classList.add('contentWrapper');
        // -- forEach( (e) => contentSetUp(targetTag: contentWrapper, data:e) ) 
        v.forEach((e) => contentSetUp({targetTag: contentWrapper, data: e}));
        return;
    })
    .catch((err) => {
        alert(err);
        return;
    });

window.onload = () => showMe();

