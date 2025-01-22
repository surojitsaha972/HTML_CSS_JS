import smtplib
# import abcd
 
# creates SMTP session
s = smtplib.SMTP('smtp.gmail.com', 587)
 
# start TLS for security
s.starttls()
 
# Authentication
s.login("shibnathsaha419@gmail.com", "dfovkrowpmkixlgb")
 
# message to be sent
message = "Message_you_need_to_send"
 
# sending the mail
s.sendmail("shibnathsaha419@gmail.com", "sahasurojit972@gmail.com", message)
 
# terminating the session
s.quit()