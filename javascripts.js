window.addEventListener("scroll", function() { loadSticky(), loadBanner()});

var newdate = new Date();
var datecreate = newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear();

function product(productID, brand, img , name, price, amount) {
    this.productID=productID;
    this.brand=brand;
    this.img=img;
    this.name=name;
    this.price=price;
    this.amount=amount;
}

var productList = [
    new product(10001,'Asus','Images/Products/Asus/TUF-series-gaming/A15 FA506IH - AL018T/Laptop ASUS TUF GAMING A15 FA506IH - AL018Thinh1.jpg','Laptop ASUS TUF GAMING A15 FA506IH - AL018',20490000,100),
    new product(10002, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/A15 FA506IU AL127T/Laptop ASUS TUF Gaming A15 FA506IU AL127Thinh1.jpg', 'Laptop ASUS TUF Gaming A15 FA506IU AL127T', 25490000,100),
    new product(10003, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/A15 FA506IV - HN202T/Laptop ASUS TUF Gaming A15 FA506IV - HN202Thinh1.jpg', 'Laptop ASUS TUF Gaming A15 FA506IV - HN202T', 32990000,100),
    new product(10004, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FA506II AL012T/Laptop ASUS TUF Gaming FA506II AL012Thinh1.jpg', 'Laptop ASUS TUF Gaming FA506II AL012T', 21990000,100),
    new product(10005, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FA506II AL016T/Laptop ASUS TUF Gaming FA506II AL016Thinh1.jpg', 'Laptop ASUS TUF Gaming FA506II AL016T', 23990000,100),
    new product(10006, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FX505DT HN478T/Laptop gaming ASUS TUF FX505DT HN478Thinh1.jpg', 'Laptop gaming ASUS TUF FX505DT HN478T', 19290000,100),
    new product(10007, 'Asus' ,'Images/Products/Asus/TUF-series-gaming/FX505DT HN488T/Laptop gaming ASUS TUF FX505DT HN488Thinh1.jpg', 'Laptop gaming ASUS TUF FX505DT HN488T', 18290000,100),
    new product(10008, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G15 G512 IAL001T/Laptop Gaming Asus ROG Strix G15 G512 IAL001Thinh1.jpg', 'Laptop Gaming Asus ROG Strix G15 G512 IAL001T', 28990000,100),
    new product(10009, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G17 G712L UEV075T/Laptop Gaming Asus ROG Strix G17 G712L UEV075Thinh1.jpg', 'Laptop Gaming Asus ROG Strix G17 G712L UEV075T', 34990000,100),
    new product(10010, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G531GT HN553T/Laptop gaming ASUS ROG Strix G G531GT HN553Thinh1.jpg', 'Laptop gaming ASUS ROG Strix G G531GT HN553T', 22990000,100),
    new product(10011, 'Asus' ,'Images/Products/Asus/ROG-series-gaming/G532L VAZ044T/Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044Thinh1.jpg', 'Laptop Gaming Asus ROG Strix SCAR 15 G532L VAZ044T', 47990000,100),
    new product(10012, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/15 GX550LXS HC055R/Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055Rhinh1.jpg', 'Laptop gaming ASUS ROG Zephyrus Duo 15 GX550LXS HC055R', 120000000,100),
    new product(10013, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/G14 GA401IU HA171T/Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171Thinh1.jpg', 'Laptop gaming ASUS ROG Zephyrus G14 GA401IU HA171T', 39990000,100),
    new product(10014, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/GX701GXR H6072T/Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072Thinh1.jpg', 'Laptop Gaming Asus ROG Zephyrus S GX701GXR H6072T', 79990000,100),
    new product(10015, 'Asus' ,'Images/Products/Asus/Zephyrus-series-gaming/GX701LXS HG038T/Laptop gaming Asus ROG Zephyrus S GX701LXS HG038Thinh1.jpg', 'Laptop gaming Asus ROG Zephyrus S GX701LXS HG038T', 84990000,100),
    new product(10016, 'Asus' ,'Images/Products/Asus/Zenbook-cao cấp/UX434FAC A6064T/Laptop Asus ZenBook UX434FAC A6064Thinh1.jpg', 'Laptop Asus ZenBook UX434FAC A6064T', 24490000,100),
    new product(10017, 'Asus' ,'Images/Products/Asus/Zenbook-cao cấp/UX481FL BM049T/Laptop ASUS ZenBook Duo UX481FL BM049Thinh1.jpg', 'Laptop ASUS ZenBook Duo UX481FL BM049T', 39990000,100),
    new product(10018, 'Asus' ,'Images/Products/Asus/ProArt-studio/W700G1T AV046T/Laptop ASUS ProArt Studiobook W700G1T AV046Thinh1.jpg', 'Laptop ASUS ProArt Studiobook W700G1T AV046T', 46990000,100),
    new product(10019, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0324T/Laptop ASUS ExpertBook B9450FA BM0324Thinh1.jpg', 'Laptop ASUS ExpertBook B9450FA BM0324T', 37990000,100),
    new product(10020, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/B9450FA BM0616R/Laptop ASUS ExpertBook B9450FA BM0616Rhinh1.jpg', 'Laptop ASUS ExpertBook B9450FA BM0616R', 49990000,100),
    new product(10021, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P1410CJA EK355T/Laptop ASUS Expertbook P1410CJA EK355Thinh1.jpg', 'Laptop ASUS Expertbook P1410CJA EK355T', 15790000,100),
    new product(10022, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0229T/Laptop ASUS ExpertBook P2451FA EK0229Thinh1.jpg', 'Laptop ASUS ExpertBook P2451FA EK0229T', 17990000,100),
    new product(10023, 'Asus' ,'Images/Products/Asus/Expertbook cao cấp/P2451FA EK0262R/Laptop ASUS ExpertBook P2451FA EK0262Rhinh1.jpg', 'Laptop ASUS ExpertBook P2451FA EK0262R', 24990000,100),
    new product(10024, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/A412FA EK1187T/Laptop ASUS A412FA EK1187Thinh1.jpg', 'Laptop ASUS A412FA EK1187T', 11990000,100),
    new product(10025, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/S433EA EB100T/Laptop Asus VivoBook S14 S433EA EB100Thinh1.jpg', 'Laptop Asus VivoBook S14 S433EA EB100T', 18990000,100),
    new product(10026, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/S433EA EB101T/Laptop Asus VivoBook S14 S433EA EB101Thinh1.jpg', 'Laptop Asus VivoBook S14 S433EA EB101T', 18990000,100),
    new product(10027, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/X409JA EK283T/Laptop Asus Vivobook X409JA EK283Thinh1.jpg', 'Laptop Asus Vivobook X409JA EK283T', 10190000,100),
    new product(10028, 'Asus' ,'Images/Products/Asus/Vivobook văn phòng/X409MA BV033T/Laptop Asus Vivobook X409MA BV033Thinh1.jpg', 'Laptop Asus Vivobook X409MA BV033T', 7490000,100),
    new product(10029, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 37DV/Laptop Acer Aspire 3 A315 56 37DV.jpg', 'Laptop Acer Aspire 3 A315 56 37DV', 10290000,100),
    new product(10030, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 3 A315 56 59XY/Laptop Acer Aspire 3 A315 56 59XY.jpg', 'Laptop Acer Aspire 3 A315 56 59XY', 11990000,100),
    new product(10031, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 38GF/Laptop Acer Aspire 5 A514 53 38GF.jpg', 'Laptop Acer Aspire 5 A514 53 38GF', 14990000,100),
    new product(10032, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50JA/Laptop Acer Aspire 5 A514 53 50JA.jpg', 'Laptop Acer Aspire 5 A514 53 50JA', 15690000,100),
    new product(10033, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 53 50P9/Laptop Acer Aspire 5 A514 53 50P9.jpg', 'Laptop Acer Aspire 5 A514 53 50P9', 16990000,100),
    new product(10034, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A514 54 39KU/Laptop Acer Aspire 5 A514 54 39KU.jpg', 'Laptop Acer Aspire 5 A514 54 39KU', 13490000,100),
    new product(10035, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 37HD/Laptop Acer Aspire 5 A515 55 37HD.jpg', 'Laptop Acer Aspire 5 A515 55 37HD', 13190000,100),
    new product(10036, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55 55HG/Laptop Acer Aspire 5 A515 55 55HG.jpg', 'Laptop Acer Aspire 5 A515 55 55HG', 17190000,100),
    new product(10037, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 5 A515 55G 5633/Laptop Acer Aspire 5 A515 55G 5633.jpg', 'Laptop Acer Aspire 5 A515 55G 5633', 18690000,100),
    new product(10038, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R150/Laptop gaming Acer Aspire 7 A715 41G R150.jpg', 'Laptop gaming Acer Aspire 7 A715 41G R150', 20990000,100),
    new product(10039, 'Acer' ,'Images/Products/Acer/Aspire Serires- Văn phòng/Acer Aspire 7 A715 41G R282/Laptop gaming Acer Aspire 7 A715 41G R282.jpg', 'Laptop gaming Acer Aspire 7 A715 41G R282', 19990000,100),
    new product(10040, 'Acer' ,'Images/Products/Acer/Helios Serires- Gaming/Acer Predator Helios 300 PH315-51/Acer Predator Helios 300 PH315-51.jpg', 'Acer Predator Helios 300 PH315-51', 34990000,100),
    new product(10041, 'Acer' ,'Images/Products/Acer/Helios Serires- Gaming/ACER Predator Helios PH315 53 770L/Laptop Gaming ACER Predator Helios PH315 53 770L 1.jpg', 'Laptop Gaming ACER Predator Helios PH315 53 770L', 37390000,100),
    new product(10042, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 2020 AN515-55 70AX/Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX 1.jpg', 'Laptop Gaming Acer Nitro 5 2020 AN515-55 70AX', 29990000,100),
    new product(10043, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 43 R4VJ/Laptop gaming Acer Nitro 5 AN515 43 R4VJ 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 43 R4VJ', 20990000,100),
    new product(10044, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 55E3/Laptop gaming Acer Nitro 5 AN515 55 55E3 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 55 55E3', 31990000,100),
    new product(10045, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 77P9/Laptop gaming Acer Nitro 5 AN515 55 77P9.jpg', 'Laptop gaming Acer Nitro 5 AN515 55 77P9', 28990000,100),
    new product(10046, 'Acer' ,'Images/Products/Acer/Nitro Serires- Gaming/Nitro 5 AN515 55 5923/Laptop gaming Acer Nitro 5 AN515 43 R4VJ 1.jpg', 'Laptop gaming Acer Nitro 5 AN515 43 R4VJ', 23990000,100),
    new product(10047, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-57G 53T1/Laptop Acer Swift 3 SF314-57G 53T1.jpg', 'Laptop Acer Swift 3 SF314-57G 53T1', 20190000,100),
    new product(10048, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 39BZ/Laptop Acer Swift 3 SF314-58 39BZ 1.jpg', 'Laptop Acer Swift 3 SF314-58 39BZ', 14990000,100),
    new product(10049, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/Acer Swift 3 SF314-58 55RJ/Laptop Acer Swift 3 SF314-58 55RJ .jpg', 'Laptop Acer Swift 3 SF314-58 55RJ', 14990000,100),
    new product(10050, 'Acer' ,'Images/Products/Acer/Swift Series- Cao cấp/ACER Swift 5 SF514 54T 793C/Laptop ACER Swift 5 SF514 54T 793C.jpg', 'Laptop ACER Swift 5 SF514 54T 793C', 29990000,100),
    new product(10051, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 72U2/Laptop Gaming Acer Predator Triton 500 PT515-52 72U2 1.jpg', 'Laptop Gaming Acer Predator Triton 500 PT515-52 72U2', 79990000,100),
    new product(10052, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 500 PT515-52 78PN/Laptop Gaming Acer Predator Triton 500 PT515-52 78PN 1.jpg', 'Laptop Gaming Acer Predator Triton 500 PT515-52 78PN', 69990000,100),
    new product(10053, 'Acer' ,'Images/Products/Acer/Triton Series- Gaming/Predator Triton 900/Acer Predator Triton 900.jpg', 'Acer Predator Triton 900', 62990000,100),
    new product(10055, 'Dell' ,'Images/Products/Dell/Inspiron Series/13 7391 7391-N3TI5008W/13 7391 7391-N3TI5008Wpic1.jpg', 'Laptop Dell Inspiron 13 7391 7391-N3TI5008W', 26490000,100),
    new product(10056, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 3593-N3593C/15 3593-N3593Cpic1.jpg', 'Laptop Dell Inspiron 15 3593-N3593C', 11090000,100),
    new product(10057, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 5593-70196703/15 5593 5593-70196703pic1.jpg', 'Laptop Dell Inspiron 15 5593 5593-70196703', 12990000,100),
    new product(10058, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 5593-N5I5461W/15 5593 5593-N5I5461Wpic1.jpg', 'Laptop Dell Inspiron 15 5593 5593-N5I5461W', 19490000,100),
    new product(10059, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 5593 N5593A-P90F002N93A/15 5593 N5593A-P90F002N93Apic1.jpg', 'Laptop Dell Inspiron 15 5593 N5593A-P90F002N93A', 24990000,100),
    new product(10060, 'Dell' ,'Images/Products/Dell/Inspiron Series/15 7501 X3MRY1/15 7501 X3MRY1pic1.jpg', 'Laptop Dell Inspiron 15 7501 X3MRY1', 30490000,100),
    new product(10061, 'Dell' ,'Images/Products/Dell/Inspiron Series/5570-M5I5413W/5570-M5I5413Wpic1.jpg', 'Laptop Dell Inspiron 5570-M5I5413W', 22490000,100),
    new product(10062, 'Dell' ,'Images/Products/Dell/Inspiron Series/5584-N5I5413W/5584-N5I5413Wpic1.jpg', 'Laptop Dell Inspiron 5584-N5I5413W', 21890000,100),
    new product(10063, 'Dell' ,'Images/Products/Dell/Inspiron Series/7373-TI501OW/7373-TI501OWpic1.jpg', 'Laptop Dell Inspiron 7373-TI501OW', 27190000,100),
    new product(10064, 'Dell' ,'Images/Products/Dell/Inspiron Series/7591-N5I5591W/7591-N5I5591Wpic1.jpg', 'Laptop Dell Inspiron 7591-N5I5591W', 25490000,100),
    new product(10065, 'Dell' ,'Images/Products/Dell/Vostro Series/14 3490-70211829/14 3490-70211829pic1.jpg', 'Laptop Dell Vostro 14 3490-70211829', 10990000,100),
    new product(10066, 'Dell' ,'Images/Products/Dell/Vostro Series/15 3590-GRMGK1/15 3590-GRMGK1pic1.jpg', 'Laptop Dell Vostro 15 3590-GRMGK1', 14590000,100),
    new product(10067, 'Dell' ,'Images/Products/Dell/Vostro Series/3578-V3578B/3578-V3578Bpic1.jpg', 'Laptop Dell Vostro 3578-V3578B', 17190000,100),
    new product(10068, 'Dell' ,'Images/Products/Dell/Vostro Series/5471-70146452/5471-70146452pic1.jpg', 'Laptop Dell Vostro 5471-70146452', 25690000,100),
    new product(10069, 'Dell' ,'Images/Products/Dell/Vostro Series/5481-V4I5229W/5481-V4I5229Wpic1.jpg', 'Laptop Dell Vostro 5481-V4I5229W', 18490000,100),
    new product(10070, 'Dell' ,'Images/Products/Dell/Vostro Series/5481-V5481A/5481-V5481Apic1.jpg', 'Laptop Dell Vostro 5481-V5481A', 20490000,100),
    new product(10071, 'Dell' ,'Images/Products/Dell/Vostro Series/5568-077M512/5568-077M512pic1.jpg', 'Laptop Dell Vostro 5568-077M512', 14590000,100),
    new product(10072, 'Dell' ,'Images/Products/Dell/Vostro Series/5581-70175952/5581-70175952pic1.jpg', 'Laptop Dell Vostro 5581-70175952', 18000000,100),
    new product(10073, 'Dell' ,'Images/Products/Dell/XPS Series/13 9300 0N90H1/13 9300 0N90H1pic1.jpg', 'Laptop Dell XPS13 9300 0N90H1', 59990000,100),
    new product(10074, 'Dell' ,'Images/Products/Dell/XPS Series/13 9365-K7DWW2/13 9365-K7DWW2pic1.jpg', 'Laptop Dell XPS 13 9365-K7DWW2', 41000000,100),
    new product(10075,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',21500000,100),
    new product(10076,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREE2/2018 MREE2pic1.jpg','Apple Macbook Air 2018',21500000,100),
    new product(10077,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10078,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10079,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10080,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10081,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10082,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
    new product(10083,'Apple','Images/Products/Apple/Macbook Series/Macbook Air Series/2018 MREA2/2018 MREA2pic1.jpg','Apple Macbook Air 2018',1000,100),
];
localStorage.setItem('products',JSON.stringify(productList));


var userArray=[
    {username:'giaduc', password:'admin', fullname:'Gia Đức', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , datecreated:datecreate, power:'ADMIN'},
    {username:'baoluan', password:'admin', fullname:'Bảo Luân', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , datecreated:datecreate, power:'ADMIN'},
    {username:'trunghau', password:'admin', fullname:'Trung Hậu', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , datecreated:datecreate, power:'ADMIN'},
    {username:'kimluong', password:'admin', fullname:'Kim Lương', address:'273 An Dương Vương, P3, Quận 5, TPHCM', phone:'0987654321' , datecreated:datecreate, power:'ADMIN'}
];
localStorage.setItem('users',JSON.stringify(userArray));

function cart() {
    if(localStorage.getItem('userlogin')===null)
    {
        showLogin();
    }
    else
    {
        window.location.replace("Cart.html");
    }
}


// function list() {
//     if(localStorage.getItem('userlogin')===null)
//     {
//         showLogin();
//         var linklist = '<a href="Cart.html"></a>';
//         return linklist;
//     }
//     else
//     {
//         var linklist = '<a href="Cart.html"></a>';
//         return linklist;
//     }
// }

document.getElementById('registerForm').addEventListener('submit', register);
document.getElementById('loginForm').addEventListener('submit', login);

function register(newuser) {
    newuser.preventDefault();
    var fullname  = document.getElementById('Reg-fullname');
    var number    = document.getElementById('Reg-number');
    var address   = document.getElementById('Reg-address');
    var username  = document.getElementById('Reg-username');
    var userpass  = document.getElementById('Reg-password');
    var usercpass = document.getElementById('Reg-confirmpassword');
    var check=true;
    if(!usercpass.value)
    {
        document.getElementById('wcpassword').style.display='block';
        usercpass.focus();
        check=false;
    }
    else
    {
        if(usercpass.value != userpass.value)
        {
            document.getElementById('wcpassword').style.display='block';
            document.getElementById('wcpassword').innerHTML='The password does not match';
            usercpass.focus();
            check=false;
        }
        else
        {
            document.getElementById('wcpassword').style.display='none';
        }
    }

    if(!userpass.value)
    {
        document.getElementById('wpassword').style.display='block';
        userpass.focus();
        check=false;
    }
    else 
    {
        if (userpass.value.length<8)
        {
            document.getElementById('wpassword').style.display='block';
            document.getElementById('wpassword').innerHTML='Password must be 8 characters or more';
            check=false;
        }
        else
        {
            document.getElementById('wpassword').style.display='none';
        }
    }

    if(!address.value)
    {
        document.getElementById('waddress').style.display='block';
        address.focus();
        check=false;
    }
    else { document.getElementById('waddress').style.display='none'; }

    if(!username.value)
    {
        document.getElementById('wusernamenew').style.display='block';
        username.focus();
        check=false;
    }
    else { document.getElementById('wusernamenew').style.display='none'; }

    if(!number.value)
    {
        document.getElementById('wnumber').style.display='block';
        number.focus();
        check=false;
    }
    else
    {
        if(isNaN(Number(number.value)))
        {
            document.getElementById('wnumber').style.display='block';
            document.getElementById('wnumber').innerHTML='Invalid phone number';
            number.focus();
            check=false;
        }
        else
        {
            if(Number(number.value) < 100000000 || Number(number.value)>999999999)
            {
                document.getElementById('wnumber').style.display='block';
                document.getElementById('wnumber').innerHTML='Invalid phone number';
                number.focus();
                check=false;
            }
            else
            {
                document.getElementById('wnumber').style.display='none';
            }
        }
    }

    if (!fullname.value)
    {
        document.getElementById('wname').style.display='block';
        fullname.focus();
        check=false;
    }
    else { document.getElementById('wname').style.display='none'; }
    if(check==false)
    {
        return false;
    }

    var newdate = new Date();
	var datecreate = newdate.getDate()+'-'+(newdate.getMonth()+1)+'-'+newdate.getFullYear();
	var user = {username: username.value, password: userpass.value, fullname: fullname.value, address: address.value, phone: number.value , created_date: datecreate, power:'MEMBER'};
	var userArray = JSON.parse(localStorage.getItem('users'));
    for(var i=0;i<userArray.length;i++)
    {
        if(user.username==userArray[i].username)
        {
			document.getElementById('wusernamenew').style.display = 'block';
			document.getElementById('wusernamenew').innerHTML = 'Username already exists';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('users',JSON.stringify(userArray));
    swal({
        title: 'Done!',
        text: 'You have successfully registered!',
        icon: 'success',
        button: 'Login',
      }).then ( function() { showLogin() });
}
 
function showSearch () {
  var x= document.getElementById('SEARCH');
  x.style.display='block';
  x.focus();
  document.getElementById('btn').style.display='block';
  var s='<i class="fa fa-times" style="font-size:25px;border-bottom:none" onclick="closesearch()"></i>';
  document.getElementById('SICON').innerHTML=s;
}   

function closesearch() {
  document.getElementById('SEARCH').style.display='none';
  document.getElementById('btn').style.display='none';
  var s='<i class="fa fa-search" onclick="showSearch()"></i>';
  document.getElementById('SICON').innerHTML=s;
}

function login(newuser){
	newuser.preventDefault();
	var username = document.getElementById('Log-username').value;
	var password = document.getElementById('Log-password').value;
	var check=true;
    if(!username)
    {
        document.getElementById('wusername').style.display = 'block';
        check = false;
    }
    else {
		document.getElementById('wusername').style.display = 'none';
    }
    
    if(!password)
    {
        document.getElementById('wupassword').style.display = 'block';
		check = false;
    }
    else 
    {
		document.getElementById('wupassword').style.display = 'none';
    }
    
    if(check==false)
    {
		return false;
    }
    
	var userArray = JSON.parse(localStorage.getItem('users'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeForm();
                localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
                window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('wupassword').style.display = 'block';
	document.getElementById('wupassword').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}

function logout(){
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    window.location.href = 'Index.html'; 
}

function checklogin(){
	if(localStorage.getItem('userlogin')) {
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var namelog='';
        if(user.power=='ADMIN'){
            namelog =   '<li>'+user.fullname+'</li>'
                    +   '<li><a href="Admin.html" class="dashbroad">Dashbroad</a></li>'
                    +   '<li onclick="logout()">Logout</li>'
        }
        else {
            namelog =   '<li>'+user.fullname+'</li>'
                    +   '<li onclick="logout()">Logout</li>'
        }
        document.querySelector('div#bot .botnav .botnavright ul li.usericon ul').innerHTML = namelog;
    }
}

function showLogin() {
    if(localStorage.getItem('userlogin') == null)
    {
        document.getElementById('registerForm').style.display='none';
        document.getElementById('loginForm').style.display='block';
    }
    else
    {
        document.getElementById('registerForm').style.display='none';
        document.getElementById('loginForm').style.display='none';
    }
    
}

function showSignup() {
    if(localStorage.getItem('userlogin') == null)
    {
        document.getElementById('registerForm').style.display='block';
        document.getElementById('loginForm').style.display='none';
    }
    else
    {
        document.getElementById('loginForm').style.display='none';
        document.getElementById('registerForm').style.display='none';
    }
}

function closeForm() {
    document.getElementById('loginForm').style.display='none';
    document.getElementById('registerForm').style.display='none';
}

function slide() {   
    var slideIndex=1;
    showSlides(slideIndex);
    function showSlides(){
        var i;
        var slides = document.getElementsByClassName('slide');
        var runs = document.getElementsByClassName('nextpre');

        for (i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = 'none';  
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < runs.length; i++) 
        {
            runs[i].className = runs[i].className.replace(' active', '');
        }
                
        slides[slideIndex-1].style.display = 'block';  
        runs[slideIndex-1].className += ' active';
        setTimeout(showSlides, 4000);
    }
}

function loadSticky () {
  var bot = document.querySelector("div#bot");
  bot.classList.toggle("sticky", window.scrollY > 0);
}

function loadBanner() {
    var url=window.location.href;
    var id= url.split('?');
    if(id[1]==null)
    {
        if(window.scrollY>200){
            document.getElementById("intro").style.display='block';
        } 

        if(window.scrollY>400){
            document.getElementById("laptype").style.display='block';
        }
    } 
}

var tam=[];
function mangtam() {
    var products = [];
    products =JSON.parse(localStorage.getItem('products'));
    var url=window.location.href;
    var id=url.split('?');
    var i,t=0;
    for(i=0;i<products.length;i++)
    {
        if(id[1]==products[i].brand)
        {
            tam[t]=products[i];
            t++;
        }
    }
}
var sptrang=12;
function showProducts() {
    var url=window.location.href;
    var id=url.split('?'),i;
    pagination(); 
    for(i=0;i<=pagecount;i++){
        if(id[2]==i) {
            var List = changeListtoHTML(i);
            var Product = document.getElementById('products');
            Product.innerHTML = List;
            document.getElementById('paging').style.display='block';
            document.getElementById('products').style.display='block';
            break;
        }
        else {
            document.getElementById('paging').style.display='none';
            document.getElementById('products').style.display='none';
        }
    }
}
tinh(pagecount);

function changeListtoHTML (g) {
    var dem=1;
    var n=(g-1)*sptrang;
    var listproduct = '<div class="items">';
    for(var i = n;i<tam.length;i++)
    {
        var product = tam[i];
        var HTMLproduct = changetoHTML(product,i);
        listproduct += HTMLproduct;
        if(dem==sptrang)
        break;
        dem++;
    }
    listproduct += '</div>';
    return listproduct;
}
var p1;
function changetoHTML (product,n) {
    var k=product.brand+n;
    p1=product;
    var x="'"+k+"a'";
    var y="'"+k+"b'";
    var z="'"+k+"c'";
    var t="'"+k+"d'";
    var HTMLpd = '<div class="item">' 
                + '<div class="item-thumb" onmouseover="hieniconsp('+x+','+y+','+z+','+t+')" onmouseout="aniconsp('+x+','+y+','+z+','+t+')">' 
                + '<img src="' + product.img + '" class="item-pic">' 
                + '<div class="themgiohang" id="'+k+'a"></div>'
                + '<div class="iconthemgiohag1" id="'+k+'b" onclick="addtocart()"><i class="fa fa-shopping-bag" title="Thêm vào giỏ hàng"></i></div>'
                + '<div class="iconthemgiohag2" id="'+k+'c" title="chưa nghĩ ra"><i class="fa fa-user"></i></div>'
                + '<div class="iconthemgiohag3" id="'+k+'d" title="Thông tin chi tiết"><i class="fa fa-info"></i></div>'
                + '</div>'
                + '<h2 class="item-title">'+ product.name + '</h2>'
                + '<div class="item-price">Price: ' + product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND' + '</div>'
                + '</div>'
    return HTMLpd;
}

function hieniconsp(a,b,c,d){

    document.getElementById(a).style.display='block';
    document.getElementById(b).style.display='block';
    document.getElementById(c).style.display='block';
    document.getElementById(d).style.display='block';
}

function aniconsp(a,b,c,d){
    document.getElementById(a).style.display='none';
    document.getElementById(b).style.display='none';
    document.getElementById(c).style.display='none';
    document.getElementById(d).style.display='none';
}

var pagecount=0;
function pagination(){
    mangtam();
    var url=window.location.href;
    var id=url.split('?');
    var x='';
    pagecount=Math.ceil(tam.length/sptrang);
    for(var i=1;i<=pagecount;i++)
    {
        var page =  '<a href="Index.html?'+id[1]+'?'+i+'" class="pagination" id="p'+i+'">'
                    + '<div class="pagenumber ">'
                    + i
                    + '</div></a>';
        x+=page;       
    }
    var content = document.getElementById('paging');
    content.innerHTML = x; 
}

function tinh(x){
    var s=0;
    for(var i=1;i<=x;i++)
    {
        var k="p"+i;
        if(i==1)
         s=46-x+i;
        document.getElementById(k).style.left= s+'%';
    }
}

function addtocart() {
    if(localStorage.getItem('cart')===null)
    {   
        var mang = [];
        localStorage.setItem('cart',JSON.stringify(mang));
    }
    var flag=0,o=0;
    var bien={productID:p1.productID, brand: p1.brand, img: p1.img, name:p1.name, price:p1.price, amount:1};
    mang = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<mang.length;i++)
    {
        if(bien.productID==mang[i].productID)
        {
            flag=1;
            mang[i].amount++;
        }
        o+=mang[i].amount;
    }
    if(flag==0)
        mang.push(bien);
    localStorage.setItem('cart',JSON.stringify(mang));
}

function backMainpage() {
    window.location.href='Index.html';
}

function loadWelcome() {
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var a= '<div id admintest>Welcome back, '+y.username+'</div>';
    document.getElementById('admintest').innerHTML=a;
}

function showManageProduct () {
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var i= localStorage.getItem('products');
    var s = ' <div id="admintest">Welcome back, '+y.username+'</div>'
            +'<div class="test">'
            +'<div class="productss">'
            +i
            +'</div>';
    document.getElementById('broad').innerHTML=s;
}

function showManageAdmin () {
    var y= JSON.parse(localStorage.getItem('userlogin'));
    var i=localStorage.getItem('users');
    var s = ' <div id="admintest">Welcome back, '+y.username+'</div>'
            +'<div class="test">'
            +'<div class="productss">'
            +i
            +'</div>';
    document.getElementById('broad').innerHTML=s;
}

function checkcart () {
    if(localStorage.getItem('cart')!=null)
    {
        document.getElementById('cartinfo').style.display="none";
    }
}

// function showcart() {
//     var x=[];
//     x= localStorage.getItem('cart');
//     for(i=0;i<x.length;i++) {

//     }
// }
