const express = require("express");
const bodyParser = require("body-parser");
const app = express();
/*Pelo que entendi, esse bodyparser vai ser responsável por passar as informa-
ções para o site, existem diversas formas de ele passar esse informação,
como txt, json e por ai vai...aqui ele vai passar a informação do html codificada
e o extended: true permite postar objetos aninhados*/
app.use(bodyParser.urlencoded({extended: true}))
/*o módulo express tem várias funções, uma delas é enviar arquivos, sendFile,
onde a sintaxe é __dirname + "o arquivo que se quer passar", isso é necessário
pois quando estiver no ar o site precisa localizar o arquivo e o caminho apenas
no computador, não basta*/
app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
/*o req.body.num1 vem da informação do html que deu esse nome à variável de cada
botão. Portanto, o método re.body.num1 vai acessar o html gerado no site, obtendo
a informação que o usuário digitou e transformá-la em uma variável para conseguir
trabalhá-la*/
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("result = " + result);
});

app.listen(3000, function(){
  console.log("server is running on port 3000.");
});
