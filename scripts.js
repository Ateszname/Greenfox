let adatok = [
    { 
        kep: "images/barhol.jpg",
        cim: "Bárhol",
        szoveg: "Bárhol megtalálhatod a nyugalmat",
    },
    { 
        kep:"images/create.jpg",
        cim:"Create",
        szoveg:"Élj! Dolgozz! Teremts!",
    },
    { 
        kep:"images/elindulni.jpg",
        cim:"Elindulni",
        szoveg:"Minden út egy lépéssel kezdődik",
    },
    { 
        kep:"images/felallni.jpg",
        cim:"Felállni",
        szoveg:"Mindig képesnek kell lenned felállni",
    },
    { 
        kep:"images/termeszet.jpg",
        cim:"Természet",
        szoveg:"Szeresd a természetet",
    },
    { 
        kep:"images/vege.jpg",
        cim:"Vége",
        szoveg:"Ha nincs tovább út, akkor neked kell kitaposni",
    },
    { 
        kep:"images/zene.jpg",
        cim:"Zene",
        szoveg:"A zene benned van",
    },
    { 
        kep:"images/zord.jpg",
        cim:"Zord",
        szoveg:"Egy zord helyen is meg lehet találni a szépséget",
    },
];

let aktualis = 0;

let loadPhoto = (kepSzama) => {
    $('#kozep').css('background-image','url('+adatok[kepSzama].kep+')')
    $('#cim').text(adatok[kepSzama].cim);
    $('#szoveg').text(adatok[kepSzama].szoveg);
}

loadPhoto(aktualis);

$('#baloldal').click(() => {
    aktualis--;
    if(aktualis<0) aktualis=adatok.length-1;
    loadPhoto(aktualis);
})
$('#jobboldal').click(() => {
    aktualis++;
    if(aktualis>adatok.length-1) aktualis=0;
    loadPhoto(aktualis);
})

for (let i = 0; i < adatok.length; i++) {
    $(".kiskepek").append('<div class="kiskep"></div>');
    $('.kiskepek div:last-of-type').css('background-image','url('+adatok[i].kep+')');
    $('.kiskepek div:last-of-type').css('background-size','100%');
    $('.kiskepek div:last-of-type').css('box-shadow','10px 10px 10px black');
    $('.kiskepek div:last-of-type').attr('data-number',i);
    //$('.kiskepek div:last-of-type').attr('id','kep'+i);
    //$('.kiskepek div:last-of-type').attr('title',adatok[i].cim);
    $('.kiskepek div:last-of-type').append('<div class="title"></div>');
}

$('.kiskep').click((event) =>
{
    let number = $(event.target).attr('data-number');
    let numberIndex = parseInt(number);
    loadPhoto(numberIndex);
})

