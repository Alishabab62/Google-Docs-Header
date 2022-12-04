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