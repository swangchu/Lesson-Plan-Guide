function onInstall() {
  onOpen();
}
function onOpen() {
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createAddonMenu()
      .addItem('Standards', 'showSidebar')
      .addItem('GNH values','gnhValues')
      .addItem('CL structures', 'strategies')
      .addItem('AL structure','Al')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setTitle('Bhutan Professional Standards for Teachers');
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}
function gnhValues() {
  var html = HtmlService.createHtmlOutputFromFile('Value')
      .setTitle('Educating for GNH');
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function strategies() {
  var html = HtmlService.createHtmlOutputFromFile('Strategies')
      .setTitle('CL Structures');
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}
function Al() {
  var html = HtmlService.createHtmlOutputFromFile('Alearning')
      .setTitle('AL Structures');
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}
