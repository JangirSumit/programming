async function setDropdownValue(element, value) {
  const parent = element.closest(".dyn-refGroup-container");
  const lookup = parent.querySelector(".dyn-lookup-button");

  document.dynamicsApi.softClick(lookup);

  await document.dynamicsApi.sleep(5000);

  const popup = document.querySelector("form.lookup-popup");
  const table = popup.querySelector(".fixedDataTableLayout_header");

  const cellToClick = table.querySelector(
    ".fixedDataTableCellLayout_main .dyn-headerCellLabel"
  );
  document.dynamicsApi.softClick(cellToClick);

  await document.dynamicsApi.sleep(5000);



  const columnHeaderPopup = document.querySelector(".columnHeader-popup");

  const columnHeaderPopupFilterBox =
    columnHeaderPopup.querySelector("input[type='text']");

  const columnHeaderPopupLookUp =
    columnHeaderPopup.querySelector(".lookupButton");

  columnHeaderPopupFilterBox.value = columnHeaderPopupFilterBox.title = value;

  document.dynamicsApi.softClick(columnHeaderPopupLookUp);

  await document.dynamicsApi.sleep(5000);


  const popups = document.querySelectorAll(".lookup-popup");


  if (popups?.length == 2) {
    const newPopup = popups[1];

    const selectedTile = newPopup
      .querySelector(".fixedDataTableRowLayout_body")
      ?.querySelector(".fixedDataTableCellGroupLayout_cellGroupWrapper");

    document.dynamicsApi.softClick(selectedTile);

    await document.dynamicsApi.sleep(3000);
  }
  

  const applyButton = columnHeaderPopup.querySelector("button[name*='ApplyFilters']");

  document.dynamicsApi.softClick(applyButton);

  await document.dynamicsApi.sleep(3000);
}
