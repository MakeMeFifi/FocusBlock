import time

import psutil as ps  # libary to Stop programss

blockedSoftware = ["steam", "whatsapp", "dolphin"]  # List with all the blocked Sodtware


while True:
    time.sleep(5)  # checkt only every 5 seconds so that
    print("running")
    for software in ps.process_iter():  # goes every software
        try:
            if software.name() in blockedSoftware:
                software.kill()
                print(f"Die Software: {software.name()} wurde beendet")
                break
        except Exception:
            pass
