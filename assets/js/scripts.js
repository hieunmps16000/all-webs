const $ = document.querySelector.bind(document);

const projects = [
    {
        id: 1,
        category: "Web dịch vụ",
        img: "abctradingsystems.jpg",
        link: "https://abctradingsystems.com",
        domain: "abctradingsystems.com",
    },
    {
        id: 23,
        category: "Web giới thiệu sản phẩm",
        img: "khoaxehoi.jpg",
        link: "https://khoaxehoi.vn",
        domain: "khoaxehoi.vn",
    },
    {
        id: 2,
        category: "Web bất động sản",
        img: "canhothuthiem.jpg",
        link: "https://canhothuthiem.com.vn",
        domain: "canhothuthiem.com.vn",
    },
    {
        id: 3,
        category: "Web giới thiệu công ty",
        img: "anvietphatcty.jpg",
        link: "https://anvietphatcty.com",
        domain: "anvietphatcty.com",
    },
    {
        id: 4,
        category: "Web giới thiệu công ty",
        img: "arvionholdings.jpg",
        link: "https://arvionholdings.com",
        domain: "arvionholdings.com",
    },
    {
        id: 5,
        category: "Web giới thiệu công ty",
        img: "bnbplastic.jpg",
        link: "https://bnbplastic.com",
        domain: "bnbplastic.com",
    },
    {
        id: 6,
        category: "Web giới thiệu công ty",
        img: "congtynamdaiha.jpg",
        link: "https://congtynamdaiha.com",
        domain: "congtynamdaiha.com",
    },
    {
        id: 7,
        category: "Web giới thiệu công ty",
        img: "daihankimvn.jpg",
        link: "https://daihankimvn.com.vn",
        domain: "daihankimvn.com.vn",
    },
    {
        id: 8,
        category: "Web giới thiệu công ty",
        img: "dthtlogistics.jpg",
        link: "https://dthtlogistics.com.vn",
        domain: "dthtlogistics.com.vn",
    },
    {
        id: 9,
        category: "Web bán hàng",
        img: "dorihealthy.jpg",
        link: "https://dorihealthy.com",
        domain: "dorihealthy.com",
    },
    {
        id: 10,
        category: "Web giới thiệu sản phẩm",
        img: "dkglobalfruit.jpg",
        link: "https://dkglobalfruit.com",
        domain: "dkglobalfruit.com",
    },
    {
        id: 11,
        category: "Web bán hàng",
        img: "congtyketviettiep.jpg",
        link: "https://congtyketviettiep.vn",
        domain: "congtyketviettiep.vn",
    },
    {
        id: 12,
        category: "Web bán hàng",
        img: "ehibe.jpg",
        link: "https://ehibe.com",
        domain: "ehibe.com",
        isFeatured: true,
    },
    {
        id: 13,
        category: "Web bán hàng",
        img: "dienmaykhanghung.jpg",
        link: "https://dienmaykhanghung.com",
        domain: "dienmaykhanghung.com",
    },
    {
        id: 14,
        category: "Web bán hàng",
        img: "chooa.jpg",
        link: "https://chooa.com.vn",
        domain: "chooa.com.vn",
    },
    {
        id: 15,
        category: "Web bán hàng",
        img: "bmauthentic.jpg",
        link: "https://bmauthentic.vn",
        domain: "bmauthentic.vn",
    },
    {
        id: 16,
        category: "Web bán hàng",
        img: "cemacovietnamhcm.jpg",
        link: "https://cemacovietnamhcm.vn",
        domain: "cemacovietnamhcm.vn",
    },
    {
        id: 17,
        category: "Web bán hàng",
        img: "aes.jpg",
        link: "https://aes.vn/",
        domain: "aes.vn",
    },
    {
        id: 18,
        category: "Web bán hàng",
        img: "amourelleworld.jpg",
        link: "https://amourelleworld.com/",
        domain: "amourelleworld.com",
    },
    {
        id: 19,
        category: "Web bất động sản",
        img: "congdongnhathuthiem.jpg",
        link: "https://congdongnhathuthiem.com",
        domain: "congdongnhathuthiem.com",
    },
    {
        id: 20,
        category: "Web bảo hiểm",
        img: "baohiem-online.jpg",
        link: "https://baohiem-online.vn",
        domain: "baohiem-online.vn",
    },
    {
        id: 21,
        category: "Web tin tức",
        img: "hotelhuyhoang.jpg",
        link: "https://hotelhuyhoang.com",
        domain: "hotelhuyhoang.com",
    },
    {
        id: 22,
        category: "Web giới thiệu dịch vụ",
        img: "ihao.jpg",
        link: "https://ihao.vn",
        domain: "ihao.vn",
    },
    {
        id: 24,
        category: "Web giới thiệu dịch vụ",
        img: "knstoandien.jpg",
        link: "https://knstoandien.edu.vn",
        domain: "knstoandien.edu.vn",
    },
    {
        id: 25,
        category: "Web giới thiệu sản phẩm",
        img: "laptophd24.jpg",
        link: "https://laptophd24.com",
        domain: "laptophd24.com",
    },
    {
        id: 26,
        category: "Web giới thiệu sản phẩm",
        img: "luoithepxaydung.jpg",
        link: "https://luoithepxaydung.com",
        domain: "luoithepxaydung.com",
    },
    {
        id: 27,
        category: "Web giới thiệu sản phẩm",
        img: "maichethanhnam.jpg",
        link: "https://maichethanhnam.com",
        domain: "maichethanhnam.com",
    },
    {
        id: 28,
        category: "Web giới thiệu sản phẩm",
        img: "marutools.jpg",
        link: "https://marutools.com",
        domain: "marutools.com",
    },
    {
        id: 29,
        category: "Web bán hàng",
        img: "maybiogas.jpg",
        link: "https://maybiogas.com",
        domain: "maybiogas.com",
    },
    {
        id: 30,
        category: "Web bán hàng",
        img: "netzerosaigon.jpg",
        link: "https://netzerosaigon.com",
        domain: "netzerosaigon.com",
    },
];

function renderProjects(projects) {
    const html = projects
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
}

renderProjects(projects);
