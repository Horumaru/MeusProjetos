Set ws = CreateObject("WScript.Shell")
Do
    'Five minutes
    Wscript.Sleep (5*60*1000)
    ws.SendKeys ("{F13}")
Loop