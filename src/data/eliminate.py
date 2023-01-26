import requests
import json

with open('info.json') as f:
    data = json.load(f)

for item in data:
    if not item.get('profilePictureUrl') or 'ddragon' not in item.get('profilePictureUrl'):
        data.remove(item)
        print(f'Removed {item}')
        continue

    if requests.get(item.get('profilePictureUrl')).status_code != 200:
        data.remove(item)
        print(f'Removed {item["name"]}')

print(data)
with open('data.json', 'w') as f:
    json.dump(data, f)