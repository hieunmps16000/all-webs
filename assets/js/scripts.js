const $ = document.querySelector.bind(document);
const data = [
    {
        category: "Web bán hàng",
        img: "web-ban-hang.jpg",
        link: "https://dienmaytuanviet.com",
        domain: "dienmaytuanviet.com",
    },
    {
        category: "Web bất động sản",
        img: "web-bat-dong-san.jpg",
        link: "https://congdongnhathuthiem.com",
        domain: "congdongnhathuthiem.com",
    },
    {
        category: "Web bán hàng",
        img: "web-ban-hang.jpg",
        link: "https://bmauthentic.vn",
        domain: "bmauthentic.vn",
    },
    {
        category: "Web bảo hiểm",
        img: "web-bao-hiem.jpg",
        link: "https://baohiem-online.vn",
        domain: "baohiem-online.vn",
    },
    {
        category: "Web tin tức",
        img: "web-tin-tuc.jpg",
        link: "https://banquantri-g4.com",
        domain: "banquantri-g4.com",
    },
    {
        category: "Web giới thiệu công ty",
        img: "web-gioi-thieu.jpg",
        link: "https://arvionholdings.com",
        domain: "arvionholdings.com",
    },
];
const html = data
    .map(({ link, img, category, domain } = item) => {
        return `
        <div class="col">
            <div class="card">
                <a href="${link ? link : ""}" class="card__img" target="_blank" rel="noopener">
                    <img src="./assets/img/${img}" alt="" class="card__thumb" />
                </a>
                <div class="card__content">
                    <div class="card__row">
                        <span class="card__cate">${category}</span>
                    </div>
                    <h3 class="card__title"><a href="${link ? link : ""}" target="_blank" rel="noopener">${domain}</a></h3>
                </div>
            </div>
        </div>
    `;
    })
    .join("");
$("#list-website").innerHTML = html;
