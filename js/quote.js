const quotes = [
    {quote: "집에서 집으로",
    author: "김창호"},
    {quote: "1％의 가능성만 있어도 절대로 포기하지 않는다",
    author: "박영석"},
    {quote: "산을 오를 때에 산이 잠시 정상을 빌려주는 것일 뿐 산을 정복한다는 건 있을 수 없다",
    author: "엄홍길"},
    {quote: "나의 등반철학은 극도의 어려움 추구하는 것…두려움은 수많은 감정 중의 하나일 뿐",
    author: "윌터 보나티"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;