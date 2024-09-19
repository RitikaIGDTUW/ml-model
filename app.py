from flask import Flask, request, jsonify, render_template
import joblib
import os
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model_path = os.path.join('model', 'abuse_model_final4.pkl')
model = joblib.load(model_path)

@app.route('/')
def home():
    return render_template('safeinsight.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Get input data from request body
        
        # Prepare the input data including all required columns
        input_data = {
            'Age Group': [data.get('ageGroup')],
            'Marital Status': [data.get('maritalStatus')],
            'Employment Status': [data.get('employmentStatus')],
            'physicalHarm1': [data.get('physicalHarm1')],
            'controlFeeling': [data.get('controlFeeling')],
            'sexualAdvances': [data.get('sexualAdvances')],
            'financeControl': [data.get('financeControl')],
            'onlineHarassment': [data.get('onlineHarassment')],
            'workplaceHarassment': [data.get('workplaceHarassment')],
            'partnerThreat': [data.get('partnerThreat')],
            'stalking': [data.get('stalking')],
            'Q1': ['Value1'],  # Replace with actual values or input fields
            'Q2': ['Value2'],
            'Q3': ['Value3'],
            'Q4': ['Value4'],
            'Q5': ['Value5'],
            'Q6': ['Value6'],
            'Q7': ['Value7'],
            'Q8': ['Value8'],
        }
        
        # Convert to DataFrame
        input_df = pd.DataFrame(input_data)

        # Predict the abuse type
        abuse_type = model.predict(input_df)
        
        # Return the result as a JSON response
        return jsonify({'abuseType': abuse_type[0]})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
