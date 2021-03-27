function cacaspipicrottes(num: number) {
    basic.showNumber(num)
    basic.showNumber(num)
}

control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_FALL, function on_microbit_id_io_p13_pin_evt_fall() {
    cacaspipicrottes(6)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function on_microbit_id_button_a_evt_up() {
    cacaspipicrottes(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function on_microbit_id_button_ab_evt_up() {
    cacaspipicrottes(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function on_microbit_id_button_ab_evt_down() {
    cacaspipicrottes(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P13, EventBusValue.MICROBIT_PIN_EVT_RISE, function on_microbit_id_io_p13_pin_evt_rise() {
    cacaspipicrottes(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function on_microbit_id_button_a_evt_down() {
    cacaspipicrottes(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function on_microbit_id_button_b_evt_up() {
    cacaspipicrottes(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function on_microbit_id_button_b_evt_down() {
    cacaspipicrottes(3)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_FALL, function on_microbit_id_io_p15_pin_evt_fall() {
    cacaspipicrottes(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_RISE, function on_microbit_id_io_p15_pin_evt_rise() {
    cacaspipicrottes(5)
})
radio.setGroup(152)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
pins.setEvents(DigitalPin.P13, PinEventType.Edge)
