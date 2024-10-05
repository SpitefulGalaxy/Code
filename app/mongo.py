import pymongo
from config import Config

def get_mongo_client():
    return pymongo.MongoClient(Config.MONGO_URI)

def get_mongo_db(client):
    return client[Config.MONGO_DB]

def get_mongo_collection(db, collection_name):
    return db[collection_name]
