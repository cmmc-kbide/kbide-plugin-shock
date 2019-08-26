Blockly.JavaScript["ky_002_vibration_block"] = function(block) {
    var text_ky_002_vibration_pin = block.getFieldValue("KY_002_VIBRATION_PIN");
    var variable_ky_002_vibration_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_002_VIBRATION_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
		int KY_002_VIBRATION_PIN = ${text_ky_002_vibration_pin}; // define the sensor Pin 
	#END

	#SETUP
		pinMode (KY_002_VIBRATION_PIN, INPUT); // input from KY-002 sensor
	#END

	${variable_ky_002_vibration_value} = digitalRead (KY_002_VIBRATION_PIN); // read the value from KY-002
    `;
    return code;
  };