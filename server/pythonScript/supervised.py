import joblib
import numpy as np
import sys

model = joblib.load('D:\\YMCA\\3rd year\\6th semester\\Project\\cropease\\server\\models\\model.pkl')


def recommendation(N, P, K, temperature, humidity, ph, rainfall):
    features = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    prediction = model.predict(features).reshape(1,-1)

    return prediction


features = sys.argv[1:]
N = float(features[0])
P = float(features[1])
K = float(features[2])
temperature = float(features[3])
humidity = float(features[4])
ph = float(features[5])
rainfall = float(features[6])

predict = recommendation(N, P, K, temperature, humidity, ph, rainfall)

crop_dict = {
    0: "Apple", 1: "Banana", 2: "Blackgram", 3: "Chickpea", 4: "Coconut", 5: "Coffee",
    6: "Cotton", 7: "Grapes", 8: "Jute", 9: "Kidneybeans", 10: "Lentil", 11: "Maize",
    12: "Mango", 13: "Mothbeans", 14: "Mungbean", 15: "Muskmelon", 16: "Orange",
    17: "Papaya", 18: "Pigeonpeas", 19: "Pomegranate", 20: "Rice", 21: "Watermelon"
}

if predict[0][0] in crop_dict:
    crop = crop_dict[predict[0][0]]
    print(str(predict[0][0]) + " " + "{}".format(crop))
