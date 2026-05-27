*Заменить %username% на имя пользователя, чтобы был правильный путь.*

Добавить в C:\Users\\%username%\\.cursor\extensions  
Прописать в C:\Users\\%username%\\.cursor\extensions\extensions.json:

```json
{
        "identifier": {
            "id": "pavel.1c77-ultimate-syntax"
        },
        "version": "1.0.0",
        "location": {
            "$mid": 1,
            "path": "/c:/Users/%username%/.cursor/extensions/1c77-ultimate-syntax",
            "scheme": "file"
        },
        "relativeLocation": "1c77-ultimate-syntax",
        "metadata": {
            "isApplicationScoped": false,
            "source": "unbundled"
        }
    }
```
