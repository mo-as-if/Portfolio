  function setup()
    {
        rectMode(CENTER);
    var canvas = createCanvas (windowWidth,windowHeight);
    canvas.parent = ('sketch-holder');
    }

    var x = 6;

    var x2 = .08;

    var rot = 0;

    //Starting colors
    var r = random(0, 255);

    var g = random(0, 255);

    var b = random(0, 255);

    //color change speed
    var r2 = random(2, 3);

    var g2 = random(2, 3);

    var b2 = random(2, 3);

    function draw()
    {

        //change the x below to a fixed int and see what happens
        strokeWeight(x);
        stroke(0, 0, 0, 255);
        fill(r, g, b);
        background(r, g, b);

        for (i = -100; i < 1100; i += 100)
        {
            for (j = -100; j < 1100; j += 100)
            {
                translate(i + 450, j + 50);
                rotate(rot);
              ellipse(30, 30, 200, 200);
                rect(0, 0, 200, 200);
                resetMatrix();
            }
        }

        x += x2;
        rot += 0.005;
        r += r2;
        g += g2;
        b += b2;

        //stroke width flip
        if (x > 30 || x <3)
        {
            x2 *= -1;
        }

        //color flips
        if (r < 20 || r > 255) {
            r2 *= -1;
        }

        if (g < 20 || g > 255) {
            g2 *= -1;
        }

        if (b < 20 || b > 255) {
            b2 *= -1;
        }
    }
function mousePressed() {
    // Pick new random color values
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
