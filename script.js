console.log("This is news api")
// a56a8c44f32543ae9dbcedeac97380d7
//a56a8c44f32543ae9dbcedeac97380d7
let source='the-times-of-india'
let apiKey='a56a8c44f32543ae9dbcedeac97380d7'

let newsAccordian = document.getElementById('newsAccordian')
const xhr=new XMLHttpRequest()
xhr.open("GET",`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
xhr.onload=function()
{
    if(this.status===200)
    {
        let json=JSON.parse(this.responseText)
        // console.log(json)
        let article=json.articles
        console.log(article)
        let newsHtml=""
        article.forEach(function(element,index) {

            let news = `<div class="card">
<div class="card-header" id="heading${index}">
    <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
            aria-expanded="true" aria-controls="collapse${index}">
             <b> Breaking News ${index+1} : </b> ${element["title"]}
        </button>
    </h2>
</div>
<div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
            data-parent="#newsAccordian">
            <div class="card-body">${element["content"]} <a href="${element['url']}" target="_blank">Read More</a> </div>
        </div>
    </div>`

    newsHtml+=news;


            
        });
        newsAccordian.innerHTML=newsHtml
    }
    else
    {
        console.log("Some error")
    }

}
xhr.send();

let news = `<div class="card">
<div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
        </button>
    </h2>
</div>
<div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
            data-parent="#accordionExample">
            <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>`

    