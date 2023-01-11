AOS.init();

const dataDoEvento = new Date("Jan  7, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval( function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 100 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento expirado";
    }
}, 1000);