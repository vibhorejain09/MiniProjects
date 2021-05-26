const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.btn');
const articles = document.querySelectorAll('.content');

tabs.addEventListener("click", function(e){
    const id = e.target.dataset.id; //unique about buttons was datat id which we can access through data set
    if (id) {
        //sabse pehle jo active hai usko remove kardo sab button se
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hiding others
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
    }
});