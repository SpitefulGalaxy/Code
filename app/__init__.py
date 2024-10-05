from flask import Flask
from app.config import Config
import os

def create_app():
    app = Flask(__name__, 
                template_folder=os.path.abspath('app/templates'),
                static_folder=os.path.abspath('app/static'))
    app.config.from_object(Config)

    with app.app_context():
        from app.routes import main as main_blueprint
        app.register_blueprint(main_blueprint)
    
    return app