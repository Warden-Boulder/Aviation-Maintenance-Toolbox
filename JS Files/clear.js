function Clear() {
  const fieldIds = [
    "1l", "1r", "2l", "2r", "desire", "extension", "length",
    "Maxmsn", "MD1", "MD2", "MD3", "NGmsn", "ND1", "ND2", "ND3",
    "tail757", "torqueInput", "Weight"
  ];
  const resultIds = [
    "extResults", "results", "results2", "results757", "torqueResults"
  ];

  fieldIds.forEach((id) => {
    const field = document.getElementById(id);
    if (field && "value" in field) {
      field.value = "";
    }
  });

  resultIds.forEach((id) => {
    const result = document.getElementById(id);
    if (result) {
      result.innerHTML = "";
    }
  });
}
