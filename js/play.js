var playState = {

    create: function () {

        /* Initiation of elements variables
        *******************************************/

        // The initial array of elements
        this.elements = ["earth", "air", "fire", "water"]; // The initial array of elements

        // Elements
        this.element0 = this.game.add.sprite(0, 0, 'elements', 0);
        this.element1 = this.game.add.sprite(0, 125, 'elements', 1);
        this.element2 = this.game.add.sprite(0, 250, 'elements', 2);
        this.element3 = this.game.add.sprite(0, 375, 'elements', 3);

        this.displayElementsToMemorized();

    },

    update: function () {

    },

    displayElementsToMemorized: function () {

        var scaleX;
        var scaleY;

        scaleX = 2;
        scaleY = 0.5;

        this.element0.scale.setTo(scaleX, scaleY);
        this.element1.scale.setTo(scaleX, scaleY);
        this.element2.scale.setTo(scaleX, scaleY);
        this.element3.scale.setTo(scaleX, scaleY);

        // Elements Label
        var elementLabelFont = '25px Arial';
        var elementLabelFill = '#ffffff';


        this.elementLabel0 = this.game.add.text(this.game.width/2, this.posYElementLabel(this.element0), this.elements[0], { font: elementLabelFont, fill: elementLabelFill });
        this.elementLabel1 = this.game.add.text(this.game.width/2, this.posYElementLabel(this.element1), this.elements[1], { font: elementLabelFont, fill: elementLabelFill });
        this.elementLabel2 = this.game.add.text(this.game.width/2, this.posYElementLabel(this.element2), this.elements[2], { font: elementLabelFont, fill: elementLabelFill });
        this.elementLabel3 = this.game.add.text(this.game.width/2, this.posYElementLabel(this.element3), this.elements[3], { font: elementLabelFont, fill: elementLabelFill });


        this.elementLabel0.anchor.setTo(0.5, 0.5);
        this.elementLabel1.anchor.setTo(0.5, 0.5);
        this.elementLabel2.anchor.setTo(0.5, 0.5);
        this.elementLabel3.anchor.setTo(0.5, 0.5);

    },

    displayRandomizedElements: function () {



    },

    posYElementLabel: function ( spriteElement){

        return (spriteElement.y) + (spriteElement.height/2);


    }

};