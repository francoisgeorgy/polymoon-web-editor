import {_0_100, _2_steps, _4_steps, _off_when_zero_percent, _percent, _tempo_ms, control} from "@model";

export const control_id = {
    exp_pedal: 4,
    dotted_8th: 9,       // ALT / 2nd layer
    bypass: 14,             // RIGHT footswitch
    tempo: 15,
    time: 16,
    feedback: 17,
    mix: 18,
    multiply: 19,
    dimension: 20,
    dynamics: 21,
    early_mod: 22,         // ALT / 2nd layer
    feedback_filter: 23,        // ALT / 2nd layer
    delay_level: 24,        // ALT / 2nd layer
    late_mod: 25,    // ALT / 2nd layer
    flanger_mode: 26,   // ALT / 2nd layer
    flanger_speed: 27,     // ALT / 2nd layer
    tap: 28,                // LEFT footswitch
    phaser_mode: 29,
    flanger_fb: 30,
    half_speed: 31
};

const _dotted_8th = function (v) {
    if (v < 64) {
        return "1/4";
    } else {
        return "dot 8th";
    }
};

const _phaser_mode = function (v) {
    if (v < 32) {
        return "Off";
    } else if (v < 64) {
        return "Slow";
    } else if (v < 96) {
        return "Whole note";
    } else {
        return "1/4 note";
    }
};

const _flanger_mode = function (v) {
    if (v < 33) {
        return "Env Down";
    } else if (v < 89) {
        return "Env Up";
    } else {
        return "LFO";
    }
};

const _multiply = function (v) {
    if (v < 8) {
        return 1;
    } else if (v < 33) {
        return 2;
    } else if (v < 63) {
        return 3;
    } else if (v < 88) {
        return 4;
    } else if (v < 116) {
        return 5;
    } else {
        return 6;
    }
};

const _modulations = function (v) {
    if (v <= 0x07) {                    // 1
        return "Off";
    } else if (v <= 0x0f) {             // 2
        return "Slow speed, shallow depth";
    } else if (v <= 0x17) {             // 3
        return "Medium speed, shallow depth";
    } else if (v <= 0x1f) {             // 4
        return "Medium speed, wide depth";
    } else if (v <= 0x27) {             // 5
        return "Fast speed, wide depth";
    } else if (v <= 0x2f) {             // 6
        return "Fast speed, exaggerated depth";
    } else if (v <= 0x37) {             // 7
        return "FM 24Hz";
    } else if (v <= 0x3f) {             // 8
        return "FM 48Hz";
    } else if (v <= 0x47) {             // 9
        return "FM 96Hz";
    } else if (v <= 0x4f) {             // 10
        return "Maj 2nd down + Maj 2nd up";
    } else if (v <= 0x57) {             // 11
        return "Oct down + Min 3rd up";
    } else if (v <= 0x5f) {             // 12
        return "Perf 5th down + Perf 4th up";
    } else if (v <= 0x67) {             // 13
        return "Tremolo mute + Perf 4th up";
    } else if (v <= 0x6f) {             // 14
        return "Oct down + Perf 5th up";
    } else if (v <= 0x77) {             // 15
        return "Perf 5th down + Oct up";
    } else {                            // 16
        return "Oct down + Oct up";
    }
};

export function defineControls() {

    control[control_id.exp_pedal] = { // 4,
        name: "Exp pedal",
        human: _0_100,
        infos: "The expression pedal works by morphing between two complete settings of all of the knob values (even the second layer knob values)."
    };
    control[control_id.dotted_8th] = { // 9,
        name: "Dotted 8th",
        human: _dotted_8th,
        // map_raw: _2_steps,   //TODO: map_raw
        sysex: {
            offset: 22,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.bypass] = { // 14,
        name: "Bypass",
        no_init: true,
        no_randomize: true,
        map_raw: _2_steps,
        sysex: {
            offset: 21,
            mask: [0x7F]
        },
        infos: "Disables processing and passes the input through to the output."
    };
    control[control_id.tempo] = { // 15,
        name: "Tempo",
        human: _tempo_ms,
        sysex: {
            offset: 25,
            mask: [0x7F]
        },
        infos: "Sets the time for the delay line and the synchronized phaser."
    };
    control[control_id.time] = { // 16,
        name: "Time",
        init_value: 63,
        cc_center: [63, 64],
        sysex: {
            offset: 9,
            mask: [0x7F]
        },
        sysex2: {
            offset: 26,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.feedback] = { // 17,
        name: "Feedback",
        init_value: 127,
        human: _percent,
        sysex: {
            offset: 10,
            mask: [0x7F]
        },
        sysex2: {
            offset: 27,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.mix] = { // 18,
        name: "Mix",
        init_value: 127,
        human: _percent,
        sysex: {
            offset: 11,
            mask: [0x7F]
        },
        sysex2: {
            offset: 28,
            mask: [0x7F]
        },
        infos: "Adjusts the balance between Dry and Wet signals."
    };
    control[control_id.multiply] = { // 19,
        name: "Multiply",
        human: _multiply,       //TODO: map_raw
        sysex: {
            offset: 12,
            mask: [0x7F]
        },
        sysex2: {
            offset: 29,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.dimension] = { // 20,
        name: "Dimension",
        sysex: {
            offset: 13,
            mask: [0x7F]
        },
        sysex2: {
            offset: 30,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.dynamics] = { // 21,
        name: "Dynamics",
        human: _off_when_zero_percent,
        sysex: {
            offset: 14,
            mask: [0x7F]
        },
        sysex2: {
            offset: 31,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.early_mod] = { // 22,
        name: "Early modulations",
        human: _modulations,
        //TODO: map_raw
        sysex: {
            offset: 15,
            mask: [0x7F]
        },
        sysex2: {
            offset: 32,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.feedback_filter] = { // 23,
        name: "Feedback filter",
        human: _modulations,
        //TODO: map_raw
        sysex: {
            offset: 16,
            mask: [0x7F]
        },
        sysex2: {
            offset: 33,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.delay_level] = { // 24,
        name: "Delay level",
        human: _percent,
        //TODO: auto-scaling when 0
        sysex: {
            offset: 17,
            mask: [0x7F]
        },
        sysex2: {
            offset: 34,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.late_mod] = { //  25,
        name: "Late modulations",
        human: _modulations,
        //TODO: map_raw
        sysex: {
            offset: 18,
            mask: [0x7F]
        },
        sysex2: {
            offset: 35,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.flanger_mode] = { // 26,
        name: "Flanger mode",
        human: _flanger_mode,
        //TODO: map_raw
        sysex: {
            offset: 19,
            mask: [0x7F]
        },
        sysex2: {
            offset: 36,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.flanger_speed] = { // 27,
        name: "Flanger speed",
        sysex: {
            offset: 20,
            mask: [0x7F]
        },
        sysex2: {
            offset: 37,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.tap] = { // 28,
        name: "Tap",
        // no_init: true,
        init_value: 0,
        no_randomize: true,
        map_raw: () => 127,
        infos: "Sets the time for the delay line and the synchronized phaser."
        // sysex: {
        //     offset: 22,
        //     mask: [0x7F]
        // }
    };
    control[control_id.phaser_mode] = { // 29,
        name: "Phaser mode",
        init_value: 63,
        human: _phaser_mode,
        //TODO: map_raw
        sysex: {
            offset: 23,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.flanger_fb] = { // 30
        name: "Flanger feedback",
        init_value: 0,
        sysex: {
            offset: 24,
            mask: [0x7F]
        },
        infos: ""
    };
    control[control_id.half_speed] = { // 31
        name: "Half speed",
        init_value: 0,
        // human: _waveshape,
        //TODO: human
        //TODO: map_raw
        sysex: {
            offset: 24,
            mask: [0x7F]
        },
        infos: ""
    };

} // defineControls()
