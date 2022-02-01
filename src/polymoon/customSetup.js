import MODEL from "@model";
import {TRACE} from "@shared/utils/debug";
import {setupFootswitches, tapDown, tapRelease} from "./footswitches";
import {updateDevice} from "@midi/midiOut";
import {updateTempoBPMText} from "@device/controller";

export function setHalfSpeed() {
    $("#toggle-half-speed").addClass("on");
}

export function clearHalfSpeed() {
    $("#toggle-half-speed").removeClass("on");
}

function halfSpeedActive() {
    return $("#toggle-half-speed").is(".on");
}

function toggleHalfSpeed() {
    if (halfSpeedActive()) {
        updateDevice("cc", MODEL.control_id.half_speed, 0);
        clearHalfSpeed();
    } else {
        updateDevice("cc", MODEL.control_id.half_speed, 127);
        setHalfSpeed();
    }
}

export function setDotted8th() {
    $("#toggle-dotted-8th").addClass("on");
}

export function clearDotted8th() {
    $("#toggle-dotted-8th").removeClass("on");
}

function dotted8thActive() {
    return $("#toggle-dotted-8th").is(".on");
}

function toggleDotted8th() {
    if (dotted8thActive()) {
        updateDevice("cc", MODEL.control_id.dotted_8th, 0);
        clearDotted8th();
    } else {
        updateDevice("cc", MODEL.control_id.dotted_8th, 127);
        setDotted8th();
    }
}

export function setNegFeedback() {
    $("#toggle-neg-feedback").addClass("on");
}

export function clearNegFeedback() {
    $("#toggle-neg-feedback").removeClass("on");
}

function negFeedbackActive() {
    return $("#toggle-neg-feedback").is(".on");
}

function toggleNegFeedback() {
    if (negFeedbackActive()) {
        updateDevice("cc", MODEL.control_id.flanger_fb, 0);
        clearNegFeedback();
    } else {
        updateDevice("cc", MODEL.control_id.flanger_fb, 127);
        setNegFeedback();
    }
}

function setupTapTempo() {

    $("#tempo-bpm")
        .mousedown(function () {
            tapDown('cc-28');
        })
        .mouseup(function () {
            tapRelease('cc-28');
        });

}

export function customSetup() {

    if (TRACE) console.groupCollapsed("customSetupUI");

    setupFootswitches();

    setupTapTempo();

    /*
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
    */
    updateTempoBPMText();

    $('#toggle-half-speed').click(toggleHalfSpeed);
    $('#toggle-dotted-8th').click(toggleDotted8th);
    $('#toggle-neg-feedback').click(toggleNegFeedback);

    if (TRACE) console.groupEnd();
}
