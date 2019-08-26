Blockly.Blocks["ky_002_vibration_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-002 VIBRATION");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_002_VIBRATION_PIN");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_002_VIBRATION_VALUE"),
          "KY_002_VIBRATION_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };