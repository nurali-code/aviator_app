var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost(e) {
    var lock = LockService.getScriptLock()
    lock.tryLock(10000)

    try {
        var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
        var sheet = doc.getSheetByName(sheetName);

        // Изменения: добавление даты и всех данных в новую строку
        var newRow = [
            new Date(),
            e.parameter['u-name'],
            e.parameter['u-surname'],
            e.parameter['u-email'],
            e.parameter['u-company'],
            e.parameter['u-country'],
            e.parameter['u-city'],
            e.parameter['u-phone'],
            e.parameter['u-address'],
            e.parameter['u-time']
        ];

        sheet.appendRow(newRow);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': e }))
            .setMimeType(ContentService.MimeType.JSON)
    }

    catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
            .setMimeType(ContentService.MimeType.JSON)
    }

    finally {
        lock.releaseLock()
    }
}