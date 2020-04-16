html=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="headerTemplate">
        #header# 
    </h1> 
        #body#
</body>
</html>
`;

function headerTemplate(html,newhead){
    return html.replace('#header#',newhead)
}

function bodyTemplate(html,newhead){
    return html.replace('#body#',newhead)
}

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

module.exports = { html, headerTemplate, bodyTemplate, prepareTabletoHtml }