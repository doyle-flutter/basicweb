const data = [
    {
        tag: 'div',
        example:'',
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
    }
];

function menuSetUp(){
    // data.forEach((e) =>)
}

// div #contentWrapper
const contentWrapper = document.getElementById('contentWrapper');
contentWrapper.classList.add('contentWrapper');

function contentSetUp(data){
    // div #data['tag']
    let contentBox = document.createElement('div');
    contentBox.id = data['tag'];
    contentBox.classList.add('contentBox');
    
    // - div #contentTitle .content> h2 data['tag']
    let contentTitle = document.createElement('div');
    contentTitle.id = 'contentTitle';
    contentTitle.classList.add('content');

    let contentTitleH2 = document.createElement('h2');
    contentTitleH2.innerText = data['tag'];
    contentTitle.appendChild(contentTitleH2);
    
    // - div #contentExam > innerHTML = data['code'];
    let contentExam = document.createElement('div');
    contentExam.id = 'contentExam';
    contentExam.classList.add('contentExam');
    contentExam.innerHTML = data['code'];
    for (const key in data['css']) {
        contentExam.childNodes[0].style[key] = data['css'][key];
    }

    // - div #contentDes 
    let contentDes = document.createElement('div');
    contentDes.classList.add('contentDes');
    // --- p > data['desTitle']
    let desTitle = document.createElement('p');
    desTitle.innerText = data['desTitle'];
    contentDes.appendChild(desTitle);
    // --- ul > li > p > data['desSub'][i]
    let desSubList = document.createElement('ul');
    for(let i = 0; i < data['desSub'].length; i++){
        let desSubListItems = document.createElement('li');
        let desSubListItemsTxt = document.createElement('p');
        desSubListItemsTxt.innerText = data['desSub'][i];
        desSubListItems.appendChild(desSubListItemsTxt);
        desSubList.appendChild(desSubListItems);
    }
    contentDes.appendChild(desSubList);
    
    // - div #contentCode > code > data['code']
    let contentCode = document.createElement('div');
    contentCode.classList.add('contentCode');   
    let contentCodeTag = document.createElement('code');
    contentCodeTag.innerText = data['code'];
    contentCode.appendChild(contentCodeTag);
    
    // *
    contentBox.appendChild(contentTitle);
    contentBox.appendChild(contentExam);
    contentBox.appendChild(contentDes);
    contentBox.appendChild(contentCode);
    contentWrapper.appendChild(contentBox);
    return;
}

contentSetUp(data[0]);
