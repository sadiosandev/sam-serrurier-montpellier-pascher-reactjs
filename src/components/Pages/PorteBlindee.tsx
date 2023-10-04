import React from 'react'
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/portes-blindees-serrurier-montpellier.png'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import PorteBlindeeImg1 from '../../assets/images/porte-blindee-img1.jpeg';
import PorteBlindeeImg2 from '../../assets/images/porte-blindee-img2.jpeg';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';

const PorteBlindee = () => {
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
                                            <h1 className="site-title">Installation et Ouverture de portes blindées</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    Lorsqu'il s'agit d'assurer la sécurité de votre domicile ou de votre 
                                                    entreprise, l'installation de portes blindées est une étape cruciale. 
                                                    Les portes blindées offrent une protection supplémentaire contre les 
                                                    cambrioleurs et les intrus, car elles sont renforcées avec des 
                                                    matériaux tels que de l'acier et du métal. 
                                                    <strong>Serrurier Montpellier pas cher, </strong> met à votre disposition 
                                                    des professionnels prêts à vous accompagner.
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="page-container">
                <div className="container image-and-text-section-container">
                    <div className="image-and-text-body-content">
                        <h3 className="section-title">Serrurier Montpellier : Installation et Ouverture de porte blindée</h3>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={PorteBlindeeImg1} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Lors de <strong>l'installation d'une porte blindée</strong>, nos experts commencent 
                                            par évaluer l'emplacement et les dimensions de la porte existante. 
                                            Nous nous assurons que la nouvelle porte s'adapte parfaitement à l'ouverture existante, 
                                            en prenant en compte les mesures de sécurité supplémentaires telles que les 
                                            serrures, les barres de sécurité et les charnières renforcées. 
                                            Une fois que la nouvelle porte est en place, nous procèdons à 
                                            l'installation des systèmes de verrouillage et des accessoires de sécurité 
                                            supplémentaires pour garantir une sécurité maximale.
                                        </p>
                                        <p>
                                            Pour tous vos besoin en matiére de serrurerie, vous pouvez faire appel à nous.
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
                                        <img src={PorteBlindeeImg2} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            <strong>L'ouverture de portes blindées</strong> peut être un défi pour les non-professionnels, 
                                            car ces portes sont conçues pour être résistantes à l'effraction. 
                                            Lorsque vous êtes confronté à une porte blindée verrouillée, il est important de 
                                            faire appel à un serrurier professionnel pour ouvrir la porte en toute sécurité. 
                                            Nos serruriers professionnels utilisent des outils spécialisés et des techniques 
                                            avancées pour ouvrir la porte sans endommager le cadre ou les systèmes de verrouillage.
                                        </p>
                                        <p>
                                            Nos serruriers professionnels sont hautement qualifiés 
                                            et formés pour fournir des solutions de sécurité sur 
                                            mesure pour répondre aux besoins spécifiques de chaque 
                                            client. 
                                            Nous utilisons les dernières technologies et les 
                                            techniques les plus avancées pour garantir la 
                                            satisfaction de nos clients.
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
                                    <strong>L'installation et l'ouverture de portes blindées</strong> sont des 
                                    services essentiels pour garantir la sécurité de votre 
                                    propriété. Si vous avez besoin d'une installation 
                                    professionnelle ou d'une ouverture de porte blindée, faites 
                                    appel <strong>Serrurier Montpellier pas cher</strong>.&nbsp;
                                    Nous sommes là pour répondre à tous vos besoins de 
                                    sécurité avec des solutions personnalisées et efficaces.
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

export default PorteBlindee