
def count_track(file_path:str , count:int = None):
    """
    Method to keep track of the length of the records
    """
    if count:
        with open(file_path, 'w') as f:
            f.write(str(count))
        return None
    with open(file_path, 'r') as f:
        content = f.read().strip()
        return int(content)
