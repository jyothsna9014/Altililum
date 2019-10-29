var { log_fixtures } = require('../../models')
var { updateOrCreate } = require('../pg/pgUpdateOrCreate')


const insertRecord = (message_str) => {
    var battery = message_str.readUInt8(12);
    var mode = message_str.readUInt8(11);
    var battery_level = batlvl();
    function batlvl() {
        if ((battery & 0x80) == 0x80) {
            return (0x7f & battery)
        }
        else {
            return ("No value")
        }

    }
    var powermode = pmode();
    function pmode() {
        if ((mode & 0xc0) === 0x00) {
            {

                if ((mode && 0x20) === 0x20) {
                    return ("Batterymode&present")
                }

                else {
                    return ("batterymode&Absent");
                }
            }
        }

        else if ((mode && 0xc0) === 0x40) {

            if ((mode && 0x20) === 0x20) {
                return ("gridmode&present");
            }
            else {
                return ("gridmode&absent");
            }
        }
        else if ((powermode && 0xc0) === 0x80) {
            if ((powermode && 0x20) === 0x20) {
                return ("chargemode&present");
            }
            else {
                return ("chargemode&absent")
            }

        }

    }

    var newObj = {
        fixtureId: message_str.toString("hex", 3, 11),
        //fixId: message_str.toString("hex", 3, 11),
        //mode : message_str.readUInt8(11),
        powermode: pmode(),
        //battery : message_str.readUInt8(12),
        battery_level: batlvl(),
        xsr_power: message_str.readUInt16LE(13, 14),
        led_power: message_str.readUInt16LE(15, 16),
        battery_power: message_str.readUInt16LE(17, 18),
        luminaries_opmode: message_str.readUInt8(19),
        fault_data: message_str.readUInt8(20),
        brightness_level: message_str.readUInt8(21),

    }
    updateOrCreate(log_fixtures, { fixtureId: newObj.fixtureId }, newObj)
}


// const updateOrCreate = (model, where, newItem, beforeCreate) => {
// 	// Try to find record using findOne
// 	return model
// 		.findOne({ where })
// 		.then(item => {
// 			if (!item) {
// 				// Item doesn't exist, so we create it

// 				// Custom promise to add more data to the record
// 				// Being saved (optional)
// 				Promise.resolve(beforeCreate)
// 					.then(() =>
// 						model.create(newItem)
// 							.then(item => ({ item, created: true }))
// 					)
// 			}

// 			// Item already exists, so we update it
// 			return model
// 				.update(newItem, { where: where })
// 				.then(item => ({ item, created: false }))
// 		})
// }

module.exports = { insertRecord };