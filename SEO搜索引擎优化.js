// 使用 superagent + cheerio

// 爬取一个网页url的全部内容
const result = superagent.get(url);

// 获取html字符串
const html = result.text;


// 读取html字符串
const $ = cheerio.load(html)

// 获取所有div.product 元素
const products = $('.product');