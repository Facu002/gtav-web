import {React, useState} from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import OnlineDLCCard from './OnlineDLCCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import OnlineCrimEnterLogo from '../media/Online-crimEnterp-Logo.svg'
import OnlineCrimEnterPromo from '../media/Online-crimEnterp-promoImg.webp'
import OnlineCrimEnterPromoMobile from '../media/Online-crimEnterp-promoImg-mb.webp'
import OnlineCrimEnterBackground from '../media/Online-crimEnterp-background.jpg'



function DLCSlider() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='caca'>

        <div className='btn-container'>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>

        
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerGroup={1}
        slidesPerView={"auto"}
        // centeredSlides={true}
        loop={false}
        
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        className='swiper'
        >
        
        {/* <div class="swiper-wrapper"> */}
        

        <SwiperSlide onClick={()=>setToggle(!toggle)} className='DlcCards-container'>
            <OnlineDLCCard
            toggle={toggle}
            title={'The Criminal Enterprises'}
            logo={OnlineCrimEnterLogo}
            promo={OnlineCrimEnterPromo}
            promoMobile={OnlineCrimEnterPromoMobile}
            bg={`url(${OnlineCrimEnterBackground})`}
            text={[
            <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la economía al borde del colapso, la situación pinta bastante mal...<br />
            Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro están en auge y hay oportunidades de lo más variadas en The Criminal Enterprises, la nueva actualización de GTA Online ya disponible en PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One y PC.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
            <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo están cambiando su estrategia, ajustándose y expandiendo sus actividades a nuevas áreas, lo cual incluye lo siguiente:</p>,

            <p>Nuevas misiones de exportación de mercancía para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misión diaria de exportación de bienes variados, además de nuevo personal de almacén preparado para ayudar con la obtención, incluida tu nueva gerente, Lupe, lista para escudriñar y aprovechar cualquier oportunidad de negocio.<br />

            En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los vehículos de dos ruedas modificando motos y entregándoselas a sus clientes. ¿No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podrás ensuciarte las manos.</p>,

            <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesión en el ordenador de su oficina, para lanzar las nuevas misiones de gestión del club. Las cosas siempre se complican en el club más famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ¿Necesitas mercancía? Dale un toque a Yohan y te la conseguirá.
                <br />
            Llamando a todos los traficantes de armas: ¿te estás quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterránea completamente abastecida. ¿Quieres dar un impulso a la investigación en tu búnker? Llama al Agente 14. ¿Tratas de ampliar tu red comercial? Él te conseguirá un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
            </p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

            <h4>Ilustración de la Operación Rastro Tecnológico
            El agente ULP regresa en la Operación Rastro Tecnológico</h4>,

            <p>Los ciudadanos que pasan por la autopista 1 no son los únicos que están notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo está investigando. Algo le olió a conspiración criminal a gran escala, bien empapada de gasolina, y ahora está convencido de que los Duggan y el FIB se han puesto de acuerdo para amañar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondrá en contacto pronto.</p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

            <h4>Imagen de un avión y un barco
            Mejoras en la experiencia</h4>,
            <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a través de nuestro sitio web dedicado. <br />

            Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitación. A partir de ahora, puedes participar en misiones de venta y obtención cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
            
            Ahora, los jugadores pueden comprar toda la munición posible para sus armas de una vez mediante el menú Interacción. No pierdas más tiempo buscando en los visores de munición. Selecciónala, carga el arma y vuelve enseguida al tiroteo. Además, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho más rápido a través del dial de armas.</p>,
            <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores también incluyen:</span>,

            <ul>
            <li>Un amplio reequilibrado de la economía del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
            <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
            <li>El número máximo de propiedades estándar se aumentará de 8 a 10, de modo que contarás con espacio de aparcamiento adicional para tu colección de vehículos.</li>
            </ul>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
            <h4>Imagen de un bólido
            Nuevos vehículos y mucho más</h4>,
            <p>The Criminal Enterprises también incluye un nuevo cargamento de supercoches, deportivos y bólidos. Así que, si te estás preparando para una guerra acorazada o buscas un vehículo que haga que a su paso las mandíbulas caigan más rápido que la cotización de una criptomoneda, pásate hoy mismo por el concesionario más cercano. También hay un proyecto muy personal que han llevado a cabo los expertos de la personalización de Hao's Special Works con un Stirling GT, disponible para los jugadores de la última generación de consolas, además de dos nuevos vehículos compatibles con las actualizaciones tecnológicas de Imani disponibles a través del taller de la agencia.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
            <p>Imagen de un supercoche

            Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldehído y cubierto de resina. Por eso, los vehículos más populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos más con nuevas cubiertas y modificaciones.<br />
            
            Además, Ammu-Nation ahora ofrece el fusil de precisión: un arma de fuego de cerrojo de largo alcance con una precisión mortal para conseguir un disparo rápido y limpio.</p>
            ]}
            />
        </SwiperSlide>
        <SwiperSlide className='DlcCards-container'>
            <OnlineDLCCard 
            title={'The Criminal Enterprises'}
            logo={OnlineCrimEnterLogo}
            promo={OnlineCrimEnterPromo}
            promoMobile={OnlineCrimEnterPromoMobile}
            bg={`url(${OnlineCrimEnterBackground})`}
            text={[
            <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la economía al borde del colapso, la situación pinta bastante mal...<br />
            Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro están en auge y hay oportunidades de lo más variadas en The Criminal Enterprises, la nueva actualización de GTA Online ya disponible en PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One y PC.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
            <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo están cambiando su estrategia, ajustándose y expandiendo sus actividades a nuevas áreas, lo cual incluye lo siguiente:</p>,

            <p>Nuevas misiones de exportación de mercancía para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misión diaria de exportación de bienes variados, además de nuevo personal de almacén preparado para ayudar con la obtención, incluida tu nueva gerente, Lupe, lista para escudriñar y aprovechar cualquier oportunidad de negocio.<br />

            En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los vehículos de dos ruedas modificando motos y entregándoselas a sus clientes. ¿No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podrás ensuciarte las manos.</p>,

            <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesión en el ordenador de su oficina, para lanzar las nuevas misiones de gestión del club. Las cosas siempre se complican en el club más famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ¿Necesitas mercancía? Dale un toque a Yohan y te la conseguirá.
                <br />
            Llamando a todos los traficantes de armas: ¿te estás quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterránea completamente abastecida. ¿Quieres dar un impulso a la investigación en tu búnker? Llama al Agente 14. ¿Tratas de ampliar tu red comercial? Él te conseguirá un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
            </p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

            <h4>Ilustración de la Operación Rastro Tecnológico
            El agente ULP regresa en la Operación Rastro Tecnológico</h4>,

            <p>Los ciudadanos que pasan por la autopista 1 no son los únicos que están notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo está investigando. Algo le olió a conspiración criminal a gran escala, bien empapada de gasolina, y ahora está convencido de que los Duggan y el FIB se han puesto de acuerdo para amañar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondrá en contacto pronto.</p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

            <h4>Imagen de un avión y un barco
            Mejoras en la experiencia</h4>,
            <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a través de nuestro sitio web dedicado. <br />

            Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitación. A partir de ahora, puedes participar en misiones de venta y obtención cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
            
            Ahora, los jugadores pueden comprar toda la munición posible para sus armas de una vez mediante el menú Interacción. No pierdas más tiempo buscando en los visores de munición. Selecciónala, carga el arma y vuelve enseguida al tiroteo. Además, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho más rápido a través del dial de armas.</p>,
            <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores también incluyen:</span>,

            <ul>
            <li>Un amplio reequilibrado de la economía del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
            <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
            <li>El número máximo de propiedades estándar se aumentará de 8 a 10, de modo que contarás con espacio de aparcamiento adicional para tu colección de vehículos.</li>
            </ul>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
            <h4>Imagen de un bólido
            Nuevos vehículos y mucho más</h4>,
            <p>The Criminal Enterprises también incluye un nuevo cargamento de supercoches, deportivos y bólidos. Así que, si te estás preparando para una guerra acorazada o buscas un vehículo que haga que a su paso las mandíbulas caigan más rápido que la cotización de una criptomoneda, pásate hoy mismo por el concesionario más cercano. También hay un proyecto muy personal que han llevado a cabo los expertos de la personalización de Hao's Special Works con un Stirling GT, disponible para los jugadores de la última generación de consolas, además de dos nuevos vehículos compatibles con las actualizaciones tecnológicas de Imani disponibles a través del taller de la agencia.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
            <p>Imagen de un supercoche

            Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldehído y cubierto de resina. Por eso, los vehículos más populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos más con nuevas cubiertas y modificaciones.<br />
            
            Además, Ammu-Nation ahora ofrece el fusil de precisión: un arma de fuego de cerrojo de largo alcance con una precisión mortal para conseguir un disparo rápido y limpio.</p>
            ]}
            />
        </SwiperSlide>
        <SwiperSlide className='DlcCards-container'>
            <OnlineDLCCard 
            title={'The Criminal Enterprises'}
            logo={OnlineCrimEnterLogo}
            promo={OnlineCrimEnterPromo}
            promoMobile={OnlineCrimEnterPromoMobile}
            bg={`url(${OnlineCrimEnterBackground})`}
            text={[
            <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la economía al borde del colapso, la situación pinta bastante mal...<br />
            Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro están en auge y hay oportunidades de lo más variadas en The Criminal Enterprises, la nueva actualización de GTA Online ya disponible en PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One y PC.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
            <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo están cambiando su estrategia, ajustándose y expandiendo sus actividades a nuevas áreas, lo cual incluye lo siguiente:</p>,

            <p>Nuevas misiones de exportación de mercancía para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misión diaria de exportación de bienes variados, además de nuevo personal de almacén preparado para ayudar con la obtención, incluida tu nueva gerente, Lupe, lista para escudriñar y aprovechar cualquier oportunidad de negocio.<br />

            En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los vehículos de dos ruedas modificando motos y entregándoselas a sus clientes. ¿No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podrás ensuciarte las manos.</p>,

            <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesión en el ordenador de su oficina, para lanzar las nuevas misiones de gestión del club. Las cosas siempre se complican en el club más famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ¿Necesitas mercancía? Dale un toque a Yohan y te la conseguirá.
                <br />
            Llamando a todos los traficantes de armas: ¿te estás quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterránea completamente abastecida. ¿Quieres dar un impulso a la investigación en tu búnker? Llama al Agente 14. ¿Tratas de ampliar tu red comercial? Él te conseguirá un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
            </p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

            <h4>Ilustración de la Operación Rastro Tecnológico
            El agente ULP regresa en la Operación Rastro Tecnológico</h4>,

            <p>Los ciudadanos que pasan por la autopista 1 no son los únicos que están notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo está investigando. Algo le olió a conspiración criminal a gran escala, bien empapada de gasolina, y ahora está convencido de que los Duggan y el FIB se han puesto de acuerdo para amañar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondrá en contacto pronto.</p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

            <h4>Imagen de un avión y un barco
            Mejoras en la experiencia</h4>,
            <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a través de nuestro sitio web dedicado. <br />

            Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitación. A partir de ahora, puedes participar en misiones de venta y obtención cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
            
            Ahora, los jugadores pueden comprar toda la munición posible para sus armas de una vez mediante el menú Interacción. No pierdas más tiempo buscando en los visores de munición. Selecciónala, carga el arma y vuelve enseguida al tiroteo. Además, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho más rápido a través del dial de armas.</p>,
            <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores también incluyen:</span>,

            <ul>
            <li>Un amplio reequilibrado de la economía del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
            <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
            <li>El número máximo de propiedades estándar se aumentará de 8 a 10, de modo que contarás con espacio de aparcamiento adicional para tu colección de vehículos.</li>
            </ul>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
            <h4>Imagen de un bólido
            Nuevos vehículos y mucho más</h4>,
            <p>The Criminal Enterprises también incluye un nuevo cargamento de supercoches, deportivos y bólidos. Así que, si te estás preparando para una guerra acorazada o buscas un vehículo que haga que a su paso las mandíbulas caigan más rápido que la cotización de una criptomoneda, pásate hoy mismo por el concesionario más cercano. También hay un proyecto muy personal que han llevado a cabo los expertos de la personalización de Hao's Special Works con un Stirling GT, disponible para los jugadores de la última generación de consolas, además de dos nuevos vehículos compatibles con las actualizaciones tecnológicas de Imani disponibles a través del taller de la agencia.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
            <p>Imagen de un supercoche

            Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldehído y cubierto de resina. Por eso, los vehículos más populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos más con nuevas cubiertas y modificaciones.<br />
            
            Además, Ammu-Nation ahora ofrece el fusil de precisión: un arma de fuego de cerrojo de largo alcance con una precisión mortal para conseguir un disparo rápido y limpio.</p>
            ]}
            />
        </SwiperSlide>
        <SwiperSlide className='DlcCards-container'>
            <OnlineDLCCard 
            title={'The Criminal Enterprises'}
            logo={OnlineCrimEnterLogo}
            promo={OnlineCrimEnterPromo}
            promoMobile={OnlineCrimEnterPromoMobile}
            bg={`url(${OnlineCrimEnterBackground})`}
            text={[
            <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la economía al borde del colapso, la situación pinta bastante mal...<br />
            Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro están en auge y hay oportunidades de lo más variadas en The Criminal Enterprises, la nueva actualización de GTA Online ya disponible en PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One y PC.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
            <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo están cambiando su estrategia, ajustándose y expandiendo sus actividades a nuevas áreas, lo cual incluye lo siguiente:</p>,

            <p>Nuevas misiones de exportación de mercancía para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misión diaria de exportación de bienes variados, además de nuevo personal de almacén preparado para ayudar con la obtención, incluida tu nueva gerente, Lupe, lista para escudriñar y aprovechar cualquier oportunidad de negocio.<br />

            En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los vehículos de dos ruedas modificando motos y entregándoselas a sus clientes. ¿No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podrás ensuciarte las manos.</p>,

            <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesión en el ordenador de su oficina, para lanzar las nuevas misiones de gestión del club. Las cosas siempre se complican en el club más famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ¿Necesitas mercancía? Dale un toque a Yohan y te la conseguirá.
                <br />
            Llamando a todos los traficantes de armas: ¿te estás quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterránea completamente abastecida. ¿Quieres dar un impulso a la investigación en tu búnker? Llama al Agente 14. ¿Tratas de ampliar tu red comercial? Él te conseguirá un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
            </p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

            <h4>Ilustración de la Operación Rastro Tecnológico
            El agente ULP regresa en la Operación Rastro Tecnológico</h4>,

            <p>Los ciudadanos que pasan por la autopista 1 no son los únicos que están notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo está investigando. Algo le olió a conspiración criminal a gran escala, bien empapada de gasolina, y ahora está convencido de que los Duggan y el FIB se han puesto de acuerdo para amañar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondrá en contacto pronto.</p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

            <h4>Imagen de un avión y un barco
            Mejoras en la experiencia</h4>,
            <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a través de nuestro sitio web dedicado. <br />

            Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitación. A partir de ahora, puedes participar en misiones de venta y obtención cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
            
            Ahora, los jugadores pueden comprar toda la munición posible para sus armas de una vez mediante el menú Interacción. No pierdas más tiempo buscando en los visores de munición. Selecciónala, carga el arma y vuelve enseguida al tiroteo. Además, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho más rápido a través del dial de armas.</p>,
            <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores también incluyen:</span>,

            <ul>
            <li>Un amplio reequilibrado de la economía del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
            <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
            <li>El número máximo de propiedades estándar se aumentará de 8 a 10, de modo que contarás con espacio de aparcamiento adicional para tu colección de vehículos.</li>
            </ul>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
            <h4>Imagen de un bólido
            Nuevos vehículos y mucho más</h4>,
            <p>The Criminal Enterprises también incluye un nuevo cargamento de supercoches, deportivos y bólidos. Así que, si te estás preparando para una guerra acorazada o buscas un vehículo que haga que a su paso las mandíbulas caigan más rápido que la cotización de una criptomoneda, pásate hoy mismo por el concesionario más cercano. También hay un proyecto muy personal que han llevado a cabo los expertos de la personalización de Hao's Special Works con un Stirling GT, disponible para los jugadores de la última generación de consolas, además de dos nuevos vehículos compatibles con las actualizaciones tecnológicas de Imani disponibles a través del taller de la agencia.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
            <p>Imagen de un supercoche

            Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldehído y cubierto de resina. Por eso, los vehículos más populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos más con nuevas cubiertas y modificaciones.<br />
            
            Además, Ammu-Nation ahora ofrece el fusil de precisión: un arma de fuego de cerrojo de largo alcance con una precisión mortal para conseguir un disparo rápido y limpio.</p>
            ]}
            />
        </SwiperSlide>
        <SwiperSlide className='DlcCards-container'>
            <OnlineDLCCard 
            title={'The Criminal Enterprises'}
            logo={OnlineCrimEnterLogo}
            promo={OnlineCrimEnterPromo}
            promoMobile={OnlineCrimEnterPromoMobile}
            bg={`url(${OnlineCrimEnterBackground})`}
            text={[
            <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la economía al borde del colapso, la situación pinta bastante mal...<br />
            Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro están en auge y hay oportunidades de lo más variadas en The Criminal Enterprises, la nueva actualización de GTA Online ya disponible en PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One y PC.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
            <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo están cambiando su estrategia, ajustándose y expandiendo sus actividades a nuevas áreas, lo cual incluye lo siguiente:</p>,

            <p>Nuevas misiones de exportación de mercancía para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misión diaria de exportación de bienes variados, además de nuevo personal de almacén preparado para ayudar con la obtención, incluida tu nueva gerente, Lupe, lista para escudriñar y aprovechar cualquier oportunidad de negocio.<br />

            En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los vehículos de dos ruedas modificando motos y entregándoselas a sus clientes. ¿No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podrás ensuciarte las manos.</p>,

            <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesión en el ordenador de su oficina, para lanzar las nuevas misiones de gestión del club. Las cosas siempre se complican en el club más famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ¿Necesitas mercancía? Dale un toque a Yohan y te la conseguirá.
                <br />
            Llamando a todos los traficantes de armas: ¿te estás quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterránea completamente abastecida. ¿Quieres dar un impulso a la investigación en tu búnker? Llama al Agente 14. ¿Tratas de ampliar tu red comercial? Él te conseguirá un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
            </p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

            <h4>Ilustración de la Operación Rastro Tecnológico
            El agente ULP regresa en la Operación Rastro Tecnológico</h4>,

            <p>Los ciudadanos que pasan por la autopista 1 no son los únicos que están notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo está investigando. Algo le olió a conspiración criminal a gran escala, bien empapada de gasolina, y ahora está convencido de que los Duggan y el FIB se han puesto de acuerdo para amañar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondrá en contacto pronto.</p>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

            <h4>Imagen de un avión y un barco
            Mejoras en la experiencia</h4>,
            <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a través de nuestro sitio web dedicado. <br />

            Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitación. A partir de ahora, puedes participar en misiones de venta y obtención cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
            
            Ahora, los jugadores pueden comprar toda la munición posible para sus armas de una vez mediante el menú Interacción. No pierdas más tiempo buscando en los visores de munición. Selecciónala, carga el arma y vuelve enseguida al tiroteo. Además, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho más rápido a través del dial de armas.</p>,
            <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores también incluyen:</span>,

            <ul>
            <li>Un amplio reequilibrado de la economía del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
            <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
            <li>El número máximo de propiedades estándar se aumentará de 8 a 10, de modo que contarás con espacio de aparcamiento adicional para tu colección de vehículos.</li>
            </ul>,

            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
            <h4>Imagen de un bólido
            Nuevos vehículos y mucho más</h4>,
            <p>The Criminal Enterprises también incluye un nuevo cargamento de supercoches, deportivos y bólidos. Así que, si te estás preparando para una guerra acorazada o buscas un vehículo que haga que a su paso las mandíbulas caigan más rápido que la cotización de una criptomoneda, pásate hoy mismo por el concesionario más cercano. También hay un proyecto muy personal que han llevado a cabo los expertos de la personalización de Hao's Special Works con un Stirling GT, disponible para los jugadores de la última generación de consolas, además de dos nuevos vehículos compatibles con las actualizaciones tecnológicas de Imani disponibles a través del taller de la agencia.</p>,
            <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
            <p>Imagen de un supercoche

            Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldehído y cubierto de resina. Por eso, los vehículos más populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos más con nuevas cubiertas y modificaciones.<br />
            
            Además, Ammu-Nation ahora ofrece el fusil de precisión: un arma de fuego de cerrojo de largo alcance con una precisión mortal para conseguir un disparo rápido y limpio.</p>
            ]}
            />
        </SwiperSlide>
        {/* </div> */}

        </Swiper>
        
        

        </div>

    );


}
export default DLCSlider