import os
import asyncio
from datetime import datetime, timedelta

async def delete_expired_files(folder_path, expiration_days):
    current_time = datetime.now()
    expiration_date = current_time - timedelta(days=expiration_days)

    for root, _, file in os.walk(folder_path):
        for filename in file:
            if filename[-3:] != "txt":
                continue
            file_path = os.path.join(root, filename)
            
            if os.path.isfile(file_path) and os.path.getmtime(file_path) < expiration_date.timestamp():
                os.remove(file_path)
                print(f"Deleted expired file: {file_path}")

async def count_files(folder_path):
    file_count = 0
    for _, _, files in os.walk(folder_path):
        for file in files:
            if file[-3:] == "txt":
                file_count += 1
    return file_count

async def delete_oldest_file(folder_path):
    if await count_files(folder_path) < 500:
        return 
    oldest_file = None
    oldest_timestamp = float('inf')

    for root, _, files in os.walk(folder_path):
        for file in files:
            if file[-3:] != "txt":
                continue
            file_path = os.path.join(root, file)
            file_timestamp = os.path.getctime(file_path)
            if file_timestamp < oldest_timestamp:
                oldest_file = file_path
                oldest_timestamp = file_timestamp

    if oldest_file:
        os.remove(oldest_file)
        print(f"Deleted oldest file: {oldest_file}")
    else:
        print("No files found in the folder.")

folder_path : str = os.getcwd()
expiration_days : int = 3

async def main():
    while True:
        await asyncio.gather(
            delete_expired_files(folder_path, expiration_days),
            delete_oldest_file(folder_path)
        )

asyncio.run(main())
