const menuBar=document.getElementById('menu-bar');
const bar=document.getElementById('nav-bar');
bar.addEventListener('click',()=>{
    menuBar.style.display='block'
})


const fileBar=document.getElementById('file-bar');
const filebtn=document.getElementById('file-btn');
filebtn.addEventListener('click' ,()=>{
    fileBar.style.display="block";
});
filebtn.addEventListener('mouseout',()=>{
    fileBar.style.display="none";
})

const editBtn=document.getElementById('edit-btn');
const editBar=document.getElementById('edit-bar');

editBtn.addEventListener('click' ,()=>{
    editBar.style.display="block";
});

editBtn.addEventListener('mouseout',()=>{
    editBar.style.display="none";
});

const viewBtn=document.getElementById('view-btn');
const viewBar=document.getElementById('view-bar');

viewBtn.addEventListener('click' ,()=>{
    viewBar.style.display="block";
});

viewBtn.addEventListener('mouseout',()=>{
    viewBar.style.display="none";
});

const insertBtn=document.getElementById('insert-btn');
const insertBar=document.getElementById('insert-bar');

insertBtn.addEventListener('click' ,()=>{
    insertBar.style.display="block";
});

insertBtn.addEventListener('mouseout',()=>{
    insertBar.style.display="none";
});

const formatBtn=document.getElementById('format-btn');
const formatBar=document.getElementById('format-bar');

formatBtn.addEventListener('click' ,()=>{
    formatBar.style.display="block";
});

formatBtn.addEventListener('mouseout',()=>{
    formatBar.style.display="none";
});

const toolsBtn=document.getElementById('tools-btn');
const toolsBar=document.getElementById('tools-bar');

toolsBtn.addEventListener('click' ,()=>{
    toolsBar.style.display="block";
});

toolsBtn.addEventListener('mouseout',()=>{
    toolsBar.style.display="none";
});