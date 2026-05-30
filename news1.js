const data = [
  { id: "A", news: "Pak cannot be found since 2 days" },
  { id: "B", news: "Charonkaya found on North Korean border" },
  { id: "C", news: "From monday Nepal will be an state of India" },
  { id: "D", news: "Global stock markets hit record highs after trade deal" },
  { id: "E", news: "Scientists discover deep-sea coral reef near Antarctica" },
  { id: "F", news: "Tech giant announces breakthrough in quantum computing power" },
  { id: "G", news: "International space station successfully redirects small asteroid" },
  { id: "H", news: "New solar cell technology doubles clean energy efficiency" },
  { id: "I", news: "Archeologists unearth lost golden city in southern Egypt" },
  { id: "J", news: "Electric vehicle sales surpass gas cars for first time" },
  { id: "K", news: "Major breakthroughs reported in universal flu vaccine trials" },
  { id: "L", news: "Deepest underwater cave system mapped in Yucatan peninsula" },
  { id: "M", news: "Global summit reaches historic agreement on plastic waste reduction" },
  { id: "N", news: "New artificial intelligence model translates ancient lost scripts" },
  { id: "O", news: "World's oldest known tree gets specialized drone protection network" },
  { id: "P", news: "Supercontinent breakout predicted by researchers delayed by billions of years" },
  { id: "Q", news: "First commercial hyperloop route begins construction in the desert" },
  { id: "R", news: "Sahara desert experiencing unprecedented greening due to climate shifts" }
];

//find news by Id
function findNewsbyId(Array,tId){
    const foundItem=Array.find(item=>item.id.toLowerCase()===tId.toLowerCase())
    if(foundItem)
        console.log(foundItem);
    else
        console.log("Error! Id not found");
}

findNewsbyId(data,"E");
findNewsbyId(data,"C");

function printfromstart(Array,limit){
    return Array.slice(0,limit);
}

console.log(printfromstart(data,2));

function printfromLast(Array,limit){
    const lenofarr=Array.length;
    return Array.slice(lenofarr-limit,lenofarr);
}

console.log(printfromLast(data,8));

function searchbyword(Array,keyword){
    const result=[];
    const word=keyword.toLowerCase();
    return Array.filter(item=>item.news.toLowerCase().includes(word));
}

console.log(searchbyword(data,"India"));