const arrImg = [
    {
        alt: 'lion',
    src: 'https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg'
    },
    {
        alt: 'elephant',
    src: 'https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg'
    },
    {
        alt: 'dog',
    src: 'https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg'
    },
    ];
const div = document.createElement('div');
document.body.append(div);

const bigImage = document.createElement('img');
bigImage.classList.add('image1');
document.body.append(bigImage);

for(let i = 0;i < arrImg.length;i++){
    let smallImage = document.createElement('img');
smallImage.src = arrImg[i].src;
smallImage.classList.add('image2');
document.body.append(smallImage);

smallImage.onclick = () => {
    bigImage.src = arrImg[i].src;
};
};

