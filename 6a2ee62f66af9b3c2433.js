// import { EventEmitter } from "eventemitter3";

// const sheetChangeEventEmitter = new EventEmitter();
// sheetChangeEventEmitter.on("sheetChanged", handleSheetChange);
// const handleSheetChange = (sheetName) => {
//   // Handle the active sheet change event
//   console.log("Active sheet changed:", sheetName);
// };

// Office.initialize = function() {
//     // Run initialization code here, if any
//     // Register for the event when the active sheet changes
//     Excel.run(function(context) {
//         console.log("inside excel function");
//       var sheet = context.workbook.worksheets.getActiveWorksheet();
//       context.load(sheet);
//       return context.sync()
//         .then(function() {
//           sheet.onActivated.add(onSheetActivated);
//         })
//         .then(context.sync);
//     }).catch(function(error) {
//       console.log(error);
//     });
//   };

//   function onSheetActivated(args) {
//     // Handle the event when the active sheet changes
//     console.log('Active sheet changed:', args.worksheetName);
//   }