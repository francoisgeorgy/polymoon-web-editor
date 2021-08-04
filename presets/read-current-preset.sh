#!/usr/bin/env bash

DEVICE="iConnectMIDI1"
CHAN="02"
MODEL="02"

sendmidi dev $DEVICE syx hex 00 20 10 $CHAN 01 $MODEL 25
