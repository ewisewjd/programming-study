import requests # url로 요철을 날리는 라이브러리 모듈
import json # 클라이언트와 서버가 통신하는 규율, 규격

def send_slack_message():
    bot_url="https://hooks.slack.com/services/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"
    payload={
        "text":"여기에 메시지를 입력하면 됩니다."
    }  
    #get과 post = crud
    reponse=requests.post(
        bot_url,data=json.dumps(payload),
        headers={"content-Type":"application/json"}
    )
    print(reponse)
send_slack_message()