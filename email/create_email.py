#Sending a forgot password email will adjust to having templates for different emails, having access to the database, and an email made (need to discuss with team email name)
#The sender_app_password needs to be made using Manage Google Account - Security - 2-step verification - app password then create one

import smtplib
from email.mime.text import MIMEText

sender_email = "ilanalovesbooks@gmail.com"
sender_app_password = "this will be your app password"
recipient_email = "imacy@nevada.unr.edu"
subject = "Forgot Password FORE"
body = """
<html>
  <body>
    <p>Hello user, <b>HTML</b> A request to reset your password was made at FORE. If this was not you please tell us however if it was you please click this link.</b>HTML</b>The FORE Team</p>
  </body>
</html>
"""
html_message = MIMEText(body, 'html')
html_message['Subject'] = subject
html_message['From'] = sender_email
html_message['To'] = recipient_email
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
   server.login(sender_email, sender_app_password)
   server.sendmail(sender_email, recipient_email, html_message.as_string())