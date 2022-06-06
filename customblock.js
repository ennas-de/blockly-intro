Blockly.Blocks["print_text_result"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable(" "), "text")
      .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, ["Number", "String"]);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["print_text_result"] = function (block) {
  var variable_name = Blockly.JavaScript.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Variables.NAME_TYPE
  );
  // TODO: Assemble JavaScript into code variable.
  var customCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
