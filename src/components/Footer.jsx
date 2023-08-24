export default function Footer() {
    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 pt-10" >
                    <section className="flex flex-col gap-4">
                        <h6 className="text-primary-brand-color">Getir'i indirin!</h6>
                        <nav className="flex flex-col gap-5">
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
                    <section>
                        <h6 className="text-primary-brand-color">Getir'i keşfedin</h6>
                        <nav className="flex flex-col gap-3">
                            <a href="/#">
                                <h6>Hakkımızda</h6>
                            </a>
                            <a href="/#">
                                <h6>Kariyer</h6>
                            </a>
                            <a href="/#">
                                <h6>Teknoloji Kariyeri</h6>
                            </a>
                            <a href="/#">
                                <h6>İletişim</h6>
                            </a>
                            <a href="/#">
                                <h6>Sosyal Sorumluluk Projeleri</h6>
                            </a>
                        </nav>
                    </section>
                    <section>Yardıma mı ihtiyacınız var?</section>
                    <section>İş Ortağımız Olun</section>
                </ div>
            </div >
        </div>
    );
}