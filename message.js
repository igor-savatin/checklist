const message={
    from: 'teste@teste.com',
    to: 'testeto@email.com',
    subject: 'teste sendmail com select',
    html:`<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            </head>
            <body>
            <div id='content'>
            <!--#content#-->
            </div>
            </body>
            </html>`,
    header:"#header#",
    body:"#body#",
    content: "#content#",
    setContent: function (title,content){
        this.html = this.html.replace("<!--#content#-->",
        "<div id='content'>"+
        "<h1>"+title+"</h1>"+
        "<div>"+content+"</div>"+
        "</div>"+
        "<!--#content#-->"
        )
    }/*,
    setHeader: function (newhead){
        this.html=this.html.replace('#header#',newhead)
    },
    setBody: function (newhead){
        this.html=this.html.replace('#body#',newhead)
    }  */  
}

module.exports = { message }