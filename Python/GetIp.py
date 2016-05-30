import socket
def GetLocalIp():
    myname = socket.getfqdn(socket.gethostname())
    myaddr = socket.gethostbyname(myname) 
    return myaddr

def WriteData(content):
    return True;
    
def ReadFile():
    return ""

print(GetLocalIp())
    