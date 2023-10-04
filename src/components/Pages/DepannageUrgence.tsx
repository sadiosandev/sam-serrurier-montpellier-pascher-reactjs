import React from 'react';
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/serrurier-depannage-urgence.webp'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import DepannageUrgenceImg1 from '../../assets/images/depannage-serrurerie-s1i.jpeg';
import DepannageUrgenceImg2 from '../../assets/images/depannage-serrurerie-s2i.jpeg';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';

const DepannageUrgence = () => {
    return (
        <div className="page-component">
            <AppHeader />
            <div className="homepage-couverture">
                <div className="page-couverture-container">
                    <div 
                        className="page-couverture-image-bg-container"
                        style={{
                            background: `url(${PageCouverture}) no-repeat center center fixed`,
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="page-couverture-textual-container">
                            <div className="page-couv-textual-content container">
                                <div className="row page-couv-textual-row">
                                    <div className="col-lg-8 offset-lg-2 page-couv-col">
                                        <div className="page-couv-content-textual">
                                            <h1 className="site-title">Dépannage d'urgence serrurier montpellier</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    Vous recherchez un dépannage serrurier à Montpellier en urgence et 
                                                    à un prix abordable, ne cherchez pas plus loin que Serrurier Montpellier pas cher. 
                                                    Notre entreprise de serrurerie est spécialisée dans la fourniture de services 
                                                    de serrurerie rapides et fiables sur Montpellier et ses environs.
                                                </p>
                                                <p className="couv-cta-intro">
                                                    Nous sommes disponible 7j/7 - 24H/24
                                                </p>
                                            </div>
                                            <div className="row cta-row">
                                                <div className="col-lg-6 cta-col">
                                                    <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                        <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                        <span className="phone-number">06 44 96 24 01</span>
                                                    </Button>
                                                </div>
                                                <div className="col-lg-6 cta-col">
                                                    <Button href="mailto:contact@serrurier-montpellier.com" variant="primary" className="app-cta-link phone-cta-btn">
                                                        <MdMarkEmailRead className="app-header-phone-icon" />
                                                        <span className="phone-number">Demandez un devis</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-5 page-couv-col special-page-couv-col">
                                        <div className="special-page-couv-container">
                                            <img src={CouvDecoImg} alt="Serrurier pas cher à Montpellier" className="special-page-couv-img" />
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="page-container">
                <div className="container image-and-text-section-container">
                    <div className="image-and-text-body-content">
                        <h3 className="section-title">Urgence Dépannage Serrurier Montpellier</h3>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={DepannageUrgenceImg1} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Nous comprenons que les urgences de serrurerie peuvent 
                                            survenir à tout moment, de jour comme de nuit, et nous 
                                            sommes disponibles 24 heures sur 24 et 7 jours sur 7 
                                            pour vous aider. Que vous soyez coincé à l'extérieur 
                                            de votre maison, que vous ayez perdu vos clés ou que 
                                            vous ayez besoin d'un remplacement de serrure urgent, 
                                            notre équipe de serruriers professionnels est là pour 
                                            vous aider.
                                        </p>
                                        <p>
                                            Quoi qui puisse vous arrivez en matiére de serrurerie, vous pouvez faire appel à nous.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={DepannageUrgenceImg2} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Nos serruriers sont hautement qualifiés et expérimentés, 
                                            et ils sont équipés des outils et des compétences nécessaires 
                                            pour résoudre rapidement et efficacement tous vos problèmes de serrurerie. 
                                            Nous sommes fiers de fournir des services de qualité supérieure à des 
                                            prix compétitifs, afin que vous puissiez avoir l'esprit tranquille en 
                                            sachant que vous obtenez le meilleur rapport qualité-prix.
                                        </p>
                                        <p>
                                            <strong>Serrurier Montpellier pas cher</strong> c'est une équipe de professionnels 
                                            accumulant plus 30 ans d'expériences.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row image-and-text-row">
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Remplacement de cylindre</h4>
                                        <p>
                                            Vous avez des problèmes avec votre serrure ? 
                                            Il est peut-être temps de songer à <strong>remplacer le cylindre</strong>. &nbsp; 
                                            Un cylindre de serrure défectueux peut rendre votre maison 
                                            ou votre entreprise vulnérable aux intrusions, 
                                            alors n'attendez pas que cela arrive pour agir. 
                                            Avec <strong>Serrurier pas cher Montpellier</strong>, &nbsp; nous mettrons à votre
                                            disposition des <strong>serruriers qualifiés</strong>. 
                                        </p>
                                        <p>
                                            Ne laissez pas une serrure défectueuse vous gâcher votre journée. 
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={ChangementCylindre} alt="Serrurier pas cher Montpellier : Changement de cylindre" title="Changement de cylindre" className="image-content-item" />
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PoseSerrure} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Pose Serrure</h4>
                                        <p>
                                            La <strong>pose d'une serrure</strong> est un élément crucial 
                                            de la sécurité de votre maison ou de votre entreprise. 
                                            Nous sommes spécialisés dans la pose de serrures de haute qualité 
                                            pour tout type de porte, qu'il s'agisse de portes d'entrée, 
                                            de portes de garage, de portes de sécurité ou de portes intérieures. 
                                            <strong>Serrurier pas cher Montpellier</strong> travaille avec les marques 
                                            les plus fiables et les plus reconnues de l'industrie pour garantir la 
                                            qualité et la fiabilité de nos interventions.
                                        </p>
                                        <p>
                                            Vous voulez renforcer la sécurité de vos portes ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Installation de portes blindées</h4>
                                        <p>
                                            <strong>L'installation d'une porte blindée </strong> est l'un des moyens les plus efficaces 
                                            pour sécuriser votre maison ou votre entreprise contre les intrusions. 
                                            Chez <strong>Serrurier pas cher Montpellier</strong>, &nbsp; nous proposons une large gamme de portes 
                                            blindées de haute qualité, conçues pour offrir une protection maximale 
                                            contre les cambrioleurs et les voleurs.
                                        </p>
                                        <p>
                                            Vous voulez sécuriser votre maison ou entreprise ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PorteBlindee} alt="Serrurier pas cher Montpellier : Installation de portes blindées" title="Installation de portes blindées" className="image-content-item" />
                                    </div>
                                </div>
                            </div>
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={Serrure3Points} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <h4 className="in-section-title">Changement de serrure 3 points</h4>
                                        <p>
                                            <strong>L'installation d'une serrure 3 points</strong> est l'un des moyens 
                                            les plus efficaces de renforcer la <strong>sécurité</strong> de votre maison 
                                            ou de votre entreprise. Cette serrure offre une protection 
                                            supplémentaire contre les cambriolages et les intrusions, 
                                            car elle est beaucoup plus difficile à forcer que les 
                                            serrures traditionnelles.
                                        </p>
                                        <p>
                                            Vous voulez renforcer la sécurité de vos portes ?
                                            Contactez-nous dès maintenant pour obtenir une assistance rapide et professionnelle.
                                        </p>
                                        <div className="row app-cta-btn-in-section-row">
                                            <div className="col-lg-6 offset-lg-3 app-cta-btn-in-section-col">
                                                <Button href="tel:0644962401" variant="danger" className="app-navbar-link phone-cta-btn">
                                                    <BsFillPhoneVibrateFill className="app-header-phone-icon" />
                                                    <span className="phone-number">06 44 96 24 01</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section id="location-price-section">
                <div className="container location-price-section-container">
                    <div className="row location-price-section-row">
                        <div className="col-lg-6 location-map-col">
                            <div className="intervention-mapping-body-content">
                                <h4 className="location-pricing-title">Serrurier pas cher sur Montpellier</h4>
                                <p>Nous intervenons sur Montpellier et alentours</p>
                                <div className="map-container">
                                    <img src={MapImage} alt="Dépannage Serrurier Montpellier" title="Serrurier pas cher Montpellier" className="intervention-mapping-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pricing-col">
                            <div className="intervention-pricing-body-content">
                                <h4 className="location-pricing-title">Nos Prix</h4>
                                <div className="row pricing-tables-row">
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Ouverture de portes fermées</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">55 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">55 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Ouverture de portes blindées</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">100 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">100 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Changement de serrure</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">90 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">90 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 pricing-table-item-col">
                                        <div className="pricing-table-body-content">
                                            <h5 className="pricing-table-item-label">
                                                <strong>Déplacement Montpellier et environs</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">40 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">40 &euro;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row seo-textual-row">
                        <div className="col-md-12 seo-textual-col">
                            <div className="seo-textual-content-body">
                                <p>
                                    Notre équipe de <a target="_blank" rel="noreferrer" href="https://urgence-depannage-plomberie-montpellier.com/" className="seo-link">serruriers professionnels, pas cher basée sur Montpellier</a>&nbsp;
                                    est expérimentée et formée pour vous offrir des services de haute qualité à des 
                                    prix abordables. Nous travaillons avec des outils de pointe et 
                                    des techniques innovantes pour garantir des résultats rapides et 
                                    efficaces à chaque intervention.
                                </p>
                                <p>
                                    Chez <strong>Serrurier Montpellier pas cher</strong>, nous sommes fiers de notre 
                                    réputation de fournir des services de serrurerie rapides, fiables et abordables 
                                    à nos clients. Nous sommes également disponibles pour des services de maintenance 
                                    préventive de serrures et pour des conseils sur les meilleures pratiques de sécurité 
                                    à domicile.
                                </p>
                                <p>
                                    Pour tout dépannage et urgence, l'équipe de <strong>Serrurier pas cher Montpellier</strong> &nbsp;reste mobilisée et 
                                    joignable tous les jours (dimanche inclus), 24h/24 au <a href="tel:0644962401" className="phone-link">06 44 96 24 01</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </div>
    )
}

export default DepannageUrgence