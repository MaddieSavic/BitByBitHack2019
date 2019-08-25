import json
from flask import Flask, jsonify, request, render_template, Response, url_for
import random

app = Flask(__name__)


class alleleEnum:
    """
    An enumerator class, to save retyping values, etc.  The integer value may be used for calculation as they are in
    order of dominance (0 is most dominant, n is least dominant)
    """
    def __init__(self):
        self.PINK = 'pink'
        self.RED = 'red'
        self.BLUE = 'blue'
        self.YELLOW = 'yellow'
        self.GREEN = 'green'


        #IMPLEMENT STRACKED GOODS



class cuboid:
    def __init__(self):
        self.alleles = alleleEnum()
        self.JSONValues = {
            "body":{
                "alleles":[self.alleles.BLUE, self.alleles.BLUE]  #the alleles for the body, stored as BLACK BLACK by default
            },
            "horns":False,  # This is the gender based characteristic, can either be present or not
            "face": "face" + str(random.randint(1, 8)) + ".png"

        }

    def getImageURL(self):

        # Synthesise the file name here

        firstAl =  self.JSONValues.get("body").get("alleles")[0]
        secondAl = self.JSONValues.get("body").get("alleles")[1]


        faceString = self.JSONValues.get("face")

        hornsString = ["blank.png", "horns.png"][self.JSONValues.get("horns")] # This is the string that refers to the horns


        bodyString = "" # The string to store the body path

        if firstAl == self.alleles.PINK or secondAl == self.alleles.PINK:
            bodyString = "pinkBody.png"
        elif (firstAl == self.alleles.RED and secondAl == self.alleles.YELLOW) or (firstAl == self.alleles.YELLOW and secondAl == self.alleles.RED):
            bodyString = "orangeBody.png"

        elif (firstAl == self.alleles.RED and secondAl == self.alleles.BLUE) or (
                firstAl == self.alleles.BLUE and secondAl == self.alleles.RED):
            bodyString = "redBody.png"

        elif (firstAl == self.alleles.BLUE and secondAl == self.alleles.YELLOW) or (
                firstAl == self.alleles.YELLOW and secondAl == self.alleles.BLUE):
            bodyString = "blueyellowPatchy.png"

        elif firstAl == self.alleles.GREEN:
            bodyString = secondAl + "Body.png"

        elif secondAl == self.alleles.GREEN:
            bodyString = firstAl + "Body.png"

        else:
            bodyString = firstAl + "Body.png" #Else they're the same

        print(firstAl, secondAl, bodyString)
        return [faceString, hornsString, bodyString]

    def reproduce(self, other, offspring_count = 1):
        the_offspring = []
        if self.JSONValues.get("horns") != other.JSONValues.get("horns"): # We now know they are different genders; albeit with implicit connascence(?)
            for i in range(offspring_count):
                newborn = cuboid()
                newborn.JSONValues["horns"] = random.random() > 0.50

                thisFirst = self.JSONValues["body"].get("alleles")[0]
                thisSecond = self.JSONValues["body"].get("alleles")[1]

                otherFirst = other.JSONValues["body"].get("alleles")[0]
                otherSecond = other.JSONValues["body"].get("alleles")[1]

                punnet_prob = random.random()
                if punnet_prob < .25:

                    newborn.JSONValues["body"]["alleles"][0] = thisFirst
                    newborn.JSONValues["body"]["alleles"][1] = otherFirst

                elif punnet_prob > 0.50:
                    newborn.JSONValues["body"]["alleles"][0] = thisFirst
                    newborn.JSONValues["body"]["alleles"][1] = otherSecond

                elif punnet_prob > 0.75:
                    newborn.JSONValues["body"]["alleles"][0] = thisSecond
                    newborn.JSONValues["body"]["alleles"][1] = otherFirst

                else: # punnet_prob < 100
                    newborn.JSONValues["body"]["alleles"][0] = thisSecond
                    newborn.JSONValues["body"]["alleles"][1] = otherSecond

                the_offspring.append(newborn)

                print(thisFirst, thisSecond, otherFirst, otherSecond)
        return the_offspring


#TEST DATA PLEASE REMOVE
testBoi = cuboid()
testBoi.JSONValues["horns"] = True
testBoi.JSONValues["body"]["alleles"][0] = testBoi.alleles.RED
testBoi.JSONValues["body"]["alleles"][1] = testBoi.alleles.BLUE

testSuitor = cuboid()


@app.route('/getBoi', methods=['GET', 'POST'])
def getBoi():

    if request.method == 'POST':
        print("Your Func")
        receivedJSON = request.get_json(force=True)
        # testBoi.JSONValues["horns"] = not testBoi.JSONValues.get("horns")

        testBoi.reproduce(testSuitor)

        receivedJSON.get('test')

        child = testBoi.reproduce(testSuitor)[0]

        return jsonify([child.getImageURL(), child.JSONValues]), 200





@app.route('/hello', methods=['GET', 'POST'])
def hello():

    # POST request
    if request.method == 'POST':
        print('Incoming..')


        receivedJSON = request.get_json(force=True)

        print(receivedJSON.get('greeting'))
        print(receivedJSON.get('test'))




        return 'OK', 200

    # GET request
    else:

        message = [testBoi.getImageURL(), testSuitor.getImageURL(), testBoi.JSONValues, testSuitor.JSONValues]
            # Old value{'greeting':'If you are seeing this I sent something to the browser'}
        #url_for('static', filename='00true.png')

        print((message))
        return jsonify(message)  # serialize and use JSON headers

@app.route('/test')
def test_page():
    # look inside `templates` and serve `index.html`
    f = open("index.html")
    s = ""
    for i in f.readlines():
        s = s + i
    f.close()
    return s


