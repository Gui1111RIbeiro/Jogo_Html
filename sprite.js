function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);    //com esse metodo drawimage a gente desenha uma imagem na nossa tela 
	}
}

var bg = new Sprite(0, 0, 600, 600), //localizaçao da imagem largura e altura do fundo
spriteBoneco = new Sprite(630, 13, 70, 87); //largura e altura do boneco
perdeu = new Sprite(620, 437, 397, 358), //...
jogar = new Sprite(603, 127, 397, 347),
spriteChao = new Sprite(0, 604, 600, 54);