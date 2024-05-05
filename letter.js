var i = 0;
var txt1 = `
Hi Rivya!>>

Here's a little something for ya. I'll cut the chase and come straight to the point. >
My flirting skills are sub-par compared to that of an average person, nor can I sweet >
talk much. I'm mostly an introvert who loves spending time with myself and observing >
things around me. >>

We started with our own loved spots, you talking about mountains and me about beaches.>
I guess that's nature's way of bringing sparking connections between two souls 😁. >
In my defense, your profile has more beach pics than mountains, so beach wins, lol >>

Your smile is among the prettiest things to exist in this world. If it's this beautiful>
virtually, I wonder how much more beautiful that would be in real life. I really envy >
people who get to see you everyday! Not fair! Tho I'm not sure if they're able to >
concetrate on work with you around :p >>

I don't know if few days down the line we'd be even talking, but I sure wanted to make>
your weeked a tad bit special.. making you ready for the Monday. >>

Do put on that smile on your face everyday and drink lots of water!

`;
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}