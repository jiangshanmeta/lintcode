def list_update_del(list_1: list) -> list:
    """
    :param list_1:  the source list
    :return: modified list_1
    """
    # --write your code here--
    list_1[2] = 1999
    list_1.append('jiuzhang')
    del list_1[0]