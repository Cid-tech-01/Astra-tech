const data = [
  { id: 1, news: "Pak cannot be found since 2 days" },
  { id: 2, news: "Charonkaya found on North Korean border" },
  { id: 3, news: "From monday Nepal will be an state of India" },
  { id: 4, news: "Global stock markets hit record highs after trade deal" },
  { id: 5, news: "Scientists discover deep-sea coral reef near Antarctica" },
  { id: 6, news: "Tech giant announces breakthrough in quantum computing power" },
  { id: 7, news: "International space station successfully redirects small asteroid" },
  { id: 8, news: "New solar cell technology doubles clean energy efficiency" },
  { id: 9, news: "Archeologists unearth lost golden city in southern Egypt" },
  { id: 10, news: "Electric vehicle sales surpass gas cars for first time" },
  { id: 11, news: "Major breakthroughs reported in universal flu vaccine trials" },
  { id: 12, news: "Deepest underwater cave system mapped in Yucatan peninsula" },
  { id: 13, news: "Global summit reaches historic agreement on plastic waste reduction" },
  { id: 14, news: "New artificial intelligence model translates ancient lost scripts" },
  { id: 15, news: "World's oldest known tree gets specialized drone protection network" },
  { id: 16, news: "Supercontinent breakout predicted by researchers delayed by billions of years" },
  { id: 17, news: "First commercial hyperloop route begins construction in the desert" },
  { id: 18, news: "Sahara desert experiencing unprecedented greening due to climate shifts" }
];

function findNewsbyId(NewsArray,targetId){
    const foundItem = NewsArray.find(item=>item.id===targetId);
    if(foundItem){
        console.log(`Found`,foundItem);
    }
    else{
        console.log(`Error: News item with ID ${targetId} not found.`);
    }
}
// function findNewsbyId(newsArray,targetId){
//     for(let i=1;i<=newsArray.length;i++){
//         if(newsArray[i].id===targetId){
//             console.log(`Found: `, newsArray[i]);
//             return;
//         }
//     }
//     console.log(`Error news not found`);
// }
findNewsbyId(data,2);
findNewsbyId(data,11);

// function printFromTop(newsArray,targetId){
//     for(let i=0;i<targetId;i++){
//         console.log(newsArray[i]);
//     }
// }
// printFromTop(data,6);
function printfromstart(Array,limit){
    const lenodfData=Array.length;
    return Array.slice(lenodfData-limit,lenodfData);
}
printfromstart(data,2);

function printFromLast(newsArray,start,last){
        console.log(newsArray.slice(start,last));
}
printFromLast(data,10,16);

function searchNews(data, keyword) {
  if (!keyword) return [];

  const lowerKeyword = keyword.toLowerCase();
  return data.filter(item => item.news.toLowerCase().includes(lowerKeyword));
}
const results = searchNews(data, "India");
console.log(results);

// function searchNews(data, keyword){
//     const word=keyword.toLowerCase();
//     for(let i=0;i<data.length;i++){
//         const newstext=data[i].news.toLowerCase();
//         if(newstext.includes(word))
//             console.log(data[i]);
//     }
// }
// searchNews(data,"India");
function newsSearch(data,keyword){
    const result=[];
    const word=keyword.toLowerCase();
    for(const item of data){
        if(item.news.toLowerCase().includes(word))
            result.push(item);
    }
    return result;
}
const matches=newsSearch(data,"India");
console.log(matches);