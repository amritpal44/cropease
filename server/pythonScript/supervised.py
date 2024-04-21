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

crop_dict = {0: "apple", 1: "banana", 2: "blackgram", 3: "chickpea", 4: "coconut", 5: "coffee", 6: "cotton", 7: "grapes", 8: "jute", 9: "kidneybeans", 10: "lentil", 11: "maize", 12: "mango", 13: "mothbeans", 14: "mungbean", 15: "muskmelon", 16: "orange", 17: "papaya", 18: "pigeonpeas", 19: "pomegranate", 20: "rice", 21: "watermelon"}

if predict[0][0] in crop_dict:
    crop = crop_dict[predict[0][0]]
    print(str(predict[0][0]) + " " + "{}".format(crop))
