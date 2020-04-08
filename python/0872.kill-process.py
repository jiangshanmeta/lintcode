class Solution:
    """
    @param pid: the process id
    @param ppid: the parent process id
    @param kill: a PID you want to kill
    @return: a list of PIDs of processes that will be killed in the end
    """
    def killProcess(self, pid, ppid, kill):
        groupByPPID = {}
        index = 0

        while index < len(ppid) :
            if ppid[index] in groupByPPID :
                groupByPPID[ppid[index]].append(pid[index])
            else :
                groupByPPID[ppid[index]] = [pid[index]]
            
            index += 1
        
        stack = [kill]
        result = []

        while stack :
            node = stack.pop()
            result.append(node)
            if node in groupByPPID :
                for childNode in groupByPPID[node] :
                    stack.append(childNode)

        return result