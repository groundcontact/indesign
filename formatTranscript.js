//Path for git repository
//cd Volumes/HD3/Esto\ no\ es\ una\ escuela/Corriendo\ por\ las\ olas/Transcripciones/Maquetación/Scripts/

main();
function main(){
    //Declares path to find documents
    var path = "/Volumes/HD3/Esto\ no\ es\ una\ escuela/Corriendo\ por\ las\ olas/Transcripciones/Maquetación/Pruebas";
    //Path where template document is located
    var template = "/Volumes/HD3/Esto\ no\ es\ una\ escuela/Corriendo\ por\ las\ olas/Transcripciones/Maquetación/Archivos\ InDesign/plantilla_maestra.indt";
    //List of styles
    var basicTableStyle = "Default Table";
    //Open document from template
    var myDoc = app.open(File(template), true, OpenOptions.DEFAULT_VALUE);
    //Sets import preferences for Word docs
    set_Word_import_preferences ();
    //Gets the contents for a Word Document
    var text = getWordDocument(path);
    //Places the text in the created file
    placeWordDocument(myDoc, text);
    //Gets the set of pages of the doc
    var pages = myDoc.pages;
    //Stores number of pages
    var numPages = pages.length;
    //Create styles
    //Declare options
    //Paragraph styles
/*    var basicParagraphStyle = {
        name: 
    };
    //Cell styles
    var basicCellStyle = {
        name: "Default Cell Style",
        appliedParagraphStyle : ,
        rightInset : ,
        leftInset : 0,
        topInset : 0,
        bottomInset : ,
        verticalJustification : "ALLIGN_TOP"
    };*/
 //   var tableStyle = createTableStyle(myDoc, "Test Style");
    //Tablas anidadas en Archivos de vídeo y Archivos de audio
    var specialTable1 = pages.item(0).allPageItems[0].tables.item(4).cells.item(0).tables.item(0).appliedTableStyle = "Test Style";
    var specialTable2 = pages.item(0).allPageItems[0].tables.item(4).cells.item(1).tables.item(0).appliedTableStyle = "Test Style";
    for(var j = 0; j < numPages; j++){
       
        var firstPage = app.activeDocument.pages.item(j);
        var textFrame = firstPage.allPageItems[0];
        var tables = textFrame.tables;
        var numTables = tables.length;
        for(var i = 0; i < numTables; i++){
            var nTable = tables.item(i).appliedTableStyle = "Test Style";
        }
    }
  }


/*
headerRegionCellStyle
bodyRegionCellStyle
footerRegionCellStyle
name
spaceAfter
spaceBefore
*/

function createTableStyle(file, options){
    /******************* HERE ******************************************/
    var style = file.tableStyles.add(options);
    return style;
}

function createCharacterStyle(file, options){

}

/*
appliedFont
appliedLanguage
basedOn
capitalization  
    Capitalization.NORMAL
    Capitalization.SMALL_CAPS
    Capitalization.ALL_CAPS
    Capitalization.CAP_TO_SMALL_CAP
fontStyle
justification
    Justification.LEFT_ALIGN
    Justification.CENTER_ALIGN
    Justification.RIGHT_ALIGN
    Justification.LEFT_JUSTIFIED
    Justification.RIGHT_JUSTIFIED
    Justification.CENTER_JUSTIFIED
    Justification.FULLY_JUSTIFIED
    Justification.TO_BINDING_SIDE
    Justification.AWAY_FROM_BINDING_SIDE

*/

function createParagraphStyle(file, options){
    var style = file.paragraphStyles.add(options);
    return style;
}


/*
appliedParagraphStyle
rightInset
leftInset
topInset
bottomInset
verticalJustification
*/

function createCellStyle(file, options){
    var style = file.cellStyles.add(options);
    return style;
}


function createFromPreset(preset){
    //Creates a new document using the specified document preset.
    var myDocument = app.documents.add(true, app.documentPresets.item(preset));
    return myDocument;
}

function placeWordDocument(file, text){
    //Get the current page.
    var myPage = file.pages.item(0);
    //Get the top and left margins to use as a place point.
    var myX = myPage.marginPreferences.left;
    var myY = myPage.marginPreferences.top;
    //Autoflow a text file on the current page.
    //Parameters for Page.place():
    //File as File object,
    //[PlacePoint as Array [x, y]]
    //[DestinationLayer as Layer object]
    //[ShowingOptions as Boolean = False]
    //[Autoflowing as Boolean = False]
    //You'll have to fill in your own file path.
    var myStory = myPage.place(File(text), [myX, myY], undefined, false, true)[0]; 
    //Note that if the PlacePoint parameter is inside a column, only the vertical (y) //coordinate will be honored--the text frame will expand horizontally to fit the column.
}

function getWordDocument(path){

    var myFile = new File(path);
    var text = myFile.openDlg("Elige el archivo:");
    return text;
}

function set_Word_import_preferences ()
    {
    app.wordRTFImportPreferences.useTypographersQuotes = true;

    app.wordRTFImportPreferences.convertPageBreaks = ConvertPageBreaks.PAGE_BREAK;
    //~ app.wordRTFImportPreferences.convertPageBreaks = ConvertPageBreaks.columnBreak;
    //~ app.wordRTFImportPreferences.convertPageBreaks = ConvertPageBreaks.pageBreak;

    app.wordRTFImportPreferences.importEndnotes = true;
    app.wordRTFImportPreferences.importFootnotes = true;
    app.wordRTFImportPreferences.importIndex = true;
    app.wordRTFImportPreferences.importTOC = false;
    app.wordRTFImportPreferences.importUnusedStyles = false;
    app.wordRTFImportPreferences.preserveGraphics = true;
    app.wordRTFImportPreferences.convertBulletsAndNumbersToText = true;

    app.wordRTFImportPreferences.removeFormatting = false;
    // If removeFormatting is true, these two can be set as well:
    //~ app.wordRTFImportPreferences.convertTablesTo = ConvertTablesOptions.unformattedTabbedText;
    //~ app.wordRTFImportPreferences.convertTablesTo = ConvertTablesOptions.unformattedTable;
    //~ app.wordRTFImportPreferences.preserveLocalOverrides = true

    app.wordRTFImportPreferences.preserveTrackChanges = false;

    //~ app.wordRTFImportPreferences.resolveCharacterStyleClash = ResolveStyleClash.resolveClashAutoRename;
    //~ app.wordRTFImportPreferences.resolveCharacterStyleClash = ResolveStyleClash.resolveClashUseExisting;
    //~ app.wordRTFImportPreferences.resolveCharacterStyleClash = ResolveStyleClash.resolveClashUseNew;

    //~ app.wordRTFImportPreferences.resolveParagraphStyleClash = ResolveStyleClash.resolveClashAutoRename;
    //~ app.wordRTFImportPreferences.resolveParagraphStyleClash = ResolveStyleClash.resolveClashUseExisting;
    //~ app.wordRTFImportPreferences.resolveParagraphStyleClash = ResolveStyleClash.resolveClashUseNew;
    }
