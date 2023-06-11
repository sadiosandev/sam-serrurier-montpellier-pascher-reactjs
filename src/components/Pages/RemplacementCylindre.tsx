import React from 'react'
import AppHeader from '../Shared/AppHeader/AppHeader';
import AppFooter from '../Shared/AppFooter/AppFooter';
import PageCouverture from '../../assets/images/remplacement-cylindre-page-cover.webp'
import { Button } from 'react-bootstrap';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import ChangementCylindreImg1 from '../../assets/images/changement-cylindre-img1.jpeg';
import ChangementCylindreImg2 from '../../assets/images/remplacement-cylindre-img2.jpeg';
import MapImage from '../../assets/images/carte-agglomeration-montpellier.jpeg';

const RemplacementCylindre = () => {
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
                                            <h1 className="site-title">Serrurier Montpellier pas cher : Remplacement de cylindre</h1>
                                            <div className="page-couverture-textual-content">
                                                <p className="couv-intro">
                                                    En tant que propriétaire d'une maison ou d'un appartement, 
                                                    il peut arriver que vous ayez besoin de remplacer <strong>le cylindre de votre 
                                                    serrure.</strong> &nbsp;Cela peut être dû à une perte de clé, à une clé cassée dans 
                                                    la serrure, ou simplement à une envie de renforcer la sécurité de votre 
                                                    domicile. 
                                                    Dans tous les cas, il est important de faire appel à un 
                                                    serrurier professionnel pour effectuer ce type de travail. 
                                                    <strong>Serrurier Montpellier pas cher</strong> &nbsp;est spécialisée dans le 
                                                    remplacement de cylindre de serrure et peut vous aider à résoudre tous 
                                                    vos problèmes de serrurerie.
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
                        <h2 className="section-title">Remplacement de cylindre chez Serrurier Montpellier pas cher</h2>
                        <div className="image-and-text-content">
                            <div className="row image-and-text-row">
                                <div className="col-lg-6 image-col">
                                    <div className="image-container">
                                        <img src={ChangementCylindreImg1} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Le <strong>remplacement de cylindre de serrure</strong> &nbsp;est un 
                                            travail délicat qui nécessite une expertise et des compétences 
                                            particulières. 
                                            <strong>Serrurier Montpellier pas cher</strong> est composé de 
                                            professionnels formés et expérimentés qui peuvent remplacer votre cylindre de 
                                            serrure rapidement et efficacement. Nous utilisons des outils de haute qualité 
                                            et des techniques avancées pour s'assurer que le travail est effectué 
                                            correctement.
                                        </p>
                                        <p>
                                            Avec <strong>Serrurier Montpellier pas cher</strong> &nbsp;pour remplacer votre cylindre 
                                            de serrure, un serrurier qualifié se rendra à votre domicile pour évaluer la situation. 
                                            Nos serruries examineront votre serrure existante pour déterminer le <strong>type de cylindre</strong>&nbsp;
                                            dont vous avez besoin et vous conseillera sur les options disponibles en fonction 
                                            de vos besoins de sécurité et de votre budget.
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
                                        <img src={ChangementCylindreImg2} alt="Serrurier pas cher Montpellier : Ouverture de portes fermées" className="image-content-item" />
                                    </div>
                                </div>
                                <div className="col-lg-6 text-col">
                                    <div className="text-container">
                                        <p>
                                            Une fois que vous avez choisi le cylindre de serrure approprié, 
                                            notre serrurier procédera au remplacement du cylindre de votre 
                                            serrure existante. 
                                            Il retirera l'ancien cylindre et l'installera en utilisant des techniques 
                                            précises pour assurer un ajustement parfait et une sécurité optimale. 
                                            Notre serrurier s'assurera également que la clé fonctionne correctement dans 
                                            la nouvelle serrure et vous fournira des conseils sur la manière d'entretenir 
                                            votre serrure pour garantir sa durabilité.
                                        </p>
                                        <p>
                                            Il existe différents types de <strong>cylindres de serrure,</strong> &nbsp;tels que les cylindres 
                                            à goupilles, les cylindres à disques et les cylindres à pompe. 
                                            Le choix du type de cylindre dépendra de votre niveau de sécurité et de vos 
                                            préférences personnelles. 
                                            <strong>Serrurier Montpellier pas cher</strong> &nbsp;peut vous aider à choisir le type de cylindre le plus adapté à vos besoins.
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
                                                    <p className="price-item">50 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">75 &euro;</p>
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
                                                    <p className="price-item">150 &euro;</p>
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
                                                <strong>Déplacement Montpellier et environs</strong>
                                            </h5>
                                            <div className="pricing-table-value-container">
                                                <div className="pricing-table-value-content">
                                                    <p>Jour</p>
                                                    <p className="price-item">40 &euro;</p>
                                                </div>
                                                <div className="pricing-table-value-content">
                                                    <p>Nuit/Jour Férié</p>
                                                    <p className="price-item">60 &euro;</p>
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
                                    Le <strong>remplacement du cylindre de votre serrure</strong> &nbsp;peut également 
                                    améliorer la sécurité de votre maison ou de votre entreprise. 
                                    Les cylindres de serrure modernes sont souvent équipés de technologies de pointe 
                                    telles que les systèmes anti-perçage, anti-crochetage et anti-copie de clés. 
                                    Les professionnels de <strong>Serrurier Montpellier pas cher</strong> &nbsp;peuvent 
                                    vous conseiller sur les options de sécurité disponibles et vous aider à trouver 
                                    la solution la plus adaptée à votre situation.
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

export default RemplacementCylindre