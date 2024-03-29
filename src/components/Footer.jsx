import Menu from "./ui/Menu";


export default function Footer() {

    const menus = [
        {
            title: "Getir'i keşfedin",
            items: [
                {
                    title: "Hakkımızda",
                },
                {
                    title: "Kariyer",
                },
                {
                    title: "Teknoloji Kariyeri",
                },
                {
                    title: "İletişim",
                },
                {
                    title: "Sosyal Sorumluluk Projeleri",
                }

            ]
        },
        {
            title: "Yardıma mı ihtiyacınız var?",
            items: [
                {
                    title: "Sıkça Sorulan Sorular",

                },
                {
                    title: "Kişisel Verilerin Korunması",
                },
                {
                    title: "Gizlilik Politikası",
                },
                {
                    title: "Kullanım Koşulları",
                },
                {
                    title: "Çerez Politikası",
                },
                {
                    title: "İşlem Rehberi"
                }
            ]
        },
        {
            title: "İş Ortağımız Olun",
            items: [
                {
                    title: "Bayimiz Olun",
                },
                {
                    title: "Deponuzu Kiralayın",
                },
                {
                    title: "GetirYemek Restoranı Olun",
                },
                {
                    title: "GetirÇarşı İşletmesi Olun",
                },
                {
                    title: "Zincir Restoranlar",
                }

            ]
        }
    ]

    return (
        <div className="bg-white" >
            <div className="container mx-auto">
                <div className="grid grid-cols-4 pt-10" >
                    <section className="flex flex-col gap-4">
                        <h6 className="text-primary-brand-color">Getir'i indirin!</h6>
                        <nav className="flex flex-col gap-y-4">
                            <a href="/#">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                            </a>
                            <a href="/#">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                            </a>
                            <a href="/#">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                            </a>
                        </nav>
                    </section>

                    {menus.map((menu, index) => <Menu key={index} {...menu}></Menu>)}

                </ div>
            </div >
        </div >
    )
}