function doGet(e) {
  //return HtmlService.createHtmlOutput('<h1>Hola Mundo</h1>');
  //return HtmlService.createHtmlOutputFromFile('form');
  //var template = HtmlService.createTemplate('<b>The time is <?= new Date(); ?></b>');
  //var template = HtmlService.createTemplateFromFile('form');
  //return template.evaluate();
   var params = JSON.stringify(e.parameters);
  return HtmlService.createHtmlOutput(params);
}