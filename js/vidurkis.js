import { sarasoSuma } from "./suma.js";
import { skaiciuKiekis } from "./skaiciuKiekis.js";
import { arPrasmingasSarasas, arNormalusSkaicius } from "./validacijos.js";


function vidurkis(skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }
    const suma = sarasoSuma(skaiciuSarasas);
    const kiekis = skaiciuKiekis(skaiciuKiekis);

    const vid = suma / kiekis;

    if(!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
    return false;
    }
    return vid;
}

export { vidurkis }
