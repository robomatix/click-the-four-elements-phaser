var playState = {

    create: function () {

        this.element0;
        this.element1;
        this.element2;
        this.element3;

        this.displayRandomizedElements();



    },

    update: function () {

    },

    displayElementsToMemorized: function () {

    },

    displayRandomizedElements: function () {

        var scaleXY;

        scaleXY = 4;

        this.element0 = game.add.sprite(0, 0, 'elements', 0);
        this.element1 = game.add.sprite(0, 125, 'elements', 1);
        this.element2 = game.add.sprite(0, 250, 'elements', 2);
        this.element3 = game.add.sprite(0, 375, 'elements', 3);

        this.element0.scale.setTo(scaleXY, scaleXY);
        this.element1.scale.setTo(scaleXY, scaleXY);
        this.element2.scale.setTo(scaleXY, scaleXY);
        this.element3.scale.setTo(scaleXY, scaleXY);

    }

};