Blockly.Blocks['ky_002_vibration_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-002 VIBRATION");
    this.appendValueInput("KY_002_VIBRATION_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};