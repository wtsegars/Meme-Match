$(document).ready(function() {
    const almostPcRedneck = "images/almostpcredneck.jpg";
    const bigChungus = "images/bigchungus.jpg";
    const bolbi = "images/bolbi.jpg";
    const changeMyMind = "images/changemymind.jpg";
    const doggo = "images/doggo.png";
    const foreverAlone = "images/ForeverAlone.jpg";
    const meNTheBoys = "images/mentheboys.jpg";
    const notSureIfFry = "images/notsureiffry.jpg";
    const pepe = "images/pepe.jpg";
    const sarcasticWonka = "images/sarcasticwonka.jpg";
    const scumbagSteve = "images/scumbagsteve.jpg";
    const triggeredFem = "images/triggeredfem.jpg";
    const trollFace = "images/TrollFace.jpg";
    const bbqBecky = "images/bbqbecky.jpg";
    const benDestroysLib = "images/bendestroyeslib.png";
    const distractedBoyfriend = "images/distractedboyfriend.jpg";
    const earthChan = "images/earthchan.jpeg";
    const iDontFeelSoGood = "images/idontfeelsogood.jpg";
    const inhaleSeagull = "images/inhaleseagull.jpg";
    const mockingSpongebob = "images/mockingspongebob.jpg";
    const savagePatrick = "images/savagepatrick.png";
    const trumpetBoy = "images/trumpetboy.jpg";
    const ugandanKnuckles = "images/ugandanknuckles.jpg";
    const wallmartBoy = "images/wallmartboy.png";

    const memeArray = [almostPcRedneck, bigChungus, bolbi, changeMyMind, doggo, foreverAlone, meNTheBoys, notSureIfFry, pepe, sarcasticWonka, scumbagSteve, triggeredFem, trollFace, bbqBecky, benDestroysLib, distractedBoyfriend, earthChan, iDontFeelSoGood, inhaleSeagull, mockingSpongebob, savagePatrick, trumpetBoy, ugandanKnuckles, wallmartBoy];
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let score = 0;

    for (let i = 0; i < memeArray.length; i++){
        for (let j = 1; j < 24; j++){
            $('#' + [j] + '').append('<img src="' + memeArray[i].val() + '" alt="" />');
        }
    }

    $(document).on('click', '<img/>', function() {
        for (let i = 0; i < 24; i++){
            if (count.indexOf(i) === memeArray.indexOf(i)) {
                if (count[i] === 0) {
                    count[i]++;
                    score++;

                    for (let i = 1; i < 24; i++){
                        $('#' + [i] + '').empty();

                        $('#' + [i] + '').append('<img src="' + memeArray[Math.floor((Math.random() * 25) + 1)] + '" alt=" />');

                        if ($('#' + [i] + '').children() === $('#' + [i - (i - 1)] + '').children()){
                            
                        }
                    }
                }
                else if (count[i] === 1) {
                    for (let i = 0; i < count.length; i++){
                        count[i] = 0;
                    }
                    score = 0;
                }
            }
        }
    })
})
