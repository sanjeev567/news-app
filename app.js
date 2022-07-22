console.log("welcome to Indian Press");

let collapseBlock = document.getElementById("collapseBlock");
// we can change the source i.e the-hindu, indian-express ect. or search news api and go to different news api's
let source = "bbc-news";
let api_key = "427e1ef6286349788026f300d3cfc72c"; //also keep protected this api key 

// create a get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${api_key}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(json);
    let newsHtml="";
    let ctr =0;
    articles.forEach(element => {
      ctr+=1;
      
                  // <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">${element.title}</button>
//<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      
    let news = `<div id="collapseBlock">
                    <p>
                    <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#multipleCollapseExample${ctr}" aria-expanded="false" aria-controls="collapseExample">
                      <b>Breaking news ${ctr}</b> ${element.title}
                    </button>
                  </p>
                  <div class="collapse" id="multipleCollapseExample${ctr}">
                    <div class="card card-body">
                        ${element.content} <a href='${element.url}' target='_blank'>read more: </a>
                    </div>
                  </div>
                </div>`;
                newsHtml+= news;
              });
              collapseBlock.innerHTML = newsHtml;
  } else {
    console.log("some error found !");
  }
};
xhr.send();
