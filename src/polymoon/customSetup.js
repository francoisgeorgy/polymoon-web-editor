import MODEL from "@model";
import {updateControl} from "@shared/controller";
import {TRACE} from "@shared/utils/debug";
import {setupFootswitches} from "./footswitches";
import {_tempo_bpm, _tempo_ms} from "@model";
import {expHeel, expToe, inExpMode, showExpValues} from "../shared/expController";
import {updateDevice} from "../shared/midi/midiOut";
import {log} from "../shared/utils/debug";

function halfSpeedActive() {
    return $("#toggle-half-speed").is(".on");
}

function dotted8thActive() {
    return $("#toggle-dotted-8th").is(".on");
}

function negFeedbackActive() {
    return $("#toggle-neg-feedback").is(".on");
}

function toggleHalfSpeed() {
    // log("toggleHalfSpeed", MODEL.control_id.half_speed);
    if (halfSpeedActive()) {
        updateDevice("cc", MODEL.control_id.half_speed, 0);
        $("#toggle-half-speed").removeClass("on");
    } else {
        updateDevice("cc", MODEL.control_id.half_speed, 127);
        $("#toggle-half-speed").addClass("on");
    }
}

function toggleDotted8th() {
    // log("toggleDotted8th", MODEL.control_id.half_speed);
    if (dotted8thActive()) {
        updateDevice("cc", MODEL.control_id.dotted_8th, 0);
        $("#toggle-dotted-8th").removeClass("on");
    } else {
        updateDevice("cc", MODEL.control_id.dotted_8th, 127);
        $("#toggle-dotted-8th").addClass("on");
    }
}

function toggleNegFeedback() {
    // log("toggleNegFeedback", MODEL.control_id.half_speed);
    if (negFeedbackActive()) {
        updateDevice("cc", MODEL.control_id.flanger_fb, 0);
        $("#toggle-neg-feedback").removeClass("on");
    } else {
        updateDevice("cc", MODEL.control_id.flanger_fb, 127);
        $("#toggle-neg-feedback").addClass("on");
    }
}

export function customSetup() {

    if (TRACE) console.groupCollapsed("customSetupUI");

    setupFootswitches();

    $('#tempo-label').click(() => {
        const c = MODEL.control[MODEL.control_id.tempo];
        if (c.human === _tempo_bpm) {
            c.human = _tempo_ms;
            $('#tempo-label').text('tempo MS');
        } else {
            c.human = _tempo_bpm;
            $('#tempo-label').text('tempo BPM');
        }
        updateControl(c.cc_type, MODEL.control_id.tempo, MODEL.getControlValue(c), MODEL.getMappedControlValue(c));
    });

    $('#toggle-half-speed').click(toggleHalfSpeed);
    $('#toggle-dotted-8th').click(toggleDotted8th);
    $('#toggle-neg-feedback').click(toggleNegFeedback);

    if (TRACE) console.groupEnd();
}
