import os
from config import Config
from flask import Flask, jsonify, render_template, request

template_dir = os.path.abspath(os.path.dirname(__file__))
template_dir = os.path.join(template_dir, 'templates')
app = Flask(__name__, template_folder=template_dir)
app.config.from_object(Config)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/software')
def software():
    return render_template('software.html')

@app.route('/device-guide')
def device_guide():
    return render_template('device_guide.html')

@app.route('/patient-login', methods=['GET', 'POST'])
def patient_login():
    if request.method == 'POST':
        # Here you would implement the login logic
        # For now, we'll just return a dummy response
        return jsonify({"message": "Login functionality not implemented yet"}), 200
    return render_template('patient_login.html')

@app.route('/clinician-dashboard')
def clinician_dashboard():
    return render_template('clinician_dashboard.html')

@app.route('/patient-dashboard')
def patient_dashboard():
    return render_template('patient_dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
