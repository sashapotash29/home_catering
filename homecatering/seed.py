import requests
import json


user_id = 1

dishes = ["Popcorn Chicken", "Cabbage Soup", "Pasta Carbonara"]
cuisines = ["American","Russian","Italian"]
descriptions = ["Easy to pop and delicious with sauce","Russian Classic from Grandmas to Children","Super Delicious Italian creation"]

final_json = {"result":[]}

for i in range(3):
	dishInfo = {
		"user_id": user_id,
		"dish_name": dishes[i],
		"cuisine": cuisines[i],
		"description": descriptions[i]
	}
	final_json["result"].append(dishInfo)


# print(json.dumps(final_json))





result = requests.get("http://127.0.0.1:8000/food/store",json=final_json)




# db = 'hcdb.db'

# conn = sqlite3.connect(db)

# conn.cursor