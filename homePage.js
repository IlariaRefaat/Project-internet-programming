// -------------------------------------- menu --------------------//
const menu=document.getElementsByClassName("menu");
const menuLen=menu.length;

function menuFun(id){
    for (var i=0;i<menuLen;i++){
        if (i==id){
            let x= document.getElementById("menu"+id);
            x.setAttribute("class","menu-active");


        }
        else {
            let x= document.getElementById("menu"+i);
            x.setAttribute("class","menu");
        }
    }
    }
//---------------------------------------- posts -------------------//
function post(photo, name, major, time, likes,comments,attached,content){
    this.photo = photo;
    this.name = name;
    this.major = major;
    this.time = time;
    this.likes = likes;
    this.comments=comments;
    this.attached=attached;
    this.content=content;
}
//---------------------------------------- posts dummy data -------------------//
let PostArray = [];

let post1 = new post('images/profile1.jpg', "Yomna", "CESS", '15 minutes ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post1);
let post2 = new post('images/profile2.jpg', "Ilaria", "CESS", '25 minutes ago', '500','50','images/feed3.jpg','Good luck in your exams fellow colleagues!');
PostArray.push(post2);
let post3 = new post('images/profile3.jpg', "Omar", "CESS", '2 hours ago', '500','50','images/feed2.jpg','Congratulations Class 2022!! You made us all proud!');
PostArray.push(post3);
let post4 = new post('images/profile1.jpg', "Yomna", "CESS", '3 hours ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post4);
let post5 = new post('images/profile5.jpg', "Yomna", "CESS", '5 hours ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post5);
let post6 = new post('images/profile6.jpg', "Yomna", "CESS", '6 hours ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post6);
let post7 = new post('images/profile7.jpg', "Yomna", "CESS", '10 hours ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post7);
let post8 = new post('images/profile8.jpg', "Yomna", "CESS", '12 hours ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post8);
let post9 = new post('images/profile9.jpg', "Yomna", "CESS", '1 day ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post9);
let post10 = new post('images/profile10.jpg', "Yomna", "CESS", '2 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post10);
let post11 = new post('images/profile11.jpg', "Yomna", "CESS", '3 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post11);
let post12 = new post('images/profile12.jpg', "Yomna", "CESS", '3 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post12);
let post13 = new post('images/profile13.jpg', "Yomna", "CESS", '3 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post13);
let post14 = new post('images/profile14.jpg', "Yomna", "CESS", '4 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post14);
let post15 = new post('images/profile15.jpg', "Yomna", "CESS", '4 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post15);
let post16 = new post('images/profile1.jpg', "Yomna", "CESS", '4 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post16);
let post17 = new post('images/profile1.jpg', "Yomna", "CESS", '5 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post17);
let post18 = new post('images/profile1.jpg', "Yomna", "CESS", '5 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post18);
let post19 = new post('images/profile1.jpg', "Yomna", "CESS", '5 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post19);
let post20 = new post('images/profile1.jpg', "Yomna", "CESS", '5 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post20);
let post21 = new post('images/profile1.jpg', "Yomna", "CESS", '6 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post2);
let post22 = new post('images/profile1.jpg', "Yomna", "CESS", '6 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post2);
let post23 = new post('images/profile1.jpg', "Yomna", "CESS", '6 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post2);
let post24 = new post('images/profile1.jpg', "Yomna", "CESS", '7 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post2);
let post25 = new post('images/profile1.jpg', "Yomna", "CESS", '7 days ago', '500','50','images/feed1.jpg','Can someone please help me out with this code. I can not catch the error.');
PostArray.push(post25);
//----------------------------------------load posts -----------------------//
function load_posts(){

    for (let i=1;i<PostArray.length;i++){
        let container=document.getElementsByClassName("feeds")[0];
        var div1=document.createElement("div");
        div1.setAttribute("class","feed");
/////////////////////////////////// head of posts html/////////////////////
        var div2=document.createElement("div");
        div2.setAttribute("class","head");
        var div3=document.createElement("div");
        div3.setAttribute("class","user");
        var div4=document.createElement("div");
        div4.setAttribute("class","profile-picture");
        var img = document.createElement('img');
        img.src=PostArray[i].photo;
        div4.appendChild(img);
        var div5=document.createElement("div");
        div5.setAttribute("class","ingo"); 
        var name1=document.createElement("h3");
        name1.innerHTML=PostArray[i].name;
        var details=document.createElement("small");
        details.innerHTML=PostArray[i].major+', '+PostArray[i].time;
        div5.appendChild(name1);
        div5.appendChild(details);
        var span = document.createElement("span");
        span.setAttribute("class","edit");
        var icon = document.createElement("i");
        icon.setAttribute("class","uil uil-ellipsis-h");
        span.appendChild(icon);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div2.appendChild(div3);
        div2.appendChild(span);
///////////////////////////////////////////////////////////////////
        var div6=document.createElement("div");
        div6.setAttribute("class","photo");   
        var img2 = document.createElement('img');
        img2.src=PostArray[i].attached;
        div6.appendChild(img2);
        var div7=document.createElement("div");
        div7.setAttribute("class","action-button");  
        var div8=document.createElement("div");
        div8.setAttribute("class","interaction-buttons");  
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        var span3 = document.createElement("span");
        var icon1 = document.createElement("i");
        icon1.setAttribute("class","uil uil-heart");
        var icon2 = document.createElement("i");
        icon2.setAttribute("class","uil uil-comment-dots");
        var icon3 = document.createElement("i");
        icon3.setAttribute("class","uil uil-share-alt");
        span1.appendChild(icon1);
        span2.appendChild(icon2);
        span3.appendChild(icon3);
        div8.appendChild(span1);
        div8.appendChild(span2);
        div8.appendChild(span3);
        div7.appendChild(div8);
        var div9=document.createElement("div");
        div9.setAttribute("class","liked-by"); 
        var span4 = document.createElement("span");
        var span5 = document.createElement("span");
        var span6 = document.createElement("span");

        var img3 = document.createElement("img");
        img3.src="images/profile4.jpg";
        var img4 = document.createElement("img");
        img4.src="images/profile3.jpg";
        var img5 = document.createElement("img");
        img5.src="images/profile2.jpg";
        var p=document.createElement("p");
        p.innerHTML="Liked by <b>Laila Mohamed</b> and <b>"+PostArray[i].likes+" others</b>"
        span4.appendChild(img3);
        span5.appendChild(img4);
        span6.appendChild(img5);
        div9.appendChild(span4);
        div9.appendChild(span5);
        div9.appendChild(span6);
        div9.appendChild(p);
/////////////////////////////////////////////////////////////////////
        var div10=document.createElement("div");
        div10.setAttribute("class","caption"); 
        div10.innerHTML="<p><b>"+PostArray[i].name+"</b> "+PostArray[i].content+" </p>";
        var div11=document.createElement("div");
        div11.setAttribute("class","text-muted"); 
        div11.innerHTML="View all "+PostArray[i].comments+" comments";
        div1.appendChild(div2);
        div1.appendChild(div6);
        div1.appendChild(div7);
        div1.appendChild(div9);
        div1.appendChild(div10);
        div1.appendChild(div11);
        container.appendChild(div1);
    }
}


function add_post(){
    let input=document.getElementById("create-post").value;
    newPost = new post('images/profile1.jpg', "Yomna", "CESS", 'just now', '500','50','', input);
    PostArray.unshift(newPost);
    document.getElementById("create-post").value="";
    let container=document.getElementsByClassName("feeds")[0];
    container.innerHTML="";
        var div1=document.createElement("div");
        div1.setAttribute("class","feed");
/////////////////////////////////// head of posts html/////////////////////
        var div2=document.createElement("div");
        div2.setAttribute("class","head");
        var div3=document.createElement("div");
        div3.setAttribute("class","user");
        var div4=document.createElement("div");
        div4.setAttribute("class","profile-picture");
        var img = document.createElement('img');
        img.src= PostArray[0].photo;
        div4.appendChild(img);
        var div5=document.createElement("div");
        div5.setAttribute("class","ingo"); 
        var name1=document.createElement("h3");
        name1.innerHTML= PostArray[0].name;
        var details=document.createElement("small");
        details.innerHTML= PostArray[0].major+', '+ PostArray[0].time;
        div5.appendChild(name1);
        div5.appendChild(details);
        var span = document.createElement("span");
        span.setAttribute("class","edit");
        var icon = document.createElement("i");
        icon.setAttribute("class","uil uil-ellipsis-h");
        span.appendChild(icon);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div2.appendChild(div3);
        div2.appendChild(span);
///////////////////////////////////////////////////////////////////
        var div6=document.createElement("div");
        div6.setAttribute("class","photo");   
        var div7=document.createElement("div");
        div7.setAttribute("class","action-button");  
        var div8=document.createElement("div");
        div8.setAttribute("class","interaction-buttons");  
        var span1 = document.createElement("span");
        var span2 = document.createElement("span");
        var span3 = document.createElement("span");
        var icon1 = document.createElement("i");
        icon1.setAttribute("class","uil uil-heart");
        var icon2 = document.createElement("i");
        icon2.setAttribute("class","uil uil-comment-dots");
        var icon3 = document.createElement("i");
        icon3.setAttribute("class","uil uil-share-alt");
        span1.appendChild(icon1);
        span2.appendChild(icon2);
        span3.appendChild(icon3);
        div8.appendChild(span1);
        div8.appendChild(span2);
        div8.appendChild(span3);
        div7.appendChild(div8);
        var div9=document.createElement("div");
        div9.setAttribute("class","liked-by"); 
        var span4 = document.createElement("span");
        var span5 = document.createElement("span");
        var span6 = document.createElement("span");

        var img3 = document.createElement("img");
        img3.src="images/profile4.jpg";
        var img4 = document.createElement("img");
        img4.src="images/profile3.jpg";
        var img5 = document.createElement("img");
        img5.src="images/profile2.jpg";
        var p=document.createElement("p");
        p.innerHTML="Liked by <b>Laila Mohamed</b> and <b>"+ PostArray[0].likes+" others</b>"
        span4.appendChild(img3);
        span5.appendChild(img4);
        span6.appendChild(img5);
        div9.appendChild(span4);
        div9.appendChild(span5);
        div9.appendChild(span6);
        div9.appendChild(p);
/////////////////////////////////////////////////////////////////////
        var div10=document.createElement("div");
        div10.setAttribute("class","caption"); 
        div10.innerHTML="<p><b>"+ PostArray[0].name+"</b> "+ PostArray[0].content+" </p>";
        var div11=document.createElement("div");
        div11.setAttribute("class","text-muted"); 
        div11.innerHTML="View all "+ PostArray[0].comments+" comments";
        div1.appendChild(div2);
        div1.appendChild(div6);
        div1.appendChild(div7);
        div1.appendChild(div10);
        div1.appendChild(div9);
        div1.appendChild(div11);
        container.appendChild(div1);
        load_posts();
        input.value='';
}

  


