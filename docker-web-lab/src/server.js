const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
res.send(`<!DOCTYPE html>
<html lang="mn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>СӨХ | Удирдлагын систем</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f5f7fb;color:#172033}
.layout{display:flex;min-height:100vh}
.sidebar{width:250px;background:#17243a;color:#fff;padding:27px 18px;flex-shrink:0}
.logo{display:flex;align-items:center;gap:12px;padding:0 10px 35px}
.logo-icon{background:#3978e8;padding:11px;border-radius:12px;font-size:22px}
.logo h2{font-size:17px}.logo small{color:#9eabc0;font-size:11px}
.section-label{font-size:10px;color:#8090a8;letter-spacing:1.5px;margin:18px 12px 10px}
.nav{display:flex;align-items:center;gap:13px;padding:12px;border-radius:9px;color:#aab7ca;text-decoration:none;font-size:13px;margin:4px 0}
.nav.active,.nav:hover{background:#2a3c59;color:#fff}
.nav.active{border-left:3px solid #5790ff}
.sidebar-bottom{margin-top:60px;padding:15px;background:#233650;border-radius:12px;font-size:12px;color:#bdc9da}
.main{flex:1;min-width:0}
.topbar{height:76px;background:#fff;border-bottom:1px solid #edf0f5;display:flex;align-items:center;justify-content:space-between;padding:0 35px}
.search{background:#f5f7fb;border:1px solid #edf0f5;padding:11px 15px;border-radius:9px;width:260px;font-size:12px}
.profile{display:flex;align-items:center;gap:11px;font-size:12px}
.avatar{width:36px;height:36px;background:#e3edff;color:#2864ce;border-radius:50%;display:grid;place-items:center;font-weight:bold}
.content{padding:32px 35px;max-width:1500px;margin:auto}
.heading{display:flex;justify-content:space-between;align-items:center;margin-bottom:27px}
.heading h1{font-size:25px;margin-bottom:7px}
.muted{color:#8792a5;font-size:12px}
.primary{background:#326ee5;color:#fff;border:0;padding:12px 17px;border-radius:8px;font-weight:600;font-size:12px;cursor:pointer}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:17px;margin-bottom:22px}
.card,.panel{background:#fff;border:1px solid #edf0f5;border-radius:13px;padding:21px}
.card-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:17px}
.card-label{color:#7c8799;font-size:12px}
.card-icon{background:#edf3ff;color:#3975df;padding:10px;border-radius:10px}
.number{font-size:25px;font-weight:700;letter-spacing:-.5px}
.change{font-size:11px;color:#1b9a70;margin-top:9px}
.middle{display:grid;grid-template-columns:1.65fr 1fr;gap:18px;margin-bottom:20px}
.panel h3{font-size:15px;margin-bottom:5px}
.panel-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
.chart{height:190px;display:flex;align-items:end;justify-content:space-around;gap:12px;padding:10px 8px 0;border-bottom:1px solid #edf0f5}
.bar-group{height:100%;display:flex;flex-direction:column;justify-content:end;align-items:center;gap:8px;flex:1}
.bar{width:70%;max-width:35px;background:#dce8ff;border-radius:5px 5px 0 0}
.bar.current{background:#3978e8}
.bar-label{font-size:10px;color:#929daf;padding-bottom:9px}
.legend{font-size:11px;color:#8792a5}
.legend span{display:inline-block;width:8px;height:8px;background:#3978e8;border-radius:50%;margin-right:6px}
.progress-item{margin:21px 0}
.progress-info{display:flex;justify-content:space-between;font-size:12px;margin-bottom:9px}
.track{height:8px;background:#eef1f6;border-radius:10px;overflow:hidden}
.fill{height:100%;background:#3978e8;border-radius:10px}
.bottom{display:grid;grid-template-columns:1.5fr 1fr;gap:18px}
table{width:100%;border-collapse:collapse;text-align:left}
th{font-size:10px;color:#929daf;font-weight:500;padding:12px 8px;border-bottom:1px solid #edf0f5}
td{font-size:11px;padding:15px 8px;border-bottom:1px solid #f0f2f6}
.status{padding:6px 9px;border-radius:20px;font-size:10px;background:#e8f7f0;color:#16865f}
.pending{background:#fff4df;color:#b77a16}
.request{display:flex;gap:12px;padding:15px 0;border-bottom:1px solid #f0f2f6}
.request-icon{width:37px;height:37px;border-radius:10px;background:#fff3e9;display:grid;place-items:center}
.request strong{font-size:12px}.request p{font-size:10px;color:#8a95a6;margin-top:5px}
@media(max-width:1000px){.cards{grid-template-columns:repeat(2,1fr)}.middle,.bottom{grid-template-columns:1fr}}
@media(max-width:650px){.sidebar{width:65px;padding:20px 7px}.logo{padding:0 5px 30px}.logo h2,.logo small,.nav span,.section-label,.sidebar-bottom{display:none}.nav{justify-content:center;padding:13px 5px}.topbar{padding:0 15px}.search{width:160px}.content{padding:23px 15px}.heading h1{font-size:20px}.cards{gap:9px}.card{padding:13px}.number{font-size:19px}.card-label{font-size:10px}}
</style>
</head>
<body>
<div class="layout">
<aside class="sidebar">
<div class="logo"><div class="logo-icon">⌂</div><div><h2>СӨХ Manager</h2><small>УДИРДЛАГЫН СИСТЕМ</small></div></div>
<div class="section-label">ҮНДСЭН ЦЭС</div>
<a class="nav active" href="/">▦ <span>Хянах самбар</span></a>
<a class="nav" href="#residents">♙ <span>Оршин суугчид</span></a>
<a class="nav" href="#payments">₮ <span>Төлбөрийн мэдээлэл</span></a>
<a class="nav" href="#finance">▤ <span>Санхүү, тайлан</span></a>
<div class="section-label">ҮЙЛ АЖИЛЛАГАА</div>
<a class="nav" href="#requests">⚒ <span>Хүсэлт, гомдол</span></a>
<a class="nav" href="#news">▤ <span>Зар мэдээ</span></a>
<a class="nav" href="#meetings">☷ <span>Хурал, санал асуулга</span></a>
<div class="sidebar-bottom">🏢 <strong>Нарны хороолол</strong><br><br>1-р байр · Удирдлага</div>
</aside>
<main class="main">
<header class="topbar">
<input class="search" placeholder="⌕  Хайх...">
<div class="profile"><span>🔔</span><div class="avatar">Н</div><div><strong>Намуундарь</strong><br><span class="muted">СӨХ админ</span></div></div>
</header>
<div class="content">
<div class="heading"><div><h1>Хянах самбар</h1><p class="muted">Тавтай морил! Өнөөдрийн СӨХ-ийн үйл ажиллагааны тойм.</p></div><button class="primary" onclick="alert('Шинэ зар үүсгэх')">＋ Шинэ зар нэмэх</button></div>
<div class="cards">
<div class="card"><div class="card-top"><span class="card-label">Нийт өрх</span><span class="card-icon">⌂</span></div><div class="number">248</div><div class="change">↑ Нийт бүртгэлтэй өрх</div></div>
<div class="card"><div class="card-top"><span class="card-label">Энэ сарын орлого</span><span class="card-icon">₮</span></div><div class="number">12.8 сая ₮</div><div class="change">↑ 8.4% өмнөх сараас</div></div>
<div class="card"><div class="card-top"><span class="card-label">Төлбөрийн үлдэгдэл</span><span class="card-icon">◷</span></div><div class="number">2.4 сая ₮</div><div class="change" style="color:#d18b25">Төлөгдөөгүй төлбөр</div></div>
<div class="card"><div class="card-top"><span class="card-label">Шинэ хүсэлт</span><span class="card-icon">☷</span></div><div class="number">08</div><div class="change" style="color:#d18b25">Шийдвэрлэх шаардлагатай</div></div>
</div>
<div class="middle">
<section class="panel"><div class="panel-head"><div><h3>Орлого, зарлагын тойм</h3><p class="muted">Сүүлийн 6 сарын үзүүлэлт</p></div><span class="legend"><span></span>Орлого</span></div>
<div class="chart">
<div class="bar-group"><div class="bar" style="height:55%"></div><span class="bar-label">5 сар</span></div>
<div class="bar-group"><div class="bar" style="height:70%"></div><span class="bar-label">6 сар</span></div>
<div class="bar-group"><div class="bar" style="height:48%"></div><span class="bar-label">7 сар</span></div>
<div class="bar-group"><div class="bar" style="height:83%"></div><span class="bar-label">8 сар</span></div>
<div class="bar-group"><div class="bar" style="height:65%"></div><span class="bar-label">9 сар</span></div>
<div class="bar-group"><div class="bar current" style="height:95%"></div><span class="bar-label">10 сар</span></div>
</div></section>
<section class="panel"><h3>Төлбөрийн явц</h3><p class="muted">2026 оны 10-р сар</p>
<div class="progress-item"><div class="progress-info"><span>Төлсөн</span><strong>82%</strong></div><div class="track"><div class="fill" style="width:82%"></div></div></div>
<div class="progress-item"><div class="progress-info"><span>Төлөөгүй</span><strong>12%</strong></div><div class="track"><div class="fill" style="width:12%;background:#e8ad54"></div></div></div>
<div class="progress-item"><div class="progress-info"><span>Хугацаа хэтэрсэн</span><strong>6%</strong></div><div class="track"><div class="fill" style="width:6%;background:#e47c7c"></div></div></div>
</section></div>
<div class="bottom">
<section class="panel" id="payments"><div class="panel-head"><div><h3>Сүүлийн төлбөрүүд</h3><p class="muted">Оршин суугчдын төлбөрийн мэдээлэл</p></div><span class="muted">Бүгдийг харах →</span></div>
<table><thead><tr><th>ОРШИН СУУГЧ</th><th>БАЙР</th><th>ДҮН</th><th>ТӨЛӨВ</th></tr></thead>
<tbody>
<tr><td>Б. Намуундарь</td><td>101</td><td>50,000 ₮</td><td><span class="status">Төлсөн</span></td></tr>
<tr><td>Д. Номин</td><td>204</td><td>50,000 ₮</td><td><span class="status">Төлсөн</span></td></tr>
<tr><td>Г. Энхжин</td><td>305</td><td>50,000 ₮</td><td><span class="status pending">Хүлээгдэж буй</span></td></tr>
<tr><td>Ц. Мөнхөө</td><td>402</td><td>50,000 ₮</td><td><span class="status">Төлсөн</span></td></tr>
</tbody></table></section>
<section class="panel" id="requests"><div class="panel-head"><div><h3>Шинэ хүсэлт, гомдол</h3><p class="muted">Анхаарал шаардсан асуудлууд</p></div></div>
<div class="request"><div class="request-icon">💧</div><div><strong>Усны хоолой засвар</strong><p>3-р байр · 204 тоот · 10:30</p><span class="status pending">Шинэ хүсэлт</span></div></div>
<div class="request"><div class="request-icon">💡</div><div><strong>Орцны гэрэл асахгүй</strong><p>1-р байр · 102 тоот · Өчигдөр</p><span class="status">Хариуцсан ажилтантай</span></div></div>
<div class="request"><div class="request-icon">🛗</div><div><strong>Лифтний засвар</strong><p>2-р байр · 501 тоот · Өчигдөр</p><span class="status pending">Шинэ хүсэлт</span></div></div>
</section></div>
</div></main></div>
</body>
</html>`);
});

app.get('/api/residents', (req, res) => {
res.json([
{id:1,name:'Бат',apartment:'101'},
{id:2,name:'Номин',apartment:'102'},
{id:3,name:'Сараа',apartment:'103'}
]);
});

app.listen(PORT, '0.0.0.0', () => {
console.log(`Server running at http://localhost:${PORT}`);
});
