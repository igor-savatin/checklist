
function prepareTabletoHtml(tableJson){
    //console.log(tableJson.metaData.length);
    var tableHtml = "<table style='border: 1px solid black;'>"
    //column name
    tableHtml += "<tr style='border: 1px solid black;background-color:red;color:white;'><th>"+tableJson.metaData
        .map(e => e.name)
        .join("</th><th>")+"</th></tr>"
    
    //register
    tableJson.rows.forEach(element => {
        tableHtml+="<tr style='border: 1px solid black;'>"
        element.forEach(element2 => {
            tableHtml+="<td style='border: 1px solid black;'>"+element2+"</td>"
        });
        tableHtml+="</tr>"
    });
    tableHtml+="</table>"
    return tableHtml;
}

module.exports = { prepareTabletoHtml }