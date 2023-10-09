
const img_box = document.getElementById("click_img_box");
const clicked_img = document.getElementById("clicked_img");
const download_link = document.getElementById("download");
const gallery = document.getElementById("img_gal");

var count = 0;

var img = ['Images/img1.jpg', 'http://127.0.0.1:5500/Images/1.jpg', 'http://127.0.0.1:5500/Images/2.jpg', 'http://127.0.0.1:5500/Images/img2.jpg', 'http://127.0.0.1:5500/Images/img3.jpg', 'http://127.0.0.1:5500/Images/3.jpg', 'http://127.0.0.1:5500/Images/img4.jpg', 'http://127.0.0.1:5500/Images/4.jpg', 'http://127.0.0.1:5500/Images/5.jpg', 'http://127.0.0.1:5500/Images/img5.jpg', 'http://127.0.0.1:5500/Images/6.jpg', 'http://127.0.0.1:5500/Images/img6.jpg', 'http://127.0.0.1:5500/Images/img7.jpg', 'http://127.0.0.1:5500/Images/7.jpg', 'http://127.0.0.1:5500/Images/img8.jpg', 'http://127.0.0.1:5500/Images/8.jpg'];



for (let i = 0; i < img.length; i++)
{
    const image = document.createElement("img");
    image.src = img[i];
    image.setAttribute("onclick", "openimg(this.src)")
    gallery.appendChild(image);
}


function openimg(pic)
{
    img_box.style.display = "flex";
    clicked_img.src = pic;
    count = img.indexOf(pic);
}


function closeimg()
{
    img_box.style.display = "none";
}

function prev()
{ 
    if(count <= 0) 
    {
        count = img.length;
    }
    count--;
    return setImg()
}

function next()
{
    if (count >= img.length - 1)
    {
        count = -1;
    }
    count++;
    return setImg()
}

function download()
{
    download_link.href = img[count];
}


function setImg()
{
    console.log(count);
    return clicked_img.setAttribute('src',img[count])
}


document.addEventListener('keydown', (event) => {
    var name = event.key;
    
    if (name == 'ArrowLeft')
    {
        prev();
    }
    else if (name == 'ArrowRight')
    {
        next();
    }
    else if( name == 'Escape')
    {
        closeimg();
    }
  }, false);
