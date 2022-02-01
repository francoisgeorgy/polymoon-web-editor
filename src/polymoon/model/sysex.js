import {control_id} from "@device/model/cc";
import {control} from "@model";
import {GROUP_ID, MODEL_ID} from "@model/sysex";

/**
 * Create a SysEx dump data structure
 * @returns {Uint8Array}
 */
// export function getPreset(complete = true) {
export function getDataForPreset() {

    const data = new Uint8Array(29);
    let i = 0;

    // Toe Up values
    data[i++] = control[control_id.time].raw_value;
    data[i++] = control[control_id.feedback].raw_value;
    data[i++] = control[control_id.mix].raw_value;
    data[i++] = control[control_id.multiply].raw_value;
    data[i++] = control[control_id.dimension].raw_value;
    data[i++] = control[control_id.dynamics].raw_value;
    data[i++] = control[control_id.early_mod].raw_value;
    data[i++] = control[control_id.feedback_filter].raw_value;
    data[i++] = control[control_id.delay_level].raw_value;
    data[i++] = control[control_id.late_mod].raw_value;
    data[i++] = control[control_id.flanger_mode].raw_value;
    data[i++] = control[control_id.flanger_speed].raw_value;

    // Non exp values
    data[i++] = control[control_id.bypass].raw_value;
    data[i++] = 0   // control[control_id.tap].raw_value;  always 0 in sysex
    data[i++] = control[control_id.phaser_mode].raw_value;
    data[i++] = control[control_id.flanger_fb].raw_value;
    data[i++] = control[control_id.half_speed].raw_value;

    // Toe Down values
    data[i++] = control[control_id.time].raw_value;
    data[i++] = control[control_id.feedback].raw_value;
    data[i++] = control[control_id.mix].raw_value;
    data[i++] = control[control_id.multiply].raw_value;
    data[i++] = control[control_id.dimension].raw_value;
    data[i++] = control[control_id.dynamics].raw_value;
    data[i++] = control[control_id.early_mod].raw_value;
    data[i++] = control[control_id.feedback_filter].raw_value;
    data[i++] = control[control_id.delay_level].raw_value;
    data[i++] = control[control_id.late_mod].raw_value;
    data[i++] = control[control_id.flanger_mode].raw_value;
    data[i++] = control[control_id.flanger_speed].raw_value;

    return data;
}

export function getDataForGlobalConfig(global_num, value) {

    // F0
    // 00 20 10    Meris ID	(different manufacturers have different IDs)
    // 00          Prod ID 	(user definable, matches midi channel)
    // 01          Group ID    (01 = pedal series)
    // 03          Model #	(00 = Ottobit Jr, 01 = Mercury7, 02 = Polymoon, 03 = Enzo)
    // 2A          Command (2A = global edit via sysex)
    // 00          Global Num (listed below, 0 is TRS input)
    // 7F          Value (00 = OFF, 7F = ON)
    // F7

    let data = new Uint8Array(6);

    data[0] = 0x00;
    data[1] = GROUP_ID.pedal;
    data[2] = MODEL_ID.POLYMOON;
    data[3] = 0x2A;
    data[4] = global_num;
    data[5] = value;

    return data;
}
