//HOME

let campo = document.querySelector("#campo");
let resultado = document.querySelector("#resultado");

function registrar(){
    if (campo.value.length > 0){
    resultado.innerHTML = campo.value + ", é? ...que nome feio.";
    }
    else {
        resultado.innerHTML = "INSIRA SEU NOME AGORA MESMO!";
    }
}

let superman = document.querySelector("#superman");

let contador = 0; 
function envelhecer(){
    if (contador === 0){
        superman.src = "imagens/s2.png";
        contador++;
    } else if (contador === 1){
        superman.src = "imagens/s3.png";
        contador++;
    } else if (contador === 2){
        superman.src = "imagens/s4.png";
        contador++;
    } else if (contador === 3){
        superman.src = "imagens/s5.png";
        contador++;
    } else if (contador === 4){
        superman.src = "imagens/s6.png";
        contador++;
    } else if (contador === 5){
        superman.src = "imagens/s7.png";
        contador++;
    } else if (contador === 6){
        superman.src = "imagens/s8.png";
        contador++;
    } else if (contador === 7){
        superman.src = "imagens/s9.png";
        contador = 0;
    }
}

//FESTA
const fundo_festa = document.querySelector(".bg_stat");
const fimg1 = document.querySelector("#fimg1");
const fimg2 = document.querySelector("#fimg2");
const fimg3 = document.querySelector("#fimg3");

let ligado = false;
function festejar(){
    if (ligado === false){
        fundo_festa.style.animation = "fundocolorido 2s infinite"
        fimg1.src = "imagens/festa/ganon-dance.gif";
        fimg2.src = "imagens/festa/crash-dance.gif";
        fimg3.src = "imagens/festa/dk-dance.gif";
    } else {
        fundo_festa.style.animation = "none"
        fimg1.src = "imagens/festa/ganon-sad.gif";
        fimg2.src = "imagens/festa/crash-sad.gif";
        fimg3.src = "imagens/festa/dk-sad.gif";
    }
    ligado = !ligado;
}

//NOTURNO

let jaavisou = false;
function aviso_noturno(){
    if (jaavisou === false){
        alert("OH NÃO! O Noturno dos X-Men roubou o pastel que sua mina ia comer, ce não vai deixar assim, né, mano? PEGUE ELE!");
    }
    jaavisou = true;
}

const noturno = document.querySelector("#noturno");
function noturno_teletransporte(){
    let randint1 = Math.ceil(Math.random() * 80);
    let randint2 = Math.ceil(Math.random() * 80);
    noturno.style.top = randint1 + "%";
    noturno.style.left = randint2 + "%";
}

let jaconversou = false;
function noturno_conversa(){
    if (jaconversou === false){
        alert("Poxa, mano. Me desculpe! Não queria causar problemas. Acontece que eu tô morando na rua e não como faz umas duas semanas...")
        noturno.src = "imagens/NOTURNO/noturno_alimentado.png";
        alert("O pastel? Foi mal, cara... já comi.")
    }
    jaconversou = true;
}

//FLEX TEST

let flex_container = document.querySelector(".flex-container");
let span_direction = document.querySelector(".span_direction");
let span_justify = document.querySelector(".span_justify");
let span_align = document.querySelector(".span_align");
let span_wrap = document.querySelector(".span_wrap");
let span_align_content = document.querySelector(".span_align_content");

let flex_num = 1;
function flex_add(){
    let randomcolor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    let flex_caixa = document.createElement("div");
    flex_caixa.innerHTML = flex_num;
    flex_caixa.style.backgroundColor = randomcolor;
    flex_container.appendChild(flex_caixa);
    flex_num++;
}

function flex_add_10(){
    for (let b = 0; b < 10; b++){
        let randomcolor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        let flex_caixa = document.createElement("div");
        flex_caixa.innerHTML = flex_num;
        flex_caixa.style.backgroundColor = randomcolor;
        flex_container.appendChild(flex_caixa);
        flex_num++;
    }
}

function flex_remove(){
    flex_container.removeChild(flex_container.lastChild);
    if (flex_num > 1){
        flex_num--;        
    }
}

function flex_clear(){
    flex_container.innerHTML = "";
    flex_num = 1;
}

function flex_row(){
    flex_container.style.flexDirection = "row";
    span_direction.innerHTML = "flex-direction: row;"
}

function flex_row_reverse(){
    flex_container.style.flexDirection = "row-reverse";
    span_direction.innerHTML = "flex-direction: row-reverse;"
}

function flex_column(){
    flex_container.style.flexDirection = "column";
    span_direction.innerHTML = "flex-direction: column;"
}

function flex_column_reverse(){
    flex_container.style.flexDirection = "column-reverse";
    span_direction.innerHTML = "flex-direction: column-reverse;"
}

function justify_start(){
    flex_container.style.justifyContent = "flex-start";
    span_justify
    span_justify.innerHTML = "justify-content: flex-start;"
}

function justify_center(){
    flex_container.style.justifyContent = "center";
    span_justify.innerHTML = "justify-content: center;"
}

function justify_end(){
    flex_container.style.justifyContent = "flex-end";
    span_justify.innerHTML = "justify-content: flex-end;"
}

function justify_space_between(){
    flex_container.style.justifyContent = "space-between";
    span_justify.innerHTML = "justify-content: space-between;"
}

function justify_space_around(){
    flex_container.style.justifyContent = "space-around";
    span_justify.innerHTML = "justify-content: space-around;"
}

function align_start(){
    flex_container.style.alignItems = "flex-start";
    span_align.innerHTML = "align-items: flex-start;"
}

function align_center(){
    flex_container.style.alignItems = "center";
    span_align.innerHTML = "align-items: center;"
}

function align_end(){
    flex_container.style.alignItems = "flex-end";
    span_align.innerHTML = "align-items: flex-end;"
}

function align_stretch(){
    flex_container.style.alignItems = "stretch";
    span_align.innerHTML = "align-items: stretch;"
}

function nowrap(){
    flex_container.style.flexWrap = "nowrap";
    span_wrap.innerHTML = "flex-wrap: nowrap;"
}

function wrap(){
    flex_container.style.flexWrap = "wrap";
    span_wrap.innerHTML = "flex-wrap: wrap;"
}

function wrap_reverse(){
    flex_container.style.flexWrap = "wrap-reverse";
    span_wrap.innerHTML = "flex-wrap: wrap-reverse;"
}

function align_content_start(){
    flex_container.style.alignContent = "flex-start";
    span_align_content.innerHTML = "align-content: flex-start;"
}

function align_content_center(){
    flex_container.style.alignContent = "center";
    span_align_content.innerHTML = "align-content: center;"
}

function align_content_end(){
    flex_container.style.alignContent = "flex-end";
    span_align_content.innerHTML = "align-content: flex-end;"
}

function align_content_stretch(){
    flex_container.style.alignContent = "stretch";
    span_align_content.innerHTML = "align-content: stretch;"
}

function align_content_space_between(){
    flex_container.style.alignContent = "space-between";
    span_align_content.innerHTML = "align-content: space-between;"
}

function align_content_space_around(){
    flex_container.style.alignContent = "space-around";
    span_align_content.innerHTML = "align-content: space-around;"
}

// GALERIA

let menu_mario = document.querySelector("#mk_mario");
let menu_luigi = document.querySelector("#mk_luigi");
let menu_peach = document.querySelector("#mk_peach");
let menu_toad = document.querySelector("#mk_toad");
let menu_yoshi = document.querySelector("#mk_yoshi");
let menu_dk = document.querySelector("#mk_dk");
let menu_wario = document.querySelector("#mk_wario");
let menu_bowser = document.querySelector("#mk_bowser");
let mk_top_bg = document.querySelector(".mk_top_bg");
let selected_mk_player = "none";
let stat_screen = false;
let mk_player_title = document.querySelector("#mk_player_title");
let mk_player_description = document.querySelector("#mk_player_description");
let mk_player_img = document.querySelector("#mk_player_img");

function display_stats(player){
    stat_screen = true;
    mk_top_bg.style.display = "flex";
    if (player == "mario"){
        mk_player_title.innerHTML = "MARIO";
        mk_player_description.innerHTML = "O icônico encanador da Nintendo, é uma escolha clássica para pilotos de Mario Kart. Com seu boné vermelho característico, bigode espesso e um sorriso confiante, Mario é conhecido por sua habilidade equilibrada e versátil nas pistas. Ele é ágil o suficiente para desviar de cascas de banana e habilidoso o bastante para executar drifts perfeitos nas curvas mais desafiadoras. Além disso, sua personalidade otimista e determinada o tornam um favorito entre os competidores, sempre pronto para enfrentar qualquer desafio com coragem e determinação. Escolha Mario para uma experiência de corrida clássica e divertida no mundo de Mario Kart.";
        mk_player_img.src = "imagens/galeria/mario.png";
    } else if (player == "luigi"){
        mk_player_title.innerHTML = "LUIGI";
        mk_player_description.innerHTML = "Luigi, o irmão mais novo de Mario, também entra na competição de Mario Kart com seu próprio estilo único. Com seu boné verde e bigode bem cuidado, Luigi traz consigo uma mistura de determinação e nervosismo, tornando-o um piloto intrigante para os jogadores. Embora possa não ser tão conhecido quanto seu irmão, Luigi compensa com sua habilidade técnica nas pistas. Ele é habilidoso em fazer curvas fechadas e possui uma velocidade impressionante, capaz de ultrapassar seus adversários com destreza. Sua personalidade mais reservada contrasta com a bravura de Mario, mas não subestime seu espírito competitivo. Escolha Luigi se você estiver procurando por um desafio técnico e uma corrida cheia de surpresas.";
        mk_player_img.src = "imagens/galeria/luigi.png";
    } else if (player == "peach"){
        mk_player_title.innerHTML = "PEACH";
        mk_player_description.innerHTML = "A graciosa Princesa Peach, conhecida por sua elegância e charme real, entra na competição de Mario Kart com toda a sua graça e determinação. Vestida com seu vestido cor-de-rosa e uma tiara reluzente, Peach é mais do que uma beleza deslumbrante - ela é uma piloto habilidosa e destemida. Sua presença na pista é marcada por sua agilidade e habilidade de manobrar em curvas apertadas, enquanto sua velocidade surpreende até mesmo os competidores mais experientes. Apesar de sua gentileza, Peach não hesita em mostrar sua determinação e espírito competitivo durante as corridas. Escolha a Princesa Peach para uma mistura perfeita de graciosidade e habilidade na sua jornada pelo mundo de Mario Kart.";
        mk_player_img.src = "imagens/galeria/peach.png";
    } else if (player == "toad"){
        mk_player_title.innerHTML = "TOAD";
        mk_player_description.innerHTML = "Pequeno, ágil e otimista, Toad é uma presença adorável em Mario Kart. Reconhecido por sua cabeça em forma de cogumelo e colete azul, Toad desliza pelas pistas com velocidade e agilidade surpreendentes. Sua baixa estatura lhe dá uma vantagem aerodinâmica, permitindo manobras habilidosas e desvios rápidos de obstáculos. Sua personalidade alegre e positiva adiciona diversão à competição, tornando-o uma escolha popular entre os jogadores que buscam uma experiência de corrida rápida e empolgante.";
        mk_player_img.src = "imagens/galeria/toad.png";
    } else if (player == "yoshi"){
        mk_player_title.innerHTML = "YOSHI";
        mk_player_description.innerHTML = "Yoshi, o dinossauro de ovo verde, traz charme e habilidade únicos para Mario Kart. Com sua aparência adorável e sorriso cativante, Yoshi domina as pistas com velocidade e agilidade impressionantes. Seu Kart personalizado, decorado com ovos coloridos, reflete sua personalidade animada. Com uma combinação de aceleração rápida e habilidades de manobra excepcionais, Yoshi é capaz de superar desafios com facilidade. Seu espírito competitivo e leal torna-o uma escolha emocionante para os jogadores que buscam uma corrida cheia de aventura e diversão.";
        mk_player_img.src = "imagens/galeria/yoshi.png";
    } else if (player == "dk"){
        mk_player_title.innerHTML = "DK";
        mk_player_description.innerHTML = "Donkey Kong, o rei da selva, traz força e ferocidade para Mario Kart. Com seu físico imponente e expressão determinada, ele domina as pistas com poder e habilidade. Seu Kart robusto, adornado com bananas, reflete sua personalidade única. Donkey Kong combina velocidade impressionante com resistência incrível, tornando-se um adversário formidável. Apesar de sua aparência intimidadora, ele possui um coração gentil e um espírito competitivo. Escolha Donkey Kong para uma corrida cheia de adrenalina e aventura no mundo de Mario Kart.";
        mk_player_img.src = "imagens/galeria/dk.png";
    } else if (player == "wario"){
        mk_player_title.innerHTML = "WARIO";
        mk_player_description.innerHTML = "Wario, o anti-herói excêntrico e audacioso, é uma figura marcante em Mario Kart. Com seu sorriso malicioso e bigode espesso, ele exala confiança e astúcia. Seu Kart personalizado, adornado com detalhes peculiares, reflete sua personalidade única. Wario combina força bruta com truques engenhosos, tornando-se um adversário imprevisível. Sua velocidade impressionante e disposição para usar qualquer meio necessário para vencer fazem dele um competidor formidável. Apesar de sua natureza egoísta, Wario é um desafio emocionante para aqueles que buscam uma corrida cheia de emoção e rivalidades intensas em Mario Kart.";
        mk_player_img.src = "imagens/galeria/wario.png";
    } else if (player == "bowser"){
        mk_player_title.innerHTML = "BOWSER";
        mk_player_description.innerHTML = "Bowser, o Rei dos Koopas, é uma presença imponente em Mario Kart. Com sua casca espinhosa e garras afiadas, ele inspira respeito e temor. Seu Kart personalizado, decorado com detalhes sinistros e chamas, reflete sua natureza dominadora. Bowser domina as pistas com velocidade e força, esmagando obstáculos e ultrapassando competidores com facilidade. Sua natureza competitiva e determinação feroz o tornam um desafio constante. Apesar de ser um vilão, Bowser é um competidor respeitável, sempre pronto para provar sua superioridade. Escolha Bowser para uma experiência de corrida cheia de emoção e desafios intensos em Mario Kart.";
        mk_player_img.src = "imagens/galeria/bowser.png";
}}

function mk_fechar(){
    stat_screen = false;
    menu_mario.src = "imagens/galeria/1d.png";
    menu_luigi.src = "imagens/galeria/2d.png";
    menu_peach.src = "imagens/galeria/3d.png";
    menu_toad.src = "imagens/galeria/4d.png";
    menu_yoshi.src = "imagens/galeria/5d.png";
    menu_dk.src = "imagens/galeria/6d.png";
    menu_wario.src = "imagens/galeria/7d.png";
    menu_bowser.src = "imagens/galeria/8d.png";
    mk_top_bg.style.display = "none";
}

function over_mario(){
    menu_mario.src = "imagens/galeria/1ds.png";
}

function click_mario(){
    menu_mario.src = "imagens/galeria/1vs.png";
    display_stats("mario");
}

function out_mario(){
    if (stat_screen == false){
        menu_mario.src = "imagens/galeria/1d.png";
    }
}

function over_luigi(){
    menu_luigi.src = "imagens/galeria/2ds.png";
}

function click_luigi(){
    menu_luigi.src = "imagens/galeria/2vs.png";
    display_stats("luigi");
}

function out_luigi(){
    if (stat_screen == false){
        menu_luigi.src = "imagens/galeria/2d.png";        
    }
}

function over_peach(){
    menu_peach.src = "imagens/galeria/3ds.png";
}

function click_peach(){
    menu_peach.src = "imagens/galeria/3vs.png";
    display_stats("peach");
}

function out_peach(){
    if (stat_screen == false){
        menu_peach.src = "imagens/galeria/3d.png";
    }
}

function over_toad(){
    menu_toad.src = "imagens/galeria/4ds.png";
}

function click_toad(){
    menu_toad.src = "imagens/galeria/4vs.png";
    display_stats("toad");
}

function out_toad(){
    if (stat_screen == false){
    menu_toad.src = "imagens/galeria/4d.png";
    }
}

function over_yoshi(){
    menu_yoshi.src = "imagens/galeria/5ds.png";
}

function click_yoshi(){
    menu_yoshi.src = "imagens/galeria/5vs.png";
    display_stats("yoshi");
}

function out_yoshi(){
    if (stat_screen == false){
    menu_yoshi.src = "imagens/galeria/5d.png";
    }
}

function over_dk(){
    menu_dk.src = "imagens/galeria/6ds.png";
}

function click_dk(){
    menu_dk.src = "imagens/galeria/6vs.png";
    display_stats("dk");
}

function out_dk(){
    if (stat_screen == false){
    menu_dk.src = "imagens/galeria/6d.png";
    }
}

function over_wario(){
    menu_wario.src = "imagens/galeria/7ds.png";
}

function click_wario(){
    menu_wario.src = "imagens/galeria/7vs.png";
    display_stats("wario");
}

function out_wario(){
    if (stat_screen == false){
    menu_wario.src = "imagens/galeria/7d.png";
    }
}

function over_bowser(){
    menu_bowser.src = "imagens/galeria/8ds.png";
}

function click_bowser(){
    menu_bowser.src = "imagens/galeria/8vs.png";
    display_stats("bowser");
}

function out_bowser(){
    if (stat_screen == false){
    menu_bowser.src = "imagens/galeria/8d.png";
    }
}