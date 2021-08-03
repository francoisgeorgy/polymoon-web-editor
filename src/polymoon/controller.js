import MODEL from "@model";
import {log} from "@utils/debug";
import {clearDotted8th, clearHalfSpeed, setDotted8th, setHalfSpeed} from "@device/customSetup";

export function updateTempoBPMText() {
    log("updateTempoBPMText");
    const c = MODEL.control[MODEL.control_id.time];
    const time = Math.round(MODEL.getControlValue(c) / 127 * 120) * 10;
    const bpm = time > 0 ? Math.round(60000 / time) : 0;
    $('#tempo-bpm').text(`${bpm} BPM`);
}

export function customUpdateUI(control_type, control_number) {

    log("customUpdateUI", control_type, control_number);

    // update Tempo BPM when time changes

    if (control_number === MODEL.control_id.time || control_number === MODEL.control_id.tempo) {
        updateTempoBPMText();
    }

    if (control_number === MODEL.control_id.half_speed) {
        const v = MODEL.getControlValue(MODEL.control[MODEL.control_id.half_speed]);
        if (v) {
            setHalfSpeed();
        } else {
            clearHalfSpeed();
        }
    }

    if (control_number === MODEL.control_id.dotted_8th) {
        const v = MODEL.getControlValue(MODEL.control[MODEL.control_id.dotted_8th]);
        if (v) {
            setDotted8th();
        } else {
            clearDotted8th();
        }
    }

}
