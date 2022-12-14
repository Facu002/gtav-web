import React from 'react'
import OnlineDLCCard from './OnlineDLCCard'
import Slider from './Slider.js'
import Swiper from './Swiper'
import SwiperSlider from './SwiperContainer.js'

import OnlineCrimEnterLogo from '../media/Online-crimEnterp-Logo.svg'
import OnlineCrimEnterPromo from '../media/Online-crimEnterp-promoImg.png'
import OnlineCrimEnterPromoMobile from '../media/Online-crimEnterp-promoImg-mb.png'
import OnlineCrimEnterBackground from '../media/Online-crimEnterp-background.jpg'

import OnlineContractLogo from '../media/Online-contract-Logo.png'
import OnlineContractPromo from '../media/Online-contract-promoImg.png'
import OnlineContractPromoMobile from '../media/Online-contract-promoImg-mb.png'
import OnlineContractBackground from '../media/Online-contract-background.jpg'

import OnlineTunersLogo from '../media/Online-tuners-Logo.png'
import OnlineTunersPromo from '../media/Online-tuners-promoImg.png'
import OnlineTunersPromoMobile from '../media/Online-tuners-promoImg-mb.png'
import OnlineTunersBackground from '../media/Online-tuners-background.jpg'

import OnlineCayoPericoLogo from '../media/Online-CayoPerico-Logo.svg'
import OnlineCayoPericoPromo from '../media/Online-CayoPerico-promoImg.png'
import OnlineCayoPericoPromoMobile from '../media/Online-CayoPerico-promoImg-mb.png'
import OnlineCayoPericoBackground from '../media/Online-CayoPerico-background.jpg'

import OnlineDiamondLogo from '../media/Online-Diamond-Logo.svg'
import OnlineDiamondPromo from '../media/Online-Diamond-promoImg.png'
import OnlineDiamondPromoMobile from '../media/Online-Diamond-promoImg-mb.png'
import OnlineDiamondBackground from '../media/Online-Diamond-background.jpg'

function OnlineDLCSlier() {

    function nextButton() {
      let sliderContainer = document.querySelector('.DlcCards-container');
      sliderContainer.scrollLeft += 600;
      if (window.screen.width < 400) {
        sliderContainer.scrollLeft += 100;
        
      }
    }
    function prevButton() {
      let sliderContainer = document.querySelector('.DlcCards-container');
      sliderContainer.scrollLeft -= 600;
      if (window.screen.width < 400) {
        sliderContainer.scrollLeft -= 100;
      }
    }

  return (
    <div className='DlcSlider-container'>
      <div className='slider-text-container'>
        <h4>Carreras delictivas</h4>
        <div className='slider-btn-container'>
          <>
              <svg xmlns="http://www.w3.org/2000/svg" 
              onClick={prevButton}
              id='prev'
              className="icon icon-tabler icon-tabler-arrow-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
              </svg>
          </>
          <>
              <svg xmlns="http://www.w3.org/2000/svg" 
              id='next'
              onClick={nextButton}
              className="icon icon-tabler icon-tabler-arrow-right" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="13" y1="18" x2="19" y2="12" />
              <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
          </>
        </div>

      </div>

      <div className='DlcCards-container'>
        <OnlineDLCCard 
        title={'The Criminal Enterprises'}
        logo={OnlineCrimEnterLogo}
        promo={OnlineCrimEnterPromo}
        promoMobile={OnlineCrimEnterPromoMobile}
        bg={`url(${OnlineCrimEnterBackground})`}
        text={[
        <p>Con una ola de calor arrasando el sur de San Andreas, los precios de la gasolina por las nubes y la econom??a al borde del colapso, la situaci??n pinta bastante mal...<br />
        Pero esto es Los Santos, donde cada nube fiscal oscura tiene un brillante revestimiento plateado. Los negocios del mercado negro est??n en auge y hay oportunidades de lo m??s variadas en The Criminal Enterprises, la nueva actualizaci??n de GTA Online ya disponible en PlayStation??5, PlayStation??4, Xbox Series X|S, Xbox One y PC.</p>,
        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/ad3218a203bfbb4136063e733431bc2578434bac.jpg" alt="img-modal" />,
        <p>Imagen de The Criminal Enterprises Emprendedores de todo tipo est??n cambiando su estrategia, ajust??ndose y expandiendo sus actividades a nuevas ??reas, lo cual incluye lo siguiente:</p>,

        <p>Nuevas misiones de exportaci??n de mercanc??a para ejecutivos que pueden lanzarse desde sus oficinas, junto con una nueva misi??n diaria de exportaci??n de bienes variados, adem??s de nuevo personal de almac??n preparado para ayudar con la obtenci??n, incluida tu nueva gerente, Lupe, lista para escudri??ar y aprovechar cualquier oportunidad de negocio.<br />

        En cuanto a los presidentes de clubes de moteros: es hora de que los beneficios suban como la espuma. Reabastece el bar con la ayuda de Sindy y abre las puertas a los mejores clientes enfundados en cuero de Los Santos. Los propietarios de talleres personales ahora pueden compartir su amor por los veh??culos de dos ruedas modificando motos y entreg??ndoselas a sus clientes. ??No te gusta ganar dinero honradamente? No te preocupes: hay nuevos contratos de sede del club en los que podr??s ensuciarte las manos.</p>,

        <p>Los propietarios de clubes nocturnos pueden hablar con Tony Prince, o iniciar sesi??n en el ordenador de su oficina, para lanzar las nuevas misiones de gesti??n del club. Las cosas siempre se complican en el club m??s famoso de la ciudad: hordas de paparazzi, alborotadores armando bronca en la entrada, vip totalmente colocados... ??Necesitas mercanc??a? Dale un toque a Yohan y te la conseguir??.
            <br />
        Llamando a todos los traficantes de armas: ??te est??s quedando sin suministros? Hay misiones de reabastecimiento para ayudar a mantener tu fortaleza subterr??nea completamente abastecida. ??Quieres dar un impulso a la investigaci??n en tu b??nker? Llama al Agente 14. ??Tratas de ampliar tu red comercial? ??l te conseguir?? un contrato con Ammu-Nation para que puedas cambiar tus piezas de armas sobrantes por dinero.
        </p>,

        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/731a28acee6b574dbee816d31be6f8173e112f17.jpg" alt="img-modal" />,

        <h4>Ilustraci??n de la Operaci??n Rastro Tecnol??gico
        El agente ULP regresa en la Operaci??n Rastro Tecnol??gico</h4>,

        <p>Los ciudadanos que pasan por la autopista 1 no son los ??nicos que est??n notando la subida de los precios de la gasolina: el Agente ULP de la IAA lo est?? investigando. Algo le oli?? a conspiraci??n criminal a gran escala, bien empapada de gasolina, y ahora est?? convencido de que los Duggan y el FIB se han puesto de acuerdo para ama??ar los precios del combustible. Las implicaciones son enormes, y los detalles escasos, pero se pondr?? en contacto pronto.</p>,

        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/6bda41501b4cea381820b5751482ff7f4e845cf9.jpg" alt="img-modal" />,

        <h4>Imagen de un avi??n y un barco
        Mejoras en la experiencia</h4>,
        <p>The Criminal Enterprises incorpora una amplia variedad de mejoras de la experiencia de GTA Online, muchas de ellas resultado directo de la gran cantidad de comentarios constructivos recibidos a trav??s de nuestro sitio web dedicado. <br />

        Si eres de esas personas que valoran el espacio personal, ahora puedes acceder a los ordenadores del negocio en sesiones por invitaci??n. A partir de ahora, puedes participar en misiones de venta y obtenci??n cuando quieras, sin todo el caos que conlleva el mercado competitivo. Sin embargo, los que disfrutan con el caos pueden esperar mayores bonificaciones.<br />
        
        Ahora, los jugadores pueden comprar toda la munici??n posible para sus armas de una vez mediante el men?? Interacci??n. No pierdas m??s tiempo buscando en los visores de munici??n. Selecci??nala, carga el arma y vuelve enseguida al tiroteo. Adem??s, da igual que te equipes con blindaje nuevo en mitad de una refriega o te comas tu decimoquinta EgoChaser para hacerte una cura de emergencia: ahora puedes hacer ambas cosas mucho m??s r??pido a trav??s del dial de armas.</p>,
        <span>Las nuevas mejoras en la jugabilidad solicitadas por los jugadores tambi??n incluyen:</span>,

        <ul>
          <li>Un amplio reequilibrado de la econom??a del juego y de los pagos para diferentes actividades, con el objetivo de ofrecer a los jugadores mayor libertad y variedad de opciones para subir escalafones en el mundo criminal.</li>
          <li>Un reajuste del armamento y contramedidas de la Oppressor Mk II.</li>
          <li>El n??mero m??ximo de propiedades est??ndar se aumentar?? de 8 a 10, de modo que contar??s con espacio de aparcamiento adicional para tu colecci??n de veh??culos.</li>
        </ul>,

        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/a0e0e947b5c9a752fbb795a377314246319cb622.jpg" alt="img-modal" />,
        <h4>Imagen de un b??lido
        Nuevos veh??culos y mucho m??s</h4>,
        <p>The Criminal Enterprises tambi??n incluye un nuevo cargamento de supercoches, deportivos y b??lidos. As?? que, si te est??s preparando para una guerra acorazada o buscas un veh??culo que haga que a su paso las mand??bulas caigan m??s r??pido que la cotizaci??n de una criptomoneda, p??sate hoy mismo por el concesionario m??s cercano. Tambi??n hay un proyecto muy personal que han llevado a cabo los expertos de la personalizaci??n de Hao's Special Works con un Stirling GT, disponible para los jugadores de la ??ltima generaci??n de consolas, adem??s de dos nuevos veh??culos compatibles con las actualizaciones tecnol??gicas de Imani disponibles a trav??s del taller de la agencia.</p>,
        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/aakk/3690c02504930214fe5c287f8330c2a5d2dd60e3.jpg" alt="img-modal" />,
        <p>Imagen de un supercoche

        Los ciudadanos de Los Santos saben que solo hay una forma de envejecer: como un buen vino. Uno hasta los topes de formaldeh??do y cubierto de resina. Por eso, los veh??culos m??s populares han recibido un lavado de cara. Descubre el Pegassi Zentorno, el Benefactor Stirling GT, el Grotti Turismo R y muchos m??s con nuevas cubiertas y modificaciones.<br />
        
        Adem??s, Ammu-Nation ahora ofrece el fusil de precisi??n: un arma de fuego de cerrojo de largo alcance con una precisi??n mortal para conseguir un disparo r??pido y limpio.</p>
      ]}
        />

        <OnlineDLCCard 
        title={'The Contract'}
        logo={OnlineContractLogo}
        promo={OnlineContractPromo}
        promoMobile={OnlineContractPromoMobile}
        bg={`url(${OnlineContractBackground})`}
        text={[
          <p>??nete a uno de los estafadores m??s famosos de Los Santos y a sus colegas en GTA Online: The Contract, una nueva aventura para 1-4 jugadores que trae de vuelta a Franklin Clinton, protagonista de Grand Theft Auto V y ahora gerente de F. Clinton & Partner, una "agencia de soluciones para famosos" que se dedica a resolver esos problemas especiales que azotan a los peces gordos de Los Santos.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/92912e1d300c83fa81a4b2e451bcfabb2fcf1e86.jpg' alt="img-modal" />,
          <p>Asociarte con la agencia te permitir?? trabajar con rostros nuevos y tambi??n conocidos, como Lamar Davis, viejo amigo de Franklin, su fiel compa??ero Chop, o con Imani, la hacker de ??lite de la agencia. Como primer contrato en la lista de clientes famosos de la agencia, tendr??s que ayudar a Dr. Dre a resolver un robo en el que hay mucho en juego.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/947e1eed5228e9ed2fec7696d697c011a890dacf.jpg' alt="img-modal" />,
          <p>El robo del tel??fono m??vil de Dr. Dre es la comidilla de todos en las calles de Los Santos. Dicen que est?? lleno de temas in??ditos del pr??ximo ??lbum de Dr. Dre, as?? que debes encontrarlo antes de que alguien los filtre. Este caso puede encumbrar a tu agencia o acabar con ella, y a ti te toca hacer el trabajo sucio.
            <br/>
          A medida que avances con la investigaci??n, ir??s descubriendo nuevos temas de la leyenda del hip hop y ganador de seis premios Grammy, estrenados en exclusiva en esta gran actualizaci??n de GTA Online.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/78d9bb68c19e565c51fef50cfd6bef6f60f7d4ba.jpg' alt="img-modal" />,
          <p>Tambi??n tendr??s el privilegio de ver a Dr. Dre haciendo su magia en <b>Record A Studios</b>, un nuevo estudio de m??sica en el que puedes pasar el rato con Dr. Dre y otro artista invitado mientras te relajas y disfrutas del proceso de creaci??n de ??xitos musicales.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/565643dd5f4aace5a7a48c727fd334c0c795612f.png' alt="img-modal" />,
          <p>Como socio inversor de F. Clinton & Partner, adquirir??s un nuevo espacio de oficinas de lujo de varias plantas, perfecto para una agencia de soluciones privada. Esta propiedad incluye un espacio de oficina para el equipo y un nivel inferior donde guardar veh??culos. Adem??s, puedes incorporar una <b>armer??a</b> que te permitir?? mejorar tu arsenal y un <b>taller de veh??culos</b> que abrir?? las puertas a una nueva gama de modificaciones ideales para completar contratos para clientes.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/e02496f3fc15e457cbd2a66c1ef8c66361cadc83.jpg' alt="img-modal" />,
          <p>La agencia F. Clinton & Partner es nueva en el sector, de modo que tendr??s que completar contratos de seguridad para ganar experiencia y credibilidad. Recupera veh??culos y objetos valiosos, dirige temerarias operaciones de rescate, defiende bienes de gran valor y muchas cosas m??s.
            <br/>
          Tras completar unos cuantos contratos de seguridad, Franklin revelar?? el trabajo m??s sucio de la agencia: los asesinatos por encargo. Estos encargos, clandestinos y callejeros, te conceder??n bonificaciones por seguir instrucciones concretas y requieren adoptar un perfil bajo. Para conocer los detalles, responde a las llamadas de los tel??fonos p??blicos de Los Santos.
            <br/>
          Adem??s de tener un guardia de seguridad en la agencia, podr??s llamar a Imani y a Franklin desde tu iFruit cuando est??s en el modo Libre para usar sus servicios y habilidades especiales, as?? como solicitar contratos de seguridad y asesinatos por encargo mientras vas de camino.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/b1303d07ea8f4baf5f0f10fd4cb2367ef11d8258.jpg' alt="img-modal" />,
          <p><b>The Contract</b> trae tres nuevas armas que son herramientas valiosas que Franklin ha ido consiguiendo a lo largo de su carrera. Puedes comprar el fusil pesado en Ammu-Nation o comprarlo y modificarlo en la armer??a de tu agencia a precio rebajado. La pistola el??ctrica y el lanzador de PEM compacto son artilugios que solo podr??s encontrar en la armer??a de la agencia.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/2f602ed52302cb439e3cc2cc030817622ebbd856.png' alt="img-modal" />,
          <p>Echa un ojo al cargamento de siete nuevos veh??culos, como el supercoche Pegassi Ignus, el sed??n Lampadati Cinquemila o el todocamino Pfister Astron, disponibles en Legendary Motorsport. El supercoche Dewbauchee Champion, el b??lido Bravado Buffalo STX, el sed??n Enus Deity y el todocamino Enus Jubilee incorporan la nueva tecnolog??a de Imani en forma de modificaciones disponibles en el taller de veh??culos de la agencia. Las minas resbaladizas, el blindaje y las ametralladoras son elementos esenciales para el trabajo de la agencia. Adem??s, el inhibidor de fijaci??n de misiles impedir?? que los misiles guiados puedan fijar el objetivo en ti, mientras que la unidad de control remoto te permitir?? conducir a distancia.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/51b8a3b5d9379eecf0903002afdd9a5e3abde9c5.jpg' alt="img-modal" />,
          <p>Cuando ruedes sobre el asfalto, sintoniza la nueva emisora de radio MOTOMAMI Los Santos, presentada por ROSAL??A y Arca, y disfruta de un amplio abanico musical que ofrece desde bachata hasta electr??nica. Tambi??n llegan novedades a las ondas de Radio Los Santos y West Coast Classics, entre las que se incluyen nuevos temas de artistas como Juicy J y Mike Dean, Pusha T, Dom Kennedy, Mozzy y muchos m??s.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/7d0be5bd0d7576791393a245e4b02cda4d49d405.jpg' alt="img-modal" />,
          <p>Hay cientos de prendas urbanas y accesorios nuevos, como chaquetas, su??teres, sudaderas, gorras de b??isbol y tatuajes, as?? como nuevas pinturas faciales y peinados en la barber??a. Los jugadores que visiten Record A Studios entre hoy y el 22 de diciembre recibir??n gratis la gorra ajustable Westside.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/36c573f8146a9f0cee2d7a5a3ebc8708aec80764.jpg' alt="img-modal" />,
          <p>El lanzamiento de hoy trae muchos otros cambios positivos a GTA Online: los jugadores recibir??n menos llamadas telef??nicas y mensajes de texto invit??ndolos a nuevas posibilidades de juego y, ahora, se podr?? usar el mapa del men?? de pausa para ver y seleccionar opciones de juego. Resaltando los iconos de contactos del mapa, podr??s ver m??s detalles e iniciar la introducci??n al contenido.
            <br/>
          ??Adem??s, habr?? disponible una serie de premios del men?? de pausa y objetivos diarios nuevos en GTA Online. Las tasas diarias de propiedades y negocios se han reducido, y ahora los jugadores aumentar??n su nivel de reputaci??n en el Car Meet de LS por completar contratos del taller, entregas de veh??culos a clientes y exportaciones poco comunes. Adem??s, cabr?? m??s dinero en la caja fuerte del club nocturno y en la del sal??n recreativo.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/067894fd6fdd388b73468966e54cd716bb5f4d78.jpg' alt="img-modal" />,
          <p>Adem??s de todas las novedades que trae The Contract, puedes beneficiarte tambi??n de los descuentos y bonificaciones semanales de GTA Online. Visita la Ruleta de la Fortuna y el Car Meet de LS para ver los premios y concursos m??s recientes, y consigue el doble de GTA$ y RP en Transform Races, Herbicida y Comit?? de bienvenida</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/6937/7e93564334171611948200db0cea665ec31c9bf2.png' alt="img-modal" />,
          <p>A medida que completes cada una de las misiones del contrato de Dr. Dre por primera vez, recibir??s distintas bonificaciones de dinero.</p>
        ]}
        />

        <OnlineDLCCard 
        title={'Los Santos Tuners'}
        logo={OnlineTunersLogo}
        promo={OnlineTunersPromo}
        promoMobile={OnlineTunersPromoMobile}
        bg={`url(${OnlineTunersBackground})`}
        text={[
          <p>Los Santos Tuners ofrece una actualizaci??n trepidante para todos los fans de GTA Online. Incluye el Car Meet de LS, un club y espacio social en el que los jugadores podr??n reunirse y exhibir sus veh??culos personalizados, probar coches nuevos con sus amigos en una pista privada, ver c??mo otros modifican sus veh??culos en tiempo real, y muchas otras funciones que los jugadores nos hab??an pedido a trav??s de sus comentarios. Adem??s, tenemos 10 coches nuevos altamente personalizables con diversos estilos inspirados en el tuneo, un nuevo taller que podr??s comprar, 6 contratos de tipo atraco llenos de acci??n, nuevas carreras, un mont??n de mejoras funcionales y mucho m??s.</p>,

          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/665e3d6b61d9d6dedea896aad24c8c5ba91db3f0.jpg' alt="img-modal" />,
          <p>Mimi dirige el Car Meet de LS en un almac??n desvencijado de Cypress Flats. Por 50.000 GTA$ de nada, puedes hacerte socio y acceder a cientos de niveles de prendas desbloqueables, nuevos tipos de carreras, ruedas y cubiertas, precios especiales y contactos que te ayudar??n en las finales de los contratos.
            <br/>
          Tambi??n tendr??s acceso a la pista de pruebas, en la que podr??s llevar al l??mite tu veh??culo o cualquiera de los tres veh??culos de prueba disponibles. Tras el lanzamiento de Los Santos Tuners podr??s probar el Karin Calico GTF, el Annis Euros y tambi??n un adelanto del Pfister Comet S2 que llegar?? a Legendary Motorsport la semana que viene.
          <br/>
          Los socios tambi??n podr??n acceder a seis nuevos tipos de carreras, a un taller compartido en el que podr??s personalizar tus veh??culos y ver c??mo otros modifican los suyos, a una tienda de art??culos y al veh??culo de premio: la posibilidad de ganar el veh??culo expuesto sobre el Vapid Slamtruck participando en desaf??os semanales.</p>,

          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/a7e292fa6daee40f05b90c8ba9dc6664a9f6d14e.jpg' alt="img-modal" />,
          <h4>Se buscan conductores precisos, que no hagan preguntas</h4>,

          <p>El Car Meet de LS no es m??s que el comienzo: los contactos que har??s all?? te abrir??n las puertas a nuevas oportunidades de disfrutar de la acci??n y ganar dinero r??pido. Moodymann es un artista que demuestra su incre??ble talento a los platos de The Music Locker, pero a Kenny (tambi??n conocido como KDJ) tambi??n le encantan los coches, y junto a Sessanta, su socia, busca forrarse atracando objetivos de gran valor.
            <br/>
          Lo ??nico que necesitas para acceder a su red es un taller: habla con KDJ y con Sessanta en el Car Meet de LS y ent??rate de c??mo invertir en uno a trav??s del sitio web de Maze Bank Foreclosures. Aunque el taller funciona como negocio leg??timo en el que podr??s modificar veh??culos y entreg??rselos a tus clientes por toda la ciudad, esta propiedad tambi??n sirve como base de operaciones para llevar a cabo contratos.
          <br/>
          Los contratos permiten acceder a los golpes importantes: robar a la IAA, a Merryweather, etc. Cada uno consta de misiones de planificaci??n y finales, y se pueden jugar en solitario o con hasta tres jugadores m??s. Un veh??culo modificado con precisi??n ???seg??n tus necesidades y requisitos??? ser?? un recurso sumamente valioso en estas misiones.
          <br/>
          El taller tambi??n te ofrece un garaje de tipo concesionario para 10 coches, una zona de modificaciones para tus veh??culos personales y los de tus amigos, y acceso a las exportaciones poco comunes (una lista diaria de tareas adicionales que te encargar?? la obtenci??n de veh??culos por toda la ciudad), adem??s de mejoras opcionales, como pilotos que te ayudar??n a entregar los veh??culos, un elevador hidr??ulico para tener m??s espacio para las modificaciones, un alojamiento privado y mucho m??s.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/b3a9a953cf98f58657501cddefbc06047f462808.jpg' alt="img-modal" />,
          <h4>M??s m??sica</h4>,
          <p>Los Santos Tuners llega con algunos cambios en el dial radiof??nico y con nuevas formas de encontrar y escuchar m??sica mientras recorres las calles. Basta con localizar una serie de USB multimedia coleccionables que contienen m??sica que podr??s disfrutar en tu coche.
            <br/>
          Si encuentras el USB multimedia de Moodymann, descubrir??s una fabulosa mezcla veraniega de temas cl??sicos y exclusivos entre los que se incluyen colaboraciones estelares de Nez, Gangsta Boo y Jesse Johnson (de The Time, la legendaria banda de Prince). Ser?? perfecta para darte un garbeo por la ciudad o para ponerla en tu pr??xima barbacoa.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/ba06d61f9080a33c2752c8cb8a87fae4fc578825.jpg' alt="img-modal" />,
          <p>Tambi??n podr??s encontrar los cuatro EP Monday Dreamin' de CircoLoco Records, el nuevo sello discogr??fico creado por Rockstar Games y CircoLoco, las leyendas de la cultura de clubes. Si te haces con los cuatro USB multimedia de Monday Dreamin', desbloquear??s una versi??n especial de la recopilaci??n Monday Dreamin' en formato mezcla de DJ con nuevas interpretaciones de los 20 temas creada en exclusiva para Los Santos Tuners.
            <br/>
          Recoge los cuatro USB multimedia de CircoLoco para desbloquearla camiseta CircoLoco.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/f38eef41ebc6321bb8b2ed04a958141ed0f1cd24.jpg' alt="img-modal" />,
          <h4>Nuevos veh??culos</h4>,
          <p>Esta actualizaci??n incluye un lote de 10 veh??culos nuevos altamente modificables, tanto nacionales como importados, y de distintas categor??as:</p>,
          // <Swiper
          // image1="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/87a380dd4120beff3770f1b75139ab03c3842634.jpg"
          // image2="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/9cca3d1b65f405c1c25ae85503bdc1b389dd8c04.jpg"
          // image3="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/70997a9b26e359e8d350a69035860685959cdee5.jpg"
          // image4="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/7d9bb80d9db6167e68fe046d8df14727d424d890.jpg"
          // image5="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/c3ffb2f2d90de9b19037786b0b69571d73f14485.jpg"
          // image6="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/617954459a30944ba097c9447a683847a5fed207.jpg"
          // image7="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/0904bef1388e63c2de3ddbce9f0ac8d9f9f5aaed.jpg"
          // image8="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/6ccc5a0ef9bb7e9563a13b8582c45e6c8ea02ac2.jpg"
          // image9="https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/159a9da9dd95f275f7a15dc70f838350e7e24766.jpg"
          // imagenes={[
          //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8e083b54e63db8a5e40dfb4f0de00ce1adcf1dac.jpg",
          //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg",
          //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg",
          //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg",
          //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg"
          // ]}
          // // Img={[
          // //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8e083b54e63db8a5e40dfb4f0de00ce1adcf1dac.jpg",
          // //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg",
          // //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg",
          // //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg",
          // //   "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg"
          // //   // "caca",
          // //   // "pis",
          // //   // "popo"
          // // ]}
          // />,
          <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/87a380dd4120beff3770f1b75139ab03c3842634.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/9cca3d1b65f405c1c25ae85503bdc1b389dd8c04.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/617954459a30944ba097c9447a683847a5fed207.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/70997a9b26e359e8d350a69035860685959cdee5.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/7d9bb80d9db6167e68fe046d8df14727d424d890.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/c3ffb2f2d90de9b19037786b0b69571d73f14485.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/617954459a30944ba097c9447a683847a5fed207.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/0904bef1388e63c2de3ddbce9f0ac8d9f9f5aaed.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/6ccc5a0ef9bb7e9563a13b8582c45e6c8ea02ac2.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/159a9da9dd95f275f7a15dc70f838350e7e24766.jpg"
            ]}
            />,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/3841/13bf92b6b9ca814a8304efc9f80e8ec7f35c916d.jpg' alt='img-modal' />,
          <h4>BORN X RAISED LLEGA A LA ESCENA DE ROPA URBANA DE LS</h4>,
          <p>La cultura automovil??stica y la moda siempre han ido de la mano, y la marca de ropa urbana Born x Raised lo sabe a la perfecci??n. La prueba est?? ahora en las estanter??as de todas las tiendas de ropa de Los Santos. Encontrar??s la tipograf??a Olde English de BxR en la chaqueta de KDJ, tambi??n conocido como Moodymann, y podr??s ver dos nuevas camisetas de Born x Raised por las calles. Hazte con la camiseta Born x Raised negra en cualquier tienda de ropa y desbloquea la camiseta Born x Raised blanca al completar la final de un contrato de robo (se entregar?? en menos de 72 horas despu??s de iniciar sesi??n, a partir del 2 de agosto).</p>
        ]}
        />

        <OnlineDLCCard 
        title={'Golpe a Cayo Perico'}
        logo={OnlineCayoPericoLogo}
        promo={OnlineCayoPericoPromo}
        promoMobile={OnlineCayoPericoPromoMobile}
        bg={`url(${OnlineCayoPericoBackground})`}
        text={[
          <p>??Atracar el mayor banco del pa??s? Fue pan comido. ??Asaltar las c??maras acorazadas del casino? Tambi??n. ??Infiltrarse en la isla privada y fuertemente protegida del Rubio, el despiadado narcotraficante? Eso ya es otra cosa... Cambia las luces de Los Santos por la arena de Cayo Perico.
            <br/>
          Podr??s jugarlo de principio a fin tanto en solitario como con hasta tres jugadores m??s. El objetivo ser?? descubrir docenas de formas de infiltrarte y atracar una nueva ubicaci??n para dar un golpe apote??sico. Tu viaje comenzar?? cuando hagas un nuevo contacto en el nuevo sitio de moda de la vida nocturna de Los Santos...</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/10546237392fe6470abaf0bf051488e7d50e41b8.jpg' alt="img-modal" />,
          <h4>Haz contactos en The Music Locker</h4>,
          <p>Si hay alguien con quien probablemente termines encontr??ndote en la superexclusiva zona vip de The Music Locker, ese es Miguel Madrazo, hijo de Mart??n y Patricia, heredero del imperio familiar y gran aficionado a los clubes nocturnos. ??l mismo se encargar?? de decirle a gritos a cualquiera que tenga cerca que estar??a dispuesto a hacer cualquier cosa para defender la "marca" de su familia.
            <br/>
          Parece que la familia criminal de los Madrazo tiene algunos desencuentros con el Rubio, as?? que est??n buscando a alguien con experiencia para asaltar su casi impenetrable fortaleza, enga??ar a sus guardias profesionales, burlar sus sistemas de seguridad de ??ltima generaci??n y llevarse unos documentos importantes.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/28d68f5dd0625e451eb80747d85f1b40aa16bd52.jpg' alt="img-modal" />,
          <h4>Isla de Cayo Perico</h4>,
          <p>El Rubio prefiere ocultarse en Cayo Perico, su isla privada, sumamente fortificada y alejada de los familiares confines de Los Santos.
            <br/>
          Con todas las fiestas que organiza en las playas y el constante movimiento de droga desde los campos de cultivo cercanos, la isla podr??a parecer un complejo hotelero de moda convertido en festival de m??sica, si no fuera por los secuaces contratados para proteger la isla armados con fusiles de asalto.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1cc84f3fdee22dc8348f3278f94eeee1125d262.jpg' alt="img-modal" />,
          <p>Miguel tiene plaza en un jet privado lleno de DJ que van a pinchar a Cayo Perico. Es la oportunidad perfecta para infiltrarte y examinar una de las fortalezas m??s seguras que se pueden comprar con dinero. Una vez all??, abandona discretamente la fiesta para localizar el complejo donde se encuentran los documentos. Mientras evitas a los guardias armados y las c??maras de seguridad, f??jate bien en cualquier punto d??bil, como entradas ocultas, puntos de salida y otros fallos de seguridad que podr??as aprovechar m??s adelante. No llames la atenci??n y recopila toda la informaci??n disponible para aumentar tu probabilidad de ??xito cuando llegue la hora de la verdad.</p>,
          
          <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/26b3c013691c5f01c8bff0e1891e7bf4a6bd9da9.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8e083b54e63db8a5e40dfb4f0de00ce1adcf1dac.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/84926840c1c25b5a718fb3d3e004e54077a802e1.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/389d37a47b81f4cbbb33068a43aa7a6e8150a123.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3b9950ead7b1efe87819baca850315474b3f901c.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a1f303bc078dba6be23766d89917d98689e3b610.jpg"
            ]}
            />,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/4260f863e23b0dad68fb3526a5d2c10b7b18e6fc.jpg' alt="img-modal" />,
          <h4>C??mo robar al Rubio</h4>,
          <p>Al contrario que en golpes previos, no hay un estilo espec??fico a la hora de planificar el de Cayo Perico.
            <br/>
          Cuando re??nas el material necesario, podr??s llevar a cabo todas las misiones preliminares que quieras (o no), aunque debes tener en cuenta que estas decisiones afectar??n al desarrollo de la acci??n. Si quieres solicitar un ataque a??reo o usar un soplete cortador para quemar barras de acero, por ejemplo, te recomendamos que le dediques un tiempo antes.
          Imagen de un personaje y un helic??ptero</p>,
          <p>Una vez completados los preparativos, podr??s rematar los detalles finales antes de acercarte a Cayo Perico. Tendr??s la posibilidad de elegir c??mo te infiltras y escapas de la isla, el armamento, los se??uelos, el apoyo a??reo e incluso la hora del d??a a la que se ejecutar?? la operaci??n. El resultado ser?? que no habr?? dos estrategias iguales aunque repitas el golpe m??s veces. Adem??s, si vuelves a la isla, descubrir??s otros art??culos de valor que ir??n apareciendo y que podr??s robar.
            <br/>
          Tambi??n hay un mont??n de oportunidades adicionales que podr??s aprovechar, como forzar dep??sitos de almacenamiento para acceder a alijos ocultos de dinero y contrabando que aumentar??n tu bot??n. Normalmente, estos objetivos y las herramientas necesarias para acceder a ellos no estar??n dos veces en el mismo sitio, y algunos solo ser??n accesibles si te acompa??an m??s jugadores, as?? que te animamos encarecidamente a que vayas con amigos.</p>,
          <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/be64860cdbcbdec049e85608c259789b8cc9128c.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/0440fdce1fabb5a87c2167dc3f3653e3f58a1fc6.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/040329ca225583b19658bbc525acb1756805d344.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8f1846b23a9a6d69a9f4ee28ad0fe3586f976174.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/943650fa94272be532a665a4d9cc440469a9b44f.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/b6a08f60badbe9d981ca36c39f435a7275ad81ad.jpg"
            ]}
            />,
          <p>
            Una vez completados los preparativos, podr??s rematar los detalles finales antes de acercarte a Cayo Perico. Tendr??s la posibilidad de elegir c??mo te infiltras y escapas de la isla, el armamento, los se??uelos, el apoyo a??reo e incluso la hora del d??a a la que se ejecutar?? la operaci??n. El resultado ser?? que no habr?? dos estrategias iguales aunque repitas el golpe m??s veces. Adem??s, si vuelves a la isla, descubrir??s otros art??culos de valor que ir??n apareciendo y que podr??s robar.
            <br/>
            Tambi??n hay un mont??n de oportunidades adicionales que podr??s aprovechar, como forzar dep??sitos de almacenamiento para acceder a alijos ocultos de dinero y contrabando que aumentar??n tu bot??n. Normalmente, estos objetivos y las herramientas necesarias para acceder a ellos no estar??n dos veces en el mismo sitio, y algunos solo ser??n accesibles si te acompa??an m??s jugadores, as?? que te animamos encarecidamente a que vayas con amigos.
          </p>,
          <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/c02c3c40143658c419103464a2bf744d085b900f.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/3c11ee6383e5c58498f790a91883f1e8df0c491c.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/7f510a6f7f0e24446ba7d274bf4510256c8e4d5f.jpg",
            ]}
            />, 
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/68c31a735d90b17cf14a07c380e97dad02c0ce95.jpg' alt="img-modal" />,
            <h4>En solitario</h4>,
            <p>El golpe a Cayo Perico es el primer golpe que se puede jugar por tu cuenta de principio a fin. Enfr??ntate a sigilosas misiones de reconocimiento, a tiroteos fren??ticos y al trepidante golpe tanto a solas como con un equipo para tener apoyo adicional. Puedes desvalijar la isla de Cayo Perico como t?? prefieras.</p>,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/7adcdb9980e5062c79a1c9b088f4a0482434556c.jpg' alt="img-modal" />,
            <h4>El submarino Kosatka</h4>,
            <p>??Y qu?? mejor cuartel general para planear el elaborado asalto a una isla tropical privada que un submarino nuclear retirado del servicio activo?</p>,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/315ff5598be56bb1491a2c3d725be0d71019b96f.jpg' alt="img-modal" />,
            <p>Conducido por Pavel, extimonel sovi??tico que termin?? medio ido de la cabeza despu??s de tantos a??os bajo el agua, en el Kosatka encontrar??s todo lo que puedes necesitar para planear tu misi??n con ??xito, como un puente con una pantalla de planificaci??n de golpes, alojamientos personales para cambiarte de ropa, un comedor, una celda, torpedos u opciones para instalar un taller de armas Mk II y misiles guiados, o una piscina central en la que podr??s almacenar veh??culos como el nuevo helic??ptero Sparrow y el sumergible Kraken Avisa para usarlos a tu antojo.</p>,
            <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/8c555825cba83b486b789e0b4ad3c3f0a81bfee0.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/b6f9d20a5fe7038f4ac0b88f2a294d43ebb8b3b1.jpg",
            ]}
            />, 
            <p>Con el Kosatka podr??s navegar por la costa del sur de San Andreas. Ver??s que, con la cantidad de traficantes que mueven mercanc??a por v??a mar??tima, siempre hay carga que se cae por la borda. El s??nar opcional te ayudar?? a encontrar alijos ocultos en el fondo del mar para ganar m??s recompensas. No te sientas culpable por robar contrabando: piensa que est??s contribuyendo a limpiar el lecho oce??nico.</p>,
            <SwiperSlider
          imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/74c54718a709eed318274d0d93d51e4d3adca4e4.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/d3e2698b010055537061593d64f4fc43461762fc.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/db6fb8a50045f310a5baace58b01caf90d88441b.jpg",
            ]}
            />, 
            <h4>Nueva m??sica</h4>,
            <p>Puede que tus conexiones en el sector de la hosteler??a te pidan ayuda para conseguir que la estancia de Moodymann en Los Santos sea lo m??s memorable posible. Si aceptas esta responsabilidad, te lo compensar??n adecuadamente.
            <br/>
            No pierdas de vista The Music Locker: la fiesta seguir?? la pr??xima semana con nuevos DJ residentes, adem??s de nuevas misiones para cada uno.
            <br/>
            Adem??s de nuevos lugares de ocio, la actualizaci??n Golpe a Cayo Perico trae nuevas emisoras como K.U.L.T. FM 99.9, presentada por Julian Casablancas. Adem??s, Worldwide FM y FlyLo FM llegan con nuevas listas de reproducci??n seleccionadas por Gilles Peterson y Flying Lotus, respectivamente.
            <br/>
            Mientras tanto, puede que los conductores que pasen por la zona de Mirror Park escuchen las retransmisiones de Still Slipping Los Santos, el proyecto radiof??nico pirata de Joy Orbison. Si lo pillas, no muevas el dial. Mantente ojo (y o??do) avizor por si ves antenas de radio rotas por la ciudad; podr??s repararlas para ayudar a que Still Slipping LS llegue al gran p??blico.</p>,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a36d4f97a714b7ae3454a0228b0670ac37be679e.png' alt="img-modal" />,
            <h4>Civilist y MISBHV</h4>,
            <p>Los Santos siempre ha sido un famoso centro de la moda, con dise??adores de lujo en Rockford Hills o ropa de calle en Mirror Park. Esta semana las tiendas de ropa recibir??n prendas de las nuevas marcas Civilist y MISBHV, aptas tanto para fiesteros como para criminales.</p>,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/b669121395f4805a7d42cbc67302a083cdc0a6f6.png' alt="img-modal" />,
            <p>Esta semana las tiendas de ropa recibir??n prendas de las nuevas marcas Civilist y MISBHV, aptas tanto para fiesteros como para criminales.</p>,
            <h4>Nuevos veh??culos, armas y mucho m??s</h4>,
            <p>los, armas y mucho m??s

            Aparte del submarino Kosatka y de los veh??culos de su piscina central, tambi??n hay varios veh??culos nuevos disponibles para los residentes de Los Santos, como:</p>,
            <SwiperSlider
            imagenes={[
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/0dc07e1587afa8920619358f530d40c7871a8b9e.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/c15d0167dae869785358196004bd87e691b418b5.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/ebad99a6acc13c94758ecac380d796ce336f35f8.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/58feb44b9050c160b7da0b74de3854668b2a8f41.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/0e77514c86086011117c13034ca97a86910c3ee6.jpg",
              "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/59c6b1b84177dda53d66ff59a67942f2adb2cd79.jpg",
            ]}
            />,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/0cc7477781ce38d3f8590eb1ce933dcef1e27d13.jpg' alt="img-modal" />,
            <p>Se rumorea que el Rubio tiene una pistola especial tan letal como decadente. Tambi??n se rumorea que nadie sabe en qu?? parte de Cayo Perico la ha escondido...</p>,
            <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/k995/a32d5daad1fb6998771c20cc174848c8b45fdb7b.jpg' alt="img-modal" />,
            <p>Tambi??n hay nuevas y poderosas armas, como el rifle militar de estilo bullpup, disponible en Ammu-Nation. Adem??s, puedes descubrir una escopeta de combate de gran potencia durante la final del golpe para desbloquearla en Ammu-Nation y as?? poder agregarla a tu arsenal.</p>,

        ]}
        />

        <OnlineDLCCard 
        title={'The Diamond Casino & Resort'}
        logo={OnlineDiamondLogo}
        promo={OnlineDiamondPromo}
        promoMobile={OnlineDiamondPromoMobile}
        bg={`url(${OnlineDiamondBackground})`}
        text={[
          <p>Hoy se celebra la gran inauguraci??n de The Diamond Casino & Resort, un amplio y lujoso centro de ocio situado en Vinewood y abierto a todos los ciudadanos del sur de San Andreas. En The Diamond, lo m??s importante es que t?? disfrutes, ya sea quedando con tus amigos para participar en distintas actividades o relaj??ndote en el balneario de tu ??tico privado. En The Diamond te conceder??n cualquier capricho.
            <br/>
          Ven a jugar. Ven a pasarlo bien. Ven a vivir la experiencia.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/10ab79e3849e959a381428729be34f2879061094.jpeg' alt="img-modal" />,
          <h4>Es hora de jugar</h4>,
          <p>El casino dispone de actividades para todos los gustos. Utiliza fichas para jugar contra la casa, prueba suerte en la ruleta, el blackjack y el p??quer de 3 cartas, o juega a las tragaperras, que ofrecen fichas y distintos premios especiales, como ropa exclusiva. Asiste a las carreras de caballos para participar en un evento individual o en el principal, donde podr??s animar a tu caballo preferido con tus amigos. Adem??s, la Ruleta de la Fortuna es una actividad diaria gratuita que ofrece todo tipo de recompensas, desde GTA$ hasta descuentos especiales, pasando por ropa y una selecci??n de veh??culos de lujo que se exhiben en la plataforma del vest??bulo y que cambia cada semana. Consulta el sitio web de asistencia de Rockstar para conocer los detalles y las restricciones.
            <br/>
          Hacerse socio est??ndar de The Diamond Casino & Resort cuesta 500 GTA$ e incluye un regalo de bienvenida de 5000 fichas, as?? como acceso a varios servicios y actividades que ofrece el casino, como el servicio de aparcacoches. Todos los que visiten The Diamond (incluidos los socios) podr??n recibir una bonificaci??n diaria de visitante de 1000 fichas que se obtiene en caja.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/9d0e51fccd38593e9c36de9b3af75a2dbddbd1c3.jpeg' alt="img-modal" />,
          <h4>DESCANSA</h4>,
          <p>La piscina infinita de la azotea ofrece unas vistas espectaculares, mientras que el ??tico principal es, simple y llanamente, la residencia m??s opulenta del planeta. Personaliza tu plano con ocho complementos opcionales: una sala de descanso, una sala multimedia, un balneario, un bar y zona de fiestas, un crupier privado, una oficina, una habitaci??n extra y un garaje. Adapta los dise??os y la paleta de colores de tu nueva propiedad a tu gusto y cubre las paredes con sofisticad??simas obras de arte abstracto adquiridas en la tienda del casino. Impresiona a tus invitados con evocadoras esculturas, aun sabiendo que sus mentes son demasiado nimias para apreciarlas por completo. La opci??n de gestionar el ??tico, disponible en el men?? Interacci??n, te permitir?? colocar tus nuevos adornos en cada estancia.
            <br/>
          Todos los ??ticos convierten al propietario en socio vip, lo que le permite utilizar servicios especiales, que incluyen aparcacoches, champ??n y servicio de limusina, as?? como un conserje de aeronaves y acceso a salas vip y a mesas de apuestas altas. Adem??s, podr??s participar en nuevas misiones cooperativas y en diversos trabajos para el casino que encontrar??s en el modo Libre.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/c173a7ce57121078509a237554b1c20b40212997.jpeg' alt="img-modal" />,
          <h4>LA DINAST??A FAMILIAR CHENG</h4>,
          <p>Tao Cheng y el personal de The Diamond est??n en un buen aprieto. Colabora con Cheng y con la directora de operaciones, Agatha Baker, para proteger su negocio de la OPA hostil de los Duggan, una despiadada familia tejana de magnates de la industria petroqu??mica dispuestos a expandir su imperio cueste lo que cueste. Sal de la piscina infinita y sum??rgete en una nueva historia repleta de misiones cargadas de acci??n para entre 2 y 4 jugadores.
            <br/>
          Los vips, jefes y presidentes de clubes de moteros que busquen algo de trabajo adicional pueden ponerse en contacto con Agatha Baker para aceptar trabajos para el casino, que ofrecen GTA$ y fichas por recuperar bienes robados, lidiar con crupieres insatisfechos y hacer todo tipo de favores al siempre agradecido equipo de gesti??n.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/43068c9b1cb39c1b297c1938665fb34ef49c1b8f.jpeg' alt="img-modal" />,
          <h4>TIENDA DEL CASINO</h4>,
          <p>La tienda del casino ofrece una selecci??n rotativa de ropa, accesorios y obras de arte cuidadosamente escogida que podr??s adquirir con fichas. Da igual si buscas una prenda de estilo cuestionable o un nuevo cuadro que d?? mucho que hablar; aqu?? encontrar??s de todo. Presume tanto de lo que te pones como de lo que clavas en la pared.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/9c83efb4fbf6a781d8d86a1b1e18dd49eba9599c.jpeg' alt="img-modal" />,
          <h4>VEH??CULOS Y CARRERAS</h4>,
          <p>Si quieres presumir de coche nuevo en el aparcamiento cubierto de The Diamond o hacer trabajar al servicio de aparcacoches, en los concesionarios de Southern San Andreas Super Autos y Legendary Motorsport encontrar??s nuevos veh??culos para comprar y personalizar. El supercoche Truffade Thrax, expuesto en la plataforma, ya est?? a la venta, y adem??s es el premio de la Ruleta de la Fortuna de esta semana. El deportivo Obey 8F Drafter, el supercoche Annis S80RR y el deportivo Enus Paragon R ya est??n disponibles en Legendary Motorsport. Tambi??n puedes ir a Southern San Andreas Super Autos y hacerte con el Weeny Issi Sport o el Vapid Caracara 4x4, personalizarlos a tu gusto y estrenarlos en las nuevas series de carreras, que consta de tres nuevos circuitos terrestres y cuatro circuitos cl??sicos muy populares.</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/9e78ef9929e11056c1514071eb0883ddac0f73a9.jpeg' alt="img-modal" />,
          <h4>Coleccionables escondidos</h4>,
          <p>Por las calles se comenta que est??n apareciendo ciertos objetos muy interesantes por todo el estado de San Andreas. Habla con cualquier tratante de antig??edades sin licencia. Todos te dir??n lo mismo: que se han encontrado varios naipes muy antiguos desperdigados por ah??. Pero antiguos de verdad, rollo siglo XIX.
            <br/>
          Hay 54 naipes ocultos esparcidos por todo el estado que est??n esperando a que alguien los encuentre, y ofrecen RP y fichas adicionales por cada uno que descubras. Encu??ntralos todos para desbloquear la indumentaria de pez gordo y una baraja de cartas ??nica que tu crupier privado repartir?? cuando juegues al blackjack y al p??quer de 3 cartas.??</p>,
          <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/a19a/bccd9adfbe1def6c51f214f4dcf9f2d039f1701b.jpeg' alt="img-modal" />,
          <h4>Golpe a The Diamond Casino</h4>,
          <p>Lleva a cabo el robo m??s sofisticado y atrevido jam??s visto en la ciudad de Los Santos en Golpe a The Diamond Casino.
          <br/>
          The Diamond Casino & Resort pertenece a los Duggan, una despiadada familia tejana de magnates de la industria petroqu??mica que le arrebat?? el control a Tao Cheng y la tr??ada, y que ha hecho que el negocio siga viento en popa, a pesar de su cuestionable capacidad de gesti??n.
          <br/>
          Ya es hora de hacer algo al respecto de ese mensaje cr??ptico que recibiste de Cheng Family Holdings. Georgina Cheng (vicepresidenta de Cheng Holdings, hermana peque??a del fiestero Tao y m??s equilibrada y formal que este) se ha propuesto dar a los Duggan donde m??s les duele: quiere acceder a la c??mara acorazada de alta seguridad de The Diamond y robar todo lo que contiene.??
          <br/>
          Ahora que Georgina dirige el cotarro, y que Lester Crest (un hacker muy raro que dirige la operaci??n) y su equipo est??n dispuestos a ayudarla, llevar??n a cabo un ambicioso golpe donde tendr??n que enfrentarse a medidas de seguridad punteras, opciones de preparaci??n casi ilimitadas y un bot??n desmesurado.</p>
]}
        />
        {/* <OnlineDLCCard />
        <OnlineDLCCard />
        <OnlineDLCCard /> */}
      </div>
    </div>
  )
}

export default OnlineDLCSlier